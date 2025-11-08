import { LineChart, NotebookPen, Target, ShieldCheck } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <NotebookPen className="text-emerald-400" size={22} />,
      title: 'Jurnal Cerdas',
      desc: 'Catat trade dengan detail: pair, setup, risk-reward, dan catatan emosional.',
    },
    {
      icon: <LineChart className="text-emerald-400" size={22} />,
      title: 'Analitik Mendalam',
      desc: 'Lacak win rate, expectancy, dan performa per strategi dengan grafik yang jelas.',
    },
    {
      icon: <Target className="text-emerald-400" size={22} />,
      title: 'Manajemen Risiko',
      desc: 'Hitung ukuran posisi otomatis dan kontrol drawdown secara disiplin.',
    },
    {
      icon: <ShieldCheck className="text-emerald-400" size={22} />,
      title: 'Keamanan Kelas Enterprise',
      desc: 'Enkripsi end‑to‑end dan otentikasi modern untuk data finansial Anda.',
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.25),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(16,185,129,0.15),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Fitur yang Membuat Anda Unggul</h2>
          <p className="mt-3 text-white/70">Semua alat untuk meningkatkan konsistensi dan hasil trading Anda.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="h-10 w-10 rounded-md bg-emerald-500/15 flex items-center justify-center mb-4">
                {it.icon}
              </div>
              <h3 className="text-white font-medium">{it.title}</h3>
              <p className="text-white/70 text-sm mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
