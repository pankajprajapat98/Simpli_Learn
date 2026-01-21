import Hero from './components/Hero';
import RSVPSection from './components/RSVPSection';
import WhatWeExplore from './components/WhatWeExplore';
import Speakers from './components/Speakers';
import BehindCurtain from './components/BehindCurtain';
import Agenda from './components/Agenda';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <RSVPSection />
      <WhatWeExplore />
      <Speakers />
      <BehindCurtain />
      <Agenda />
      <Footer />
    </main>
  );
}
