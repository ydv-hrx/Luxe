'use client';

import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';

export const ContactOptions: React.FC = () => {
  return (
    <section id="contact" className="py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 bg-[#f3f3f3] font-sans">
      <div className="max-w-[1440px] mx-auto text-center mb-8 sm:mb-12">
        <h2 className="font-serif text-2xl sm:text-4xl font-normal text-black mb-2 sm:mb-4">Other Ways to Connect</h2>
        <p className="font-sans text-xs sm:text-base text-neutral-600">
          Our specialists are available across all channels to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-[1440px] mx-auto">
        <div className="bg-[#f9f9f9] p-6 sm:p-10 lg:p-12 text-center group border border-neutral-200 hover:border-black transition-all flex flex-col justify-between h-full">
          <div>
            <Mail className="w-7 h-7 sm:w-8 sm:h-8 mb-4 sm:mb-6 mx-auto text-black stroke-[1.5]" />
            <h5 className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-black mb-3">Email Support</h5>
            <p className="font-sans text-sm sm:text-base font-semibold text-black mb-1">concierge@luxora.com</p>
            <p className="text-neutral-500 text-[10px] sm:text-xs">Response within 12 hours</p>
          </div>
        </div>

        <div className="bg-[#f9f9f9] p-6 sm:p-10 lg:p-12 text-center group border border-neutral-200 hover:border-black transition-all flex flex-col justify-between h-full">
          <div>
            <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 mb-4 sm:mb-6 mx-auto text-black stroke-[1.5]" />
            <h5 className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-black mb-3">Live Chat</h5>
            <p className="font-sans text-sm sm:text-base font-semibold text-black mb-1">Chat with a specialist</p>
            <p className="text-neutral-500 text-[10px] sm:text-xs">Mon–Fri: 9am – 10pm (GMT)</p>
          </div>
        </div>

        <div className="bg-[#f9f9f9] p-6 sm:p-10 lg:p-12 text-center group border border-neutral-200 hover:border-black transition-all flex flex-col justify-between h-full">
          <div>
            <Phone className="w-7 h-7 sm:w-8 sm:h-8 mb-4 sm:mb-6 mx-auto text-black stroke-[1.5]" />
            <h5 className="font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-black mb-3">
              Phone Concierge
            </h5>
            <p className="font-sans text-sm sm:text-base font-semibold text-black mb-1">+1 (800) LUX-ORA</p>
            <p className="text-neutral-500 text-[10px] sm:text-xs">Available 24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
};
