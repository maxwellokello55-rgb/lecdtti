import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, BookOpen, Laptop, Home, Droplets, UtensilsCrossed } from "lucide-react";
import { useState, useEffect } from "react";
import administrationBlock2 from "@/assets/administration-block-2.jpg";
import administrationBlock4 from "@/assets/administration-block-4.jpg";
import studentsReady2 from "@/assets/students-ready.jpg";
import staffPhoto2 from "@/assets/staff-photo-2.jpg";
import studentsAssembly2 from "@/assets/students-assembly-2.jpg";

const CampusDevelopment = () => {
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
  const budgetItems = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Land Purchase & Legal Fees",
      cost: "UGX 150,000,000",
      description: "Acquiring 1 acre of land for permanent campus location"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Administrative Block & Classrooms",
      cost: "UGX 200,000,000",
      description: "Construction of admin block and 6 modern classrooms"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Library & ICT Lab",
      cost: "UGX 50,000,000",
      description: "Fully equipped library and modern computer laboratory"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Staff Housing",
      cost: "UGX 40,000,000",
      description: "2 residential units for tutors and staff"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Sanitation Facilities",
      cost: "UGX 30,000,000",
      description: "Modern VIP latrines and water systems"
    },
    {
      icon: <UtensilsCrossed className="h-8 w-8" />,
      title: "Kitchen & Dining Facility",
      cost: "UGX 20,000,000",
      description: "Hygienic food preparation and dining space"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Fencing & Landscaping",
      cost: "UGX 30,000,000",
      description: "Perimeter security and site development"
    }
  ];

  const timeline = [
    { period: "Months 0-3", activity: "Secure funding and purchase land", output: "Land acquired and fenced" },
    { period: "Months 4-12", activity: "Construct admin block & classrooms", output: "Admin block + 6 classrooms completed" },
    { period: "Months 10-15", activity: "Build library, ICT lab & staff houses", output: "Library & ICT lab equipped, staff housing ready" },
    { period: "Months 10-15", activity: "Install sanitation, kitchen & dining", output: "Functional sanitation and dining facilities" },
    { period: "Months 12-18", activity: "Recruit additional tutors", output: "9 new tutors recruited" },
    { period: "Months 12-18", activity: "Complete registration & accreditation", output: "Independent fully registered institute" }
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Campus Development Project</h1>
          <p className="text-xl text-white/90">
            Building a permanent home for excellence in early childhood education
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <Card className="shadow-soft mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Our Vision for Growth</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                LECDTTI is embarking on an ambitious three-year strategic development plan to transform from a rented facility 
                into a permanent, fully accredited institution with state-of-the-art infrastructure. This comprehensive project 
                will establish a sustainable foundation for delivering quality early childhood education training to 500 students 
                by Year 3.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our campus development project addresses current infrastructure limitations by creating a permanent home with modern 
                classrooms, a well-equipped library, an ICT laboratory, staff housing, and proper sanitation facilities. This 
                investment will eliminate costly rental expenses and provide a conducive environment for both students and staff.
              </p>
            </CardContent>
          </Card>

          {/* Budget Breakdown */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Phase 1 Budget Breakdown</h2>
            <Card className="shadow-soft mb-6">
              <CardHeader>
                <CardTitle className="text-center text-3xl text-primary">
                  Total Investment: UGX 550,000,000
                </CardTitle>
              </CardHeader>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {budgetItems.map((item, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-2xl font-bold text-primary mb-2">{item.cost}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <Card className="shadow-soft mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Implementation Timeline (12-24 Months)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                    <div className="flex-shrink-0 w-24 text-sm font-semibold text-primary">
                      {item.period}
                    </div>
                    <div className="flex-grow border-l-2 border-primary pl-4">
                      <h4 className="font-semibold mb-1">{item.activity}</h4>
                      <p className="text-sm text-muted-foreground">{item.output}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Strategic Objectives */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Strategic Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Enrollment Growth</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Year 1: 250 students (current)</li>
                    <li>• Year 2: 345 students (38% increase)</li>
                    <li>• Year 3: 500 students (45% increase)</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Staff Expansion</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Current: 9 qualified tutors</li>
                    <li>• Target: 18 tutors by Month 18</li>
                    <li>• Improved student-to-tutor ratio</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Infrastructure Development</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Permanent 1-acre campus</li>
                    <li>• Modern learning facilities</li>
                    <li>• ICT lab and library</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Institutional Accreditation</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Full MoES registration</li>
                    <li>• Independent accreditation</li>
                    <li>• Enhanced institutional capacity</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Expected Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center shadow-soft">
              <CardContent className="pt-8 pb-6">
                <div className="text-5xl font-bold text-primary mb-2">500</div>
                <p className="text-muted-foreground">Students by Year 3</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft">
              <CardContent className="pt-8 pb-6">
                <div className="text-5xl font-bold text-secondary mb-2">18</div>
                <p className="text-muted-foreground">Qualified Tutors</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-soft">
              <CardContent className="pt-8 pb-6">
                <div className="text-5xl font-bold text-accent mb-2">100%</div>
                <p className="text-muted-foreground">Ownership & Sustainability</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusDevelopment;
