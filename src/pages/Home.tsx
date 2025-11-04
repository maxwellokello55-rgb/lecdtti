import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Award, BookOpen, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import administrationBlock from "@/assets/administration-block.jpg";
import administrationBlock1 from "@/assets/administration-block-1.jpg";
import administrationBlock3 from "@/assets/administration-block-3.jpg";
import ictRoom from "@/assets/ict-room.jpg";
import principalOffice2 from "@/assets/principal-office-2.jpg";
import studentsSittingExams from "@/assets/students-sitting-exams.jpg";
import studentsReady from "@/assets/students-ready.jpg";
import morningBriefing from "@/assets/morning-briefing.jpg";
import studentsAssembly from "@/assets/students-assembly.jpg";
import studentsExams from "@/assets/students-exams.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  
  const slides = [
    { image: studentsReady, caption: "Students ready for school practice" },
    { image: studentsAssembly, caption: "Students at morning assembly" },
    { image: studentsExams, caption: "Students during examinations" },
    { image: morningBriefing, caption: "Staff morning briefing" },
  ];

  const heroBackgrounds = [
    administrationBlock,
    administrationBlock1,
    administrationBlock3,
    ictRoom,
    principalOffice2,
    studentsSittingExams,
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);

    return () => clearInterval(heroInterval);
  }, [heroBackgrounds.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {heroBackgrounds.map((bg, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                currentHeroSlide === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/30 to-primary/20"></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to Lira Early Childhood Development<br />Teachers' Training Institute
            </h1>
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
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = '/about'}
                className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-12 px-6 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-lg shadow-soft p-8 border-l-4 border-primary">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center gap-3">
              <Award className="h-8 w-8" />
              Latest Announcement
            </h2>
            <p className="text-xl font-semibold text-foreground mb-2">
              Admissions Open for 2025 Intake!
            </p>
            <p className="text-muted-foreground mb-4">
              Applications are now being accepted for our Diploma and Certificate programs in Early Childhood Development. 
              Don't miss this opportunity to start your teaching career.
            </p>
            <Button asChild>
              <Link to="/admissions/how-to-apply">Apply Now</Link>
            </Button>
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

      {/* Videos Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience LECDTTI</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Watch our students and tutors in action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-lg overflow-hidden shadow-soft">
              <video 
                controls 
                className="w-full h-auto"
                preload="metadata"
              >
                <source src="/videos/students-morning-circle.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="bg-white p-4">
                <h3 className="font-semibold text-lg text-primary">Students Morning Circle</h3>
                <p className="text-muted-foreground text-sm">Our students engaging in daily morning activities</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-soft">
              <video 
                controls 
                className="w-full h-auto"
                preload="metadata"
              >
                <source src="/videos/tutor-demonstration-lesson.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="bg-white p-4">
                <h3 className="font-semibold text-lg text-primary">Tutor Demonstration Lesson</h3>
                <p className="text-muted-foreground text-sm">Watch our experienced tutors conducting demonstration lessons</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vibrant Student Life at LECDTTI</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the energy and spirit of our school community through our diverse activities and events.
            </p>
          </div>
          
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

          {/* Why Choose Us Section */}
          <div className="mt-16 text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Why Choose LECDTTI?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We are transforming early childhood education in Northern Uganda through excellence, accessibility, 
              and a commitment to empowering women educators. With 95% female enrollment and a strong focus on 
              practical skills, we prepare compassionate teachers who make a lasting impact.
            </p>
            <p className="text-xl font-semibold text-primary italic max-w-2xl mx-auto">
              Our Motto: Ethics and Integrity
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Training Programs</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive programs designed for both pre-service and in-service early childhood educators
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-medium transition-all border-t-4 border-t-primary">
              <CardContent className="pt-8">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center text-primary mb-3">Diploma in ECD</h3>
                <p className="text-muted-foreground text-center mb-4">
                  A comprehensive two-year professional qualification preparing you for a career as a skilled educator
                </p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    2 Years
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all border-t-4 border-t-secondary">
              <CardContent className="pt-8">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full">
                  <BookOpen className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-center text-secondary mb-3">Certificate in ECD</h3>
                <p className="text-muted-foreground text-center mb-4">
                  A foundational two-year program providing essential knowledge and practical skills for entering the field
                </p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                    2 Years
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-all border-t-4 border-t-accent">
              <CardContent className="pt-8">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-center text-accent mb-3">Child Care Program</h3>
                <p className="text-muted-foreground text-center mb-4">
                  A focused one-year program on operational and practical aspects of running a nursery or child care facility
                </p>
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                    1 Year
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/programs">Learn More About Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Student Testimonials</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hear from our graduates about their experience at LECDTTI
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "LECDTTI gave me the practical skills and confidence I needed to become an effective early childhood educator. 
                  The teaching practice was invaluable, and the staff were incredibly supportive throughout my journey."
                </p>
                <div className="font-semibold text-primary">- Grace Akello, Diploma Graduate 2023</div>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">
                  "The training I received has equipped me to make a real difference in children's lives. 
                  I now run my own nursery school and apply everything I learned at LECDTTI every day."
                </p>
                <div className="font-semibold text-primary">- Betty Auma, Certificate Graduate 2022</div>
              </CardContent>
            </Card>
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
              onClick={() => window.location.href = '/contact'}
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
            >
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = '/about'}
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
