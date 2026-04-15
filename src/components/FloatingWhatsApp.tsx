import { MessageCircle } from "lucide-react";
import { contactInfo } from "../data/contact";

function FloatingWhatsApp() {
  return (
    <a
      href={contactInfo.socialMedia.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14 rounded-full
        bg-green-500 text-white
        shadow-lg
        hover:bg-green-600 hover:scale-110
        transition-all duration-300
      "
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

export default FloatingWhatsApp;
