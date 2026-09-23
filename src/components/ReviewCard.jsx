function ReviewCard({ review }) {
  return (
    <div className="bg-charcoal2 border border-white/5 p-6">
      <div className="text-gold mb-3">
        {'★'.repeat(review.rating)}
        <span className="text-white/15">{'★'.repeat(5 - review.rating)}</span>
      </div>
      <p className="text-cream/70 text-sm leading-relaxed">"{review.text}"</p>
      <p className="mt-4 text-cream font-display text-lg">{review.name}</p>
    </div>
  )
}

export default ReviewCard
