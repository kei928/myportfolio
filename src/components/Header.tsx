import Link from "next/link";

export const Header = () => {
  return (
    <header className="py-6 px-8 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link href="#about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-blue-600">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#works" className="hover:text-blue-600">
                Works
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
