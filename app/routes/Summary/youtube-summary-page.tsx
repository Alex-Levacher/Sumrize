import { Link } from "react-router";
import type { Summary } from "~/.server/summaries";

export default function YoutubeSummaryPage({ summary }: { summary: Summary }) {
  return (
    <div className="mx-auto w-full">
      {/* Back */}
      <div className="mb-3">
        <Link
          className="inline-flex rounded-full border border-slate-200 text-yellow-500 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30"
          to="/"
        >
          <span className="sr-only">Back</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34">
            <title>Back arrow</title>
            <path
              className="fill-current"
              d="m16.414 17 3.293 3.293-1.414 1.414L13.586 17l4.707-4.707 1.414 1.414z"
            />
          </svg>
        </Link>
      </div>

      {/* Post header */}
      <header>
        <div className="mb-1 flex flex-col">
          {/* Post date */}
          <div className="text-slate-500 text-xs uppercase">
            <span className="text-yellow-500">—</span>{" "}
            <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
            {summary.author}
          </div>
          <h1 className="mt-2 scroll-m-20 font-extrabold text-4xl tracking-tight lg:text-5xl">
            {summary.title}
          </h1>
        </div>
      </header>

      <article className="mb-12 divide-y-2 divide-slate-100 dark:divide-slate-800">
        {/* Description */}
        <section className="py-8" id="description">
          <p className="text-slate-500 dark:text-slate-400">
            {summary.description}
          </p>
        </section>
      </article>
    </div>
  );
}
