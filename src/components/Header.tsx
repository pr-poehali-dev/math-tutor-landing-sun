import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import QuickBookingModal from '@/components/QuickBookingModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookingClick = () => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(105006130, 'reachGoal', 'booking_clicked');
    }
    setIsModalOpen(true);
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(105006130, 'reachGoal', 'phone_clicked');
    }
  };

  return (
    <>
      <QuickBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={24} />
            </div>
            <span className="font-bold text-xl">Михаил</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">О преподавателе</a>
            <a href="#program" className="hover:text-primary transition-colors">Программа</a>
            <a href="#results" className="hover:text-primary transition-colors">Результаты</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Стоимость</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="default"
              asChild
              className="hidden sm:flex bg-[#25D366] hover:bg-[#20BA5A] text-white border-[#25D366] hover:border-[#20BA5A] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <a href="tel:+79671394018" onClick={handlePhoneClick} className="flex items-center gap-2">
                <Icon name="Phone" size={18} />
                <span>+7 (967) 139-40-18</span>
              </a>
            </Button>
            <Button onClick={handleBookingClick} className="transition-all duration-300 hover:scale-105 hover:shadow-lg">Записаться</Button>
          </div>
        </div>
      </header>
    </>
  );
}