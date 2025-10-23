import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import administrationBlock2 from "@/assets/administration-block-2.jpg";
import administrationBlock4 from "@/assets/administration-block-4.jpg";
import studentsReady2 from "@/assets/students-ready.jpg";
import staffPhoto2 from "@/assets/staff-photo-2.jpg";
import studentsAssembly2 from "@/assets/students-assembly-2.jpg";

const About = () => {
  const [currentBg, setCurrentBg] = useState(0);
  
  const backgrounds = [
    administrationBlock2,
    administrationBlock4,
    studentsReady2,
    staffPhoto2,
    studentsAssembly2
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About LECDTTI</h1>
          <p className="text-xl text-white/90">
            Building a legacy of excellence in early childhood education
          </p>
        </div>
      </section>

      {/* Institutional Background */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-5xl space-y-8">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Institutional Background</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                The Lira Early Childhood Development Teachers' Training Institute (LECDTTI) is a private, 
                profit-making institution founded in 2019 with an initial intake of just 14 students and five 
                staff members. Since then, the institution has experienced remarkable growth, expanding to 
                250 students, of which 95% are women.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently operating from Kichope Cell, Lira City West Division, Lira City, Northern Uganda, 
                LECDTTI has grown its staff-to-student ratio from 5:14 to 9:250, demonstrating our commitment 
                to sustainable growth and quality education.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our students are registered under Kyambogo University, and we are actively pursuing full, 
                independent registration with the Ministry of Education to secure our future growth and 
                enhance our institutional capacity.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="shadow-soft border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be a premier and transformative center of excellence in early childhood development (ECD) 
                teacher education across Uganda and the region. We aspire to produce a new generation of highly 
                skilled, compassionate educators who can influence national education systems and promote 
                lifelong learning. We foster innovation, inclusivity, and integrity to be a catalyst for 
                positive change in the lives of young children, their families, and society.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="shadow-soft border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To equip aspiring early childhood educators with the knowledge, practical skills, and ethical 
                grounding needed to nurture the holistic development of young children. We are committed to 
                fostering excellence through learner-centered training and professional mentorship, so our 
                graduates emerge as responsible and ethical practitioners.
              </p>
            </CardContent>
          </Card>

          {/* Goals */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Our Strategic Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    To secure land and establish a permanent campus within the first three months
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    To achieve full, independent registration with the Ministry of Education within 12-18 months
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    To increase student enrollment to 500 by the end of the third year
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    To expand staff capacity to 18 tutors within 12-18 months
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    To establish a functional library, a modern ICT lab, and an ECD demonstration center
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Core Values */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Our Core Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Inclusion",
                    description: "Creating opportunities for all aspiring educators regardless of background"
                  },
                  {
                    title: "Child-Centeredness",
                    description: "Focusing on the holistic development and wellbeing of young learners"
                  },
                  {
                    title: "Professionalism",
                    description: "Upholding the highest standards in teacher training and education delivery"
                  },
                  {
                    title: "Gender Equity",
                    description: "Empowering women in education leadership and teaching roles"
                  },
                  {
                    title: "Community Partnership",
                    description: "Working collaboratively with stakeholders for better education outcomes"
                  },
                  {
                    title: "Continuous Improvement",
                    description: "Always striving for excellence and innovation in training methodologies"
                  }
                ].map((value, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-primary">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Problem Statement */}
          <Card className="shadow-soft border-l-4 border-l-accent">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Addressing Current Challenges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Despite significant progress since our establishment in 2019, LECDTTI faces critical challenges 
                that we are actively addressing through our strategic development plan:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-accent rounded-full"></span>
                  <span className="text-muted-foreground">
                    <strong>Facility Limitations:</strong> Currently operating from rented premises with high monthly costs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-accent rounded-full"></span>
                  <span className="text-muted-foreground">
                    <strong>Resource Constraints:</strong> Limited ICT equipment and inadequate library resources
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-accent rounded-full"></span>
                  <span className="text-muted-foreground">
                    <strong>Infrastructure Gaps:</strong> Need for improved classrooms, staff housing, and sanitation facilities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-accent rounded-full"></span>
                  <span className="text-muted-foreground">
                    <strong>Registration Process:</strong> Working toward full independent registration with the Ministry of Education
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed pt-4">
                Our comprehensive strategic business plan addresses these challenges through targeted investments 
                in permanent infrastructure, expanded human resources, and enhanced learning facilities to ensure 
                sustainable delivery of quality early childhood teacher training.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
