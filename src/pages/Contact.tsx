import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/256783254350", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:mosesogwang1986@gmail.com";
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
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
                    Kichope A<br />
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
                    href="mailto:mosesogwang1986@gmail.com" 
                    className="text-primary hover:underline font-medium"
                  >
                    mosesogwang1986@gmail.com
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
              <div className="aspect-video bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="font-semibold">Google Map Coming Soon</p>
                  <p className="text-sm mt-2">Interactive map will be embedded here</p>
                  <p className="text-xs mt-4 max-w-md">
                    Location: Kichope A, Lira City West Division, Lira City, Northern Uganda
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
