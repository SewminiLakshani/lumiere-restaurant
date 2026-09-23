import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import FoodCard from '../components/FoodCard.jsx'
import ReviewCard from '../components/ReviewCard.jsx'
import Gallery from '../components/Gallery.jsx'
import menuItems from '../data/menuData.js'
import reviewsData from '../data/reviewsData.js'
import galleryData from '../data/galleryData.js'

function Home() {
  // just pull out a handful of dishes to feature on the landing page
  const featured = menuItems.slice(0, 4)

  return (
    <div>
      <Hero />

      {/* short intro */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="section-heading">Cooking with intent</h2>
        <div className="divider-line mx-auto my-6" />
        <p className="text-cream/70 leading-relaxed">
          Lumière opened in 2021 with a simple idea: take honest, seasonal
          ingredients and let the kitchen's technique do the talking. Every
          plate that leaves the pass has been tasted, adjusted, and tasted
          again before it reaches your table.
        </p>
      </section>

      {/* featured dishes */}
      <section className="bg-charcoal2 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="section-heading">Featured Dishes</h2>
            <div className="divider-line mx-auto mt-6" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu" className="text-gold underline underline-offset-4">
              See the full menu
            </Link>
          </div>
        </div>
      </section>

      {/* why choose us */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="section-heading">Why Choose Us</h2>
          <div className="divider-line mx-auto mt-6" />
        </div>
        <div className="grid sm:grid-cols-3 gap-10 text-center">
          <div>
            <p className="font-display text-3xl text-gold mb-2">Seasonal</p>
            <p className="text-cream/60 text-sm">Menu changes with what's actually good this week, not a fixed script.</p>
          </div>
          <div>
            <p className="font-display text-3xl text-gold mb-2">Handmade</p>
            <p className="text-cream/60 text-sm">Pasta, bread and desserts made in-house, every single day.</p>
          </div>
          <div>
            <p className="font-display text-3xl text-gold mb-2">Unhurried</p>
            <p className="text-cream/60 text-sm">Tables are yours for the evening. No rushing you out the door.</p>
          </div>
        </div>
      </section>

      {/* chef section */}
      <section className="bg-charcoal2 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?q=80&w=900"
            alt="Head chef at Lumiere"
            className="w-full h-96 object-cover"
          />
          <div>
            <h2 className="section-heading">Meet the Chef</h2>
            <div className="divider-line mt-6 mb-6" />
            <p className="text-cream/70 leading-relaxed">
              Chef Kavindu Ranasinghe trained in Lyon before returning home to
              open Lumière. His food leans on classic French technique but
              never forgets it's being served in Colombo — local produce,
              island spice, careful restraint.
            </p>
          </div>
        </div>
      </section>

      {/* reviews */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="section-heading">What Guests Say</h2>
          <div className="divider-line mx-auto mt-6" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      {/* gallery teaser */}
      <section className="bg-charcoal2 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="section-heading">Around the Restaurant</h2>
            <div className="divider-line mx-auto mt-6" />
          </div>
          <Gallery images={galleryData.slice(0, 8)} showFilter={false} />
        </div>
      </section>

      {/* location / hours */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="section-heading">Find Us</h2>
          <div className="divider-line mt-6 mb-6" />
          <p className="text-cream/70 mb-2">142 Marina Boulevard, Colombo 03</p>
          <p className="text-cream/70 mb-6">+94 11 234 5678</p>
          <p className="text-cream/50 text-sm">Mon – Thu: 5:00 PM – 11:00 PM</p>
          <p className="text-cream/50 text-sm">Fri – Sun: 12:00 PM – 12:00 AM</p>
        </div>
        <div className="h-72 md:h-auto bg-charcoal2 flex items-center justify-center text-cream/30 text-sm border border-white/10">
          Map placeholder — embed goes here
        </div>
      </section>

      {/* final CTA */}
      <section className="bg-wine/40 py-20 text-center px-6">
        <h2 className="section-heading">Ready for your table?</h2>
        <div className="divider-line mx-auto my-6" />
        <Link
          to="/reservation"
          className="inline-block mt-2 px-8 py-3 bg-gold text-charcoal font-medium hover:bg-goldSoft transition-colors"
        >
          Book a Table
        </Link>
      </section>
    </div>
  )
}

export default Home
