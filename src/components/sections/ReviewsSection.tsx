import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import BookingModal from '@/components/ui/booking-modal';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function ReviewsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBookingClick = () => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(105006130, 'reachGoal', 'booking_clicked');
    }
    setIsModalOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const reviews = [
    {
      imageUrl: 'https://cdn.poehali.dev/files/97d3cf71-d5c6-4b66-9879-2069f00e3f22.png',
      alt: 'Отзыв Елены Алексеевны'
    },
    {
      imageUrl: 'https://cdn.poehali.dev/files/eb13e8ba-8391-45ca-91e4-06688d6e9d1d.png',
      alt: 'Отзыв Ольги Николаевны'
    },
    {
      imageUrl: 'https://cdn.poehali.dev/files/a93164b2-b4c8-4e49-969d-57f2d05032c1.png',
      alt: 'Отзыв Ларисы Михайловны'
    },
    {
      imageUrl: 'https://cdn.poehali.dev/files/f966a38c-1a67-4c50-a1ad-8150b70628cf.png',
      alt: 'Отзыв Натальи Викторовны'
    },
    {
      imageUrl: 'https://cdn.poehali.dev/files/527d3678-c402-427e-b888-43d185501487.png',
      alt: 'Отзыв Максима Сергеевича'
    },
    {
      imageUrl: 'https://cdn.poehali.dev/files/c43c7d8c-2418-4feb-a408-63dadab43ef0.png',
      alt: 'Отзыв Марии Васильевны'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <section id="reviews" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5 fade-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят ученики и родители</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
              onClick={handlePrev}
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>

            <div className="overflow-hidden px-12">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div 
                    key={index} 
                    className="min-w-full flex-shrink-0 px-4"
                  >
                    <div 
                      className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer max-w-md mx-auto"
                      onClick={() => setSelectedReview(review.imageUrl)}
                    >
                      <img 
                        src={review.imageUrl} 
                        alt={review.alt}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg"
              onClick={handleNext}
            >
              <Icon name="ChevronRight" size={24} />
            </Button>

            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" onClick={handleBookingClick}>
              <Icon name="Phone" className="mr-2" size={20} />
              Записаться на занятие
            </Button>
          </div>
        </div>
      </section>
      
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <Dialog open={!!selectedReview} onOpenChange={() => setSelectedReview(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>Отзыв</DialogTitle>
          </DialogHeader>
          {selectedReview && (
            <img 
              src={selectedReview} 
              alt="Отзыв"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}