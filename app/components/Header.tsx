import { Link } from "react-router";
import { Logo } from "./Logo";

export default function Header() {
  const links = [
    // { label: "🆕 Updates", to: "/updates" },
    // { label: "FAQ", to: "/faq" },
    { label: "📫 Contact", to: "mailto:levacher.alex@gmail.com" },
  ];

  return (
    <header className="absolute top-4 md:top-6 w-full z-30 pb-4 md:pb-6 border-b [border-image:linear-gradient(to_right,transparent,--theme(--color-amber-300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,--theme(--color-amber-300/.16),transparent)1] shadow-[0_1px_0_0_--theme(--color-white/.2)] dark:shadow-none">
      <div className="px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative flex items-center justify-between gap-x-2 h-12 bg-linear-to-b from-white/90 to-white/70 dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg px-3 shadow-sm">
            {/* Border with dots in corners */}
            <div
              className="absolute -inset-1.5 bg-amber-500/15 dark:bg-gray-800/50 rounded-xs -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[10px] before:bg-[length:10px_10px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_1px,transparent_1px)] dark:before:[background-image:radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_1px,transparent_1px)] after:absolute after:inset-y-0 after:right-0 after:w-[10px] after:bg-[length:10px_10px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_1px,transparent_1px)] dark:after:[background-image:radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_1px,transparent_1px)]"
              aria-hidden="true"
            />

            {/* Site branding */}
            <div className="flex-1">
              <Logo />
            </div>

            {/* Navigation links */}
            <nav className="flex justify-center">
              <ul className="flex items-center sm:gap-x-3 text-sm font-medium">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      className="text-gray-800 dark:text-gray-200 rounded-lg hover:bg-amber-100 dark:hover:bg-gray-800/30 py-1.5 px-3"
                      to={link.to}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
