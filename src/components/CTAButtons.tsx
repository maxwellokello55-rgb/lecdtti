import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTAButtons = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/256783254350", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 sm:flex-row">
      <Button 
        size="lg"
        asChild
        className="shadow-lg hover:scale-105 transition-transform"
      >
        <Link to="/admissions/how-to-apply">Apply Now</Link>
      </Button>
      <Button 
        size="lg"
        variant="secondary"
        onClick={handleWhatsApp}
        className="shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Contact
      </Button>
    </div>
  );
};

export default CTAButtons;
