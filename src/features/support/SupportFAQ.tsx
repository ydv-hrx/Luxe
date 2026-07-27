'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const SupportFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I track my order?',
      answer:
        'Once your order has been dispatched from our atelier, you will receive an email containing a unique tracking number and a link to our carrier portal. You can also view status updates in your Luxora account dashboard.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We accept returns within 30 days of receipt, provided the items are in their original, unused condition with all tags and security seals intact. Personalised or bespoke items are final sale.',
    },
    {
      question: 'How long is shipping?',
      answer:
        'Domestic express shipping typically takes 2-3 business days. International deliveries range from 4-7 business days depending on customs processing in your destination country.',
    },
    {
      question: 'Do you offer international delivery?',
      answer:
        'Yes, Luxora ships to over 100 countries worldwide. Duties and taxes are calculated at checkout for a seamless delivery experience.',
    },
    {
      question: 'Can I change my order?',
      answer:
        'Orders are processed quickly to ensure fast delivery. If you need to make a change, please contact our Concierge within 2 hours of placing your order.',
    },
  ];

  return (
    <section id="faq" className="py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 max-w-3xl mx-auto font-sans">
      <h2 className="font-serif text-2xl sm:text-4xl font-normal text-black text-center mb-8 sm:mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-1 sm:space-y-2 w-full">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="border-b border-neutral-200 py-4 sm:py-6 cursor-pointer group select-none min-h-[56px] flex flex-col justify-center"
            >
              <div className="flex justify-between items-center gap-4">
                <h4 className="font-sans text-xs sm:text-base lg:text-lg font-medium text-black group-hover:text-neutral-600 transition-colors pr-2">
                  {faq.question}
                </h4>
                {isOpen ? (
                  <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0 transition-transform duration-300" />
                ) : (
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-black shrink-0 transition-transform duration-300" />
                )}
              </div>
              {isOpen && (
                <div className="mt-3 sm:mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="font-sans text-xs sm:text-base text-neutral-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
