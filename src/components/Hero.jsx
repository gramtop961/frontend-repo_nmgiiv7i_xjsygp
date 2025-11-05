import React from 'react';
import Spline from '@splinetool/react-spline';
import { Phone, Mail, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-slate-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 py-24 sm:px-8 md:px-12 lg:px-16">
        <span className="mb-4 inline-flex items-center rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-300 backdrop-blur">
          Precision Oncology • Compassionate Care
        </span>

        <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Dr. Aria Bhattacharya
          <span className="block text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text">
            Consultant Surgical Oncologist
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-slate-300">
          Specialized in breast and gynecologic cancers with a focus on minimally invasive
          surgery, patient-centered treatment planning, and long-term survivorship.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <Calendar className="h-4 w-4" /> Book Consultation
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Learn about Treatments
          </a>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:max-w-md sm:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-2xl font-semibold text-white">15+ yrs</p>
            <p className="text-xs text-slate-300">Specialist Experience</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-2xl font-semibold text-white">2k+</p>
            <p className="text-xs text-slate-300">Successful Surgeries</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
            <p className="text-2xl font-semibold text-white">4.9/5</p>
            <p className="text-xs text-slate-300">Patient Rating</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-300" id="contact">
          <a href="tel:+1234567890" className="inline-flex items-center gap-2 hover:text-white">
            <Phone className="h-4 w-4" /> +1 (234) 567-890
          </a>
          <a href="mailto:care@drariaoncology.com" className="inline-flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4" /> care@drariaoncology.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
