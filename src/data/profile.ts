export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  image: string;
  links: LinkItem[];
};

// 프로필과 링크는 여기서 수정합니다. id는 클릭 수 집계 키로 쓰이므로 바꾸지 마세요.
export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  image: "/profile.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "instagram", title: "Instagram", url: "https://instagram.com" },
    { id: "youtube", title: "YouTube", url: "https://youtube.com" },
    { id: "blog", title: "블로그", url: "https://velog.io" },
  ],
};
