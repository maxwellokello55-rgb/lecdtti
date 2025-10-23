import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, DollarSign, FileText, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import administrationBlockFront from "@/assets/administration-block-front.jpg";
import administrationBlockGarden from "@/assets/administration-block-garden.jpg";
import studentsAssembly3 from "@/assets/students-assembly-3.jpg";
import studentsExamHall from "@/assets/students-exam-hall.jpg";
import staffTeamPhoto from "@/assets/staff-team-photo.jpg";
import studentsReady from "@/assets/students-ready.jpg";

const Admissions = () => {
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
    window.open("https://wa.me/256", "_blank");
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Admissions</h1>
          <p className="text-xl text-white/90">
            Begin your journey to becoming an early childhood education professional
          </p>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <Card className="shadow-soft mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">How to Apply</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold">Contact Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Reach out via WhatsApp, phone, or email to express your interest
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-secondary">2</span>
                  </div>
                  <h3 className="font-semibold">Submit Documents</h3>
                  <p className="text-sm text-muted-foreground">
                    Provide your UCE certificate and other required documents
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-accent">3</span>
                  </div>
                  <h3 className="font-semibold">Begin Your Studies</h3>
                  <p className="text-sm text-muted-foreground">
                    Once accepted, register and start your transformative journey
                  </p>
                </div>
              </div>
              <div className="text-center pt-6">
                <Button size="lg" onClick={handleWhatsApp}>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Apply via WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Entry Requirements */}
          <Card className="shadow-soft mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <FileText className="mr-2 h-6 w-6" />
                Entry Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">All Programs Require:</h4>
                <ul className="space-y-2">
                  {[
                    "Uganda Certificate of Education (UCE) or equivalent qualification",
                    "Genuine passion for working with young children",
                    "Good communication skills (written and verbal)",
                    "Basic literacy and numeracy competency",
                    "Commitment to professional development and ethical practice"
                  ].map((req, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Tuition Fees */}
          <Card className="shadow-soft mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <DollarSign className="mr-2 h-6 w-6" />
                Tuition Fees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-6 text-center space-y-3">
                  <h4 className="font-semibold text-lg">Diploma Program</h4>
                  <div className="text-3xl font-bold text-primary">UGX 350,000</div>
                  <p className="text-sm text-muted-foreground">per semester</p>
                  <p className="text-xs text-muted-foreground">Two semesters per year</p>
                </div>
                <div className="border rounded-lg p-6 text-center space-y-3">
                  <h4 className="font-semibold text-lg">Certificate Program</h4>
                  <div className="text-3xl font-bold text-secondary">UGX 280,000</div>
                  <p className="text-sm text-muted-foreground">per semester</p>
                  <p className="text-xs text-muted-foreground">Two semesters per year</p>
                </div>
                <div className="border rounded-lg p-6 text-center space-y-3">
                  <h4 className="font-semibold text-lg">Child Care Program</h4>
                  <div className="text-3xl font-bold text-accent">UGX 280,000</div>
                  <p className="text-sm text-muted-foreground">per semester</p>
                  <p className="text-xs text-muted-foreground">Two semesters per year</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                Fees cover tuition, access to facilities, and learning materials. Additional costs may apply for accommodation and meals.
              </p>
            </CardContent>
          </Card>

          {/* Academic Calendar */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Calendar className="mr-2 h-6 w-6" />
                Academic Calendar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold">Semester 1</h4>
                  <p className="text-muted-foreground">February - June</p>
                  <p className="text-sm text-muted-foreground">Registration typically opens in January</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Semester 2</h4>
                  <p className="text-muted-foreground">August - December</p>
                  <p className="text-sm text-muted-foreground">Registration typically opens in July</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Exact dates may vary. Please contact our admissions office for the most current information 
                  about registration deadlines and semester start dates.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Apply?</h2>
          <p className="text-lg text-white/90">
            Take the first step towards a rewarding career in early childhood education
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={handleWhatsApp}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Admissions
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/programs">View Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
