import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export default function ContactsSection() {
  const [formData, setFormData] = useState({ name: '', phone: '+7 ', subject: 'Обратная связь' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0, answer: 0 });

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion({ num1, num2, answer: num1 + num2 });
    setCaptchaAnswer('');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(105006130, 'reachGoal', 'phone_clicked');
    }
  };

  const isNameValid = /^[А-Яа-яЁё\s-]+$/.test(formData.name) && formData.name.trim().length > 0;
  const phoneDigits = formData.phone.replace(/\D/g, '');
  const isPhoneValid = phoneDigits.length === 11 && phoneDigits.startsWith('7');
  const isCaptchaValid = parseInt(captchaAnswer) === captchaQuestion.answer;
  const isFormValid = isNameValid && isPhoneValid && isCaptchaValid;

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length === 0) return '+7 ';
    if (digits.length === 1 && digits[0] === '7') return '+7 ';
    
    const relevantDigits = digits.startsWith('7') ? digits.slice(1) : digits;
    
    if (relevantDigits.length === 0) return '+7 ';
    if (relevantDigits.length <= 3) return `+7 (${relevantDigits}`;
    if (relevantDigits.length <= 6) return `+7 (${relevantDigits.slice(0, 3)}) ${relevantDigits.slice(3)}`;
    if (relevantDigits.length <= 8) return `+7 (${relevantDigits.slice(0, 3)}) ${relevantDigits.slice(3, 6)}-${relevantDigits.slice(6)}`;
    return `+7 (${relevantDigits.slice(0, 3)}) ${relevantDigits.slice(3, 6)}-${relevantDigits.slice(6, 8)}-${relevantDigits.slice(8, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!value.startsWith('+7')) {
      setFormData({ ...formData, phone: '+7 ' });
      return;
    }
    const formatted = formatPhoneNumber(value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/008c4b56-5762-46d0-8643-0efa68e4aca2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Я свяжусь с вами в ближайшее время.",
        });
        setFormData({ name: '', phone: '+7 ', subject: 'Обратная связь' });
        setCaptchaAnswer('');
        generateCaptcha();
      } else {
        toast({
          title: "Ошибка",
          description: "Не удалось отправить заявку. Попробуйте позже.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Ошибка:', error);
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    className={formData.name && !isNameValid ? 'border-red-500' : ''}
                    required
                  />
                  {formData.name && !isNameValid && (
                    <p className="text-red-500 text-sm mt-1">Используйте только русские буквы</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={formData.phone && !isPhoneValid ? 'border-red-500' : ''}
                    required
                  />
                  {formData.phone && formData.phone.length > 3 && !isPhoneValid && (
                    <p className="text-red-500 text-sm mt-1">Введите 10 цифр после +7</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Решите пример: {captchaQuestion.num1} + {captchaQuestion.num2} = ?
                  </label>
                  <Input
                    type="number"
                    placeholder="Введите ответ"
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    className={captchaAnswer && !isCaptchaValid ? 'border-red-500' : ''}
                    required
                  />
                  {captchaAnswer && !isCaptchaValid && (
                    <p className="text-red-500 text-sm mt-1">Неверный ответ</p>
                  )}
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting || !isFormValid}>
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
                    <a href="tel:+79671394018" onClick={handlePhoneClick} className="text-muted-foreground hover:text-primary transition-colors">
                      +7 (967) 139-40-18
                    </a>
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
                <a 
                  href="https://vk.com/mikhailmath" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon name="Users" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">ВКонтакте</div>
                    <div className="text-sm text-muted-foreground">vk.com/mikhailmath</div>
                  </div>
                </a>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
}