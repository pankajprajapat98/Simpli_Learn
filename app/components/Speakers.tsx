import Image from 'next/image';

export default function Speakers() {
  const speakers = [
    {
      name: "Rob Lauber",
      title: "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald's, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.",
      image: "/images/Rob%20Lauber.png"
    },
    {
      name: "Krishna Kumar",
      title: "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn’t, in building workforce readiness for the AI era, offering a cross-enterprise view of the priorities shaping workforce strategy today.",
      image: "/images/Krishna%20Kumar.png"
    },
    {
      name: "Sudipto Mitra",
      title: "Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion.",
      image: "/images/Sudipto%20Mitra.png"
    }
  ];

  const additionalBg = '/images/additonal card.png';

  return (
    <section
      className="py-12 md:py-20 bg-gradient-to-b from-[#1D4DF4] to-[#112D8E]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-outfit font-black text-[#F5AB40] leading-tight">
            Featured Speakers
          </h2>
        </div>

        {/* Speakers List */}
        <div className="space-y-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start py-6 md:py-8 w-full gap-4 md:gap-8"
            >
              {/* Speaker Image */}
              <div className="flex-shrink-0 overflow-hidden w-48 h-44 md:w-[340px] md:h-[325px] rounded-lg">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={340}
                  height={325}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Speaker Info */}
              <div className="flex-1 w-full">
                <h3 className="text-lg md:text-3xl font-outfit font-black text-[#00FFFF] mb-2 text-center md:text-left">
                  {speaker.name}
                </h3>
                <p className="text-sm md:text-2xl font-outfit font-medium text-white leading-relaxed text-center md:text-left">
                  {speaker.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Expert Perspectives Section */}
        <div
          className="mt-8 md:mt-20 rounded-lg p-6 md:p-8"
          style={{
            backgroundImage: `url('${additionalBg}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <h3 className="text-xl md:text-3xl font-outfit font-black text-[#00FFFF] mb-3 md:mb-4">
            Additional Expert Perspectives
          </h3>
          <p className="text-sm md:text-2xl font-outfit font-medium text-white leading-relaxed max-w-4xl">
            Invited experts from leading consulting and enterprise learning organizations will contribute short perspectives, offering insight into how large organizations are evolving skills and leadership models in the AI era.
          </p>
        </div>
      </div>
    </section>
  );
}
