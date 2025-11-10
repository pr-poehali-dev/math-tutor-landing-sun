import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import BookingModal from '@/components/ui/booking-modal';

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookingClick = () => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(105006130, 'reachGoal', 'booking_clicked');
    }
    setIsModalOpen(true);
  };

  return (
    <>
    <section id="about" className="py-20 fade-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">О преподавателе</Badge>
          <h2 className="text-4xl font-bold mb-4">Михаил — репетитор по математике</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            С 2015 года помогаю ученикам успешно убрать пробелы в знаниях и подготавливаю к сдаче ОГЭ и ЕГЭ
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <img 
              src="https://cdn.poehali.dev/files/50b8f66e-09a3-4b07-8750-b8204f1ef319.jpg" 
              alt="Репетитор Михаил" 
              className="rounded-2xl shadow-2xl w-full max-w-md hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-6">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="GraduationCap" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Образование</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Выпускник физико-математического класса технического лицея. Два высших образования и опыт работы в системе образования 11 лет.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Target" className="text-secondary" size={24} />
                  </div>
                  <CardTitle>Индивидуальный подход</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Программу обучения адаптирую под уровень и цели каждого ученика.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Award" className="text-accent" size={24} />
                  </div>
                  <CardTitle>10 лет опыта</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Более 200 учеников успешно сдали ОГЭ и ЕГЭ на высокие баллы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button size="lg" onClick={handleBookingClick}>
            <Icon name="Phone" className="mr-2" size={20} />
            Записаться на занятие
          </Button>
        </div>
      </div>
    </section>
    <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}