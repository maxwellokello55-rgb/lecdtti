import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Award, BookOpen, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import administrationBlock from "@/assets/administration-block.jpg";
import studentsReady from "@/assets/students-ready.jpg";
import morningBriefing from "@/assets/morning-briefing.jpg";
import studentsAssembly from "@/assets/students-assembly.jpg";
import studentsExams from "@/assets/students-exams.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: studentsReady, caption: "Students ready for school practice" },
    { image: studentsAssembly, caption: "Students at morning assembly" },
    { image: studentsExams, caption: "Students during examinations" },
    { image: morningBriefing, caption: "Staff morning briefing" },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/256783254350", "_blank");
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${administrationBlock})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Lira Early Childhood Development<br />Teachers' Training Institute
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-secondary">
              Ethics and Integrity
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Empowering educators to nurture the next generation through professional training in Early Childhood Development
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                variant="secondary"
                asChild
                className="hover:scale-105 transition-transform"
              >
                <Link to="/admissions">Apply Now</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleWhatsApp}
                className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center shadow-soft hover:shadow-medium transition-all">
              <CardContent className="pt-8 pb-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold text-primary mb-2">250+</div>
                <div className="text-muted-foreground">Current Students</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft hover:shadow-medium transition-all">
              <CardContent className="pt-8 pb-6">
                <Award className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                <div className="text-muted-foreground">Female Enrollment</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft hover:shadow-medium transition-all">
              <CardContent className="pt-8 pb-6">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-accent" />
                <div className="text-4xl font-bold text-accent mb-2">3</div>
                <div className="text-muted-foreground">Training Programs</div>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft hover:shadow-medium transition-all">
              <CardContent className="pt-8 pb-6">
                <GraduationCap className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold text-primary mb-2">2019</div>
                <div className="text-muted-foreground">Established</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery Carousel */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Life at LECDTTI</h2>
          
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-medium">
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg font-medium">{slides[currentSlide].caption}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-soft transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-soft transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Welcome Text */}
          <div className="mt-16 text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Welcome to LECDTTI
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The Lira Early Childhood Development Teachers' Training Institute is a leading private institution 
              dedicated to training compassionate and skilled early childhood educators. Since 2019, we have grown 
              from 14 students to over 250, with a remarkable 95% female enrollment rate.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Affiliated with Kyambogo University, we offer comprehensive programs that combine theoretical knowledge 
              with practical skills, ensuring our graduates are ready to make a real difference in the lives of young children.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Inclusion", description: "Creating opportunities for all aspiring educators" },
              { title: "Child-Centeredness", description: "Focusing on the holistic development of young learners" },
              { title: "Professionalism", description: "Upholding the highest standards in teacher training" },
              { title: "Gender Equity", description: "Empowering women in education leadership" },
              { title: "Community Partnership", description: "Working together for better education outcomes" },
              { title: "Continuous Improvement", description: "Always striving for excellence in training" }
            ].map((value, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Begin Your Teaching Journey?
          </h2>
          <p className="text-lg text-white/90">
            Join us in shaping the future of early childhood education in Uganda
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              variant="secondary"
              asChild
            >
              <Link to="/programs">Explore Programs</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
