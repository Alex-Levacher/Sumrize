import type { Route } from "./+types/home";
// import { Video } from "~/.server/db/schema";
// import { db } from "~/.server/db/database-config";
import { Lines } from "~/components/Lines";
import { Form, useFetcher } from "react-router";
import { allSummaries } from "../../summaries";
import { Link } from "react-router";
import PostItem from "~/components/post-item";
import AvailableSoon from "./AvailableSoon";
import { LoopsClient, APIError } from "loops";
import { toast } from "sonner";
import { useEffect, useState } from "react";

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
  const loops = new LoopsClient(process.env.LOOPS_API_KEY as string);

  const formData = await request.formData();
  const email = formData.get("email") as string;

  const resp = await loops.sendTransactionalEmail({
    email,
    transactionalId: "cm77s7uhm05eqtnp96da1sdvz",
  });

  if (resp.success) {
    return { message: "Vous êtes inscrit à la liste d'attente", success: true };
  }

  return {
    message: "Un problème est survenu lors de l'inscription",
    success: false,
  };
}

export default function Home({ loaderData, actionData }: Route.ComponentProps) {
  const { message, success } = actionData || {};
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (success) {
      toast.success(message, { position: "bottom-center" });
      setEmail("");
    } else if (message) {
      toast.error(message, { position: "bottom-center" });
    }
  }, [success, message]);

  return (
    <>
      <Lines />
      <main className="grow">
        <section>
          <div className="pt-32 pb-12 md:pt-44 md:pb-20">
            <div className="px-4 sm:px-6">
              <div className="max-w-3xl mx-auto mb-12">
                <div className="text-center">
                  <AvailableSoon />
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
                <JoinWaitlist />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const JoinWaitlist = () => {
  const fetcher = useFetcher();

  useEffect(() => {
    console.log(fetcher.formData);
    if (fetcher.formData) {
      fetcher.formData.set("email", "");
    }
  }, [fetcher.formData]);

  return (
    <div className="w-full max-w-xs mx-auto shrink-0">
      <Form className="relative" method="post" action=".">
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
  );
};
