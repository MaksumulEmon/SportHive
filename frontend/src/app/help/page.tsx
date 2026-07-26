import MainLayout from '@/components/layout/MainLayout';

const faqs = [
  {
    question: 'How do I create an account?',
    answer:
      'Click the "Register" button in the top right corner. Fill in your name, email, and password. The first user to register becomes an administrator.',
  },
  {
    question: 'How do I create an event?',
    answer:
      'After logging in, click "Add Event" in the navigation menu. Fill in all the required details about your sports event including date, time, venue, and registration fee.',
  },
  {
    question: 'Can I edit or delete my events?',
    answer:
      'Yes! Go to "Manage Events" to see all your events. You can edit or delete any event you created. Admins can edit or delete any event.',
  },
  {
    question: 'How do I register for an event?',
    answer:
      'Find an event you want to join, click "View Details", and then click "Register Now". You must be logged in to register for events.',
  },
  {
    question: 'Can I cancel my registration?',
    answer:
      'Yes! Go to "My Purchases" to see all your registrations. Click "Cancel" on any registration you want to cancel.',
  },
  {
    question: 'I forgot my password. What should I do?',
    answer:
      'Currently, password reset is not available. Please contact support for assistance with account recovery.',
  },
];

export default function HelpPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gray-900 py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Help & Support</h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Find answers to common questions or contact our support team.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Still Need Help?</h2>
            <p className="mb-6 text-gray-600">
              Our support team is here to help. Reach out to us anytime.
            </p>
            <a
              href="mailto:support@sporthive.com"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Contact Support
            </a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}