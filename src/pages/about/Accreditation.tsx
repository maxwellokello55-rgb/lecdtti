import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { Award, CheckCircle, Building2, Users, Target } from "lucide-react";

const Accreditation = () => {
  const partnerships = [
    {
      title: "Kyambogo University",
      description: "Our students are currently registered under Kyambogo University, one of Uganda's leading institutions for teacher education.",
      status: "Active Partnership"
    },
    {
      title: "Local Schools",
      description: "We maintain formal partnerships with nursery and primary schools for practical internship sites and teaching practice.",
      status: "Community Partnership"
    },
    {
      title: "Ministry of Education and Sports",
      description: "We are actively working with the Ministry to achieve full, independent registration and accreditation.",
      status: "In Progress"
    }
  ];

  const accreditationGoals = [
    "Complete all infrastructure requirements for Ministry standards",
    "Submit comprehensive documentation and curriculum materials",
    "Undergo Ministry inspection and evaluation processes",
    "Achieve full independent registration within 12-18 months",
    "Maintain ongoing compliance with educational standards",
  ];

  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Accreditation & Partnerships</h1>
          <p className="text-xl text-white/90 max-w-3xl animate-fade-in">
            Building strong relationships and working toward full independent accreditation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Current Status */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Award className="h-8 w-8 text-primary" />
                Current Accreditation Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                LECDTTI operates as a registered training institute with students currently enrolled under Kyambogo University. This partnership ensures that our students receive recognized qualifications while we work toward achieving full, independent registration with the Ministry of Education and Sports.
              </p>
              <p>
                Our commitment to quality education and ethical practices guides our journey toward independent accreditation. We are actively working to meet all requirements set by the Ministry, including infrastructure development, curriculum refinement, and administrative capacity building.
              </p>
            </CardContent>
          </Card>

          {/* Partnerships */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">Our Partnerships</h2>
            <div className="grid md:grid-cols-1 gap-6">
              {partnerships.map((partnership, index) => (
                <Card key={index} className="shadow-soft">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="flex items-center gap-3">
                        <Building2 className="h-6 w-6 text-primary" />
                        {partnership.title}
                      </CardTitle>
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {partnership.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{partnership.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Path to Independent Accreditation */}
          <Card className="shadow-soft bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="h-8 w-8 text-primary" />
                Path to Independent Accreditation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Achieving full, independent registration with the Ministry of Education and Sports is a key strategic objective. This will enable us to operate autonomously, access government funding opportunities, and expand our programs.
              </p>
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-foreground">Our Accreditation Roadmap:</h3>
                <ul className="space-y-3">
                  {accreditationGoals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-muted-foreground pt-4">
                We are confident that our commitment to excellence, combined with our strategic campus development plan and curriculum enhancement initiatives, will position us well to achieve this important milestone.
              </p>
            </CardContent>
          </Card>

          {/* Community Engagement */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Users className="h-8 w-8 text-secondary" />
                Community Engagement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Beyond formal partnerships and accreditation, we actively engage with the community through:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Participation in local career fairs and educational events</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Informational sessions at primary and secondary schools</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Collaboration with local nurseries for student teaching practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Building an active alumni network for ongoing support and referrals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Engaging with donors and stakeholders for institutional growth</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Accreditation;
