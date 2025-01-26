import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  return { message: "Hello !!" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1>{loaderData.message}</h1>
    </div>
  );
}
