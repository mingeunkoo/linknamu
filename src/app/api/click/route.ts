import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

const validIds = new Set(profile.links.map((l) => l.id));

// 링크 클릭 1회 기록
export async function POST(req: Request) {
  let id: unknown;
  try {
    ({ id } = await req.json());
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }
  if (typeof id !== "string" || !validIds.has(id)) {
    return NextResponse.json({ error: "unknown link" }, { status: 400 });
  }

  const clicks = await getClicksCollection();
  if (!clicks) {
    return NextResponse.json({ error: "MONGODB_URI not configured" }, { status: 503 });
  }

  await clicks.updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
  return NextResponse.json({ ok: true });
}

// 링크별 클릭 수 조회
export async function GET() {
  const clicks = await getClicksCollection();
  if (!clicks) {
    return NextResponse.json({ error: "MONGODB_URI not configured" }, { status: 503 });
  }

  const docs = await clicks.find().toArray();
  const counts = Object.fromEntries(profile.links.map((l) => [l.id, 0]));
  for (const d of docs) counts[d._id] = d.count;
  return NextResponse.json(counts);
}

export const dynamic = "force-dynamic";
