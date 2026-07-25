'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How do I register for an event?',
    answer:
      'Simply find the event you want to join, click "View Details", and then click "Register". You\'ll need to create an account if you don\'t have one already.',
  },
  {
    question: 'Can I create my own sports event?',
    answer:
      'Yes! Once you\'re logged in, click "Add Event" in the navigation menu. Fill in the event details, and it will be published for others to find and join.',
  },
  {
    question: 'Is SportHive free to use?',
    answer:
      'SportHive is free to browse and discover events. Some events may have registration fees set by their organizers, but creating an account and using the platform is completely free.',
  },
  {
    question: 'How do I cancel my registration?',
    answer:
      'Go to your Dashboard, find the event under "My Events", and click "Cancel Registration". Please note that refund policies vary by event organizer.',
  },
  {
    question: 'Can I get a refund if an event is cancelled?',
    answer:
      "If an event is cancelled by the organizer, you'll receive a full refund automatically. Refund timelines depend on your payment method, typically 5-10 business days.",
  },
  {
    question: 'How do I contact an event organizer?',
    answer:
      "On the event details page, you'll find the organizer's contact information including email and phone number. You can reach out to them directly with any questions.",
  },
];

function FaqItem({ faq }: { faq: { question: string; answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-lg font-medium text-gray-900">{faq.question}</span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We&apos;ve got answers. Find the most common questions below.
          </p>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-gray-200 rounded-xl border border-gray-200">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} faq={faq} />
          ))}
        </div>

        {/* Contact Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="/contact" className="font-medium text-blue-600 hover:text-blue-700">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
