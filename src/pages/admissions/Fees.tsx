import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { DollarSign, CreditCard, Wallet } from "lucide-react";

const Fees = () => {
  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      <section className="relative py-20 px-6 bg-gradient-to-r from-secondary to-secondary/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fees Structure</h1>
          <p className="text-xl text-white/90">Affordable quality education for aspiring educators</p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          <Card className="shadow-soft border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-primary" />
                Diploma in Early Childhood Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Tuition per Semester</div>
                  <div className="text-2xl font-bold text-primary">UGX 350,000</div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Total Program Cost (4 semesters)</div>
                  <div className="text-2xl font-bold text-primary">UGX 1,400,000</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Duration: 2 years (4 semesters)</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-t-4 border-t-secondary">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-secondary" />
                Certificate in Early Childhood Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Tuition per Semester</div>
                  <div className="text-2xl font-bold text-secondary">UGX 280,000</div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Total Program Cost (4 semesters)</div>
                  <div className="text-2xl font-bold text-secondary">UGX 1,120,000</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Duration: 2 years (4 semesters)</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-t-4 border-t-accent">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <DollarSign className="h-6 w-6 text-accent" />
                Child Care Program
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Tuition per Semester</div>
                  <div className="text-2xl font-bold text-accent">UGX 280,000</div>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Total Program Cost (2 semesters)</div>
                  <div className="text-2xl font-bold text-accent">UGX 560,000</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Duration: 1 year (2 semesters)</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft bg-muted/30">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <Wallet className="h-6 w-6 text-primary" />
                Additional Fees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-muted-foreground">Application Fee (one-time)</span>
                  <span className="font-semibold">UGX 50,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-muted-foreground">Registration Fee (one-time)</span>
                  <span className="font-semibold">UGX 100,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-muted-foreground">Accommodation (per semester, optional)</span>
                  <span className="font-semibold">UGX 200,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-muted-foreground">Teaching Practice Materials</span>
                  <span className="font-semibold">UGX 150,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Examination Fee (per semester)</span>
                  <span className="font-semibold">UGX 80,000</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-l-4 border-l-primary bg-primary/5">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-3">
                <CreditCard className="h-6 w-6 text-primary" />
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                <strong>Payment Plans Available:</strong> We offer flexible payment options. Full semester fees can be paid in installments.
              </p>
              <p className="text-muted-foreground">
                <strong>Payment Methods:</strong> Cash, Bank Transfer, Mobile Money (MTN, Airtel)
              </p>
              <p className="text-muted-foreground">
                <strong>Bank Details:</strong> Contact our admissions office for bank account information.
              </p>
              <p className="text-sm text-muted-foreground italic mt-4">
                Note: All fees are subject to change. Please confirm current fees during application.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Fees;
