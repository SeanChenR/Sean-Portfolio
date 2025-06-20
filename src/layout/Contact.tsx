import { useRef, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"
import emailjs from "@emailjs/browser"

import TitleHeader from "../components/TitleHeader"
import ContactExperience from "../components/Models/contact/ContactExperience"

type ButtonState = 'ready' | 'loading' | 'success'

const Contact = () => {
  const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

  const formRef = useRef<HTMLFormElement>(null)
  const [buttonState, setButtonState] = useState<ButtonState>('ready')
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setButtonState('loading')

    if (!formRef.current) return

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      )

      // Show success state and keep it
      setButtonState('success')
      setForm({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setButtonState('ready') // Reset on error
    }
  }

  const renderButtonContent = () => {
    switch (buttonState) {
      case 'loading':
        return (
          <div className="flex-center w-full h-full">
            <div className="inline-flex items-center gap-2 text-white">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              <span>Sending...</span>
            </div>
          </div>
        )
      case 'success':
        return (
          <div className="flex-center w-full h-full">
            <svg 
              className="w-8 h-8 animate-bounce" 
              xmlns="http://www.w3.org/2000/svg" 
              x="0px" 
              y="0px" 
              width="100" 
              height="100" 
              viewBox="0 0 48 48"
            >
              <path fill="#4caf50" d="M44,24c0,11-9,20-20,20S4,35,4,24S13,4,24,4S44,13,44,24z"></path>
              <path fill="#ffffff" d="M34.6,14.6L21,28.2l-5.6-5.6l-2.8,2.8l8.4,8.4l16.4-16.4L34.6,14.6z"></path>
            </svg>
          </div>
        )
      default: // ready
        return (
          <>
            <div className="bg-circle" />
            <p className="text">Send Mail</p>
            <div className="arrow-wrapper">
              <img src="/images/arrow-down.svg" alt="arrow" />
            </div>
          </>
        )
    }
  }

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="💬 Have questions or ideas? Let's talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                    disabled={buttonState !== 'ready'}
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                    disabled={buttonState !== 'ready'}
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={5}
                    required
                    disabled={buttonState !== 'ready'}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={buttonState === 'loading' || buttonState === 'success'}
                  className={`transition-all duration-300 ${
                    buttonState === 'loading' || buttonState === 'success' 
                      ? 'cursor-not-allowed' 
                      : 'cursor-pointer'
                  }`}
                >
                  <div className={`cta-button ${
                    buttonState === 'ready' ? 'group' : ''
                  } ${
                    buttonState === 'success' 
                      ? 'bg-green-500/20 border-green-400' 
                      : ''
                  }`}>
                    {renderButtonContent()}
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact