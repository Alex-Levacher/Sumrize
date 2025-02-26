import { Link } from "react-router";

export default function PostItem({ ...properties }) {
  return (
    <article className="border-slate-100 border-b py-5 dark:border-slate-800">
      <div className="block items-center md:flex">
        <img
          className="mr-6 mb-6 h-24 w-28 rounded-xl object-cover md:mb-0"
          src={properties.img}
          alt={properties.title}
        />
        <div>
          <div className="mb-1 font-medium text-slate-500 text-xs uppercase">
            <span className="">📣 {properties.author}</span>
          </div>
          <h3 className="mb-1 font-[650] font-aspekta text-lg">
            <Link
              className="before:-z-10 before:-rotate-2 relative inline-flex duration-150 ease-out before:absolute before:inset-0 before:origin-center before:scale-x-0 before:bg-yellow-200 before:opacity-30 before:duration-150 before:ease-in-out hover:text-yellow-500 hover:before:scale-100 dark:before:bg-yellow-500"
              to={`/summary/${properties.slug}`}
            >
              {properties.title}
            </Link>
          </h3>
          <div className="flex">
            <div className="grow text-slate-500 text-sm dark:text-slate-400">
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
