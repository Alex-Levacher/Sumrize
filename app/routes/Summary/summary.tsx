import {
  Link,
  type LoaderFunctionArgs,
  type MetaFunction,
  useLoaderData,
} from "react-router";
import { type Summary, allSummaries } from "~/.server/summaries";
import Footer from "~/components/Footer";
import YoutubeSummaryPage from "./youtube-summary-page";

export type LoaderData = {
  summary: Summary;
};

export function loader({ params }: LoaderFunctionArgs) {
  const findSummary = allSummaries.find(
    (summary) => summary.slug === params.slug,
  );

  if (findSummary) return { summary: findSummary };

  throw new Response(null, { status: 404, statusText: "Not Found" });
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `Sumrize | ${data?.summary.title}` },
    { name: "description", content: data?.summary.description },
  ];
};

export default function SummaryPage() {
  const { summary } = useLoaderData<typeof loader>();

  return (
    <div>
      {/* Main */}
      <main className="mx-auto mt-10 max-w-3xl">
        <div className="">
          <YoutubeSummaryPage summary={summary} />
        </div>
      </main>
    </div>
  );
}
