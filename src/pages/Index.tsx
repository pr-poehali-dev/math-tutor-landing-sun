import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProgramSection from '@/components/sections/ProgramSection';

import ReviewsSection from '@/components/sections/ReviewsSection';
import PricingSection from '@/components/sections/PricingSection';
import ContactsSection from '@/components/sections/ContactsSection';
import FloatingSocialButtons from '@/components/FloatingSocialButtons';


export default function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ProgramSection />
        <ReviewsSection />

        <PricingSection />
        <ContactsSection />
      </main>

      <Footer />
      <FloatingSocialButtons />
    </div>
  );
}