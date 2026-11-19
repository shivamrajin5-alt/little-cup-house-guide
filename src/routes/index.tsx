import { createFileRoute } from "@tanstack/react-router";

// The restaurant website is one standalone HTML file (public/cafe.html).
// "/" returns that file's HTML directly, so search engines read the full page,
// titles and structured data at the main address instead of an empty frame.
import siteHtml from "../../public/cafe.html?raw";

const SITE = "https://little-cup-house-guide.lovable.app/";
const TITLE = "New Hungry Hope, Patna – Restaurant near Danapur Station";
const DESCRIPTION =
  "Family restaurant on Danapur–Khagaul Road, Mustafapur, Patna. Tandoori, biryani, momos & Chinese. Dine-in, takeaway, delivery & birthday parties.";

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: () =>
        new Response(siteHtml, {
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
    },
  },
  // Fallback for in-app navigation only; the GET handler above serves real visits.
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "New Hungry Hope Restaurant, Patna — Come Hungry, Leave Happy" },
      {
        property: "og:description",
        content: "Tandoori, biryani, momos and Indo-Chinese on Danapur–Khagaul Road, near Danapur Station, Patna.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE }],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/cafe.html"
      title="New Hungry Hope Restaurant website"
      className="fixed inset-0 h-full w-full border-0"
    />
  );
}
