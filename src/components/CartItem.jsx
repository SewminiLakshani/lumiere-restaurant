import { useCart } from '../context/CartContext.jsx'

function CartItem({ item }) {
  const { changeQty, removeFromCart } = useCart()

  return (
    <div className="flex items-center gap-4 py-4 border-b border-white/10">
      <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />

      <div className="flex-1">
        <h4 className="text-cream font-body">{item.name}</h4>
        <p className="text-cream/50 text-sm">${item.price} each</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => changeQty(item.id, -1)}
          className="w-8 h-8 border border-white/20 text-cream hover:border-gold hover:text-gold"
        >
          −
        </button>
        <span className="w-6 text-center">{item.qty}</span>
        <button
          onClick={() => changeQty(item.id, 1)}
          className="w-8 h-8 border border-white/20 text-cream hover:border-gold hover:text-gold"
        >
          +
        </button>
      </div>

      <p className="w-16 text-right text-gold">${(item.price * item.qty).toFixed(2)}</p>

      <button
        onClick={() => removeFromCart(item.id)}
        aria-label={`Remove ${item.name}`}
        className="text-cream/40 hover:text-red-400 ml-2"
      >
        ✕
      </button>
    </div>
  )
}

export default CartItem
