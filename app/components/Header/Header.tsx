import { Link } from "react-router";
import { Logo } from "../Logo";

import "./header.css";

export default function Header() {
  return (
    <header className="mt-5 w-full border-bottom-gradient border-bottom-shadow border-b pb-4 md:top-6 md:pb-6 dark:border-bottom-gradient-dark">
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="relative flex h-12 items-center justify-between gap-x-2 rounded-lg bg-custom-gradient px-3 shadow-sm">
            <div className="dot-background -inset-1.5 -z-10 absolute rounded-xs" />
            <Logo />
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}

const Navigation = () => {
  const links = [{ label: "📫 Contact", to: "mailto:levacher.alex@gmail.com" }];

  return (
    <nav className="flex justify-center">
      <ul className="flex items-center font-medium text-sm sm:gap-x-3">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              className="rounded-lg px-3 py-1.5 text-gray-800 hover:bg-amber-100 dark:text-gray-200 dark:hover:bg-gray-800/30"
              to={link.to}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
