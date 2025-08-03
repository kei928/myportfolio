import Link from "next/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-md py-4 px-8 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Niwa Satoru
        </Link>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link href="/#about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/#skills" className="hover:text-blue-600">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/#works" className="hover:text-blue-600">
                Works
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
