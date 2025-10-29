import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface QuickBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickBookingModal({ isOpen, onClose }: QuickBookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+7 ',
    subject: 'Занятие'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isNameValid = /^[А-Яа-яЁё\s-]+$/.test(formData.name) && formData.name.trim().length > 0;
  const phoneDigits = formData.phone.replace(/\D/g, '');
  const isPhoneValid = phoneDigits.length >= 10;
  const isFormValid = isNameValid && isPhoneValid;

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

  if (!isOpen) return null;

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
        alert('Спасибо! Заявка отправлена. Я свяжусь с вами в ближайшее время.');
        setFormData({ name: '', phone: '', subject: 'Занятие' });
        onClose();
      } else {
        alert('Ошибка при отправке заявки. Попробуйте позже.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Ошибка при отправке заявки. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <Icon name="X" size={24} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Запись на занятие</h2>
          <p className="text-gray-600">Оставьте заявку, и я свяжусь с вами в ближайшее время</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ваше имя
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                formData.name && !isNameValid ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Введите ваше имя"
            />
            {formData.name && !isNameValid && (
              <p className="text-red-500 text-sm mt-1">Используйте только русские буквы</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Телефон
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={handlePhoneChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                formData.phone && !isPhoneValid ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="+7 (999) 123-45-67"
            />
            {formData.phone && !isPhoneValid && (
              <p className="text-red-500 text-sm mt-1">Введите минимум 10 цифр</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !isFormValid}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </button>
        </form>
      </div>
    </div>
  );
}