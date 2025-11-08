import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="home">
      {/* Background: Dark + Emerald gradient mesh with subtle grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundImage:
              'radial-gradient(60rem 60rem at 10% 10%, rgba(16,185,129,0.18), transparent 40%), radial-gradient(50rem 40rem at 90% 20%, rgba(16,185,129,0.12), transparent 45%), radial-gradient(60rem 50rem at 50% 100%, rgba(16,185,129,0.16), transparent 45%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage:
              'radial-gradient(circle at 50% 50%, black 0%, black 40%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(circle at 50% 50%, black 0%, black 40%, transparent 80%)',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-64 pointer-events-none bg-gradient-to-b from-emerald-500/20 via-transparent to-transparent blur-2xl" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 pt-28 md:pt-36">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 mb-5">
              <CheckCircle2 className="text-emerald-400" size={14} />
              Finansial • Jurnal Trading • Analitik
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
              Kelola Jurnal Trading Anda dengan Presisi
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl">
              Dokumentasikan setiap trade, lacak performa, dan temukan pola yang menguntungkan. Dirancang dengan tema gelap profesional berpadu aksen hijau yang modern.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium shadow-lg shadow-emerald-500/20">
                Mulai Gratis
                <ArrowRight size={16} />
              </button>
              <button className="px-5 py-3 rounded-md border border-white/15 text-white/90 hover:bg-white/10">
                Lihat Demo
              </button>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-white/70">
              <div>
                <div className="text-2xl font-semibold text-white">99.9%</div>
                <div>Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">1M+</div>
                <div>Trade Tercatat</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">256-bit</div>
                <div>Keamanan</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">24/7</div>
                <div>Dukungan</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <h3 className="text-white font-medium">Sorotan</h3>
              <ul className="mt-4 space-y-3 text-white/80 text-sm">
                <li className="flex items-start gap-2"><span className="text-emerald-400">•</span> Catat entry, exit, risk, dan hasil setiap trade.</li>
                <li className="flex items-start gap-2"><span className="text-emerald-400">•</span> Visualisasi kinerja dengan grafik profesional.</li>
                <li className="flex items-start gap-2"><span className="text-emerald-400">•</span> Tag strategi untuk evaluasi yang konsisten.</li>
                <li className="flex items-start gap-2"><span className="text-emerald-400">•</span> Sinkron antar perangkat, aman dan terenkripsi.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
