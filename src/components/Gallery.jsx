import { useState } from 'react'

// reusable filterable image grid, used on the home page teaser and the full gallery page
function Gallery({ images, showFilter = true }) {
  const categories = ['All', ...new Set(images.map((img) => img.category))]
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? images : images.filter((img) => img.category === active)

  return (
    <div>
      {showFilter && (
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 text-sm border transition-colors ${
                active === cat
                  ? 'bg-gold text-charcoal border-gold'
                  : 'border-white/20 text-cream/70 hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {filtered.map((img) => (
          <div key={img.id} className="aspect-square overflow-hidden group">
            <img
              src={img.img}
              alt={img.category}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
