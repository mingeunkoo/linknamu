export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatar: string; // 원형 프로필에 표시할 이모지
  links: LinkItem[];
};

// 프로필과 링크는 여기서 수정합니다. id는 클릭 수 집계 키로 쓰이므로 바꾸지 마세요.
export const profile: Profile = {
  name: "구민근",
  bio: "개발자 | AI에 적응 중",
  avatar: "🧑‍💻",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "instagram", title: "Instagram", url: "https://instagram.com" },
    { id: "youtube", title: "YouTube", url: "https://youtube.com" },
    { id: "blog", title: "블로그", url: "https://velog.io" },
  ],
};
