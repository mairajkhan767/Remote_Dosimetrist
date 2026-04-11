"use client";

import { useState, useRef } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
//   const recaptchaRef = useRef();

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const token = recaptchaRef.current.getValue();

    // if (!token) {
    //   showToast("Please verify captcha");
    //   return;
    // }

    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      contact_method: e.target["contact-method"]?.value || "",
    //   recaptcha: token,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        showToast("Message sent successfully!");
        e.target.reset();
        // recaptchaRef.current.reset();
      } else {
        showToast("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      showToast("Error submitting form");
    }

    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Full Name" className="ip-form-input" required />
        <input name="email" type="email" placeholder="Email Address" className="ip-form-input" required />
        <input name="phone" placeholder="Phone Number" className="ip-form-input" />
        <textarea name="message" placeholder="Your Message" rows="5" className="ip-form-textarea" required />
        <div className="flex gap-6">
          <label className="flex gap-2">
            <input type="radio" name="contact-method" value="email" />
            Email
          </label>
          <label className="flex gap-2">
            <input type="radio" name="contact-method" value="phone" />
            Phone
          </label>
        </div>

        {/*
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          ref={recaptchaRef}
        /> */}

        <button
          type="submit"
          disabled={loading}
          className="ip-btn ip-btn-primary flex items-center gap-2"
        >
          {loading ? (
            <>
              <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
              Sending...
            </>
          ) : (
            <>Send Message →</>
          )}
        </button>
      </form>

      {/* ✅ Toast */}
      {toast && (
        <div className="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
          {toast}
        </div>
      )}
    </>
  );
}