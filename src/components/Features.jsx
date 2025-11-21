import { Sparkles, MessageSquare, CreditCard, Shield, Image } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: Sparkles,
      title: 'Clean Chat Experience',
      desc: 'A familiar, distraction-free interface with fast, reliable responses.'
    },
    {
      icon: MessageSquare,
      title: 'Affordable by Design',
      desc: 'Lower-cost plans that keep powerful AI within reach for everyone.'
    },
    {
      icon: Image,
      title: 'Text + Images',
      desc: 'Chat and generate images with simple, clear controls.'
    },
    {
      icon: Shield,
      title: 'Respectful & Inclusive',
      desc: 'A culturally-aware assistant aimed at serving real community needs.'
    },
    {
      icon: CreditCard,
      title: 'Simple Billing',
      desc: 'Start free, upgrade when you need more—no hidden fees.'
    },
  ]

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Made to be simple, fast, and fair</h2>
        <p className="text-slate-300/90 text-center mt-3 max-w-2xl mx-auto">Everything you need to think, write, and create—without the bloat.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
              <Icon className="w-6 h-6 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
