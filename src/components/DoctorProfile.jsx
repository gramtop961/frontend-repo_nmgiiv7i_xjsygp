import React from 'react';
import { Heart, Shield } from 'lucide-react';

const DoctorProfile = () => {
  return (
    <section className="relative w-full bg-white py-16 text-slate-800">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">About the Doctor</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Dr. Aria Bhattacharya is a board-certified surgical oncologist with over fifteen years of
              experience treating complex cancers. Her practice emphasizes early detection, minimally
              invasive procedures, and comprehensive survivorship programs tailored to each patient.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <Heart className="mt-0.5 h-5 w-5 text-rose-500" />
                <div>
                  <p className="font-medium">Patient-first approach</p>
                  <p className="text-sm text-slate-600">Empathy-driven consultations and clear, honest guidance.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <Shield className="mt-0.5 h-5 w-5 text-sky-600" />
                <div>
                  <p className="font-medium">Evidence-based care</p>
                  <p className="text-sm text-slate-600">Treatment plans aligned with the latest oncology research.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1600&auto=format&fit=crop"
              alt="Doctor portrait"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/70 to-transparent p-6">
              <p className="text-sm font-medium text-slate-700">Affiliations</p>
              <ul className="mt-1 flex flex-wrap gap-3 text-xs text-slate-600">
                <li>American Society of Clinical Oncology</li>
                <li>Society of Surgical Oncology</li>
                <li>Royal College of Surgeons (Fellow)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
