import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 fade-on-scroll">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">О преподавателе</Badge>
          <h2 className="text-4xl font-bold mb-4">Михаил — ваш проводник в мир математики</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональный репетитор с успешным многолетним опытом преподавания
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <img 
              src="https://cdn.poehali.dev/files/67dd2ec4-c5d6-4976-978d-740df9e4c8af.jpg" 
              alt="Репетитор Михаил" 
              className="rounded-2xl shadow-2xl w-full max-w-md hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-6">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="GraduationCap" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Образование</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Выпускник физико-математического класса технического лицея. Окончил аспирантуру и преподавал более 5 лет в университете.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Target" className="text-secondary" size={24} />
                  </div>
                  <CardTitle>Индивидуальный подход</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Программу обучения адаптирую под уровень и цели каждого ученика.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Award" className="text-accent" size={24} />
                  </div>
                  <CardTitle>10 лет опыта</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Более 200 учеников успешно сдали ОГЭ и ЕГЭ на высокие баллы.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}