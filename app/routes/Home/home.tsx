import { LoopsClient } from "loops";
import { useEffect, useState } from "react";
import { Form, useFetcher } from "react-router";
import { toast } from "sonner";
import { Lines } from "~/components/Lines";
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
              <div className="mx-auto mb-12 max-w-3xl">
                <div className="text-center">
                  <AvailableSoon />
                  <h1 className="pb-4 font-bold font-inter-tight text-5xl text-gray-800 md:text-6xl dark:bg-linear-to-b dark:from-amber-200 dark:to-gray-200 dark:bg-clip-text dark:text-transparent">
                    Le savoir de Youtube, en quelques minutes
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
    <div className="mx-auto w-full max-w-xs shrink-0">
      <Form className="relative" method="post" action=".">
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
              className="btn w-full cursor-pointer bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
            >
              Rejoignez la liste d'attente
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};
