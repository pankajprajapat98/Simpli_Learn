'use client';

import { useActionState } from 'react';
import { submitRSVP } from '../actions/submit-rsvp';
import { useEffect, useState } from 'react';

interface RSVPState {
  message?: string;
  error?: string;
  success?: boolean;
}

const initialState: RSVPState = {
  message: '',
  error: '',
  success: false
};

export default function BehindCurtain() {
  // @ts-ignore - useActionState typing with server actions can be tricky in some versions
  const [state, formAction, isPending] = useActionState(submitRSVP, initialState);
  const [email, setEmail] = useState('');

  // Reset email on success
  useEffect(() => {
    if (state.success) {
      setEmail('');
    }
  }, [state.success]);

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Content */}
            <div className="order-2 md:order-1">
              {/* Image - Mobile Only */}
              <div className="md:hidden mb-6">
                <img
                  src="/images/shutter.png"
                  alt="Chess pieces"
                  className="w-full max-w-[250px] mx-auto object-contain"
                />
              </div>

              <h3 className="text-2xl md:text-4xl font-outfit font-bold leading-tight mb-6 text-[#F5AB40]">
                Go behind the curtain with real examples and high-scale insights
              </h3>

              <p className="font-semibold text-black mb-6">
                A clear view of the leadership & workforce capabilities You'll walk away with:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1 bg-[#F5AB40] flex-shrink-0 self-stretch"></div>
                  <p className="text-sm md:text-base font-outfit leading-relaxed">
                    Insights from high-scale operating environments including the former CLO of McDonald's on what truly scales and what breaks under pressure.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 bg-[#F5AB40] flex-shrink-0 self-stretch"></div>
                  <p className="text-sm md:text-base font-outfit leading-relaxed">
                    Signals for where capability gaps may already be forming in your organization.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 bg-[#F5AB40] flex-shrink-0 self-stretch"></div>
                  <p className="text-sm md:text-base font-outfit leading-relaxed">
                    Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 bg-[#F5AB40] flex-shrink-0 self-stretch"></div>
                  <p className="text-sm md:text-base font-outfit leading-relaxed">
                    Actionable insights you can take straight into your next exec meeting.
                  </p>
                </div>
              </div>

              {/* RSVP Form */}
              <form action={formAction} className="flex flex-col sm:flex-row gap-2 sm:gap-0 w-full">
                <div className="relative flex-1">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your work email to confirm your attendance"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 md:py-4 rounded-lg sm:rounded-l-lg sm:rounded-r-none bg-gray-100 border border-gray-300 font-outfit text-sm md:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5AB40]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="px-6 py-3 md:py-4 bg-[#F5AB40] hover:bg-orange-600 text-white font-outfit font-semibold whitespace-nowrap rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-colors disabled:opacity-50"
                >
                  {isPending ? 'Submitting...' : 'RSVP Now'}
                </button>
              </form>
              {(state.message || state.error) && (
                <p className={`mt-2 text-sm ${state.success ? 'text-green-600' : 'text-red-600'}`}>
                  {state.message || state.error}
                </p>
              )}
            </div>

            {/* Right Column - Image (Desktop Only) */}
            <div className="hidden md:block order-1 md:order-2">
              <img
                src="/images/shutter.png"
                alt="Chess pieces"
                className="w-full max-w-[570px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
