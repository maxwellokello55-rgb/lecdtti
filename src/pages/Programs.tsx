import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, BookOpen, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import administrationBlockFront from "@/assets/administration-block-front.jpg";
import administrationBlockGarden from "@/assets/administration-block-garden.jpg";
import studentsAssembly3 from "@/assets/students-assembly-3.jpg";
import studentsExamHall from "@/assets/students-exam-hall.jpg";
import staffTeamPhoto from "@/assets/staff-team-photo.jpg";
import studentsReady from "@/assets/students-ready.jpg";

const Programs = () => {
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
  const programs = [
    {
      title: "Diploma in Early Childhood Education",
      duration: "2 Years",
      fee: "UGX 350,000 per semester",
      icon: <GraduationCap className="h-8 w-8" />,
      description: "A comprehensive professional qualification program for aspiring early childhood educators seeking to make a lasting impact.",
      highlights: [
        "Comprehensive curriculum covering child development, pedagogy, and classroom management",
        "Practical teaching experience through internships",
        "Recognized by Kyambogo University",
        "Prepares graduates for leadership roles in early childhood education"
      ],
      requirements: [
        "Uganda Certificate of Education (UCE) or equivalent",
        "Passion for working with young children",
        "Good communication skills"
      ]
    },
    {
      title: "Certificate in Early Childhood Education",
      duration: "2 Years",
      fee: "UGX 280,000 per semester",
      icon: <BookOpen className="h-8 w-8" />,
      description: "A foundational program providing essential knowledge and skills for individuals entering the field of early childhood care.",
      highlights: [
        "Strong foundation in early childhood development principles",
        "Hands-on training in child care and teaching methodologies",
        "Recognized certification upon completion",
        "Pathway to advanced studies and career progression"
      ],
      requirements: [
        "Uganda Certificate of Education (UCE) or equivalent",
        "Interest in early childhood education",
        "Basic literacy and numeracy skills"
      ]
    },
    {
      title: "Child Care Program",
      duration: "1 Year",
      fee: "UGX 280,000 per semester",
      icon: <Clock className="h-8 w-8" />,
      description: "An intensive one-year program focused on the operational and practical aspects of running a nursery or child care facility.",
      highlights: [
        "Practical skills for daily child care operations",
        "Business and management aspects of running a nursery",
        "Health, safety, and nutrition for young children",
        "Quick pathway to employment or entrepreneurship"
      ],
      requirements: [
        "Uganda Certificate of Education (UCE) or equivalent",
        "Interest in child care and nursery management",
        "Basic business understanding (advantageous)"
      ]
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Programs</h1>
          <p className="text-xl text-white/90">
            Professional training programs designed to shape the future of early childhood education
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-6xl space-y-12">
          {programs.map((program, index) => (
            <Card key={index} className="shadow-medium hover:shadow-lg transition-all">
              <CardHeader className="border-b bg-muted/30">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-lg">
                      {program.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                      <CardDescription className="text-base">
                        {program.description}
                      </CardDescription>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center text-sm font-medium text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    Duration: {program.duration}
                  </div>
                  <div className="flex items-center text-sm font-medium text-secondary">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Tuition: {program.fee}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                {/* Program Highlights */}
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-primary">Program Highlights</h4>
                  <ul className="space-y-2">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Entry Requirements */}
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-primary">Entry Requirements</h4>
                  <ul className="space-y-2">
                    {program.requirements.map((requirement, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 mr-2 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
          <p className="text-lg text-muted-foreground">
            Take the first step towards becoming a professional early childhood educator
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
