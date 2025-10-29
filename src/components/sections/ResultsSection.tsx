import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ResultsSection() {
  return (
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
              <div className="text-5xl font-bold text-secondary mb-2">90%</div>
              <p className="text-muted-foreground">Учеников поступили в вузы</p>
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
  );
}
