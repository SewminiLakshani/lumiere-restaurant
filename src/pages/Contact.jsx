import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // no backend hooked up yet, just show a confirmation
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14">
      <div>
        <h1 className="section-heading">Get in Touch</h1>
        <div className="divider-line mt-6 mb-8" />

        <div className="space-y-5 text-cream/70">
          <p><span className="text-gold">Address:</span> 142 Marina Boulevard, Colombo 03</p>
          <p><span className="text-gold">Phone:</span> +94 11 234 5678</p>
          <p><span className="text-gold">Email:</span> hello@lumiere-restaurant.com</p>
          <p><span className="text-gold">Hours:</span> Mon–Thu 5PM–11PM, Fri–Sun 12PM–12AM</p>
        </div>

        <div className="flex gap-4 mt-8 text-cream/60">
          <a href="#" aria-label="Instagram" className="hover:text-gold">Instagram</a>
          <a href="#" aria-label="Facebook" className="hover:text-gold">Facebook</a>
          <a href="#" aria-label="TikTok" className="hover:text-gold">TikTok</a>
        </div>

        <div className="h-56 mt-10 bg-charcoal2 border border-white/10 flex items-center justify-center text-cream/30 text-sm">
          Map placeholder
        </div>
      </div>

      <div>
        {sent ? (
          <div className="border border-gold/30 bg-charcoal2 p-8 text-center">
            <p className="text-gold font-display text-2xl mb-2">Message sent</p>
            <p className="text-cream/60 text-sm">We'll get back to you within a day.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-cream/70 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-charcoal2 border border-white/15 px-4 py-3 text-cream focus:border-gold outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-cream/70 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-charcoal2 border border-white/15 px-4 py-3 text-cream focus:border-gold outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-cream/70 mb-1">Message</label>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-charcoal2 border border-white/15 px-4 py-3 text-cream focus:border-gold outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-gold text-charcoal font-medium hover:bg-goldSoft transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Contact
