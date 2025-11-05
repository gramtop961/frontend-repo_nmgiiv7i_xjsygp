import React from 'react';
import Hero from './components/Hero';
import DoctorProfile from './components/DoctorProfile';
import Services from './components/Services';
import PatientStories from './components/PatientStories';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Hero />
      <DoctorProfile />
      <Services />
      <PatientStories />

      {/* Contact & Footer */}
      <footer className="w-full bg-slate-950 py-12 text-slate-300" id="contact">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">Ready to book a consultation?</h3>
              <p className="mt-1 text-sm text-slate-400">Appointments available Mon–Sat • In-person and telehealth</p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+1234567890"
                className="rounded-md bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Call Clinic
              </a>
              <a
                href="mailto:care@drariaoncology.com"
                className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Email Us
              </a>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} Dr. Aria Bhattacharya • Oncology Care. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
