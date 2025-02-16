import { Link } from "react-router";

export default function PostItem({ ...properties }) {
  return (
    <article className="border-b border-slate-100 py-5 dark:border-slate-800">
      <div className="block items-center md:flex">
        <img
          className="mb-6 mr-6 h-24 w-28 rounded-xl object-cover md:mb-0"
          src={properties.img}
          alt={properties.title}
        />
        <div>
          <div className="mb-1 text-xs font-medium uppercase text-slate-500">
            <span className="">📣 {properties.author}</span>
          </div>
          <h3 className="font-aspekta mb-1 text-lg font-[650]">
            <Link
              className="relative inline-flex duration-150 ease-out before:absolute before:inset-0 before:-z-10 before:origin-center before:-rotate-2 before:scale-x-0 before:bg-yellow-200 before:opacity-30 before:duration-150 before:ease-in-out hover:text-yellow-500 hover:before:scale-100 dark:before:bg-yellow-500"
              to={`/summary/${properties.slug}`}
            >
              {properties.title}
            </Link>
          </h3>
          <div className="flex">
            <div className="grow text-sm text-slate-500 dark:text-slate-400">
              {properties.summary}
            </div>
            <Link
              className="group hidden w-12 shrink-0 items-center justify-center text-yellow-500 lg:flex"
              to={`/summary/${properties.slug}`}
              tabIndex={-1}
            >
              ➡️
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
