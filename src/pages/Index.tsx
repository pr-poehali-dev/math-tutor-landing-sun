import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

export default function Index() {
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={24} />
            </div>
            <span className="font-bold text-xl">Михаил</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">О преподавателе</a>
            <a href="#program" className="hover:text-primary transition-colors">Программа</a>
            <a href="#results" className="hover:text-primary transition-colors">Результаты</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Стоимость</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>Записаться</Button>
        </div>
      </header>

      <main className="pt-20">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <Badge className="bg-accent text-white">ЕГЭ · ОГЭ · Школьная программа</Badge>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Математика с{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                    результатом
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Репетитор по математике в Солнцево. 8+ лет опыта. Подготовка к ЕГЭ и ОГЭ, помощь со школьной программой. 
                  Индивидуальный подход к каждому ученику.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Записаться на занятие
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="PlayCircle" className="mr-2" size={20} />
                    Пробный урок
                  </Button>
                </div>
                <div className="flex items-center gap-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">200+</div>
                    <div className="text-sm text-muted-foreground">Учеников</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">85+</div>
                    <div className="text-sm text-muted-foreground">Средний балл ЕГЭ</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">8+</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl animate-float"></div>
                <img 
                  src="https://cdn.poehali.dev/projects/a3578d7b-3633-410b-a6b7-51a7e076739f/files/1a921a25-e987-483c-a795-c05f67868f92.jpg" 
                  alt="Математика" 
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 fade-on-scroll">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">О преподавателе</Badge>
              <h2 className="text-4xl font-bold mb-4">Михаил — ваш проводник в мир математики</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Профессиональный репетитор с высшим математическим образованием
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="GraduationCap" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Образование</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    МГУ им. Ломоносова, факультет математики. Кандидат физико-математических наук.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Target" className="text-secondary" size={24} />
                  </div>
                  <CardTitle>Методика</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Индивидуальный подход. Объясняю сложное простым языком. Развиваю логическое мышление.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Award" className="text-accent" size={24} />
                  </div>
                  <CardTitle>Достижения</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    15 учеников набрали 100 баллов на ЕГЭ. Победители олимпиад регионального уровня.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="program" className="py-20 bg-gradient-to-r from-primary/5 to-accent/5 fade-on-scroll">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Программа обучения</Badge>
              <h2 className="text-4xl font-bold mb-4">Что изучаем на занятиях</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BookOpen" className="text-primary" />
                    Школьная программа 5-11 класс
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1" size={18} />
                    <span>Алгебра: уравнения, неравенства, функции</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1" size={18} />
                    <span>Геометрия: планиметрия и стереометрия</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1" size={18} />
                    <span>Тригонометрия и начала анализа</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1" size={18} />
                    <span>Помощь с домашними заданиями</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" className="text-secondary" />
                    Подготовка к ЕГЭ и ОГЭ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1" size={18} />
                    <span>Разбор всех типов заданий 1-19 части</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1" size={18} />
                    <span>Решение сложных задач части 2</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1" size={18} />
                    <span>Пробные экзамены и разбор ошибок</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" className="text-green-500 mt-1" size={18} />
                    <span>Психологическая подготовка к экзамену</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="results" className="py-20 fade-on-scroll">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Результаты учеников</Badge>
              <h2 className="text-4xl font-bold mb-4">Цифры говорят сами за себя</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold text-primary mb-2">95%</div>
                  <p className="text-muted-foreground">Учеников сдали ЕГЭ на 85+ баллов</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold text-secondary mb-2">15</div>
                  <p className="text-muted-foreground">Учеников получили 100 баллов</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold text-accent mb-2">+40</div>
                  <p className="text-muted-foreground">Баллов в среднем рост за год</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-5xl font-bold text-primary mb-2">200+</div>
                  <p className="text-muted-foreground">Довольных учеников</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5 fade-on-scroll">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Отзывы</Badge>
              <h2 className="text-4xl font-bold mb-4">Что говорят ученики и родители</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>АС</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">Анна Смирнова</CardTitle>
                      <CardDescription>Ученица 11 класса</CardDescription>
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
                    "Михаил — лучший репетитор! Благодаря ему я сдала ЕГЭ на 92 балла, хотя начинала с 45. 
                    Объясняет так, что все становится понятно."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>ДП</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">Дмитрий Петров</CardTitle>
                      <CardDescription>Ученик 9 класса</CardDescription>
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
                    "Раньше математика была моим кошмаром. Михаил помог полюбить этот предмет. Сдал ОГЭ на отлично!"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>ЕИ</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">Елена Иванова</CardTitle>
                      <CardDescription>Мама ученицы</CardDescription>
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
                    "Профессионал своего дела! Дочь с тройки подтянулась до пятерки за полгода. Рекомендую всем!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 fade-on-scroll">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Стоимость</Badge>
              <h2 className="text-4xl font-bold mb-4">Прозрачные цены</h2>
              <p className="text-muted-foreground">Выберите удобный формат обучения</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle>Индивидуально</CardTitle>
                  <CardDescription>Один на один с преподавателем</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">2000₽ <span className="text-lg font-normal text-muted-foreground">/час</span></div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-500 mt-1" size={18} />
                      <span>Персональная программа</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-500 mt-1" size={18} />
                      <span>Гибкое расписание</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-500 mt-1" size={18} />
                      <span>Домашние задания</span>
                    </li>
                  </ul>
                  <Button className="w-full">Записаться</Button>
                </CardContent>
              </Card>
              <Card className="border-primary border-2 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">Популярно</Badge>
                <CardHeader>
                  <CardTitle>Пакет 8 занятий</CardTitle>
                  <CardDescription>Выгодное предложение</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">14400₽ <span className="text-lg font-normal text-muted-foreground">1800₽/час</span></div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-500 mt-1" size={18} />
                      <span>Скидка 10%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-500 mt-1" size={18} />
                      <span>Все преимущества</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-500 mt-1" size={18} />
                      <span>Отчеты родителям</span>
                    </li>
                  </ul>
                  <Button className="w-full">Записаться</Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle>Мини-группа</CardTitle>
                  <CardDescription>2-4 человека</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">1200₽ <span className="text-lg font-normal text-muted-foreground">/час</span></div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-500 mt-1" size={18} />
                      <span>Групповая динамика</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-500 mt-1" size={18} />
                      <span>Доступная цена</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-500 mt-1" size={18} />
                      <span>Фиксированное время</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline">Записаться</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 fade-on-scroll">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Контакты</Badge>
              <h2 className="text-4xl font-bold mb-4">Свяжитесь со мной</h2>
              <p className="text-muted-foreground">Готов ответить на все ваши вопросы</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={24} />
                </div>
                <span className="font-bold text-xl">Михаил</span>
              </div>
              <p className="text-slate-400">
                Репетитор по математике в Солнцево. Помогаю понять и полюбить математику.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Быстрые ссылки</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-slate-400 hover:text-white transition-colors">О преподавателе</a>
                <a href="#program" className="block text-slate-400 hover:text-white transition-colors">Программа обучения</a>
                <a href="#pricing" className="block text-slate-400 hover:text-white transition-colors">Стоимость</a>
                <a href="#contacts" className="block text-slate-400 hover:text-white transition-colors">Контакты</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-slate-400">
                <div>+7 (999) 123-45-67</div>
                <div>math@mikhail-tutor.ru</div>
                <div>Москва, Солнцево</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Репетитор по математике Михаил. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {isChatOpen && (
        <Card className="fixed bottom-24 right-6 w-96 shadow-2xl animate-slide-in-right z-50">
          <CardHeader className="bg-primary text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={20} />
                </div>
                <div>
                  <CardTitle className="text-white">Онлайн-консультант</CardTitle>
                  <CardDescription className="text-white/80">Михаил отвечает обычно за 5 минут</CardDescription>
                </div>
              </div>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-white hover:bg-white/20"
                onClick={() => setIsChatOpen(false)}
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="h-80 overflow-y-auto mb-4 space-y-3">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    msg.type === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-slate-100 text-slate-900'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2 mb-3">
              <div className="text-sm text-muted-foreground">Быстрые вопросы:</div>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, idx) => (
                  <Button 
                    key={idx} 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleQuickQuestion(q)}
                  >
                    {q}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Напишите ваш вопрос..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button onClick={handleSendMessage}>
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Button
        size="icon"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl z-40"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        {isChatOpen ? (
          <Icon name="X" size={24} />
        ) : (
          <Icon name="MessageCircle" size={24} />
        )}
      </Button>
    </div>
  );
}