type Props = {
  name: string;
  bio: string;
  avatar: string;
};

export default function Profile({ name, bio, avatar }: Props) {
  return (
    <section className="flex flex-col items-center text-center">
      <div
        role="img"
        aria-label={`${name} 프로필`}
        className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-emerald-100 text-[84px] leading-none shadow-md ring-4 ring-white select-none dark:bg-emerald-900/40 dark:ring-neutral-800"
      >
        {avatar}
      </div>
      <h1 className="mt-4 text-xl font-bold">{name}</h1>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{bio}</p>
    </section>
  );
}
