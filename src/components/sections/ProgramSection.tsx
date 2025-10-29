import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function ProgramSection() {
  return (
    <section id="program" className="py-20 bg-gradient-to-r from-primary/5 to-accent/5 fade-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Услуги</Badge>
          <h2 className="text-4xl font-bold mb-4">Услуги</h2>
          <p className="text-muted-foreground">Офлайн в Солнцево и онлайн по всей России</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BookOpen" className="text-primary" />
                Подготовка к ОГЭ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-start gap-2">
                <Icon name="Check" className="text-green-500 mt-1" size={18} />
                <span>Разбор всех типов заданий</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" className="text-green-500 mt-1" size={18} />
                <span>Решение пробных вариантов</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" className="text-green-500 mt-1" size={18} />
                <span>Работа над типичными ошибками</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Trophy" className="text-secondary" />
                Подготовка к ЕГЭ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-start gap-2">
                <Icon name="Check" className="text-green-500 mt-1" size={18} />
                <span>Углубленное изучение материала</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" className="text-green-500 mt-1" size={18} />
                <span>Решение задач повышенной сложности</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" className="text-green-500 mt-1" size={18} />
                <span>Стратегии успешной сдачи экзамена</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" className="text-accent" />
                Повышение успеваемости
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-start gap-2">
                <Icon name="Check" className="text-green-500 mt-1" size={18} />
                <span>Помощь с домашними заданиями</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" className="text-green-500 mt-1" size={18} />
                <span>Объяснение сложных тем</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" className="text-green-500 mt-1" size={18} />
                <span>Регулярный контроль знаний</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Monitor" className="text-primary" />
                Онлайн занятия
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-start gap-2">
                <Icon name="Check" className="text-green-500 mt-1" size={18} />
                <span>Удобный формат обучения из дома</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" className="text-green-500 mt-1" size={18} />
                <span>Интерактивная доска и материалы</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" className="text-green-500 mt-1" size={18} />
                <span>Запись уроков для повторения</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
