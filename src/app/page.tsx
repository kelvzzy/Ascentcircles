import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Story from '@/components/sections/Story';
import Pillars from '@/components/sections/Pillars';
import CircleInMotion from '@/components/sections/CircleInMotion';
import Moments from '@/components/sections/Moments';
import WhenWeGather from '@/components/sections/WhenWeGather';
import ChooseYourMoment from '@/components/sections/ChooseYourMoment';
import Experience from '@/components/sections/Experience';
import AscentSessions from '@/components/sections/AscentSessions';
import GlobalMap from '@/components/sections/GlobalMap';
import Partners from '@/components/sections/Partners';
import Volunteers from '@/components/sections/Volunteers';
import EmailCapture from '@/components/sections/EmailCapture';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <div id="story"><Story /></div>
        <Pillars />
        <CircleInMotion />
        <Moments />
        <WhenWeGather />
        <ChooseYourMoment />
        <div id="experience"><Experience /></div>
        <AscentSessions />
        <div id="global-map"><GlobalMap /></div>
        <div id="partners"><Partners /></div>
        <div id="volunteers"><Volunteers /></div>
        <EmailCapture />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
