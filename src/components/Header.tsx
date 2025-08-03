import Link from "next/link";

export const Header = () => {
  const githubUrl = "https://github.com/kei928";
  return (
    <header className="sticky top-0 z-10 bg-[#252526] border-b border-[#383838]">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <Link href="/" className="text-xl font-bold text-[#d4d4d4]">
          Niwa Portfolio
        </Link>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link href="/#about" className="hover:text-[#569cd6]">
                About
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="hover:text-[#569cd6]">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/#works" className="hover:text-[#569cd6]">
                Works
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-[#569cd6]">
                Contact
              </Link>
            </li>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white"
              style={{
                display: "inline-flex",
                alignItems: "right",
                gap: "0.5rem",
                position: "relative",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};
