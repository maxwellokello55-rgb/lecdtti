import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={schoolLogo} alt="LECDTTI Logo" className="w-12 h-12 object-contain" />
              <h3 className="font-bold text-xl">LECDTTI</h3>
            </div>
            <p className="text-white/80 text-sm">
              Empowering educators to nurture the next generation through professional training in Early Childhood Development.
            </p>
            <p className="text-secondary font-semibold mt-3">Ethics and Integrity</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => window.location.href = '/about/who-we-are'} className="text-white/80 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => window.location.href = '/programs/diploma'} className="text-white/80 hover:text-white transition-colors">Programs</button></li>
              <li><button onClick={() => window.location.href = '/admissions/how-to-apply'} className="text-white/80 hover:text-white transition-colors">Admissions</button></li>
              <li><button onClick={() => window.location.href = '/student-life/institution-life'} className="text-white/80 hover:text-white transition-colors">Student Life</button></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">More</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => window.location.href = '/about/leadership'} className="text-white/80 hover:text-white transition-colors">Leadership & Staff</button></li>
              <li><button onClick={() => window.location.href = '/student-life/gallery'} className="text-white/80 hover:text-white transition-colors">Gallery</button></li>
              <li><button onClick={() => window.location.href = '/news-events'} className="text-white/80 hover:text-white transition-colors">News & Events</button></li>
              <li><button onClick={() => window.location.href = '/contact'} className="text-white/80 hover:text-white transition-colors">Contact Us</button></li>
              <li>
                <a 
                  href="https://www.youtube.com/@LECDTTI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 text-secondary" />
                <span className="text-white/80">Kichope Cell, Lira City West Division, Lira City, Uganda</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-secondary" />
                <span className="text-white/80">+256 783 254 350</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-secondary" />
                <a href="mailto:info@lecdtti.org" className="text-white/80 hover:text-white transition-colors">
                  info@lecdtti.org
                </a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-secondary" />
                <a 
                  href="https://wa.me/256783254350" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Lira Early Childhood Development Teachers' Training Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
