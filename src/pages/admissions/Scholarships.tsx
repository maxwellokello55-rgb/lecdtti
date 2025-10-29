import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { Heart, Users, Award, HelpCircle } from "lucide-react";

const Scholarships = () => {
  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      <section className="relative py-20 px-6 bg-gradient-to-r from-accent to-accent/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Scholarships & Support</h1>
          <p className="text-xl text-white/90">Making quality education accessible to all</p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground">
              At LECDTTI, we believe in empowering aspiring educators regardless of their financial background. 
              We offer various scholarship opportunities and financial support programs to help deserving students achieve their educational goals.
            </p>
          </div>

          <Card className="shadow-soft border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                Merit-Based Scholarships
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Outstanding students with excellent academic performance may qualify for partial or full tuition scholarships.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <p className="font-semibold text-foreground">Eligibility Criteria:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Exceptional academic performance (UCE Division 1 or 2)</li>
                  <li>Strong commitment to early childhood education</li>
                  <li>Leadership qualities and community involvement</li>
                  <li>Financial need consideration</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>Coverage:</strong> Up to 50% tuition fee waiver for selected students
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-t-4 border-t-secondary">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Users className="h-6 w-6 text-secondary" />
                Community Development Scholarships
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Special support for students from underserved communities who demonstrate a commitment to returning to serve their communities.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <p className="font-semibold text-foreground">Eligibility Criteria:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>From rural or underserved communities in Northern Uganda</li>
                  <li>Commitment to work in early childhood education in their community</li>
                  <li>Demonstrated financial need</li>
                  <li>Recommendation from local leaders or community organizations</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>Coverage:</strong> Up to 30% tuition fee reduction
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-t-4 border-t-accent">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Heart className="h-6 w-6 text-accent" />
                Women Empowerment Fund
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Supporting female students who face financial barriers in pursuing their education in early childhood development.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <p className="font-semibold text-foreground">Eligibility Criteria:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  <li>Female applicants with demonstrated financial need</li>
                  <li>Single mothers or primary caregivers (priority consideration)</li>
                  <li>Strong motivation to complete the program</li>
                  <li>Good academic standing</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>Coverage:</strong> Flexible support ranging from 20-40% tuition assistance
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft bg-muted/30">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <HelpCircle className="h-6 w-6 text-primary" />
                Other Financial Support Options
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="pb-3 border-b">
                  <h4 className="font-semibold text-foreground mb-2">Flexible Payment Plans</h4>
                  <p className="text-muted-foreground text-sm">
                    Pay tuition in manageable installments throughout the semester without additional interest charges.
                  </p>
                </div>
                <div className="pb-3 border-b">
                  <h4 className="font-semibold text-foreground mb-2">Work-Study Programs</h4>
                  <p className="text-muted-foreground text-sm">
                    Opportunities to work part-time at the institute in exchange for tuition reduction.
                  </p>
                </div>
                <div className="pb-3 border-b">
                  <h4 className="font-semibold text-foreground mb-2">Emergency Assistance Fund</h4>
                  <p className="text-muted-foreground text-sm">
                    Short-term financial assistance for students facing unexpected hardships.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">External Scholarship Referrals</h4>
                  <p className="text-muted-foreground text-sm">
                    Guidance and support in applying for external scholarships and sponsorships.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-l-4 border-l-primary bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl">How to Apply for Scholarships</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Complete your admission application first</li>
                <li>Submit a scholarship application letter explaining your financial need and qualifications</li>
                <li>Provide supporting documents (income statements, recommendation letters, etc.)</li>
                <li>Attend an interview with the scholarship committee if shortlisted</li>
                <li>Await notification of scholarship decision</li>
              </ol>
              <p className="text-sm text-muted-foreground italic mt-4">
                <strong>Application Deadline:</strong> Scholarship applications are reviewed on a rolling basis. 
                Apply early for best consideration.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Contact:</strong> For more information about scholarships, contact our admissions office or visit us in person.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Scholarships;
