import { useState } from 'react';
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

  const handleBookingClick = () => {
    if (typeof window !== 'undefined' && window.ym) {
      window.ym(105006130, 'reachGoal', 'booking_clicked');
    }
    setIsModalOpen(true);
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

  return (
    <>
      <section id="reviews" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5 fade-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-bold mb-4">Что говорят ученики и родители</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <div 
                key={index} 
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105"
                onClick={() => setSelectedReview(review.imageUrl)}
              >
                <img 
                  src={review.imageUrl} 
                  alt={review.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
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