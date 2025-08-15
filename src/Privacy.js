import React from "react";

export function Privacy({
  companyName = "Nexgen Digital Solutions",
  website = "www.nexgendigitalsolution.com",
  effectiveDate = "10/08/2025",
}) {
  return (
    <section className="max-w-5xl mx-auto p-6 bg-['#FDFAF6'] mt-20 mb-10 font-cormorant">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">Privacy Policy</h1>
        <p className="text-sm text-gray-500">Effective Date: {effectiveDate}</p>
        <p className="text-sm text-gray-500">
          Company: {companyName} • Website: {website}
        </p>
      </header>

      <article className="space-y-6 text-gray-800 leading-relaxed">
        {/* 1. Introduction */}
        <section>
          <h2 className="text-lg font-medium">1. Introduction</h2>
          <p>
            At {companyName}, we value your privacy and are committed to protecting the personal
            information you share with us. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your data when you visit our website or use our digital
            marketing services. By accessing our website or using our services, you agree to the
            terms of this Privacy Policy.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section>
          <h2 className="text-lg font-medium">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <p className="font-semibold mt-2">a) Personal Information</p>
          <ul className="list-disc ml-6">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Billing address</li>
            <li>Any information you voluntarily provide through forms or inquiries</li>
          </ul>
          <p className="font-semibold mt-2">b) Technical Data</p>
          <ul className="list-disc ml-6">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Referring URLs</li>
            <li>Time and date of visit</li>
            <li>Cookies and usage data</li>
          </ul>
        </section>

        {/* 3. How We Use Your Information */}
        <section>
          <h2 className="text-lg font-medium">3. How We Use Your Information</h2>
          <ul className="list-disc ml-6">
            <li>Respond to inquiries or service requests</li>
            <li>Send updates, newsletters, or marketing communications (with consent)</li>
            <li>Improve our website and user experience</li>
            <li>Provide customer support and technical assistance</li>
            <li>Process payments and invoices</li>
            <li>Conduct analytics and monitor website usage</li>
            <li>Comply with legal or regulatory obligations</li>
          </ul>
        </section>

        {/* 4. Cookies and Tracking Technologies */}
        <section>
          <h2 className="text-lg font-medium">4. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to improve your browsing experience and
            analyze website traffic. You can control the use of cookies through your browser
            settings.
          </p>
        </section>

        {/* 5. Sharing of Information */}
        <section>
          <h2 className="text-lg font-medium">5. Sharing of Information</h2>
          <p>We do not sell, rent, or trade your personal information. However, we may share your data with:</p>
          <ul className="list-disc ml-6">
            <li>Trusted third-party service providers (e.g., payment gateways, email services)</li>
            <li>Legal authorities if required by law or in response to valid legal requests</li>
            <li>Business partners for service delivery (under strict confidentiality)</li>
          </ul>
        </section>

        {/* 6. Data Security */}
        <section>
          <h2 className="text-lg font-medium">6. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect
            your personal information against unauthorized access, alteration, disclosure, or
            destruction. However, please note that no method of transmission over the internet is
            100% secure.
          </p>
        </section>

        {/* 7. Your Rights */}
        <section>
          <h2 className="text-lg font-medium">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc ml-6">
            <li>Access, update, or delete your personal information</li>
            <li>Withdraw your consent for marketing communications</li>
            <li>Request restriction or object to certain types of data processing</li>
            <li>Request a copy of the personal data we hold about you</li>
          </ul>
          <p className="mt-2">
            To exercise your rights, email us at{" "}
            <a
              href="mailto:abhishek@nexgendigitalsolutions.com"
              className="text-blue-600 underline"
            >
              abhishek@nexgendigitalsolutions.com
            </a>
          </p>
        </section>

        {/* 8. Third-Party Links */}
        <section>
          <h2 className="text-lg font-medium">8. Third-Party Links</h2>
          <p>
            Our website may contain links to other websites. We are not responsible for the privacy
            practices of such third parties. We encourage you to read their privacy policies.
          </p>
        </section>

        {/* 9. Children’s Privacy */}
        <section>
          <h2 className="text-lg font-medium">9. Children’s Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 18. We do not knowingly
            collect data from children.
          </p>
        </section>

        {/* 10. Updates */}
        <section>
          <h2 className="text-lg font-medium">10. Updates to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in legal,
            technical, or business developments. Changes will be posted on this page with the
            effective date updated accordingly.
          </p>
        </section>

        {/* 11. Contact Us */}
        <section>
          <h2 className="text-lg font-medium">11. Contact Us</h2>
          <ul className="list-none">
            <li>📧 Email: abhishek@nexgendigitalsolution.com</li>
            <li>📲 Phone: +91-9560321883</li>
            <li>🌐 Website: {website}</li>
          </ul>
        </section>

        {/* Consent */}
        <footer className="pt-4 text-sm text-gray-500">
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            If you do not agree with any part of this policy, please refrain from using our website
            and services.
          </p>
        </footer>
      </article>
    </section>
  );
}

