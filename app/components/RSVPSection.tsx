import RSVPForm from './RSVPForm';

export default function RSVPSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24">
        <div className="max-w-[1240px] mx-auto">
          {/* RSVP Form */}
          <div className="mb-12">
            <RSVPForm variant="footer" />
          </div>

          {/* Introduction Text */}
          <div className="mb-8">
            <p className="text-black text-[27px] leading-[39px] font-medium mb-6" style={{ fontFamily: 'var(--font-satoshi), sans-serif' }}>
              AI is accelerating change across every operational layer. Roles are shifting. Leadership models are collapsing and reforming. Frontline and mid-level managers will soon lead teams of people and intelligent agents.
            </p>
            <p className="text-black text-[27px] leading-[39px] font-medium" style={{ fontFamily: 'var(--font-satoshi), sans-serif' }}>
              But even the most advanced enterprises are asking the same question:
            </p>
          </div>

          {/* Main Question - Centered */}
          <div className="text-center my-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Which capabilities will matter most,
              <br />
              and how do we build them at scale?
            </h2>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-black text-[27px] leading-[39px] font-medium" style={{ fontFamily: 'var(--font-satoshi), sans-serif' }}>
              This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders for a candid, senior-level discussion on what's coming next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
