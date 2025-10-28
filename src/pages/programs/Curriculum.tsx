import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { BookOpen, Brain, Heart, Users, Lightbulb, FileText } from "lucide-react";

const Curriculum = () => {
  const coreAreas = [
    {
      icon: Brain,
      title: "Child Development",
      topics: ["Physical development", "Cognitive development", "Social-emotional development", "Language and communication"],
    },
    {
      icon: Lightbulb,
      title: "Pedagogy & Teaching Methods",
      topics: ["Learner-centered approaches", "Play-based learning", "Activity planning", "Assessment strategies"],
    },
    {
      icon: Users,
      title: "Classroom Management",
      topics: ["Positive behavior guidance", "Classroom organization", "Time management", "Resource utilization"],
    },
    {
      icon: Heart,
      title: "Ethics & Professionalism",
      topics: ["Child protection", "Professional conduct", "Parent communication", "Cultural sensitivity"],
    },
  ];

  const curriculumFeatures = [
    "Aligned with Uganda's national ECD framework and Ministry of Education standards",
    "Balance of theoretical knowledge and practical application",
    "Emphasis on learner-centered and child-centered approaches",
    "Integration of modern technology and traditional methods",
    "Focus on inclusive education and diversity",
    "Continuous assessment and portfolio development",
    "Research and critical thinking components",
    "Community engagement and parent partnership modules",
  ];

  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-accent to-accent/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="h-16 w-16" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">Curriculum Overview</h1>
              <p className="text-xl text-white/90 mt-2">A comprehensive approach to early childhood teacher education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Introduction */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">Our Curriculum Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                At LECDTTI, our curriculum is designed to equip aspiring early childhood educators with the knowledge, practical skills, and ethical grounding needed to nurture the holistic development of young children.
              </p>
              <p>
                We emphasize learner-centered training and professional mentorship, ensuring our graduates emerge as responsible and ethical practitioners who are well-prepared to influence the next generation.
              </p>
            </CardContent>
          </Card>

          {/* Core Curriculum Areas */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">Core Curriculum Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {coreAreas.map((area, index) => (
                <Card key={index} className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <area.icon className="h-6 w-6 text-primary" />
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Curriculum Features */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileText className="h-8 w-8 text-primary" />
                Curriculum Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {curriculumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Program Structure */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Diploma Program Structure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p><strong>Duration:</strong> 2 years (4 semesters)</p>
                <div>
                  <p className="font-semibold mb-2">Year 1:</p>
                  <ul className="ml-6 space-y-1 text-sm">
                    <li>• Foundations of child development</li>
                    <li>• Introduction to pedagogy</li>
                    <li>• Classroom observation</li>
                    <li>• Basic teaching practice</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Year 2:</p>
                  <ul className="ml-6 space-y-1 text-sm">
                    <li>• Advanced teaching methods</li>
                    <li>• Curriculum design</li>
                    <li>• Extended teaching practice</li>
                    <li>• Research project</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Certificate Program Structure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p><strong>Duration:</strong> 2 years (4 semesters)</p>
                <div>
                  <p className="font-semibold mb-2">Year 1:</p>
                  <ul className="ml-6 space-y-1 text-sm">
                    <li>• Child development basics</li>
                    <li>• Introduction to early childhood care</li>
                    <li>• Observation skills</li>
                    <li>• Assisted teaching</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Year 2:</p>
                  <ul className="ml-6 space-y-1 text-sm">
                    <li>• Practical teaching skills</li>
                    <li>• Activity planning</li>
                    <li>• Independent teaching practice</li>
                    <li>• Professional development</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Assessment */}
          <Card className="shadow-soft bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Assessment & Evaluation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Student progress is evaluated through multiple assessment methods to ensure comprehensive skill development:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Continuous Assessment:</h3>
                  <ul className="space-y-1 ml-6 text-sm">
                    <li>• Assignments and projects</li>
                    <li>• Class presentations</li>
                    <li>• Practical demonstrations</li>
                    <li>• Portfolio development</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">Formal Assessment:</h3>
                  <ul className="space-y-1 ml-6 text-sm">
                    <li>• End-of-semester examinations</li>
                    <li>• Teaching practice evaluations</li>
                    <li>• Research projects (Diploma)</li>
                    <li>• Final comprehensive assessment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;
