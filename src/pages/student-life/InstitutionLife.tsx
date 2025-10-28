import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { Home, BookOpen, Users, Heart } from "lucide-react";

const InstitutionLife = () => {
  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      <section className="relative py-20 px-6 bg-gradient-to-r from-secondary to-secondary/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Institution Life</h1>
          <p className="text-xl text-white/90">Experience a supportive learning community at LECDTTI</p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          <Card className="shadow-soft">
            <CardHeader><CardTitle className="flex items-center gap-3"><Home className="h-6 w-6 text-primary" />Accommodation</CardTitle></CardHeader>
            <CardContent><p className="text-muted-foreground">We provide dormitory facilities (2 for ladies, 1 for gentlemen) for students who need on-campus housing.</p></CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardHeader><CardTitle className="flex items-center gap-3"><BookOpen className="h-6 w-6 text-primary" />Library & Learning</CardTitle></CardHeader>
            <CardContent><p className="text-muted-foreground">Access to learning resources and study spaces to support your academic journey.</p></CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default InstitutionLife;
