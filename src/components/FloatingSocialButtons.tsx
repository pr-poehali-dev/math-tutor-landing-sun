import Icon from '@/components/ui/icon';

export default function FloatingSocialButtons() {
  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
      <a
        href="https://wa.me/79671394018"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="WhatsApp"
      >
        <Icon name="MessageCircle" className="text-white" size={24} />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          WhatsApp
        </span>
      </a>
      
      <a
        href="https://t.me/MathMaster2015"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Telegram"
      >
        <Icon name="Send" className="text-white" size={24} />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Telegram
        </span>
      </a>
      
      <a
        href="https://vk.com/mikhailmath"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="ВКонтакте"
      >
        <Icon name="Users" className="text-white" size={24} />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          ВКонтакте
        </span>
      </a>
    </div>
  );
}
