import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Tool Executive",
  description: "Privacy policy for ToolExecutive.com — how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>
        <div className="space-y-6 text-sm leading-relaxed text-muted">
          <p className="text-xs">Last updated: March 19, 2026</p>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Information We Collect</h2>
            <p>
              ToolExecutive.com (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects minimal
              information. We do not require accounts, logins, or personal data to browse our site.
              Information we may collect includes:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Standard web server logs (IP address, browser type, pages visited)</li>
              <li>Analytics data through Google Analytics (anonymized)</li>
              <li>Cookie data for advertising and analytics purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Cookies &amp; Advertising</h2>
            <p>
              We may use advertising networks that place cookies on your device. These cookies
              enable personalized advertising based on your browsing history. You can opt out of
              personalized advertising through{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">
                Google Ads Settings
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Affiliate Links</h2>
            <p>
              Our site contains affiliate links. When you click these links and make a purchase, we
              may receive a commission. The affiliate programs may place their own cookies on your
              device. We recommend reviewing the privacy policies of individual retailers.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Google Analytics — website analytics</li>
              <li>Amazon Associates — affiliate product links</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Your Rights</h2>
            <p>
              Depending on your location, you may have rights under GDPR, CCPA, or similar laws,
              including the right to access, correct, or delete personal data. Contact us at{" "}
              <a href="mailto:privacy@toolexecutive.com" className="text-orange hover:underline">
                privacy@toolexecutive.com
              </a>{" "}
              to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-foreground">Changes</h2>
            <p>
              We may update this policy from time to time. Changes will be posted on this page with
              an updated date.
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
