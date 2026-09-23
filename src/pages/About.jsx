function About() {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="section-heading">Our Story</h1>
        <div className="divider-line mx-auto mt-6 mb-8" />
        <p className="text-cream/70 leading-relaxed">
          Lumière started as a single idea scribbled on a napkin — a restaurant
          that treats dinner as something worth slowing down for. We opened our
          doors in 2021 with a small team, a short menu, and a stubborn belief
          that good ingredients don't need much dressing up.
        </p>
      </section>

      <section className="bg-charcoal2 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="font-display text-2xl text-gold mb-3">Our Philosophy</h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              Cook what's in season, source it close to home, and don't hide
              behind unnecessary technique. Simplicity is harder than it looks.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl text-gold mb-3">Head Chef</h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              Kavindu Ranasinghe trained in Lyon and spent five years in
              Michelin-starred kitchens before coming home to open Lumière.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl text-gold mb-3">Our Team</h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              A small, tight kitchen and floor team who've worked together for
              years — it shows in how the evening flows.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="section-heading mb-6">What We Value</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-left mt-10">
          <div className="border border-white/10 p-6">
            <p className="text-gold font-display text-xl mb-2">Honesty on the plate</p>
            <p className="text-cream/60 text-sm">No filler, no shortcuts — if it's on the menu, it's worth eating.</p>
          </div>
          <div className="border border-white/10 p-6">
            <p className="text-gold font-display text-xl mb-2">Local first</p>
            <p className="text-cream/60 text-sm">We build the menu around what local farmers and fishers bring us.</p>
          </div>
          <div className="border border-white/10 p-6">
            <p className="text-gold font-display text-xl mb-2">Genuine hospitality</p>
            <p className="text-cream/60 text-sm">A good table service should feel like you're looked after, not managed.</p>
          </div>
          <div className="border border-white/10 p-6">
            <p className="text-gold font-display text-xl mb-2">Constant improvement</p>
            <p className="text-cream/60 text-sm">Every dish on the menu has been through a dozen versions before it's served.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
