import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal2 border-t border-white/10 text-cream/80">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl text-cream mb-3">
            LUMI<span className="text-gold">È</span>RE
          </h3>
          <p className="text-sm leading-relaxed">
            Modern fine dining in the heart of the city. Seasonal ingredients,
            honest technique, a room built for slow evenings.
          </p>
        </div>

        <div>
          <h4 className="text-cream mb-3 text-sm tracking-wide">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/menu" className="hover:text-gold">Menu</Link></li>
            <li><Link to="/reservation" className="hover:text-gold">Reservation</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream mb-3 text-sm tracking-wide">Visit</h4>
          <ul className="space-y-2 text-sm">
            <li>142 Marina Boulevard, Colombo 03</li>
            <li>+94 11 234 5678</li>
            <li>hello@lumiere-restaurant.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream mb-3 text-sm tracking-wide">Hours</h4>
          <ul className="space-y-2 text-sm">
            <li>Mon – Thu: 5:00 PM – 11:00 PM</li>
            <li>Fri – Sun: 12:00 PM – 12:00 AM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-cream/50">
        © {year} Lumière Restaurant. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
