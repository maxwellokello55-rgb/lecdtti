import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { Clipboard, Users, Target, CheckCircle, School } from "lucide-react";

const TeachingPractice = () => {
  const practiceComponents = [
    {
      title: "Observation Phase",
      description: "Students observe experienced teachers in action, learning classroom management and teaching techniques",
      icon: Users,
    },
    {
      title: "Assisted Teaching",
      description: "Gradual transition to teaching with support and guidance from mentor teachers",
      icon: Clipboard,
    },
    {
      title: "Independent Practice",
      description: "Students take full responsibility for planning and delivering lessons under supervision",
      icon: School,
    },
    {
      title: "Reflection & Feedback",
      description: "Continuous assessment and constructive feedback to enhance teaching skills",
      icon: Target,
    },
  ];

  const learningOutcomes = [
    "Practical application of child development theories",
    "Classroom management and organization skills",
    "Lesson planning and curriculum implementation",
    "Assessment and evaluation of young children's progress",
    "Parent communication and engagement strategies",
    "Professionalism and ethical practice in real settings",
    "Problem-solving and adaptability in dynamic environments",
    "Cultural sensitivity and inclusive education practices",
  ];

  const partnerSchools = [
    "Local nursery schools in Lira City and surrounding areas",
    "Community-based ECD centers",
    "Private preschools and kindergartens",
    "Primary schools with nursery sections",
  ];

  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-4">
            <Clipboard className="h-16 w-16" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">Teaching Practice</h1>
              <p className="text-xl text-white/90 mt-2">Hands-on experience in real classroom settings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Overview */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Teaching practice is a critical component of all our programs at LECDTTI. We believe that hands-on experience in real classroom settings is essential for developing confident, competent early childhood educators.
              </p>
              <p>
                Our students engage in structured field practice at partner nurseries and primary schools, where they apply theoretical knowledge, develop practical teaching skills, and gain valuable professional experience under the guidance of experienced mentor teachers.
              </p>
            </CardContent>
          </Card>

          {/* Practice Components */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">Teaching Practice Components</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {practiceComponents.map((component, index) => (
                <Card key={index} className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <component.icon className="h-6 w-6 text-primary" />
                      {component.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{component.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Learning Outcomes */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <CheckCircle className="h-8 w-8 text-primary" />
                Learning Outcomes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Through teaching practice, students develop essential competencies including:
              </p>
              <ul className="space-y-3">
                {learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Partner Schools */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <School className="h-8 w-8 text-secondary" />
                Partner Schools & Centers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We maintain formal partnerships with various educational institutions that serve as practical training sites for our students:
              </p>
              <ul className="space-y-3">
                {partnerSchools.map((school, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{school}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-4">
                These partnerships not only provide valuable hands-on experience for our students but also serve as a direct channel for employment referrals and help build our reputation within the education community.
              </p>
            </CardContent>
          </Card>

          {/* Supervision & Support */}
          <Card className="shadow-soft bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Supervision & Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Throughout their teaching practice, students receive comprehensive support from both LECDTTI tutors and mentor teachers at partner schools:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Regular visits and observations by LECDTTI supervisors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Daily guidance from experienced mentor teachers at practice schools</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Structured feedback sessions and reflection exercises</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Assessment based on planning, delivery, and professional conduct</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Remedial support for students needing additional guidance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TeachingPractice;
