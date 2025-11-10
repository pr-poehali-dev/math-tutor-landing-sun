import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({ name: '', phone: '+7 ', subject: 'Занятие' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 0, num2: 0, answer: 0 });

  useEffect(() => {
    if (isOpen) {
      generateCaptcha();
    }
  }, [isOpen]);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion({ num1, num2, answer: num1 + num2 });
    setCaptchaAnswer('');
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
        if (typeof window !== 'undefined' && (window as any).ym) {
          (window as any).ym(105006130, 'reachGoal', 'Спасибо');
        }
        toast({
          title: "Заявка отправлена!",
          description: "Я перезвоню вам или напишу в ближайшее окошко.",
        });
        setFormData({ name: '', phone: '+7 ', subject: 'Занятие' });
        setCaptchaAnswer('');
        generateCaptcha();
        onClose();
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <Card className="max-w-md w-full animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <CardHeader className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg sm:text-xl">Запись на занятие</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <p className="text-muted-foreground mb-4">Просто напишите мне и я перезвоню вам или напишу в ближайшее окошко</p>
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
    </div>
  );
}