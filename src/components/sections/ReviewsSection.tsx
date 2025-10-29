import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import BookingModal from '@/components/ui/booking-modal';

export default function ReviewsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reviews = [
    {
      name: 'Кристина Руденко',
      role: 'Ученица 11 класса',
      initials: 'КР',
      text: 'Михаил — лучший репетитор! Благодаря ему я сдала ЕГЭ на 92 балла, хотя начинала с 45. Объясняет так, что все становится понятно.'
    },
    {
      name: 'Алишер Джураев',
      role: 'Ученик 9 класса',
      initials: 'АД',
      text: 'Раньше математика была моим кошмаром. Михаил помог полюбить этот предмет. Сдал ОГЭ на отлично!'
    },
    {
      name: 'Елена Тарарушкина',
      role: 'Мама ученика',
      initials: 'ЕТ',
      text: 'Очень довольны результатами! Сын стал уверенно решать задачи, улучшились оценки в школе. Спасибо за профессионализм!'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5 fade-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Отзывы</Badge>
          <h2 className="text-4xl font-bold mb-4">Что говорят ученики и родители</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{review.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{review.name}</CardTitle>
                    <CardDescription>{review.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" onClick={() => setIsModalOpen(true)}>
            <Icon name="Phone" className="mr-2" size={20} />
            Записаться на занятие
          </Button>
        </div>
      </div>
    </section>
    <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  );
}