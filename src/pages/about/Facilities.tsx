import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { Building, Laptop, BookOpen, Home, Droplet, Zap, Target } from "lucide-react";
import administrationBlockFront from "@/assets/administration-block-front.jpg";
import administrationBlockGarden from "@/assets/administration-block-garden.jpg";
import ictRoom from "@/assets/ict-room.jpg";
import principalOffice from "@/assets/principal-office.jpg";

const Facilities = () => {
  const currentFacilities = [
    { icon: Building, title: "Administrative Office", description: "Single office space for administrative operations" },
    { icon: BookOpen, title: "Classrooms", description: "5 classrooms for various programs" },
    { icon: Home, title: "Dormitories", description: "3 dormitories (2 for ladies, 1 for gentlemen)" },
    { icon: Laptop, title: "ICT Equipment", description: "3 laptops available for student use" },
    { icon: Droplet, title: "Water Connection", description: "Basic water supply" },
    { icon: Zap, title: "Electricity", description: "Basic electrical connections" },
  ];

  const plannedFacilities = [
    "New Administrative Block with modern offices",
    "6 additional well-equipped classrooms",
    "Modern Library with extensive learning resources",
    "ICT Lab with computers and internet access",
    "ECD Demonstration Center for practical training",
    "Staff Housing to attract and retain quality educators",
    "Improved sanitation facilities (VIP latrines)",
    "Enhanced water and electricity infrastructure",
    "Student recreation and common areas",
  ];

  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Institute & Facilities</h1>
          <p className="text-xl text-white/90 max-w-3xl animate-fade-in">
            Exploring our current campus and exciting plans for future development
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Location */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Building className="h-8 w-8 text-primary" />
                Our Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                LECDTTI currently operates from a rented premise in Kichope Cell, Lira City West Division, Lira City, Northern Uganda. This strategic location in a growing urban hub provides easy access for students from across the region.
              </p>
              <p>
                While our current facilities serve our community well, we are actively working toward securing permanent land and constructing a purpose-built campus that will provide an enhanced learning environment for generations to come.
              </p>
            </CardContent>
          </Card>

          {/* Facility Photos */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">Current Facilities</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="shadow-soft overflow-hidden">
                <img 
                  src={administrationBlockFront} 
                  alt="Administration Block Front" 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <p className="text-center text-muted-foreground">Administration Block</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft overflow-hidden">
                <img 
                  src={administrationBlockGarden} 
                  alt="Campus Garden Area" 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <p className="text-center text-muted-foreground">Campus Grounds</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft overflow-hidden">
                <img 
                  src={ictRoom} 
                  alt="ICT Room" 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <p className="text-center text-muted-foreground">ICT Learning Space</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft overflow-hidden">
                <img 
                  src={principalOffice} 
                  alt="Principal's Office" 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <p className="text-center text-muted-foreground">Administrative Office</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentFacilities.map((facility, index) => (
                <Card key={index} className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <facility.icon className="h-6 w-6 text-primary" />
                      {facility.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Future Development */}
          <Card className="shadow-soft bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="h-8 w-8 text-primary" />
                Strategic Campus Development Plan (2025-2027)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Our comprehensive three-year strategic development plan includes the acquisition of permanent land and construction 
                of state-of-the-art facilities to transform LECDTTI into a premier center of excellence for early childhood teacher education.
              </p>
              
              <div className="bg-white rounded-lg p-6 border-l-4 border-primary">
                <h3 className="font-bold text-2xl mb-2 text-primary">Phase 1 Budget: UGX 550,000,000</h3>
                <p className="text-sm text-muted-foreground mb-4">Capital investment for permanent campus establishment</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                      <span className="text-sm font-medium">Land Purchase (1 acre)</span>
                      <span className="font-bold text-primary">UGX 150M</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                      <span className="text-sm font-medium">Admin Block & 6 Classrooms</span>
                      <span className="font-bold text-primary">UGX 200M</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                      <span className="text-sm font-medium">Library & ICT Lab</span>
                      <span className="font-bold text-primary">UGX 50M</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                      <span className="text-sm font-medium">Staff Housing (2 units)</span>
                      <span className="font-bold text-primary">UGX 40M</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                      <span className="text-sm font-medium">VIP Sanitation Facilities</span>
                      <span className="font-bold text-primary">UGX 30M</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                      <span className="text-sm font-medium">Kitchen & Dining Facility</span>
                      <span className="font-bold text-primary">UGX 20M</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-muted/30 rounded">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Fencing & Landscaping</span>
                    <span className="font-bold text-primary">UGX 30M</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-foreground">Implementation Timeline (12-24 Months)</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 border-l-4 border-primary bg-muted/20 rounded">
                    <span className="font-semibold text-sm text-primary whitespace-nowrap">Months 0-3:</span>
                    <span className="text-sm text-muted-foreground">Secure funding and purchase land, complete fencing</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 border-l-4 border-secondary bg-muted/20 rounded">
                    <span className="font-semibold text-sm text-secondary whitespace-nowrap">Months 4-12:</span>
                    <span className="text-sm text-muted-foreground">Construct administrative block and 6 classrooms</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 border-l-4 border-accent bg-muted/20 rounded">
                    <span className="font-semibold text-sm text-accent whitespace-nowrap">Months 10-15:</span>
                    <span className="text-sm text-muted-foreground">Build library, ICT lab, staff houses, sanitation, kitchen & dining facilities</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 border-l-4 border-primary bg-muted/20 rounded">
                    <span className="font-semibold text-sm text-primary whitespace-nowrap">Months 12-18:</span>
                    <span className="text-sm text-muted-foreground">Recruit 9 additional tutors, complete full MoES registration</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4 text-foreground">Strategic Objectives by 2027:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-4xl font-bold text-primary mb-2">500</div>
                    <p className="text-sm text-muted-foreground">Students Enrolled</p>
                    <p className="text-xs text-muted-foreground mt-1">(from current 250)</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <div className="text-4xl font-bold text-secondary mb-2">18</div>
                    <p className="text-sm text-muted-foreground">Qualified Tutors</p>
                    <p className="text-xs text-muted-foreground mt-1">(from current 9)</p>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <div className="text-4xl font-bold text-accent mb-2">100%</div>
                    <p className="text-sm text-muted-foreground">Campus Ownership</p>
                    <p className="text-xs text-muted-foreground mt-1">(eliminating UGX 1.5M monthly rent)</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground pt-4">
                This ambitious development project will establish LECDTTI as a leading institution for early childhood teacher 
                education in Northern Uganda, with modern infrastructure, enhanced resources, and full independent accreditation 
                from the Ministry of Education and Sports.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
