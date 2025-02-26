export default function AvailableSoon() {
  return (
    <div className="relative mb-5 flex items-center justify-center gap-4 before:h-px before:w-24 before:border-b before:shadow-white/20 before:shadow-xs after:h-px after:w-24 after:border-b after:shadow-white/20 after:shadow-xs dark:after:shadow-none dark:before:shadow-none before:[border-image:linear-gradient(to_left,var(--color-amber-300),transparent)1] after:[border-image:linear-gradient(to_right,var(--color-amber-300),transparent)1] dark:after:[border-image:linear-gradient(to_right,--theme(--color-amber-300/.16),transparent)1] dark:before:[border-image:linear-gradient(to_left,--theme(--color-amber-300/.16),transparent)1]">
      <div className="relative inline-flex whitespace-nowrap rounded-lg bg-white px-3 py-[3px] font-medium text-gray-700 text-sm tracking-normal shadow-sm before:absolute before:inset-0 before:rounded-lg dark:bg-gray-700 before:[background-image:linear-gradient(120deg,transparent_0%,--theme(--color-amber-400/.12)_33%,--theme(--color-pink-400/.12)_66%,--theme(--color-amber-200/.12)_100%)] dark:before:[background-image:linear-gradient(120deg,--theme(--color-amber-400/.16),--theme(--color-amber-600/.16)_50%,transparent_100%)]">
        {/* Border with dots in corners */}
        <div
          className="-inset-1.5 -z-10 absolute rounded-xs bg-amber-500/15 before:absolute before:inset-y-0 before:left-0 before:w-[7px] before:bg-[length:7px_7px] before:bg-no-repeat after:absolute after:inset-y-0 after:right-0 after:w-[7px] after:bg-[length:7px_7px] after:bg-no-repeat dark:bg-gray-800/65 before:[background-image:radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_0.5px,transparent_0.5px)] before:[background-position:top_center,bottom_center] after:[background-image:radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_0.5px,transparent_0.5px)] after:[background-position:top_center,bottom_center] dark:after:[background-image:radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px)] dark:before:[background-image:radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px)]"
          aria-hidden="true"
        />
        <span className="relative text-gray-800 dark:bg-linear-to-b dark:from-amber-500 dark:to-amber-50 dark:bg-clip-text dark:text-transparent">
          Bientôt disponible
        </span>
      </div>
    </div>
  );
}
