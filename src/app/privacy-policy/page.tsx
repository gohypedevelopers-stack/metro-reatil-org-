import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Metro Retail Solutions',
  description: 'Privacy policy for Metro Retail Solutions website and services.',
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-dark text-white">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-light mb-12">Privacy Policy</h1>
        
        <div className="space-y-12 text-neutral-300 font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-white mb-4">1. Information Collection</h2>
            <p className="mb-4">
              Metro Retail Solutions is committed to protecting your privacy. We collect information from you when you visit our site, fill out a form, or communicate with us. The types of personal information collected may include your name, e-mail address, phone number, and project details. We use this information to respond to your inquiries, process your requests, and communicate with you about our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">2. Use of Information</h2>
            <p className="mb-4">
              Any of the information we collect from you may be used in one of the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>To personalize your experience (your information helps us to better respond to your individual needs)</li>
              <li>To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you)</li>
              <li>To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs)</li>
              <li>To send periodic emails (The email address you provide may be used to send you information, respond to inquiries, and/or other requests or questions)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">3. Protection of Information</h2>
            <p className="mb-4">
              We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. We use industry-standard security protocols to protect your data from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">4. Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">5. Third-Party Disclosure</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">6. Changes to our Privacy Policy</h2>
            <p className="mb-4">
              If we decide to change our privacy policy, we will post those changes on this page. Policy changes will apply only to information collected after the date of the change.
            </p>
          </section>

          <div className="pt-8 border-t border-white/10 text-sm text-neutral-500">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mt-2">If you have any questions about this Privacy Policy, please contact us at info@metroretail.ae.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
