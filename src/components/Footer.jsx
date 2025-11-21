export default function Footer() {
  return (
    <footer className="bg-slate-950/95 border-t border-white/10">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-300">
        <div className="text-center md:text-left">
          <p className="font-semibold text-white">BlaqGPT</p>
          <p className="text-sm text-slate-400">Accessible AI for everyone.</p>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="/test" className="hover:text-white transition-colors">System Check</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </nav>
      </div>
    </footer>
  )
}
