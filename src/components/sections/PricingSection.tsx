import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import BookingModal from '@/components/ui/booking-modal';

export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="pricing" className="py-20 fade-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Стоимость</Badge>
          <h2 className="text-4xl font-bold mb-4">Цены на занятия</h2>
          <p className="text-muted-foreground">Прозрачные и честные цены</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          <Card className="border-primary border-2 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">Популярно</Badge>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <CardTitle className="text-2xl">Офлайн</CardTitle>
              </div>
              <div className="text-4xl font-bold text-primary">2500 ₽</div>
              <div className="text-sm text-muted-foreground">за 60 минут</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-500 mt-1" size={18} />
                  <span>Занятия в районе Солнцево</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-500 mt-1" size={18} />
                  <span>Личное общение с преподавателем</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-500 mt-1" size={18} />
                  <span>Все учебные материалы включены</span>
                </li>
              </ul>
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => setIsModalOpen(true)}
              >
                Записаться
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Monitor" className="text-secondary" size={24} />
                </div>
                <CardTitle className="text-2xl">Онлайн</CardTitle>
              </div>
              <div className="text-4xl font-bold text-secondary">2500 ₽</div>
              <div className="text-sm text-muted-foreground">за 60 минут</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-500 mt-1" size={18} />
                  <span>Занятия из любой точки мира</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-500 mt-1" size={18} />
                  <span>Интерактивная доска</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-500 mt-1" size={18} />
                  <span>Запись урока для повторения</span>
                </li>
              </ul>
              <Button 
                className="w-full" 
                size="lg" 
                variant="outline"
                onClick={() => setIsModalOpen(true)}
              >
                Записаться
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mb-8">
          <Card className="inline-block bg-gradient-to-r from-accent/10 to-primary/10 border-accent">
            <CardContent className="py-4 px-8">
              <div className="flex items-center gap-3">
                <Icon name="Lightbulb" className="text-accent" size={24} />
                <span className="text-lg font-semibold">Первое пробное занятие — бесплатно!</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
}