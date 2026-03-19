import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Tool Executive",
  description: "Terms of service for ToolExecutive.com.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold">Terms of Service</h1>
        <div className="space-y-6 text-sm leading-relaxed text-muted">
          <p className="text-xs">Last updated: March 19, 2026</p>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Acceptance of Terms</h2>
            <p>
              By accessing and using ToolExecutive.com, you agree to these terms. If you do not
              agree, please do not use the site.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Use of Site</h2>
            <p>
              Tool Executive provides curated product information and affiliate links for
              informational and entertainment purposes. We do not sell products directly. All
              purchases are made through third-party retailers and are subject to their terms and
              policies.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Product Information</h2>
            <p>
              While we strive for accuracy, product prices, availability, and specifications may
              change without notice. We are not responsible for errors in product information.
              Always verify details with the retailer before purchasing.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Affiliate Disclosure</h2>
            <p>
              Tool Executive participates in affiliate programs, including the Amazon Services LLC
              Associates Program. When you click links on our site and make purchases, we may earn
              commissions. This does not affect the price you pay. Our product selections are
              editorial and independent of affiliate relationships.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Intellectual Property</h2>
            <p>
              All product names, logos, and brands are property of their respective owners.
              Tool Executive is not affiliated with, endorsed by, or sponsored by any of the
              brands featured on this site.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Limitation of Liability</h2>
            <p>
              Tool Executive is provided &quot;as is&quot; without warranties of any kind. We are
              not liable for any damages arising from your use of the site or purchases made through
              affiliate links.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Contact</h2>
            <p>
              Questions about these terms? Email{" "}
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
