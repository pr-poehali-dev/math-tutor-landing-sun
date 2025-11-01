import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ type: 'bot' | 'user'; text: string }>>([
    { type: 'bot', text: 'Здравствуйте! Я онлайн-консультант Михаила. Чем могу помочь?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickQuestions = [
    'Стоимость занятий',
    'Формат обучения',
    'Расписание',
    'Подготовка к ЕГЭ'
  ];

  const handleQuickQuestion = (question: string) => {
    setChatMessages(prev => [...prev, { type: 'user', text: question }]);
    
    setTimeout(() => {
      let response = '';
      switch (question) {
        case 'Стоимость занятий':
          response = 'Индивидуальное занятие — 2000₽/час. Групповое (2-4 человека) — 1200₽/час. Пакет из 8 занятий — скидка 10%.';
          break;
        case 'Формат обучения':
          response = 'Провожу занятия онлайн и офлайн в районе Солнцево. Онлайн через Zoom с интерактивной доской.';
          break;
        case 'Расписание':
          response = 'Занятия в будние дни 15:00-21:00, выходные 10:00-18:00. Расписание гибкое, подстраиваюсь под ваш график.';
          break;
        case 'Подготовка к ЕГЭ':
          response = 'Специализируюсь на подготовке к ЕГЭ профильного уровня. 95% учеников сдают на 85+ баллов.';
          break;
        default:
          response = 'Спасибо за вопрос! Свяжитесь со мной для подробной консультации: +7 (999) 123-45-67';
      }
      setChatMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 500);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    setChatMessages(prev => [...prev, { type: 'user', text: inputMessage }]);
    setInputMessage('');
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'Спасибо за ваш вопрос! Для детальной консультации свяжитесь со мной: +7 (999) 123-45-67 или напишите на math@mikhail-tutor.ru' 
      }]);
    }, 500);
  };

  return (
    <>
      <Button
        onClick={() => setIsChatOpen(!isChatOpen)}
        size="lg"
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-2xl z-50 animate-float transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      >
        <Icon name={isChatOpen ? "X" : "MessageCircle"} size={24} />
      </Button>

      {isChatOpen && (
        <Card className="fixed bottom-24 right-6 w-96 shadow-2xl z-50 animate-slide-up">
          <CardHeader className="bg-primary text-white">
            <CardTitle className="flex items-center gap-2">
              <Icon name="MessageCircle" size={20} />
              Онлайн-консультант
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div className="h-80 overflow-y-auto space-y-3 mb-4">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-muted'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {quickQuestions.map((q) => (
                <Badge
                  key={q}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                  onClick={() => handleQuickQuestion(q)}
                >
                  {q}
                </Badge>
              ))}
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Напишите вопрос..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}