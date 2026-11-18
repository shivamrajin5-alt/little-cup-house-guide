import { createFileRoute } from "@tanstack/react-router";

// The café website is a standalone single HTML file (public/cafe.html).
// This route shows it full-screen in the preview.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurelia Café — Specialty Coffee, Brunch & Desserts" },
      {
        name: "description",
        content:
          "A cozy specialty coffee house with fresh brunch, indulgent desserts and Instagram-worthy interiors. Book a table on WhatsApp.",
      },
      { property: "og:title", content: "Aurelia Café — Where Every Cup Feels Like Home" },
      {
        property: "og:description",
        content: "Specialty coffee, fresh food and unforgettable vibes.",
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
      title="Aurelia Café website"
      className="fixed inset-0 h-full w-full border-0"
    />
  );
}
