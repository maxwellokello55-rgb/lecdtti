import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { Award, Clock, DollarSign, CheckCircle } from "lucide-react";

const Certificate = () => {
  const highlights = [
    "Foundational qualification for entering the early childhood education field",
    "Two-year program providing essential knowledge and practical skills",
    "Registered under Kyambogo University",
    "Practical teaching experience in real classroom settings",
    "Focus on child development basics and classroom management",
    "Ideal for those beginning their careers in early childhood care",
  ];

  const requirements = [
    "Uganda Certificate of Education (UCE) or equivalent",
    "Interest in working with young children",
    "Basic communication skills",
    "Willingness to learn and grow professionally",
  ];

  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-secondary to-secondary/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-4">
            <Award className="h-16 w-16" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">Certificate in Early Childhood Education</h1>
              <p className="text-xl text-white/90 mt-2">Build your foundation in early childhood education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Program Overview */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">Program Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The Certificate in Early Childhood Education is a two-year program that provides a strong foundational qualification for individuals entering the field of early childhood care. This program equips students with essential knowledge and practical skills needed to work effectively with young children.
              </p>
              <p>
                Whether you're just starting your career in education or looking to formalize your experience, this certificate program offers a solid base for professional growth in the early childhood sector.
              </p>
            </CardContent>
          </Card>

          {/* Key Details */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-soft text-center">
              <CardContent className="pt-8 pb-6">
                <Clock className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <div className="text-3xl font-bold text-secondary mb-2">2 Years</div>
                <div className="text-muted-foreground">Full Program Duration</div>
                <div className="text-sm text-muted-foreground mt-2">4 Semesters</div>
              </CardContent>
            </Card>
            <Card className="shadow-soft text-center">
              <CardContent className="pt-8 pb-6">
                <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">280,000</div>
                <div className="text-muted-foreground">UGX per Semester</div>
                <div className="text-sm text-muted-foreground mt-2">Affordable Tuition</div>
              </CardContent>
            </Card>
            <Card className="shadow-soft text-center">
              <CardContent className="pt-8 pb-6">
                <Award className="h-12 w-12 mx-auto mb-4 text-accent" />
                <div className="text-3xl font-bold text-accent mb-2">37%</div>
                <div className="text-muted-foreground">Current Enrollment</div>
                <div className="text-sm text-muted-foreground mt-2">Popular Choice</div>
              </CardContent>
            </Card>
          </div>

          {/* Program Highlights */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <CheckCircle className="h-8 w-8 text-secondary" />
                Program Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Entry Requirements */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">Entry Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Career Prospects */}
          <Card className="shadow-soft bg-gradient-to-br from-secondary/5 to-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Career Prospects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Certificate holders are qualified for entry-level positions in early childhood education, including:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Assistant Preschool Teachers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Nursery School Staff</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Day Care Center Workers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Community ECD Program Support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Pathway to Diploma studies</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Certificate;
