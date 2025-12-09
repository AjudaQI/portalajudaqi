import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ToolsSection from '@/components/ToolsSection';
import Benefits from '@/components/Benefits';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';
import TeamSection from '@/components/TeamSection';
import MobilePrototype from '@/components/MobilePrototype';
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isFixed={true} />
      <Hero />
      <TeamSection />
      <AboutSection />
      <Benefits />
      <ToolsSection />
      <MobilePrototype />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
