import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative w-full h-[300px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/footer.png"
        alt="Footer Background"
        fill
        className="object-cover"
      />
      
      {/* Overlay Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8 lg:p-12">
        {/* Top Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Space is limited.
          </h2>
          
          {/* Email Form */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
            <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Enter your work email to confirm your attendance"
                className="w-full pl-12 pr-4 py-3 md:py-4 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
              />
            </div>
            <button className="bg-[#F5A623] hover:bg-[#E89613] text-white font-bold px-8 py-3 md:py-4 rounded transition-colors whitespace-nowrap">
              RSVP Now
            </button>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          {/* Logo */}
          <div className="relative w-40 md:w-48 h-12">
            <Image
              src="/images/simplilearn-logo.png"
              alt="Simplilearn"
              fill
              className="object-contain object-left"
            />
          </div>

          {/* Copyright */}
          <div className="text-xs md:text-sm text-white">
            © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
