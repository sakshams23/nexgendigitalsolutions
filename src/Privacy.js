import React from "react";

export function Privacy({
  companyName = "Nexgen Digital Solutions",
  website = "www.nexgendigitalsolutions.com",
   effectiveDate = "10/08/2025",
}) {
  return (
    <section className="max-w-5xl mx-auto p-6 bg-['#FDFAF6'] mt-20 mb-10 font-cormorant">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">Privacy Policy</h1>
        <p className="text-sm text-gray-500">Effective Date: {effectiveDate}</p>
        <p className="text-sm text-gray-500">Company: {companyName} • Website: {website}</p>
      </header>

      <article className="space-y-6 text-gray-800 leading-relaxed">
        <section>
          <h2 className="text-lg font-medium">1. Information We Collect</h2>
          <p>
            We collect information you provide directly (for example, when you contact us,
            register for services, or fill out forms) such as name, business name, email,
            phone number, billing information and any other information you choose to provide.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">2. How We Use Information</h2>
          <p>
            We use collected information to deliver services, communicate with you, process
            payments, improve our offerings, and for marketing purposes where you have opted in.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">3. Cookies & Tracking</h2>
          <p>
            We may use cookies, web beacons, and similar technologies to collect usage
            information and improve the website experience. You may control cookies through your
            browser settings; however, disabling cookies may affect some features.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">4. Third-Party Services</h2>
          <p>
            We may share information with trusted third-party providers for payment processing,
            analytics, email and messaging delivery, or other services required to deliver the
            contracted work. These providers are contractually obligated to protect your data.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">5. Data Retention & Security</h2>
          <p>
            We retain data only for as long as necessary to fulfill the purposes outlined in this
            policy or as required by law. We implement reasonable security measures to protect
            your information, but cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">6. Your Rights</h2>
          <p>
            Subject to applicable law, you may request access to, correction of, or deletion of
            personal data we hold about you. To exercise these rights, contact us at the email
            address below.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">7. Contact</h2>
          <p>
            For privacy-related inquiries, please contact: privacy@{companyName.replace(/\s+/g, "").toLowerCase()}.com
          </p>
        </section>

        <footer className="pt-4 text-sm text-gray-500">
          <p>
            By using {website} or our services, you acknowledge that you have read and accept this
            Privacy Policy.
          </p>
        </footer>
      </article>
    </section>
  );
}
