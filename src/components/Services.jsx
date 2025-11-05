import React from 'react';
import { Heart, Shield, Star } from 'lucide-react';

const items = [
  {
    icon: Heart,
    title: 'Breast & Gynecologic Oncology',
    desc: 'Screening, biopsies, breast-conserving surgery, oncoplastic procedures, and tailored adjuvant therapies.'
  },
  {
    icon: Shield,
    title: 'Minimally Invasive Surgery',
    desc: 'Laparoscopic and robotic-assisted approaches for faster recovery and better cosmetic outcomes.'
  },
  {
    icon: Star,
    title: 'Precision Treatment Planning',
    desc: 'Multidisciplinary tumor boards, genomic profiling, and survivorship pathways with long-term follow-up.'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Specialized Services</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Integrated cancer care from screening to survivorship, delivered with compassion and clinical excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6">
              <div className="mb-4 inline-flex rounded-lg border border-slate-700 bg-slate-900 p-3">
                <Icon className="h-5 w-5 text-sky-400" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(56,189,248,0.08), transparent 40%)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
