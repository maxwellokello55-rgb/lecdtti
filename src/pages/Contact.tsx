import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import administrationBlockFront from "@/assets/administration-block-front.jpg";
import administrationBlockGarden from "@/assets/administration-block-garden.jpg";
import studentsAssembly3 from "@/assets/students-assembly-3.jpg";
import studentsExamHall from "@/assets/students-exam-hall.jpg";
import staffTeamPhoto from "@/assets/staff-team-photo.jpg";
import studentsReady from "@/assets/students-ready.jpg";

const Contact = () => {
  const [currentBg, setCurrentBg] = useState(0);
  
  const backgrounds = [
    administrationBlockFront,
    administrationBlockGarden,
    studentsAssembly3,
    studentsExamHall,
    staffTeamPhoto,
    studentsReady
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);
  const handleWhatsApp = () => {
    window.open("https://wa.me/256783254350", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:info@lecdtti.org";
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-16 px-6 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {backgrounds.map((bg, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                currentBg === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/30 to-primary/20"></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-xl text-white/90">
            Get in touch with LECDTTI - we're here to help
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Details */}
            <div className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <MapPin className="mr-2 h-6 w-6 text-primary" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Kichope Cell<br />
                    Lira City West Division<br />
                    Lira City<br />
                    Northern Uganda
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Phone className="mr-2 h-6 w-6 text-primary" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    +256 783 254 350
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Call us during office hours
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Mail className="mr-2 h-6 w-6 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:info@lecdtti.org" 
                    className="text-primary hover:underline font-medium"
                  >
                    info@lecdtti.org
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    We typically respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Clock className="mr-2 h-6 w-6 text-primary" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-muted-foreground">
                    <p><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</p>
                    <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Contact */}
            <div className="space-y-6">
              <Card className="shadow-soft bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="text-2xl">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">WhatsApp</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Chat with us instantly for quick responses to your inquiries about admissions, 
                      programs, or general information.
                    </p>
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Contact on WhatsApp
                    </Button>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-3">Email Us</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Send us a detailed message and we'll get back to you within 24 hours.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      size="lg"
                      onClick={handleEmail}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Email
                    </Button>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-3">Visit Our Campus</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Schedule a campus visit to see our facilities and meet our team. 
                      Contact us in advance to arrange your visit.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Have Questions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    We're here to help with any questions about:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">Admissions and application process</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">Program details and curriculum</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">Tuition fees and payment plans</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">Accommodation and student life</span>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">Career opportunities after graduation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">Find Us on the Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted/30 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.3!2d32.9!3d2.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLira%20City!5e0!3m2!1sen!2sug!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LECDTTI Location - Kichope Cell, Lira City West Division, Lira City, Northern Uganda"
                ></iframe>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                📍 Kichope Cell, Lira City West Division, Lira City, Northern Uganda
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
