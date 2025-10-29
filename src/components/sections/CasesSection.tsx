import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import BookingModal from '@/components/ui/booking-modal';

export default function CasesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cases = [
    {
      name: 'Анна С.',
      class: '11 класс',
      before: '45 баллов',
      after: '92 балла',
      result: 'ЕГЭ',
      description: 'За 8 месяцев занятий повысила результат на 47 баллов. Поступила в МГУ на бюджет.',
      icon: 'TrendingUp',
      color: 'primary',
      image: 'https://cdn.poehali.dev/projects/a3578d7b-3633-410b-a6b7-51a7e076739f/files/406170bc-eef4-4c42-b817-5d6c3166069e.jpg'
    },
    {
      name: 'Дмитрий П.',
      class: '9 класс',
      before: 'Тройки',
      after: 'Пятерки',
      result: 'ОГЭ',
      description: 'Подтянул школьную программу, успешно сдал ОГЭ на отлично. Поступил в физмат класс.',
      icon: 'Award',
      color: 'secondary',
      image: 'https://cdn.poehali.dev/projects/a3578d7b-3633-410b-a6b7-51a7e076739f/files/385573e5-088c-422c-9771-da076a357f42.jpg'
    },
    {
      name: 'Екатерина М.',
      class: '10 класс',
      before: '60 баллов',
      after: '85 баллов',
      result: 'Профильная математика',
      description: 'За год подготовки научилась решать задачи повышенной сложности. Уверенно идет к цели в 90+ баллов.',
      icon: 'Target',
      color: 'accent',
      image: 'https://cdn.poehali.dev/projects/a3578d7b-3633-410b-a6b7-51a7e076739f/files/d2ff3d2f-aace-4e15-a180-1f1ddd0303a8.jpg'
    },
    {
      name: 'Александр К.',
      class: '8 класс',
      before: 'Непонимание геометрии',
      after: 'Победитель олимпиады',
      result: 'Школьная программа',
      description: 'Устранили пробелы в знаниях, развили пространственное мышление. Занял 1 место в городской олимпиаде.',
      icon: 'Trophy',
      color: 'primary',
      image: 'https://cdn.poehali.dev/projects/a3578d7b-3633-410b-a6b7-51a7e076739f/files/80452719-cb3b-4bee-9f85-fbda0bbd8bd3.jpg'
    }
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-accent/5 to-secondary/5 fade-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Успешные кейсы</Badge>
          <h2 className="text-4xl font-bold mb-4">Истории успеха моих учеников</h2>
          <p className="text-muted-foreground">Реальные результаты реальных людей</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((caseItem, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-1">{caseItem.name}</CardTitle>
                        <div className="text-sm text-muted-foreground">{caseItem.class}</div>
                      </div>
                      <div className={
                        caseItem.color === 'primary' ? 'w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center' :
                        caseItem.color === 'secondary' ? 'w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center' :
                        'w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center'
                      }>
                        <Icon 
                          name={caseItem.icon as any} 
                          className={
                            caseItem.color === 'primary' ? 'text-primary' :
                            caseItem.color === 'secondary' ? 'text-secondary' :
                            'text-accent'
                          }
                          size={24} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">До занятий</div>
                    <div className="text-lg font-semibold text-red-600">{caseItem.before}</div>
                  </div>
                  <Icon name="ArrowRight" className="text-muted-foreground" size={24} />
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">После занятий</div>
                    <div className="text-lg font-semibold text-green-600">{caseItem.after}</div>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <Badge variant="outline" className="mb-2">{caseItem.result}</Badge>
                  <p className="text-muted-foreground">{caseItem.description}</p>
                </div>
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
    </>
  );
}