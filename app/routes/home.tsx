import type { Route } from "./+types/home";
// import { Video } from "~/.server/db/schema";
// import { db } from "~/.server/db/database-config";
import { Lines } from "~/components/Lines";
import { Form } from "react-router";
import { allSummaries } from "../summaries";
import { Link } from "react-router";
import PostItem from "~/components/post-item";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sumrize" },
    {
      name: "description",
      content: "Le savoir de Youtube, en quelques minutes",
    },
  ];
}

// export async function loader() {
//   console.log(process.env.DATABASE_URL);

//   const videos = await db
//     .select({
//       id: Video.id,
//       url: Video.url,
//       title: Video.title,
//     })
//     .from(Video);

//   console.log(videos);

//   return { message: "Hello Server!" };
// }

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  console.log("Action", email);
  return { message: "Email received" };
}

export default function Home({ loaderData, actionData }: Route.ComponentProps) {
  const { message } = actionData || {};

  console.log("Action data", actionData);

  return (
    <>
      <Lines />
      <main className="grow">
        <section>
          <div className="pt-32 pb-12 md:pt-44 md:pb-20">
            <div className="px-4 sm:px-6">
              <div className="max-w-3xl mx-auto mb-12">
                <div className="text-center">
                  {/* Soon available */}
                  <div className="relative flex items-center justify-center gap-4 mb-5 before:h-px before:w-24 before:border-b before:[border-image:linear-gradient(to_left,var(--color-amber-300),transparent)1] dark:before:[border-image:linear-gradient(to_left,--theme(--color-amber-300/.16),transparent)1] before:shadow-xs before:shadow-white/20 dark:before:shadow-none after:h-px after:w-24 after:border-b after:[border-image:linear-gradient(to_right,var(--color-amber-300),transparent)1] dark:after:[border-image:linear-gradient(to_right,--theme(--color-amber-300/.16),transparent)1] after:shadow-xs after:shadow-white/20 dark:after:shadow-none">
                    <div className="relative text-sm font-medium text-gray-700 bg-white dark:bg-gray-700 inline-flex rounded-lg whitespace-nowrap px-3 py-[3px] tracking-normal before:absolute before:inset-0 before:rounded-lg before:[background-image:linear-gradient(120deg,transparent_0%,--theme(--color-amber-400/.12)_33%,--theme(--color-pink-400/.12)_66%,--theme(--color-amber-200/.12)_100%)] dark:before:[background-image:linear-gradient(120deg,--theme(--color-amber-400/.16),--theme(--color-amber-600/.16)_50%,transparent_100%)] shadow-sm">
                      {/* Border with dots in corners */}
                      <div
                        className="absolute -inset-1.5 bg-amber-500/15 dark:bg-gray-800/65 rounded-xs -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[7px] before:bg-[length:7px_7px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_0.5px,transparent_0.5px)] dark:before:[background-image:radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[7px] after:bg-[length:7px_7px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_0.5px,transparent_0.5px)] dark:after:[background-image:radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,--theme(--color-gray-600/.56)_0.5px,transparent_0.5px)]"
                        aria-hidden="true"
                      />
                      <span className="relative text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-linear-to-b dark:from-amber-500 dark:to-amber-50">
                        Bientôt disponible
                      </span>
                    </div>
                  </div>

                  <h1 className="font-inter-tight text-5xl md:text-6xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-linear-to-b dark:from-amber-200 dark:to-gray-200 pb-4">
                    Le savoir de Youtube, en quelques minutes
                  </h1>
                  <p className="text-lg text-gray-700 dark:text-gray-400">
                    Exploitez des centaines d'heures de contenu, et apprenez
                    plus vite.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:[border-image:linear-gradient(to_right,transparent,--theme(--color-amber-300/.8),transparent)1] dark:before:[border-image:linear-gradient(to_right,transparent,--theme(--color-amber-300/.16),transparent)1] before:shadow-xs before:shadow-white/20 dark:before:shadow-none after:h-px after:w-full after:border-b after:[border-image:linear-gradient(to_right,transparent,--theme(--color-amber-300/.8),transparent)1] dark:after:[border-image:linear-gradient(to_right,transparent,--theme(--color-amber-300/.16),transparent)1] after:shadow-xs after:shadow-white/20 dark:after:shadow-none mb-11">
                <div className="w-full max-w-xs mx-auto shrink-0">
                  <Form className="relative" method="post">
                    <div
                      className="absolute -inset-3 bg-amber-500/15 dark:bg-transparent dark:bg-linear-to-b dark:from-gray-700/80 dark:to-gray-700/70 rounded-lg -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[15px] before:bg-[length:15px_15px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_1.5px,transparent_1.5px)] dark:before:[background-image:radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[15px] after:bg-[length:15px_15px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_1.5px,transparent_1.5px)] dark:after:[background-image:radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px)]"
                      aria-hidden="true"
                    />

                    <div className="space-y-3">
                      <div>
                        <label className="sr-only" htmlFor="email">
                          Email
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 text-gray-500/70 dark:text-gray-400/70 pl-4 flex items-center pointer-events-none">
                            ✉️
                          </div>
                          <input
                            id="email"
                            name="email"
                            className="form-input text-sm w-full pl-10 pr-4"
                            type="email"
                            placeholder="Votre email..."
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="btn cursor-pointer text-gray-100 bg-gray-900 hover:bg-gray-800 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-white w-full"
                        >
                          Rejoignez la liste d'attente
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
