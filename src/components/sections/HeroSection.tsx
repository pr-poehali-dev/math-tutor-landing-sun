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
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-accent text-white">ЕГЭ · ОГЭ · Школьная программа</Badge>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="inline-block animate-slide-in-left">Математика с</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-slide-in-bottom animate-gradient-shift">
                результатом
              </span>
            </h1>
            <div className="space-y-4">
              <p className="text-xl font-semibold text-foreground">
                Ваш ребенок боится уроков математики? Появились плохие оценки?
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-5 rounded-xl border-l-4 border-primary space-y-3">
                <p className="text-lg font-medium text-foreground">
                  Моя «фишка» — делать своим ученикам <span className="text-primary font-bold">ВАУ-результаты</span> за несколько месяцев, потому что:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>У меня четкое понимание специфики и структуры ОГЭ/ЕГЭ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>Я не даю ничего лишнего при подготовке и понимаю, какие темы важны, а какие нет</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
      </section>
    </>
  );
}