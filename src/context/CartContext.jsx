import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext(null)

// key we use in localStorage - keeping it namespaced so it doesn't
// clash with anything else on the same origin
const STORAGE_KEY = 'lumiere_cart_v1'

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch (err) {
      // if the saved data is somehow corrupted, just start fresh
      console.warn('could not read cart from localStorage', err)
      return []
    }
  })

  // whenever the cart changes, push it back to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  function addToCart(item) {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  function changeQty(id, delta) {
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    )
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((i) => i.id !== id))
  }

  function clearCart() {
    setCartItems([])
  }

  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0)
  const deliveryFee = cartItems.length > 0 ? 3 : 0
  const total = subtotal + deliveryFee
  const itemCount = cartItems.reduce((sum, i) => sum + i.qty, 0)

  const value = {
    cartItems,
    addToCart,
    changeQty,
    removeFromCart,
    clearCart,
    subtotal,
    deliveryFee,
    total,
    itemCount,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// small helper hook so components don't need to import useContext + CartContext every time
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside a CartProvider')
  return ctx
}
