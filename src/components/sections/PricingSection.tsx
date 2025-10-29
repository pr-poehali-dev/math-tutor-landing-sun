import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function PricingSection() {
  return (
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
              <CardTitle>Подготовка к ЕГЭ</CardTitle>
              <CardDescription>Интенсивный курс</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-4">2500₽ <span className="text-lg font-normal text-muted-foreground">/90 мин</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-500 mt-1" size={18} />
                  <span>Полный разбор заданий</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-green-500 mt-1" size={18} />
                  <span>Пробные экзамены</span>
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
                  <span>Общение с единомышленниками</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Записаться</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
