import Image from 'next/image';

export default function WhatWeExplore() {
  const capabilities = [
    {
      iconSrc: "/images/clock.png",
      title: "Skills Decay",
      subtitle: "every 2-3 years",
      description: "faster for technical skills"
    },
    {
      iconSrc: "/images/manager.png",
      title: "Manager Role Shift",
      subtitle: "orchestrating",
      description: "people + AI agents"
    },
    {
      iconSrc: "/images/Leaders.png",
      title: "Leaders + AI Co-Pilots",
      subtitle: "requires sensemaking",
      description: "and systems thinking"
    },
    {
      iconSrc: "/images/Frontline Capability.png",
      title: "Frontline Capability",
      subtitle: "now depends",
      description: "on digital fluency"
    },
    {
      iconSrc: "/images/Core Human Capabilities.png",
      title: "Core Human Capabilities",
      subtitle: "analytical reasoning",
      description: "and scenario planning"
    },
    {
      iconSrc: "/images/Winning Organizations.png",
      title: "Winning Organizations",
      subtitle: "predict skills",
      description: "ahead of demand"
    }
  ];

  return (
    <section className="bg-[#E5E8F5] py-16 md:py-20">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24">
        <div className="max-w-[1240px] mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-[#FF8C42] text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-satoshi), sans-serif' }}>
              What We'll Explore
            </h2>
            <p className="text-black text-xl md:text-2xl font-medium" style={{ fontFamily: 'var(--font-satoshi), sans-serif' }}>
              The critical shifts every enterprise must plan for:
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <Image 
                    src={capability.iconSrc} 
                    alt={capability.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 mr-4"
                  />
                  <h3 className="text-black text-xl font-bold" style={{ fontFamily: 'var(--font-satoshi), sans-serif' }}>
                    {capability.title}
                  </h3>
                </div>
                <p className="text-black text-base leading-relaxed mb-1" style={{ fontFamily: 'var(--font-satoshi), sans-serif' }}>
                  {capability.subtitle}
                </p>
                <p className="text-black text-base leading-relaxed" style={{ fontFamily: 'var(--font-satoshi), sans-serif' }}>
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
