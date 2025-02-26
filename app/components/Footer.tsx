import { Link } from "react-router";
import { Logo } from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t shadow-[0_1px_0_0_--theme(--color-white/.2)] [border-image:linear-gradient(to_right,transparent,--theme(--color-amber-300/.4),transparent)1] dark:shadow-none dark:[border-image:linear-gradient(to_right,transparent,--theme(--color-amber-300/.16),transparent)1]">
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="py-8 text-center">
            <p className="text-gray-700 text-sm dark:text-gray-400">
              © Sumrize - Créé par{" "}
              <a
                className="font-medium text-amber-500 hover:underline"
                href="https://linkedin.com/in/alexlevacher"
                rel="noreferrer"
                target="_blank"
              >
                @alexlevacher
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
