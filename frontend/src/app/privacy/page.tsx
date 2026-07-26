import MainLayout from '@/components/layout/MainLayout';

export default function PrivacyPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gray-900 py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Privacy Policy</h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Last updated: January 2025
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
              <p className="text-gray-600">
                When you create an account, we collect your name and email address. When you register
                for events, we collect registration information and payment details.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
              <p className="text-gray-600">
                We use your information to provide and improve our services, process event
                registrations, and communicate with you about events you&apos;ve registered for.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">3. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your personal information.
                However, no method of transmission over the Internet is 100% secure.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">4. Third-Party Services</h2>
              <p className="text-gray-600">
                We may use third-party services to process payments and analyze usage. These
                services have their own privacy policies.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">5. Your Rights</h2>
              <p className="text-gray-600">
                You have the right to access, correct, or delete your personal information. Contact
                us to exercise these rights.
              </p>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">6. Contact Us</h2>
              <p className="text-gray-600">
                If you have questions about this Privacy Policy, please contact us at
                privacy@sporthive.com.
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}