import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { GraduationCap, Clock, DollarSign, CheckCircle, BookOpen } from "lucide-react";

const Diploma = () => {
  const highlights = [
    "Comprehensive professional qualification in Early Childhood Education",
    "Two-year intensive program with practical and theoretical components",
    "Registered under Kyambogo University",
    "Hands-on teaching practice in local nurseries and schools",
    "Prepares graduates for careers as professional early childhood educators",
    "Focus on child development, pedagogy, and classroom management",
  ];

  const requirements = [
    "Uganda Certificate of Education (UCE) or equivalent",
    "Passion for working with young children",
    "Good communication skills",
    "Commitment to professional development",
  ];

  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="h-16 w-16" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">Diploma in Early Childhood Education</h1>
              <p className="text-xl text-white/90 mt-2">Your pathway to becoming a professional early childhood educator</p>
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
                The Diploma in Early Childhood Education is our flagship two-year program designed for students seeking a comprehensive professional qualification. This program provides an in-depth curriculum that prepares graduates for rewarding careers as professional educators in early childhood settings.
              </p>
              <p>
                Students engage in both theoretical studies and hands-on practical experience, ensuring they develop the knowledge, skills, and ethical grounding needed to nurture the holistic development of young children.
              </p>
            </CardContent>
          </Card>

          {/* Key Details */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-soft text-center">
              <CardContent className="pt-8 pb-6">
                <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">2 Years</div>
                <div className="text-muted-foreground">Full Program Duration</div>
                <div className="text-sm text-muted-foreground mt-2">4 Semesters</div>
              </CardContent>
            </Card>
            <Card className="shadow-soft text-center">
              <CardContent className="pt-8 pb-6">
                <DollarSign className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <div className="text-3xl font-bold text-secondary mb-2">350,000</div>
                <div className="text-muted-foreground">UGX per Semester</div>
                <div className="text-sm text-muted-foreground mt-2">Affordable Tuition</div>
              </CardContent>
            </Card>
            <Card className="shadow-soft text-center">
              <CardContent className="pt-8 pb-6">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-accent" />
                <div className="text-3xl font-bold text-accent mb-2">54%</div>
                <div className="text-muted-foreground">Current Enrollment</div>
                <div className="text-sm text-muted-foreground mt-2">Most Popular Program</div>
              </CardContent>
            </Card>
          </div>

          {/* Program Highlights */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <CheckCircle className="h-8 w-8 text-primary" />
                Program Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
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
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Career Prospects */}
          <Card className="shadow-soft bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Career Prospects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Graduates of our Diploma program are well-prepared for a range of careers in early childhood education, including:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Preschool and Nursery Teachers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Early Childhood Development Specialists</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Program Coordinators in ECD Centers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Educational Consultants</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Further studies in Education</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Diploma;
