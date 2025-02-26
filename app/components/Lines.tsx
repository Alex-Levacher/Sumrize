export const Lines = () => {
  return (
    <div
      className="-translate-x-1/2 -z-10 pointer-events-none absolute inset-y-0 left-1/2 w-[1102px]"
      aria-hidden="true"
    >
      {/* Left side */}
      <div className="before:absolute before:inset-y-0 before:left-0 before:border-l before:shadow-[-1px_0_0_0_--theme(--color-white/.2)] after:absolute after:inset-y-0 after:left-20 after:border-l after:shadow-[-1px_0_0_0_--theme(--color-white/.2)] dark:after:shadow-none dark:before:shadow-none before:[border-image:linear-gradient(to_bottom,--theme(--color-amber-300/.4),transparent)1] after:[border-image:linear-gradient(to_bottom,--theme(--color-amber-300/.4),transparent)1] dark:after:[border-image:linear-gradient(to_bottom,--theme(--color-amber-300/.16),transparent)1] dark:before:[border-image:linear-gradient(to_bottom,--theme(--color-amber-300/.16),transparent)1]" />
      {/* Right side */}
      <div className="before:absolute before:inset-y-0 before:right-0 before:border-l before:shadow-[-1px_0_0_0_--theme(--color-white/.2)] after:absolute after:inset-y-0 after:right-20 after:border-l after:shadow-[-1px_0_0_0_--theme(--color-white/.2)] dark:after:shadow-none dark:before:shadow-none before:[border-image:linear-gradient(to_bottom,--theme(--color-amber-300/.4),transparent)1] after:[border-image:linear-gradient(to_bottom,--theme(--color-amber-300/.4),transparent)1] dark:after:[border-image:linear-gradient(to_bottom,--theme(--color-amber-300/.16),transparent)1] dark:before:[border-image:linear-gradient(to_bottom,--theme(--color-amber-300/.16),transparent)1]" />
    </div>
  );
};
