import RSVPForm from './RSVPForm';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg image.png"
          alt="Background"
          fill
          className="object-cover rotate-180"
          priority
          quality={100}
        />
      </div>

      <div className="container mx-auto px-8 lg:px-16 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Logo */}
          <div className="mb-10">
            <Image
              src="/images/simplilearn-logo.png"
              alt="Simplilearn"
              width={280}
              height={86}
              className="w-[280px] h-[86px]"
              priority
            />
          </div>

          {/* Event Badge and Subtitle */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-4 py-1.5 bg-[#00CED1] text-black font-bold rounded text-sm">
              Invite-Only
            </span>
            <span className="text-white text-lg">An Executive Roundtable · Lunch</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-outfit font-bold leading-tight mb-8">
            <span className="text-[#FFA500] block">
              The Skills That Matter Next:
            </span>
            <span className="text-[#FF8C00] block">
              Preparing Your Workforce
            </span>
            <span className="text-[#FFA500] block">
              & Leaders for the AI Era
            </span>
          </h1>

          {/* Event Details */}
          <div className="flex flex-col gap-3 text-white text-xl">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">February 20, 2026</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Chamberlain's Steak & Fish House, Dallas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
