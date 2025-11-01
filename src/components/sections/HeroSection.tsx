import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import QuickBookingModal from '@/components/QuickBookingModal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <Badge className="bg-gradient-to-r from-primary to-accent text-white text-base px-4 py-2 animate-pulse">🏆 85+ средний балл ЕГЭ моих учеников</Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Сдай ЕГЭ на{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient">
                85+ баллов
              </span>
            </h1>
            <p className="text-xl text-foreground font-medium">
              Готовлю к ОГЭ и ЕГЭ по авторской методике. <span className="text-primary font-bold">200+ учеников</span> уже поступили в топовые вузы Москвы.
            </p>
            <div className="flex items-start gap-3 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
              <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-green-900">Гарантия результата</p>
                <p className="text-green-700 text-sm">Если не увидите прогресс за 4 занятия — верну деньги</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all animate-bounce-subtle" onClick={handleBookingClick}>
                <Icon name="Rocket" className="mr-2" size={24} />
                Записаться на пробный урок
              </Button>
              <div className="flex items-center gap-2 bg-yellow-50 border-2 border-yellow-400 rounded-lg px-4 py-2">
                <Icon name="Gift" className="text-yellow-600" size={24} />
                <span className="font-bold text-yellow-900">Первый урок БЕСПЛАТНО</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-white rounded-xl p-4 shadow-md border-2 border-primary/20 hover:border-primary transition-all">
                <div className="text-4xl font-bold text-primary mb-1">200+</div>
                <div className="text-sm font-medium text-foreground">Учеников поступили</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border-2 border-accent/20 hover:border-accent transition-all">
                <div className="text-4xl font-bold text-accent mb-1">85+</div>
                <div className="text-sm font-medium text-foreground">Средний балл ЕГЭ</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border-2 border-secondary/20 hover:border-secondary transition-all">
                <div className="text-4xl font-bold text-secondary mb-1">10+</div>
                <div className="text-sm font-medium text-foreground">Лет опыта</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
                <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                <span className="text-sm font-semibold">МГУ, МГТУ, ВШЭ</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
                <Icon name="TrendingUp" className="text-green-600" size={20} />
                <span className="text-sm font-semibold">+30 баллов за год</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
                <Icon name="Users" className="text-blue-600" size={20} />
                <span className="text-sm font-semibold">Группы и индивидуально</span>
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