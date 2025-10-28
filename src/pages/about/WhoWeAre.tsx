import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { Building, Users, Heart, Target } from "lucide-react";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Who We Are</h1>
          <p className="text-xl text-white/90 max-w-3xl animate-fade-in">
            Learn about our history, mission, and commitment to excellence in early childhood education
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Institutional Background */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Building className="h-8 w-8 text-primary" />
                Institutional Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The Lira Early Childhood Development Teachers' Training Institute (LECDTTI), a profit-making institution, was founded in 2019 with an initial intake of just 14 students and five staff members. Since then, the institution has experienced significant growth, with its student body expanding to 250 students today, of which 95% are women. The current staff-to-student ratio is 9 to 250, a significant increase from its founding year.
              </p>
              <p>
                The institute currently operates from a rented premise in Kichope Cell, Lira City West Division, Lira City, Northern Uganda. Its facilities include a single office, five classrooms, three dormitories (two for ladies and one for gentlemen), two stance VIP latrines, and basic water and electricity connections.
              </p>
              <p>
                LECDTTI's students are currently registered under Kyambogo University. The institute is actively seeking full, independent registration with the Ministry of Education to secure its future growth and access to funding.
              </p>
            </CardContent>
          </Card>

          {/* Current Status */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  Our Community
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Current Students:</span>
                  <span className="text-primary">250+</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Female Enrollment:</span>
                  <span className="text-secondary">95%</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="font-semibold">Staff Members:</span>
                  <span className="text-accent">9</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-semibold">Founded:</span>
                  <span>2019</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-primary" />
                  Our Commitment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We are dedicated to providing high-quality, accessible education to aspiring early childhood educators. Our focus on professional development and ethical practice ensures that our graduates are well-prepared to make a positive impact in their communities.
                </p>
                <p>
                  With a strong emphasis on practical training and community engagement, we strive to be a leading institution in early childhood teacher education in Uganda.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Growth Vision */}
          <Card className="shadow-soft bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="h-8 w-8 text-primary" />
                Our Growth Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                As we continue to grow, LECDTTI is working toward securing a permanent campus and achieving full, independent registration with the Ministry of Education. Our strategic plan includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acquiring permanent land and facilities within the next three months</li>
                <li>Increasing student enrollment to 500 by Year 3</li>
                <li>Expanding staff capacity to 18 qualified tutors</li>
                <li>Establishing a modern library, ICT lab, and ECD demonstration center</li>
                <li>Achieving full Ministry of Education registration and accreditation</li>
              </ul>
              <p className="pt-4 font-semibold text-foreground">
                Join us on this exciting journey as we transform early childhood education in Northern Uganda!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
