import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-6 py-32 text-center">
      <p className="font-display text-8xl text-gold mb-4">404</p>
      <h1 className="section-heading mb-4">Table not found</h1>
      <p className="text-cream/60 mb-8">
        The page you're looking for isn't on the menu.
      </p>
      <Link to="/" className="px-7 py-3 bg-gold text-charcoal font-medium hover:bg-goldSoft transition-colors">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
