import React from "react";

export function Terms({
  companyName = "Nexgen Digital Solutions",
  website = "www.nexgendigitalsolutions.com",
  effectiveDate = "10/08/2025",
}) {
  return (
    <section className="max-w-5xl mx-auto p-6 bg-['#FDFAF6'] mt-20 mb-10 font-cormorant">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">Terms & Conditions</h1>
        <p className="text-sm text-gray-500">Effective Date: {effectiveDate}</p>
        <p className="text-sm text-gray-500">Company: {companyName} • Website: {website}</p>
      </header>

      <article className="space-y-6 text-gray-800 leading-relaxed">
        <section>
          <h2 className="text-lg font-medium">1. Acceptance of Terms</h2>
          <p>
            By visiting our website or availing any of our services (including digital marketing,
            SMS, WhatsApp API, email, voice call, website development, etc.), you agree to comply
            with and be legally bound by these Terms. If you do not agree to these Terms, you must
            not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">2. Services Overview</h2>
          <p>
            {companyName} offers digital marketing and IT solutions, including but not limited to
            SEO, Social Media Marketing, Bulk SMS, Voice Call & WhatsApp API, Email Marketing, Web
            Design & Development, Lead Generation Campaigns, RCS & IVR Services. We reserve the
            right to change or discontinue any service at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">3. Eligibility</h2>
          <p>
            Our services are intended for businesses, organizations, and individuals above the age
            of 18. By using our services, you confirm that you meet this requirement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">4. User Responsibilities</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Provide accurate, current, and complete information during registration or inquiry.</li>
            <li>Use our services only for lawful purposes.</li>
            <li>Not engage in any activity that interferes with or disrupts our platform.</li>
            <li>Not misuse our services for sending spam, offensive, or misleading content.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium">5. Payment Terms</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>All services are subject to full or partial advance payment as mutually agreed.</li>
            <li>Fees for services are non-refundable unless otherwise stated.</li>
            <li>Late payments may result in service interruption or suspension.</li>
            <li>{companyName} reserves the right to revise pricing at any time with prior notice to the client.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium">6. Intellectual Property</h2>
          <p>
            All content, designs, graphics, texts, logos, and software on our website or created
            during project delivery are the intellectual property of {companyName} or its
            partners. You may not use, copy, reproduce, or modify any content without prior
            written permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">7. Confidentiality</h2>
          <p>
            We respect the confidentiality of our clients' business information and agree not to
            disclose any private or sensitive data without written consent, except as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">8. Limitation of Liability</h2>
          <p>
            {companyName} shall not be liable for any direct, indirect, incidental, or consequential
            damages arising out of use or inability to use the services, delays or interruptions in
            service delivery, unauthorized access to or alteration of client data, or any
            third-party content or external links. Use of our services is at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">9. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to our services at any time, without
            prior notice, for any reason, including breach of these Terms. Clients may also terminate
            services by providing written notice, subject to any outstanding dues.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">10. Governing Law</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with the laws of India.
            Any disputes arising out of these Terms shall be subject to the exclusive jurisdiction
            of the courts in Delhi, India.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">11. Modifications</h2>
          <p>
            We may update or revise these Terms from time to time. Changes will be posted on this
            page with a revised effective date. Continued use of our website or services constitutes
            your acceptance of those changes.
          </p>
        </section>

        <footer className="pt-4 text-sm text-gray-500">
          <p>For questions about these Terms, contact us at: hello@{companyName.replace(/\s+/g, "").toLowerCase()}.com</p>
        </footer>
      </article>
    </section>
  );
}