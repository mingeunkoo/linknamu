import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-10">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <Profile name={profile.name} bio={profile.bio} image={profile.image} />

      <ul className="mt-8 flex flex-col gap-3">
        {profile.links.map((link) => (
          <li key={link.id}>
            <LinkCard {...link} />
          </li>
        ))}
      </ul>

      <footer className="mt-auto pt-10 text-center text-xs text-neutral-400">
        🌳 링크나무
      </footer>
    </main>
  );
}
