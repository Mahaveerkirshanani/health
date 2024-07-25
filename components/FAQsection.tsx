// components/FAQ.tsx
import React, { useState } from 'react';
import { Collapsible, CollapsibleTrigger ,CollapsibleContent } from './ui/collapsible';
import { FaChevronCircleUp, FaSortDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to most countries worldwide. Shipping fees and delivery times vary depending on the destination.',
  },
  {
    question: 'How can I track my order?',
    answer: 'Once your order has been shipped, you will receive an email with a tracking number and a link to track your order online.',
  },
  {
    question: 'Can I change or cancel my order?',
    answer: 'If you need to change or cancel your order, please contact our customer service team as soon as possible. We will do our best to accommodate your request.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and Apple Pay. All transactions are secure and encrypted.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-5 py-10 bg-gray-900" id="faq">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-2 border-gray-700 pb-4">
              <Collapsible open={openIndex === index}>
                <CollapsibleTrigger
                  className="w-full text-left text-lg font-semibold flex justify-between items-center py-2 text-white focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="ml-2">
                    {openIndex === index ? (
                      <FaChevronCircleUp className="text-white" />
                    ) : (
                      <FaSortDown className="text-white" />
                    )}
                  </span>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 text-gray-300 bg-gray-800 p-4 rounded-lg">
                  {faq.answer}
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
