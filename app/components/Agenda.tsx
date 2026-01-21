export default function Agenda() {
  const agendaItems = [
    {
      title: "Welcome & Opening",
      speaker: "Sudipto Mitra, CRO Simplilearn",
      description: "Why capability-building is now a board-level issue and what's changing in the workforce landscape.",
      titleWidth: "296px"
    },
    {
      title: "Keynote:\nWhat Enterprise Leaders\nAre Seeing on the Ground",
      speaker: "Rob Lauber, Former CLO McDonald's",
      description: "A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.",
      titleWidth: "305px"
    },
    {
      title: "Lunch & Executive\nConversation",
      speaker: "Industry Experts Invited",
      description: "What large enterprise talent ecosystems are learning about capability-building at scale.",
      titleWidth: "296px"
    }
  ];

  return (
    <section className="bg-primary-cyan py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-[40px] font-outfit font-black text-[#1D4DF4] leading-tight">
              Event Agenda
            </h2>
          </div>

          {/* Agenda Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {agendaItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 md:p-8 w-full shadow-lg"
              >
                <h3 className="text-xl md:text-2xl font-outfit font-black text-[#1D4DF4] mb-6 md:mb-8 whitespace-pre-line leading-tight min-h-[80px] md:min-h-[95px]">
                  {item.title}
                </h3>
                <p className="text-base md:text-xl font-outfit font-bold text-black leading-relaxed mb-4">
                  {item.speaker}
                </p>
                <p className="text-base md:text-xl font-outfit font-medium text-black leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
