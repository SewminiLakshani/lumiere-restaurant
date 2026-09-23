import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[560px] flex items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600"
        alt="Dining room at Lumiere"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* darken the photo so the text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />

      <div className="relative max-w-7xl mx-auto px-6 pb-20 w-full">
        <p className="text-gold font-body tracking-wide mb-4">Colombo's newest table</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-cream max-w-2xl">
          A taste worth remembering
        </h1>
        <p className="mt-6 max-w-md text-cream/80">
          Seasonal plates, a candlelit room, and a wine list built to match.
          Book a table or bring the kitchen home with online ordering.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/menu"
            className="px-7 py-3 bg-gold text-charcoal font-body font-medium hover:bg-goldSoft transition-colors"
          >
            View Menu
          </Link>
          <Link
            to="/reservation"
            className="px-7 py-3 border border-cream/40 text-cream font-body hover:border-gold hover:text-gold transition-colors"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
