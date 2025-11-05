import { useState, useRef, useEffect } from 'react';
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleBookingClick = () => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(105006130, 'reachGoal', 'booking_clicked');
    }
    setIsModalOpen(true);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 400;
      
      if (container.scrollLeft === 0) {
        container.scrollTo({
          left: container.scrollWidth,
          behavior: 'smooth'
        });
      } else {
        container.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 400;
      
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollLeft();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollRight();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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



  return (
    <>
      <section id="reviews" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5 fade-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Что говорят ученики и родители</h2>
          </div>
          
          <div className="relative max-w-7xl mx-auto group">
            <Button
              variant="outline"
              size="icon"
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/95 hover:bg-white shadow-xl h-12 w-12 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={scrollLeft}
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>

            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide scroll-smooth"
            >
              <div className="flex gap-4 md:gap-6 pb-4 snap-x snap-mandatory">
                {reviews.concat(reviews).map((review, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] snap-center"
                  >
                    <div 
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden h-full border border-gray-100"
                      onClick={() => setSelectedReview(review.imageUrl)}
                    >
                      <img 
                        src={review.imageUrl} 
                        alt={review.alt}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/95 hover:bg-white shadow-xl h-12 w-12 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={scrollRight}
            >
              <Icon name="ChevronRight" size={24} />
            </Button>
            
            <div className="text-center text-sm text-muted-foreground mt-4 md:hidden">
              ← Пролистайте для просмотра →
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
        <DialogContent className="max-w-[95vw] md:max-w-3xl max-h-[90vh] overflow-auto p-4 md:p-6">
          <DialogHeader>
            <DialogTitle className="text-lg md:text-xl">Отзыв</DialogTitle>
          </DialogHeader>
          {selectedReview && (
            <img 
              src={selectedReview} 
              alt="Отзыв"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}