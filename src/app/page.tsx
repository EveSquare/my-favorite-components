export default function Home() {
  const links = ["buttons"];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {links.map((link) => (
          <a
            key={link}
            href={`/${link}`}
            className="relative z-10 inline-block px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-gray-800 dark:hover:text-gray-200"
          >
            {link}
          </a>
        ))}
      </div>
    </main>
  );
}
