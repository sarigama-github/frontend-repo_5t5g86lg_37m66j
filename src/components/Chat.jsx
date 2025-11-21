import React, { useEffect, useRef, useState } from 'react'

function Chat() {
  const [messages, setMessages] = useState([
    { role: 'system', content: 'You are BlaqGPT, a helpful, culturally-aware AI assistant.' },
    { role: 'assistant', content: 'Welcome! How can I support you today?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [limits, setLimits] = useState(null)
  const listRef = useRef(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/api/limits`).then(r => r.json()).then(setLimits).catch(() => {})
  }, [])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = async (e) => {
    e?.preventDefault()
    const text = input.trim()
    if (!text || loading) return

    const next = [...messages, { role: 'user', content: text }]
    setMessages(next)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(`${baseUrl}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.detail || `Error ${res.status}`)
      }
      const data = await res.json()
      setMessages(m => [...m, { role: 'assistant', content: data.reply }])
      setLimits(l => l ? { ...l, chat_used: data.usage?.chat_used ?? l.chat_used } : l)
    } catch (err) {
      setMessages(m => [...m, { role: 'assistant', content: `Sorry, I couldn't complete that: ${err.message}` }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="grid grid-rows-[auto,1fr,auto] h-[70vh] md:h-[75vh] bg-slate-900/40 border border-white/10 rounded-3xl overflow-hidden">
      <div className="px-4 md:px-6 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="text-sm text-blue-100/80">Monthly usage: {limits ? `${limits.chat_used}${limits.chat_limit ? ` / ${limits.chat_limit}` : ''}` : '—'}</div>
        <a href="/test" className="text-xs text-blue-300 hover:text-white">System test</a>
      </div>

      <div ref={listRef} className="px-4 md:px-6 py-4 space-y-3 overflow-y-auto">
        {messages.filter(m => m.role !== 'system').map((m, i) => (
          <div key={i} className={`${m.role === 'user' ? 'justify-end' : 'justify-start'} flex`}>
            <div className={`${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white/5 text-blue-50'} px-4 py-2 rounded-2xl max-w-[80%] whitespace-pre-wrap leading-relaxed`}>{m.content}</div>
          </div>
        ))}
        {loading && <div className="text-blue-200 text-sm">Thinking…</div>}
      </div>

      <form onSubmit={sendMessage} className="p-3 md:p-4 bg-slate-900/60 border-t border-white/10">
        <div className="flex gap-2">
          <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask anything…" className="flex-1 bg-white/5 text-white placeholder:text-blue-200/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
          <button disabled={loading} className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-5 rounded-xl">Send</button>
        </div>
      </form>
    </section>
  )
}

export default Chat
