const FontsPage = () => {
  const pages = ["yakuhan_jp"];

  return (
    <>
      {pages.map((page) => (
        <a
          key={page}
          href={`/fonts/${page}`}
          className="relative z-10 inline-block px-4 py-2 text-gray-900 dark:text-gray-100 hover:text-gray-800 dark:hover:text-gray-200"
        >
          {page}
        </a>
      ))}
    </>
  );
};

export default FontsPage;
