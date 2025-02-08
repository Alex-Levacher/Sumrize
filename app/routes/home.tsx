import type { Route } from "./+types/home";
import { Video } from "~/.server/db/schema";
import { db } from "~/.server/db/database-config";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router Ap" },
    { name: "description", content: "Welcome to React Route!" },
  ];
}

export async function loader() {
  console.log(process.env.DATABASE_URL);

  const videos = await db
    .select({
      id: Video.id,
      url: Video.url,
      title: Video.title,
    })
    .from(Video);

  console.log(videos);

  return { message: "Hello Server!" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1 className="text-red-500 text-2xl font-bold">{loaderData.message}</h1>
    </div>
  );
}
