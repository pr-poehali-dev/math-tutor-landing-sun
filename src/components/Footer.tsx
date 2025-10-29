import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary/10 to-secondary/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <span className="font-bold text-xl">Михаил</span>
            </div>
            <p className="text-muted-foreground">
              Репетитор по математике с 10+ летним опытом
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Телефон: +7 (967) 139-40-18</p>
              <p>Email: math@mikhail-tutor.ru</p>
              <p>Москва, район Солнцево</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Быстрые ссылки</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">О преподавателе</a>
              <a href="#program" className="block text-muted-foreground hover:text-primary transition-colors">Программа</a>
              <a href="#reviews" className="block text-muted-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#pricing" className="block text-muted-foreground hover:text-primary transition-colors">Стоимость</a>
            </div>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Михаил. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}