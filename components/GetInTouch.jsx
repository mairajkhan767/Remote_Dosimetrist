'use client'
import { useState } from 'react'

export default function GetInTouch({ data }) {
  if (!data) return null
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 3000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const dataResp = await res.json()

      if (dataResp.success) {
        showToast('Message sent successfully!')
        e.target.reset()
      } else {
        showToast('Something went wrong')
      }
    } catch (err) {
      console.error(err)
      showToast('Error submitting form')
    }

    setLoading(false)
  }

  return (
    <div className="bg-[#003777]/9 px-6 md:px-16 lg:px-28 py-12 md:py-20 w-full home-form" id="get-in-touch">
      <div className="flex flex-col lg:flex-row justify-between gap-12 md:gap-16">
        <form onSubmit={handleSubmit} className="w-full flex flex-col lg:gap-4 gap-10 items-start">
          <div className="flex flex-col lg:gap-2 gap-6">
            <p className="text-[18px] md:text-[22px] text-white px-5 py-1 bg-[#003777] w-fit">{data.sub_heading}</p>
            <div>
              <h3 className="text-[32px] md:text-[48px] text-black font-medium leading-tight tracking-0">{data.heading_1}</h3>
              <h3 className="text-[38px] md:text-[58px] text-black font-medium leading-tight tracking-0">{data.heading_2}</h3>
            </div>
          </div>
          <div className="flex flex-col w-full gap-5">
            <input type="text" name="name" placeholder="Name" autoComplete="off" className="bg-transparent border-[#8EA7C4] px-6 py-5 text-[16px] text-[#5C296C] font-semibold border border-solid" required />
            <input type="text" name="phone" placeholder="Phone" autoComplete="off" className="bg-transparent border-[#8EA7C4] px-6 py-5 text-[16px] text-[#5C296C] font-semibold border border-solid" />
            <input type="email" name="email" placeholder="Email" autoComplete="off" className="bg-transparent border-[#8EA7C4] px-6 py-5 text-[16px] text-[#5C296C] font-semibold border border-solid" required />
            <textarea name="message" rows="4" placeholder="Message" autoComplete="off" className="bg-transparent min-h-[100px] xl:min-h-[188px] border-[#8EA7C4] text-[#5C296C] px-6 py-5 text-[16px] font-semibold border border-solid" required></textarea>
          </div>
          <div>
            <button type='submit' disabled={loading} className="ip-btn ip-btn-primary w-fit mt-3">
              {loading ? (
                <>
                  <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                  Sending...
                </>
              ) : (
                <>
                  {data.form_button_text}
                  <span>→</span>
                </>
              )}
            </button>
          </div>
        </form>
        <div className="w-full flex flex-col gap-8">
          <div>
            <img loading='lazy' src={data.image?.url} alt={data.image?.alt ?? data.sub_heading} className="w-full" />
          </div>
          <div className="flex flex-col gap-4">
            {data.faqs?.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
      {toast && (
        <div className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
          {toast}
        </div>
      )}
    </div>
  )
}

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-500 px-6 md:px-14 py-2 xl:py-4 flex flex-col">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center bg-transparent! text-left"
      >
        <span className="text-[#003777]">{question}</span>
        <span className={`text-slate-800 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="text-sm text-black pt-2">{answer}</div>
      </div>
    </div>
  )
}
