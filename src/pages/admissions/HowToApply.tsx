import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { ClipboardCheck, FileText, DollarSign, CheckCircle } from "lucide-react";

const HowToApply = () => {
  const steps = [
    { title: "Visit the Institute", description: "Come to our campus in Kichope Cell, Lira City to learn more and get application materials" },
    { title: "Submit Application", description: "Complete the application form with all required documents (academic certificates, ID, passport photos)" },
    { title: "Pay Application Fee", description: "Pay the required application processing fee" },
    { title: "Interview", description: "Attend an interview with our admissions team" },
    { title: "Receive Admission Letter", description: "Successful applicants receive official admission letters" },
    { title: "Pay Tuition", description: "Pay first semester tuition fees to confirm enrollment" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Apply</h1>
          <p className="text-xl text-white/90">Your journey to becoming an early childhood educator starts here</p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          <Card className="shadow-soft">
            <CardHeader><CardTitle className="text-2xl">Application Process</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">{index + 1}</div>
                  <div><h3 className="font-semibold">{step.title}</h3><p className="text-muted-foreground text-sm">{step.description}</p></div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HowToApply;
