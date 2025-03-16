import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { Theme, useTheme } from "remix-themes";

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        onClick={() => handleThemeChange(Theme.LIGHT)}
        className={clsx(
          "cursor-pointer rounded-lg px-2 py-1 font-medium text-xs",
          theme === "light"
            ? "bg-amber-100 text-amber-900"
            : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/30",
        )}
        aria-label="Thème clair"
      >
        <Sun className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => handleThemeChange(Theme.DARK)}
        className={clsx(
          "cursor-pointer rounded-lg px-2 py-1 font-medium text-xs",
          theme === "dark"
            ? "bg-gray-800 text-gray-100"
            : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/30",
        )}
        aria-label="Thème sombre"
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
}
