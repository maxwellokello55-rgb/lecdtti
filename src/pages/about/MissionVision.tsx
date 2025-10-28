import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { Target, Eye, Heart, Award, Users, BookOpen, Globe, TrendingUp } from "lucide-react";

const MissionVision = () => {
  const coreValues = [
    { icon: Users, title: "Inclusion", description: "We embrace diversity and ensure equal opportunities for all learners" },
    { icon: Heart, title: "Child-centeredness", description: "The well-being and development of children are at the heart of everything we do" },
    { icon: Award, title: "Professionalism", description: "We maintain the highest standards of teaching and ethical practice" },
    { icon: Users, title: "Gender Equity", description: "We promote equal opportunities and representation across all genders" },
    { icon: Globe, title: "Community Partnership", description: "We work hand-in-hand with families and communities" },
    { icon: TrendingUp, title: "Continuous Improvement", description: "We are committed to ongoing learning and development" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Mission, Vision & Core Values</h1>
          <p className="text-xl text-white/90 max-w-3xl animate-fade-in">
            Our guiding principles that shape who we are and what we stand for
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Motto */}
          <Card className="shadow-soft bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
            <CardContent className="pt-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">Ethics and Integrity</div>
              <p className="text-xl text-muted-foreground">Our Motto</p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="h-8 w-8 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To equip aspiring early childhood educators with the knowledge, practical skills, and ethical grounding needed to nurture the holistic development of young children. We are committed to fostering excellence through learner-centered training and professional mentorship, so our graduates emerge as responsible and ethical practitioners.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Eye className="h-8 w-8 text-secondary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be a premier and transformative center of excellence in early childhood development (ECD) teacher education across Uganda and the region.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our vision is to produce a new generation of highly skilled, compassionate educators who can influence national education systems and promote lifelong learning. We foster innovation, inclusivity, and integrity to be a catalyst for positive change in the lives of young children, their families, and society.
              </p>
            </CardContent>
          </Card>

          {/* Goals */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <BookOpen className="h-8 w-8 text-accent" />
                Our Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">To secure land and establish a permanent campus within the first three months</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">To achieve full, independent registration with the Ministry of Education within 12-18 months</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">To increase student enrollment to 500 by the end of the third year</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">To expand staff capacity to 18 tutors within 12-18 months</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">To establish a functional library, a modern ICT lab, and an ECD demonstration center</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Core Values */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <value.icon className="h-6 w-6 text-primary" />
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
