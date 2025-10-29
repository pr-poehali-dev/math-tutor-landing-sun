import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import QuickBookingModal from '@/components/QuickBookingModal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <p className="text-lg text-muted-foreground">
              Репетитор по математике в Солнцево. Офлайн и онлайн занятия с опытным преподавателем. Подготовка к ОГЭ и ЕГЭ. Повышение успеваемости. Устранение пробелов в знаниях. Индивидуальный подход к каждому ученику.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setIsModalOpen(true)}>
                <Icon name="Phone" className="mr-2" size={20} />
                Записаться на занятие
              </Button>
              <Button size="lg" variant="outline">Первое пробное занятие — бесплатно!</Button>
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