import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Tool Executive",
  description: "About Tool Executive — the best professional and industrial tools, curated for tradespeople.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold">About Tool Executive</h1>
        <div className="space-y-6 text-sm leading-relaxed text-muted">
          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">What Is This?</h2>
            <p>
              Tool Executive is a curated collection of the best professional and industrial tools
              money can buy. We scour the market for power tools, hand tools, heavy equipment,
              welding gear, electrical testers, and everything in between — then present them in
              an endlessly scrollable feed built for tradespeople, contractors, and serious DIYers
              who demand quality.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">How It Works</h2>
            <p>
              Browse by category, scroll endlessly, and click through to purchase anything that
              catches your eye. We include affiliate links to Amazon — when you buy something
              through our links, we earn a small commission at no extra cost to you. This helps
              us keep the lights on and continue curating the finest tools in the industry.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Editorial Independence</h2>
            <p>
              Every product on Tool Executive is hand-picked by our team of tool enthusiasts and
              working tradespeople. We are not paid to feature any specific product — our selections
              are based purely on quality, durability, real-world performance, and the kind of tools
              that make professionals stop and say &quot;now THAT&apos;s a tool.&quot;
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Contact</h2>
            <p>
              Questions, suggestions, or just want to argue about Milwaukee vs. DeWalt?{" "}
              <a href="mailto:hello@toolexecutive.com" className="text-orange hover:underline">
                hello@toolexecutive.com
              </a>
            </p>
          </section>
          <div className="pt-4">
            <Link href="/" className="text-sm font-semibold text-orange hover:underline">
              &larr; Back to browsing
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
