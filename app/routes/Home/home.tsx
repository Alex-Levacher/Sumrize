import { useEffect, useRef } from "react";
import { useFetcher, useLoaderData } from "react-router";
import { toast } from "sonner";
import { allSummaries } from "~/.server/summaries";
import {
  sendTransactionalEmail,
  transactionalIds,
} from "~/.server/utils/mailing.server";
import { Lines } from "~/components/Lines";
import { Loader } from "~/components/Loader";
import PostItem from "~/components/post-item";
import type { Route } from "./+types/home";
import AvailableSoon from "./AvailableSoon";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sumrize" },
    {
      name: "description",
      content: "Le savoir de Youtube, en quelques minutes",
    },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;

  const resp = await sendTransactionalEmail(email, transactionalIds.waitlist);

  if (resp.success) {
    return {
      message:
        "Merci pour votre inscription ! Vous allez recevoir un email de confirmation.",
      success: true,
    };
  }

  return {
    message: "Un problème est survenu lors de l'inscription",
    success: false,
  };
}

export const loader = async () => {
  return {
    summaries: allSummaries,
  };
};

export default function Home() {
  const { summaries } = useLoaderData<typeof loader>();

  return (
    <>
      <Lines />
      <main className="grow">
        <section>
          <div className="pt-32 pb-12 md:pt-20 md:pb-20">
            <div className="px-4 sm:px-6">
              <div className="mx-auto mb-12 max-w-3xl">
                <div className="text-center">
                  <AvailableSoon />
                  <h1 className="pb-4 font-bold font-inter-tight text-5xl text-gray-800 md:text-6xl dark:bg-linear-to-b dark:from-amber-200 dark:to-gray-200 dark:bg-clip-text dark:text-transparent">
                    Le savoir de Youtube, en quelques minutes.
                  </h1>
                  <p className="text-gray-700 text-lg dark:text-gray-400">
                    Exploitez des centaines d'heures de contenu, et apprenez
                    plus vite.
                  </p>
                </div>
              </div>

              <div className="relative mb-11 flex items-center justify-center gap-10 before:h-px before:w-full before:border-b before:shadow-white/20 before:shadow-xs after:h-px after:w-full after:border-b after:shadow-white/20 after:shadow-xs dark:after:shadow-none dark:before:shadow-none before:[border-image:linear-gradient(to_right,transparent,--theme(--color-amber-300/.8),transparent)1] after:[border-image:linear-gradient(to_right,transparent,--theme(--color-amber-300/.8),transparent)1] dark:after:[border-image:linear-gradient(to_right,transparent,--theme(--color-amber-300/.16),transparent)1] dark:before:[border-image:linear-gradient(to_right,transparent,--theme(--color-amber-300/.16),transparent)1]">
                <JoinWaitlist />
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto mb-20 max-w-[900px] gap-8">
          <h2 className="mb-3 font-[650] text-xl">
            Découvrir les premiers résumés
          </h2>

          {/* Filters */}
          <ul className="flex flex-wrap border-slate-100 border-b text-sm dark:border-slate-800">
            <li className="-mb-px px-3">
              <a
                className="block border-yellow-500 border-b-2 py-3 font-medium text-slate-800 dark:text-slate-100"
                href="#0"
              >
                Toutes
              </a>
            </li>
            <li className="-mb-px px-3">
              <span className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300">
                <span className="red-ruban-fixed -m-1 p-1">
                  + de catégories bientôt
                </span>
              </span>
            </li>
          </ul>

          {/* Articles list */}
          <div>
            {summaries.map((summary, index) => {
              return (
                <PostItem
                  key={`${summary.slug}-${index}`}
                  img={summary.img}
                  title={summary.title}
                  author={summary.author}
                  summary={summary.description}
                  slug={summary.slug}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

type ActionData = {
  message: string;
  success: boolean;
};

const JoinWaitlist = () => {
  const fetcher = useFetcher<ActionData>();
  const formRef = useRef<HTMLFormElement>(null);
  const isSubmitting = fetcher.state === "submitting";

  useEffect(() => {
    if (fetcher.data?.success) {
      toast.success(fetcher.data.message, { position: "bottom-center" });
      formRef.current?.reset();
    } else if (fetcher.data?.message) {
      toast.error(fetcher.data.message, { position: "bottom-center" });
    }
  }, [fetcher.data]);

  return (
    <div className="mx-auto w-full max-w-xs shrink-0">
      <fetcher.Form ref={formRef} className="relative" method="POST" action=".">
        <div
          className="-inset-3 -z-10 absolute rounded-lg bg-amber-500/15 before:absolute before:inset-y-0 before:left-0 before:w-[15px] before:bg-[length:15px_15px] before:bg-no-repeat after:absolute after:inset-y-0 after:right-0 after:w-[15px] after:bg-[length:15px_15px] after:bg-no-repeat dark:bg-linear-to-b dark:bg-transparent dark:from-gray-700/80 dark:to-gray-700/70 before:[background-image:radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_1.5px,transparent_1.5px)] before:[background-position:top_center,bottom_center] after:[background-image:radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,--theme(--color-amber-500/.56)_1.5px,transparent_1.5px)] after:[background-position:top_center,bottom_center] dark:after:[background-image:radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px)] dark:before:[background-image:radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,var(--color-gray-600)_1.5px,transparent_1.5px)]"
          aria-hidden="true"
        />

        <div className="space-y-3">
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500/70 dark:text-gray-400/70">
                ✉️
              </div>
              <input
                id="email"
                name="email"
                className="form-input w-full pr-4 pl-10 text-sm"
                type="email"
                placeholder="Votre email..."
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="btn h-10 w-full cursor-pointer bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <Loader />
                </div>
              ) : (
                "Rejoignez la liste d'attente"
              )}
            </button>
          </div>
        </div>
      </fetcher.Form>
    </div>
  );
};
