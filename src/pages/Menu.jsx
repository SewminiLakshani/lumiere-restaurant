import { useState, useMemo } from 'react'
import FoodCard from '../components/FoodCard.jsx'
import CategoryFilter from '../components/CategoryFilter.jsx'
import menuItems from '../data/menuData.js'

function Menu() {
  const categories = ['All', ...new Set(menuItems.map((item) => item.category))]
  const [activeCategory, setActiveCategory] = useState('All')

  // recompute the visible list only when the filter actually changes
  const visibleItems = useMemo(() => {
    if (activeCategory === 'All') return menuItems
    return menuItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-4">
        <h1 className="section-heading">Our Menu</h1>
        <div className="divider-line mx-auto mt-6 mb-10" />
      </div>

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {visibleItems.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>

      {visibleItems.length === 0 && (
        <p className="text-center text-cream/50 mt-16">Nothing in this category yet.</p>
      )}
    </div>
  )
}

export default Menu
