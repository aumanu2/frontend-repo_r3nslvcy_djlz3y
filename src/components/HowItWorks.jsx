import { ClipboardList, BarChart3, TrendingUp } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardList size={20} className="text-emerald-400" />, 
      title: 'Catat Trade',
      desc: 'Input entry, exit, ukuran posisi, dan konteks pasar dalam hitungan detik.',
    },
    {
      icon: <BarChart3 size={20} className="text-emerald-400" />, 
      title: 'Analisis',
      desc: 'Lihat metrik kunci, grafik ekuitas, dan performa per strategi.',
    },
    {
      icon: <TrendingUp size={20} className="text-emerald-400" />, 
      title: 'Optimalkan',
      desc: 'Temukan pola profitabel dan perbaiki keputusan untuk hasil yang konsisten.',
    },
  ];

  return (
    <section id="how" className="py-24 bg-gradient-to-b from-black to-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Cara Kerja Sederhana, Hasil Profesional</h2>
            <p className="mt-3 text-white/70">Mulai dari pencatatan hingga optimasi strategi, semuanya dirancang untuk alur kerja trader modern.</p>
            <div className="mt-8 space-y-5">
              {steps.map((s, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-md bg-emerald-500/15 flex items-center justify-center flex-none">{s.icon}</div>
                  <div>
                    <h3 className="text-white font-medium">{s.title}</h3>
                    <p className="text-white/70 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-emerald-500/20 blur-2xl" />
              <img src="https://images.unsplash.com/photo-1551281044-8d8e180a2c6b?q=80&w=1600&auto=format&fit=crop" alt="Analytics preview" className="relative rounded-xl border border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
