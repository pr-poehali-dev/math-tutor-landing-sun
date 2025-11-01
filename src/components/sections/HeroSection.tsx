import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import QuickBookingModal from '@/components/QuickBookingModal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft(prev => {
        if (prev <= 1) return 3;
        return prev - 1;
      });
    }, 120000);
    return () => clearInterval(interval);
  }, []);

  const handleBookingClick = () => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(105006130, 'reachGoal', 'booking_clicked');
    }
    setIsModalOpen(true);
  };

  return (
    <>
      <QuickBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-accent text-white">ЕГЭ · ОГЭ · Школьная программа</Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Математика с{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                результатом
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">Опытный репетитор по математике с авторской методикой. Готовлю к ОГЭ и ЕГЭ.  Помогаю разобраться в материале и устранить пробелы в знаниях. Индивидуальный подход к каждому ученику. Офлайн и онлайн занятия. </p>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-slow"
                  onClick={handleBookingClick}
                >
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Записаться на пробный урок
                </Button>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-yellow-100 to-yellow-50 hover:from-yellow-200 hover:to-yellow-100 text-yellow-900 border-2 border-yellow-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={handleBookingClick}
                >
                  <Icon name="Gift" className="mr-2 text-yellow-600" size={20} />
                  Первый урок БЕСПЛАТНО
                </Button>
              </div>
              <div className="flex items-center gap-2 bg-red-50 border-l-4 border-red-500 px-4 py-3 rounded-lg animate-pulse-slow">
                <Icon name="AlertCircle" className="text-red-600 flex-shrink-0" size={20} />
                <p className="text-sm font-semibold text-red-900">
                  Осталось только <span className="text-xl font-bold">{spotsLeft}</span> {spotsLeft === 1 ? 'место' : 'места'} на бесплатный урок в этом месяце
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Учеников</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">85+</div>
                <div className="text-sm text-muted-foreground">Средний балл ЕГЭ</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl animate-float"></div>
            <img 
              src="https://cdn.poehali.dev/projects/a3578d7b-3633-410b-a6b7-51a7e076739f/files/1a921a25-e987-483c-a795-c05f67868f92.jpg" 
              alt="Математика" 
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
      </section>
    </>
  );
}