import { createFileRoute } from "@tanstack/react-router";

// The restaurant website is a standalone single HTML file (public/cafe.html).
// This route shows it full-screen in the preview.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "New Hungry Hope Restaurant — Tandoor, Biryani & Chinese, Patna" },
      {
        name: "description",
        content:
          "Family restaurant on Danapur–Khagaul Road, Mustafapur, Patna. Tandoori, biryani, momos and Indo-Chinese. Dine-in, takeaway, delivery and birthday parties.",
      },
      { property: "og:title", content: "New Hungry Hope Restaurant — Come Hungry, Leave Happy" },
      {
        property: "og:description",
        content: "Tandoor, biryani, momos and Indo-Chinese favourites on Danapur–Khagaul Road, Patna.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
