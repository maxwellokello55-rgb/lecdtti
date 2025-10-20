import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, GraduationCap } from "lucide-react";
import staffPhoto from "@/assets/staff-photo.jpg";

const Staff = () => {
  const boardMembers = [
    {
      role: "Chairperson, Board of Directors",
      name: "Ochen Richard",
      expertise: "Education leadership and institutional governance"
    },
    {
      role: "Secretary, Board of Directors",
      name: "Okeny Robert",
      expertise: "Administrative management and policy development"
    },
    {
      role: "Member, Board of Directors",
      name: "Okello Geoffrey",
      expertise: "Strategic planning and community engagement"
    }
  ];

  const management = [
    {
      role: "Principal",
      name: "Achola Florence",
      responsibilities: [
        "Overall academic and administrative leadership",
        "Curriculum development and quality assurance",
        "Strategic planning and institutional development",
        "Staff supervision and professional development",
        "Stakeholder engagement and partnerships"
      ]
    },
    {
      role: "Warden",
      name: "Ajok Joan",
      responsibilities: [
        "Student welfare and hostel management",
        "Discipline and code of conduct enforcement",
        "Facility maintenance coordination",
        "Student support services",
        "Campus security and safety"
      ]
    },
    {
      role: "Contractor / Project Manager",
      name: "Opio Denis",
      responsibilities: [
        "Oversight of all construction projects",
        "Budget management and cost control",
        "Timeline adherence and quality assurance",
        "Team of builders management",
        "Campus development coordination"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Staff & Management</h1>
          <p className="text-xl text-white/90">
            Dedicated professionals leading LECDTTI to excellence
          </p>
        </div>
      </section>

      {/* Staff Photo Section */}
      <section className="py-12 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-lg overflow-hidden shadow-medium">
            <img 
              src={staffPhoto} 
              alt="LECDTTI Staff Team" 
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-muted-foreground mt-4 italic">
            Our dedicated team of educators and administrators at LECDTTI
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Board of Directors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our board provides strategic direction, governance oversight, and ensures the institute remains 
              committed to its mission of excellence in early childhood education training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {boardMembers.map((member, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.role}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-xl mb-3">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Management Team */}
          <div className="text-center mb-12">
            <UserCheck className="h-12 w-12 mx-auto mb-4 text-secondary" />
            <h2 className="text-3xl font-bold mb-4">Management Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced management team ensures smooth daily operations, student welfare, and the successful 
              implementation of our campus development plans.
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {management.map((member, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all">
                <CardHeader className="border-b bg-muted/30">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <UserCheck className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{member.role}</CardTitle>
                      <p className="text-2xl font-bold text-primary mt-1">{member.name}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {member.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-secondary rounded-full"></span>
                        <span className="text-muted-foreground">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tutors Section */}
          <div className="text-center mb-8">
            <GraduationCap className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h2 className="text-3xl font-bold mb-4">Our Tutors</h2>
          </div>

          <Card className="shadow-soft">
            <CardContent className="pt-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">9</div>
                    <p className="text-muted-foreground">Current Tutors</p>
                  </div>
                  <div className="h-16 w-px bg-border"></div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-secondary mb-2">18</div>
                    <p className="text-muted-foreground">Target by Month 18</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 mt-6">
                <h4 className="font-semibold text-lg mb-4">Qualifications & Expertise</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-accent rounded-full"></span>
                    <span className="text-muted-foreground">
                      <strong>Grade V and Diploma-level educators</strong> with extensive experience in Early Childhood Development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-accent rounded-full"></span>
                    <span className="text-muted-foreground">
                      <strong>Bachelor's degrees</strong> in education (primary and teacher education)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-accent rounded-full"></span>
                    <span className="text-muted-foreground">
                      <strong>Specialized expertise</strong> in child-centered learning methodologies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-accent rounded-full"></span>
                    <span className="text-muted-foreground">
                      <strong>Practical experience</strong> in early childhood classroom management
                    </span>
                  </li>
                </ul>
              </div>

              <div className="border-t pt-6 mt-6 bg-muted/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Expansion Plan</h4>
                <p className="text-sm text-muted-foreground">
                  As part of our strategic growth plan, we are recruiting nine additional qualified tutors with degrees 
                  in education to support our expanding enrollment and new programs. This will bring our total staff to 
                  18 tutors, significantly improving our student-to-tutor ratio and ensuring quality education delivery.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Staff;
