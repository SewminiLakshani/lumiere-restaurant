function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-5 py-2 text-sm border transition-colors ${
            activeCategory === cat
              ? 'bg-gold text-charcoal border-gold'
              : 'border-white/20 text-cream/70 hover:border-gold hover:text-gold'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
