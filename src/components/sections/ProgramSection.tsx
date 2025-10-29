import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function ProgramSection() {
  return (
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
  );
}
