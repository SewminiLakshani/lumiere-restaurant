import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import CartItem from '../components/CartItem.jsx'

function Cart() {
  const { cartItems, subtotal, deliveryFee, total, clearCart } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <h1 className="section-heading mb-4">Your cart is empty</h1>
        <p className="text-cream/60 mb-8">Looks like you haven't added anything yet.</p>
        <Link to="/menu" className="px-7 py-3 bg-gold text-charcoal font-medium hover:bg-goldSoft transition-colors">
          Browse the Menu
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="section-heading mb-10">Your Order</h1>

      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-8 space-y-2 text-cream/80">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-cream text-xl font-display pt-3 border-t border-white/10 mt-3">
          <span>Total</span>
          <span className="text-gold">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <button className="px-7 py-3 bg-gold text-charcoal font-medium hover:bg-goldSoft transition-colors">
          Proceed to Checkout
        </button>
        <button
          onClick={clearCart}
          className="px-7 py-3 border border-white/20 text-cream/70 hover:border-red-400 hover:text-red-400 transition-colors"
        >
          Clear Cart
        </button>
      </div>
    </div>
  )
}

export default Cart
