import MainLayout from '@/components/layout/MainLayout';

export default function TermsPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gray-900 py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Terms & Conditions
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Last updated: January 2025
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing or using SportHive, you agree to be bound by these Terms & Conditions.
                If you do not agree, do not use the service.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">2. User Accounts</h2>
              <p className="text-gray-600">
                You are responsible for maintaining the confidentiality of your account credentials.
                You agree to notify us immediately of any unauthorized use of your account.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">3. Event Listings</h2>
              <p className="text-gray-600">
                Event organizers are responsible for the accuracy of their event listings.
                SportHive is not responsible for any inaccuracies or changes to events.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">4. Registrations & Payments</h2>
              <p className="text-gray-600">
                Registration fees are set by event organizers. Refund policies vary by event.
                Contact the organizer directly for refund requests.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">5. Prohibited Conduct</h2>
              <p className="text-gray-600">
                You agree not to misuse the service, create fake events, spam other users, or
                engage in any illegal activities through the platform.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">6. Limitation of Liability</h2>
              <p className="text-gray-600">
                SportHive is not liable for any damages arising from the use of our service,
                including but not limited to event cancellations or changes.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">7. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Continued use of the
                service constitutes acceptance of any changes.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">8. Contact</h2>
              <p className="text-gray-600">
                For questions about these Terms, contact us at legal@sporthive.com.
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}