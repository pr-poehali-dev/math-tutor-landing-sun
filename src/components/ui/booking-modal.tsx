import { useState } from 'react';
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
  const [formData, setFormData] = useState({ name: '', phone: '', subject: 'Занятие' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const isNameValid = /^[А-Яа-яЁё\s-]+$/.test(formData.name) && formData.name.trim().length > 0;
  const phoneDigits = formData.phone.replace(/\D/g, '');
  const isPhoneValid = phoneDigits.length >= 10;
  const isFormValid = isNameValid && isPhoneValid;

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length === 0) return '';
    if (digits.length <= 1) return `+${digits}`;
    if (digits.length <= 4) return `+${digits[0]} (${digits.slice(1)}`;
    if (digits.length <= 7) return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4)}`;
    if (digits.length <= 9) return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
    return `+${digits[0]} (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
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
        setFormData({ name: '', phone: '', subject: 'Занятие' });
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
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Запись на занятие</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">Оставьте заявку, и я свяжусь с вами в ближайшее время</p>
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
              {formData.phone && !isPhoneValid && (
                <p className="text-red-500 text-sm mt-1">Введите минимум 10 цифр</p>
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