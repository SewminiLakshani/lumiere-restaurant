import { useCart } from '../context/CartContext.jsx'
import { useState } from 'react'

function FoodCard({ item }) {
  const { addToCart } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  function handleAdd() {
    addToCart(item)
    setJustAdded(true)
    // reset the button text after a bit so it doesn't feel stuck
    setTimeout(() => setJustAdded(false), 1200)
  }

  return (
    <div className="group bg-charcoal2 border border-white/5 overflow-hidden flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl text-cream">{item.name}</h3>
          <span className="text-gold font-body whitespace-nowrap">${item.price}</span>
        </div>
        <p className="text-cream/60 text-sm mt-2 flex-1">{item.desc}</p>

        <button
          onClick={handleAdd}
          className="mt-4 w-full py-2 border border-gold/60 text-gold text-sm hover:bg-gold hover:text-charcoal transition-colors"
        >
          {justAdded ? 'Added ✓' : 'Add to Order'}
        </button>
      </div>
    </div>
  )
}

export default FoodCard
