import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export default function ContactsSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Михаил свяжется с вами в ближайшее время.",
      });
      setFormData({ name: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contacts" className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 fade-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Контакты</Badge>
          <h2 className="text-4xl font-bold mb-4">Свяжитесь со мной</h2>
          <p className="text-muted-foreground">Готов ответить на все ваши вопросы</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Форма обратной связи</CardTitle>
              <CardDescription>Оставьте заявку, и я свяжусь с вами в ближайшее время</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input 
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, что вас интересует..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="text-secondary" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">math@mikhail-tutor.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="text-accent" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Расположение</div>
                    <div className="text-muted-foreground">Москва, район Солнцево</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Время работы</div>
                    <div className="text-muted-foreground">Пн-Пт 15:00-21:00, Сб-Вс 10:00-18:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Быстрая связь</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a 
                  href="https://wa.me/79671394018" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <Icon name="MessageCircle" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm text-muted-foreground">+7 (967) 139-40-18</div>
                  </div>
                </a>
                <a 
                  href="https://t.me/MathMaster2015" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Icon name="Send" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">Telegram</div>
                    <div className="text-sm text-muted-foreground">@MathMaster2015</div>
                  </div>
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Часто задаваемые вопросы</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Есть ли бесплатный пробный урок?</AccordionTrigger>
                    <AccordionContent>
                      Да, первое занятие бесплатное (30 минут). На нем мы познакомимся, определим уровень и составим план обучения.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Какой формат занятий?</AccordionTrigger>
                    <AccordionContent>
                      Провожу занятия онлайн (Zoom с интерактивной доской) и офлайн в районе Солнцево.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Сколько длится одно занятие?</AccordionTrigger>
                    <AccordionContent>
                      Стандартная продолжительность — 60 минут. Для подготовки к ЕГЭ рекомендую 90 минут.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Как проходит оплата?</AccordionTrigger>
                    <AccordionContent>
                      Оплата наличными или переводом. Можно оплатить разово или пакетом со скидкой.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}