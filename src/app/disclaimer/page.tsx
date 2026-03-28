import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer — Tool Executive",
  description: "Affiliate disclosure and disclaimers for ToolExecutive.com.",
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold">Disclaimer &amp; Affiliate Disclosure</h1>
        <div className="space-y-6 text-sm leading-relaxed text-muted">
          <p className="text-xs">Last updated: March 19, 2026</p>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Affiliate Disclosure</h2>
            <p>
              ToolExecutive.com is a participant in the Amazon Services LLC Associates Program
              and the eBay Partner Network, affiliate advertising programs designed to provide a
              means for sites to earn advertising fees by advertising and linking to Amazon.com
              and eBay.com. When you click on product links and make a purchase, we may receive
              a small commission at no additional cost to you.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Editorial Independence</h2>
            <p>
              All products featured on Tool Executive are selected by our team based on quality,
              durability, real-world performance, and value. No brand or retailer can pay to be
              featured. Affiliate relationships do not influence our product selections or
              descriptions.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Pricing &amp; Availability</h2>
            <p>
              Product prices and availability are subject to change. Prices displayed on
              Tool Executive are approximate and may not reflect the current price at the time of
              purchase. Always verify pricing on Amazon or eBay before completing a purchase.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Product Safety</h2>
            <p>
              Many tools featured on this site are professional-grade and can be dangerous if used
              improperly. Always read and follow manufacturer safety instructions, wear appropriate
              PPE, and ensure you are properly trained before operating any tool or equipment.
              Tool Executive is not responsible for injuries resulting from improper use of any
              product featured on this site.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Trademarks</h2>
            <p>
              All product names, logos, and brands mentioned on Tool Executive are property of
              their respective owners. Use of these names does not imply endorsement or affiliation.
              Milwaukee, DeWalt, Makita, Festool, Snap-on, Knipex, and all other brand names are
              registered trademarks of their respective companies.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Contact</h2>
            <p>
              Questions about this disclosure? Email{" "}
              <a href="mailto:hello@toolexecutive.com" className="text-orange hover:underline">
                hello@toolexecutive.com
              </a>.
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
