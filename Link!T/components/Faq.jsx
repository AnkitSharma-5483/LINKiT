"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Why do I need a link in bio tool?",
    answer: `Right now, every time you’ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It’s time-consuming and complicated — making it so much harder to keep everything up to date.

A link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you’ve got a change, you only ever have to make it once.`,
  },
  {
    question: "Is Linktree the original link in bio tool?",
    answer: `Yes! Linktree was the first link in bio tool created to help people share multiple links through a single bio link.`,
  },
  {
    question: "Can I customize my link in bio page?",
    answer: `Absolutely. You can personalize your page with colors, backgrounds, buttons, and more to match your brand or personality.`,
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="min-h-screen bg-[#77001d] text-white py-20 px-6 flex flex-col items-center">
      <h2 className="text-4xl sm:text-4xl lg:text-6xl font-extrabold mb-12 text-center">Questions? Answered</h2>

      <div className="max-w-3xl w-full space-y-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-[#66001a] rounded-2xl p-6 transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold">{faq.question}</h3>
              {openIndex === i ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === i ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-xs sm:text-xs lg:text-md 2xl:text-xl leading-relaxed whitespace-pre-line text-gray-200">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
