import React from 'react';
import { Star } from 'lucide-react';

const stories = [
  {
    name: 'Meera S.',
    quote:
      'Dr. Aria explained every step and made me feel in control. My recovery was smooth and the care was exceptional.'
  },
  {
    name: 'Anita K.',
    quote:
      'From diagnosis to follow-up, the entire journey felt supported. The minimally invasive approach helped me bounce back quickly.'
  },
  {
    name: 'Rupa T.',
    quote: 'Compassionate, clear, and incredibly skilled. I’m deeply grateful for the excellent outcomes.'
  }
];

const PatientStories = () => {
  return (
    <section className="relative w-full bg-white py-16 text-slate-800">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold sm:text-4xl">Patient Stories</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Real experiences from patients who placed their trust in our care.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <div key={s.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700">“{s.quote}”</p>
              <p className="mt-4 text-sm font-medium text-slate-500">{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientStories;
