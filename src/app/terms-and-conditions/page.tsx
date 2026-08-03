import React from 'react';

export const metadata = {
  title: 'Terms & Conditions | Metro Retail Solutions',
  description: 'Terms and conditions for Metro Retail Solutions website and services.',
};

export default function TermsAndConditions() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-dark text-white">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <h1 className="text-2xl md:text-5xl font-light mb-12">Terms & Conditions</h1>
        
        <div className="space-y-12 text-neutral-300 font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-white mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using the website and services of Metro Retail Solutions, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">2. Services Provided</h2>
            <p className="mb-4">
              Metro Retail Solutions provides comprehensive retail and commercial fit-out services, including but not limited to architectural planning, bespoke carpentry, MEP infrastructure, and turnkey execution. The scope of each project will be defined in a separate, mutually agreed-upon contract.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">3. Intellectual Property</h2>
            <p className="mb-4">
              The Site and its original content, features, and functionality are owned by Metro Retail Solutions and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. Designs, concepts, and plans created by Metro Retail Solutions remain our intellectual property until full payment is received and specific rights are transferred.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">4. Limitation of Liability</h2>
            <p className="mb-4">
              Metro Retail Solutions shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products, even if Metro Retail Solutions has been advised of the possibility of such damages. Applicable law may not allow the limitation of exclusion of liability or incidental or consequential damages, so the above limitation or exclusion may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">5. Revisions and Errata</h2>
            <p className="mb-4">
              The materials appearing on Metro Retail Solutions's website could include technical, typographical, or photographic errors. Metro Retail Solutions does not warrant that any of the materials on its website are accurate, complete, or current. Metro Retail Solutions may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-white mb-4">6. Governing Law</h2>
            <p className="mb-4">
              Any claim relating to Metro Retail Solutions's website shall be governed by the laws of the applicable jurisdiction without regard to its conflict of law provisions.
            </p>
          </section>

          <div className="pt-8 border-t border-white/10 text-sm text-neutral-500">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p className="mt-2">If you have any questions about these Terms, please contact us at info@metroretail.ae.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
