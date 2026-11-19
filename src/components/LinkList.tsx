"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import LinkCard from "@/components/LinkCard";

type Counts = Record<string, number>;

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 모두 0회로 표시합니다.
  const [counts, setCounts] = useState<Counts>({});

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져옵니다.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/click", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: Counts | null) => {
        if (!cancelled && data) setCounts(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // 클릭하면 서버 기록과 함께 화면의 숫자도 바로 1 올립니다.
  function handleClick(id: string) {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  }

  return (
    <ul className="mt-8 flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard {...link} count={counts[link.id] ?? 0} onClick={handleClick} />
        </li>
      ))}
    </ul>
  );
}
