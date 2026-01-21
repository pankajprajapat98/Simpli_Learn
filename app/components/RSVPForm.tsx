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

export default function RSVPForm({ variant = 'hero' }: { variant?: 'hero' | 'footer' }) {
  // @ts-ignore - useActionState typing with server actions can be tricky in some versions
  const [state, formAction, isPending] = useActionState(submitRSVP, initialState);
  const [email, setEmail] = useState('');

  // Reset email on success
  useEffect(() => {
    if (state.success) {
      setEmail('');
    }
  }, [state.success]);

  const inputStyles = variant === 'hero'
    ? 'flex-1 px-4 py-3 md:px-6 md:py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-cyan text-sm md:text-base'
    : 'flex-1 h-[81px] px-6 bg-[#E7E7E7]/20 border border-[#000000]/29 rounded-[8px] text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-cyan text-base';

  const buttonStyles = variant === 'hero'
    ? 'px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-accent-orange to-accent-yellow text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 whitespace-nowrap text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed'
    : 'h-[81px] px-8 bg-gradient-to-r from-accent-orange to-accent-yellow text-white font-semibold rounded-[8px] hover:shadow-lg transition-all duration-300 whitespace-nowrap text-base disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <form action={formAction} className="w-full max-w-[606px]">
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your work email to confirm your attendance"
          required
          disabled={isPending}
          className={inputStyles}
        />
        <button
          type="submit"
          disabled={isPending}
          className={buttonStyles}
        >
          {isPending ? 'Submitting...' : 'RSVP Now'}
        </button>
      </div>
      {(state.message || state.error) && (
        <p className={`mt-3 text-sm ${state.success ? 'text-green-400' : 'text-red-400'}`}>
          {state.message || state.error}
        </p>
      )}
    </form>
  );
}
