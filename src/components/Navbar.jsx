import { Rocket, LineChart, NotebookPen, Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <Rocket size={18} className="text-black" />
          </div>
          <span className="text-white font-semibold tracking-tight">AlphaJournal</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-white/80 hover:text-white transition">Fitur</a>
          <a href="#how" className="text-white/80 hover:text-white transition">Cara Kerja</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition">Harga</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm rounded-md text-white/90 hover:text-white">Masuk</button>
          <button className="px-4 py-2 text-sm rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium shadow-lg shadow-emerald-500/20">Daftar</button>
        </div>
      </div>
    </header>
  );
}
