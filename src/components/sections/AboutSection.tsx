import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import BookingModal from '@/components/ui/booking-modal';

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookingClick = () => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(105006130, 'reachGoal', 'booking_clicked');
    }
    setIsModalOpen(true);
  };

  return (
    <>
    <section id="about" className="py-12 md:py-20 fade-on-scroll bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-center mb-8">
          <img 
            src="https://cdn.poehali.dev/files/50b8f66e-09a3-4b07-8750-b8204f1ef319.jpg" 
            alt="Репетитор Михаил" 
            className="rounded-3xl shadow-2xl w-full max-w-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="bg-gradient-to-br from-white/90 via-blue-50/50 to-purple-50/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Уберем все пробелы в знаниях и улучшим оценки в школе!
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Пишите/звоните, проведем бесплатное пробное занятие и отвечу на все интересующие Вас вопросы. Буду рад помочь разобраться в математике.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:opacity-90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-base md:text-lg py-6 md:py-7"
              onClick={handleBookingClick}
            >
              <Icon name="Rocket" className="mr-2" size={24} />
              Записаться на пробный урок
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-100 to-yellow-50 hover:from-yellow-200 hover:to-yellow-100 text-yellow-900 border-2 border-yellow-400 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-base md:text-lg py-6 md:py-7"
              onClick={handleBookingClick}
            >
              <Icon name="Gift" className="mr-2 text-yellow-600" size={24} />
              Первый урок БЕСПЛАТНО
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 max-w-3xl mx-auto">
            <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/50">
              <div className="text-4xl md:text-5xl font-bold text-blue-600">200+</div>
              <div className="text-sm md:text-base text-gray-700 mt-2">Учеников</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200/50">
              <div className="text-4xl md:text-5xl font-bold text-purple-600">85+</div>
              <div className="text-sm md:text-base text-gray-700 mt-2">Средний балл ЕГЭ</div>
            </div>
            <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100/50 border border-pink-200/50">
              <div className="text-4xl md:text-5xl font-bold text-pink-600">10+</div>
              <div className="text-sm md:text-base text-gray-700 mt-2">Лет опыта</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
