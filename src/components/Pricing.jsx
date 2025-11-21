import React from 'react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    tagline: 'Get started',
    features: ['25 messages / mo', '10 images / mo', 'No history', 'No projects'],
    cta: 'Start for free',
  },
  {
    name: 'Basic',
    price: '$9',
    tagline: 'For regular use',
    features: ['Unlimited chat', '10 saved projects', 'Chat history', '10 images / mo'],
    cta: 'Upgrade to Basic',
    highlight: true,
  },
  {
    name: 'Pro',
    price: '$19',
    tagline: 'Power users',
    features: ['Unlimited chat', 'Unlimited projects', 'Unlimited history', '25 images / mo', 'Priority access'],
    cta: 'Go Pro',
  },
]

function Pricing() {
  return (
    <section className="mt-12">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-white">Simple, affordable pricing</h2>
      <p className="text-center text-blue-200/80 mt-2">Start free. Upgrade anytime.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        {plans.map((p) => (
          <div key={p.name} className={`rounded-2xl border ${p.highlight ? 'border-blue-400/40 bg-blue-400/10' : 'border-white/10 bg-white/5'} p-6`}> 
            <div className="flex items-baseline gap-2">
              <h3 className="text-xl font-bold text-white">{p.name}</h3>
              {p.highlight && <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-200">Popular</span>}
            </div>
            <div className="text-4xl font-extrabold text-white mt-2">{p.price}<span className="text-base font-medium text-blue-200">/mo</span></div>
            <p className="text-blue-200/80 mt-1">{p.tagline}</p>
            <ul className="mt-4 space-y-2 text-blue-100/90">
              {p.features.map((f) => (<li key={f} className="flex gap-2"><span>•</span><span>{f}</span></li>))}
            </ul>
            <button className={`mt-6 w-full rounded-xl px-4 py-2 font-semibold ${p.highlight ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>{p.cta}</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
