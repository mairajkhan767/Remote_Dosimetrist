'use client'

import Link from 'next/link'
import { useState } from 'react'

export function FaqAccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-500 px-6 md:px-14 py-2 xl:py-4 flex flex-col">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-transparent! text-left gap-4"
      >
        <span className="text-[#003777]">{question}</span>
        <span className={`text-slate-800 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[min(96rem,100vh)]' : 'max-h-0'}`}>
        <div className="text-sm text-black pt-2 pb-1">{answer}</div>
      </div>
    </div>
  )
}

export default function FaqAccordionList({ faqs, viewAllHref, viewAllLabel = 'View all FAQs' }) {
  if (!faqs?.length) return null

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, index) => (
        <FaqAccordionItem key={index} question={faq.question} answer={faq.answer} />
      ))}
      {viewAllHref ? (
        <Link
          href={viewAllHref}
          className="text-[#003777] font-semibold text-sm md:text-base hover:underline mt-2 w-fit"
        >
          {viewAllLabel} <span aria-hidden>→</span>
        </Link>
      ) : null}
    </div>
  )
}
