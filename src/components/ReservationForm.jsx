import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: 2,
  notes: '',
}

function ReservationForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function validate() {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Enter a valid email address'
    if (!/^[\d+\s-]{7,}$/.test(form.phone)) newErrors.phone = 'Enter a valid phone number'
    if (!form.date) newErrors.date = 'Pick a date'
    if (!form.time) newErrors.time = 'Pick a time'
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const foundErrors = validate()
    setErrors(foundErrors)
    if (Object.keys(foundErrors).length === 0) {
      // no backend yet - this is where the API call would go
      setSubmitted(true)
      setForm(initialForm)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16 border border-gold/30 bg-charcoal2">
        <p className="text-gold font-display text-3xl mb-3">Table reserved</p>
        <p className="text-cream/70">
          Thanks — we've noted your request and will confirm shortly by email.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-gold underline underline-offset-4"
        >
          Book another table
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
      <div>
        <label className="block text-sm text-cream/70 mb-1">Full name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full bg-charcoal2 border border-white/15 px-4 py-3 text-cream focus:border-gold outline-none"
          placeholder="Your name"
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm text-cream/70 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full bg-charcoal2 border border-white/15 px-4 py-3 text-cream focus:border-gold outline-none"
          placeholder="you@email.com"
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm text-cream/70 mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full bg-charcoal2 border border-white/15 px-4 py-3 text-cream focus:border-gold outline-none"
          placeholder="+94 77 123 4567"
        />
        {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-sm text-cream/70 mb-1">Number of guests</label>
        <input
          type="number"
          name="guests"
          min={1}
          max={20}
          value={form.guests}
          onChange={handleChange}
          className="w-full bg-charcoal2 border border-white/15 px-4 py-3 text-cream focus:border-gold outline-none"
        />
      </div>

      <div>
        <label className="block text-sm text-cream/70 mb-1">Date</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full bg-charcoal2 border border-white/15 px-4 py-3 text-cream focus:border-gold outline-none"
        />
        {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
      </div>

      <div>
        <label className="block text-sm text-cream/70 mb-1">Time</label>
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          className="w-full bg-charcoal2 border border-white/15 px-4 py-3 text-cream focus:border-gold outline-none"
        />
        {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time}</p>}
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm text-cream/70 mb-1">Special request (optional)</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          rows={4}
          className="w-full bg-charcoal2 border border-white/15 px-4 py-3 text-cream focus:border-gold outline-none"
          placeholder="Allergies, occasion, seating preference..."
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="px-8 py-3 bg-gold text-charcoal font-medium hover:bg-goldSoft transition-colors"
        >
          Reserve a Table
        </button>
      </div>
    </form>
  )
}

export default ReservationForm
