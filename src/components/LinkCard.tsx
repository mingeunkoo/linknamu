"use client";

import type { LinkItem } from "@/data/profile";

type Props = LinkItem & {
  count: number;
  onClick?: (id: string) => void;
};

function recordClick(id: string) {
  const body = JSON.stringify({ id });
  // sendBeacon은 페이지를 떠나는 중에도 요청을 보장합니다.
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/click", new Blob([body], { type: "application/json" }));
  } else {
    fetch("/api/click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  }
}

export default function LinkCard({ id, title, url, count, onClick }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        recordClick(id);
        onClick?.(id);
      }}
      className="relative block w-full rounded-2xl border border-neutral-200 bg-white px-16 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:bg-neutral-700"
    >
      {title}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal tabular-nums text-neutral-400 dark:text-neutral-500">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
