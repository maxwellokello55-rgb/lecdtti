import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Home, BookOpen, GraduationCap, Heart, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import studentsReady from "@/assets/students-ready.jpg";
import studentsAssembly from "@/assets/students-assembly.jpg";
import morningBriefing from "@/assets/morning-briefing.jpg";
import studentsExams from "@/assets/students-exams.jpg";

const StudentLife = () => {
  const [currentBg, setCurrentBg] = useState(0);
  
  const backgrounds = [
    studentsReady,
    studentsAssembly,
    morningBriefing,
    studentsExams
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-6 overflow-hidden">
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

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Student Life at LECDTTI</h1>
          <p className="text-xl text-white/90">
            Experience a vibrant community dedicated to excellence in early childhood education
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-5xl space-y-8">
          {/* Overview */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Welcome to Our Community</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                At LECDTTI, student life is rich with opportunities for learning, growth, and community engagement. 
                With a student body of 250+ learners and a remarkable 95% female enrollment, we foster an empowering 
                environment where future educators develop both professionally and personally.
              </p>
            </CardContent>
          </Card>

          {/* Accommodation */}
          <Card className="shadow-soft border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Home className="h-6 w-6 text-primary" />
                Accommodation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We provide comfortable on-campus accommodation to support our students' academic journey:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    <strong>Three dormitories:</strong> Two ladies' dormitories and one gentlemen's dormitory
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    <strong>Modern facilities:</strong> Basic water and electricity connections in all dormitories
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    <strong>Safe environment:</strong> Supervised accommodation with dedicated warden support
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Field Practice */}
          <Card className="shadow-soft border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-secondary" />
                Field Practice & Teaching Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hands-on experience is at the heart of our training methodology:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-secondary rounded-full"></span>
                  <span className="text-muted-foreground">
                    <strong>School partnerships:</strong> Practical internship placements at local nursery and primary schools
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-secondary rounded-full"></span>
                  <span className="text-muted-foreground">
                    <strong>ECD demonstration center:</strong> Planned on-campus facility for hands-on training (coming soon)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-secondary rounded-full"></span>
                  <span className="text-muted-foreground">
                    <strong>Supervised practice:</strong> Professional mentorship throughout your teaching practice
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Library & Study Facilities */}
          <Card className="shadow-soft border-l-4 border-l-accent">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-accent" />
                Library & Study Facilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                We are committed to providing essential learning resources to support your academic excellence:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-accent rounded-full"></span>
                  <span className="text-muted-foreground">
                    <strong>Modern library:</strong> Functional library facility planned as part of our campus development
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-accent rounded-full"></span>
                  <span className="text-muted-foreground">
                    <strong>ICT Lab:</strong> State-of-the-art computer lab for digital learning (under development)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-accent rounded-full"></span>
                  <span className="text-muted-foreground">
                    <strong>Study spaces:</strong> Five well-equipped classrooms for group study and collaborative learning
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Student Activities */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Student Activities & Community
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Beyond the classroom, students engage in enriching activities that build community and professional networks:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Daily Assemblies</h4>
                  <p className="text-sm text-muted-foreground">
                    Morning assemblies foster community spirit and professional development
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Workshops & Seminars</h4>
                  <p className="text-sm text-muted-foreground">
                    Regular professional development sessions with experienced educators
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Community Outreach</h4>
                  <p className="text-sm text-muted-foreground">
                    Participate in local education initiatives and outreach programs
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Peer Mentorship</h4>
                  <p className="text-sm text-muted-foreground">
                    Senior students mentor newcomers, building lasting professional relationships
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Student Welfare */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Student Welfare & Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Your wellbeing is our priority. Our dedicated team provides comprehensive support:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    <strong>Dedicated Warden:</strong> Manages student welfare, accommodation, and disciplinary matters
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    <strong>Staff-to-student support:</strong> Small class sizes with a 1:28 tutor-to-student ratio
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    <strong>Kitchen & dining facilities:</strong> Hygienic meal preparation and dining spaces
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Code of Conduct */}
          <Card className="shadow-soft border-l-4 border-l-accent">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Award className="h-6 w-6 text-accent" />
                Code of Conduct
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                As future educators, students are expected to uphold the highest standards of ethics and integrity. 
                Our code of conduct emphasizes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-accent rounded-full"></span>
                  <span className="text-muted-foreground">Professional behavior and respect for diversity</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-accent rounded-full"></span>
                  <span className="text-muted-foreground">Academic honesty and integrity in all work</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-accent rounded-full"></span>
                  <span className="text-muted-foreground">Child-centeredness and ethical practice</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-accent rounded-full"></span>
                  <span className="text-muted-foreground">Active participation in community building</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center pt-8">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-none shadow-soft">
              <CardContent className="py-12">
                <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Experience a supportive, empowering environment where you'll develop the skills and 
                  character to make a lasting impact in early childhood education.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" onClick={() => window.location.href = '/admissions'}>
                    Apply Now
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => window.location.href = '/contact'}>
                    Contact Us
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => window.location.href = '/about'}>
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
