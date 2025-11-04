import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { Users, GraduationCap, Shield } from "lucide-react";
import staffPhoto from "@/assets/staff-photo.jpg";
import staffPhoto2 from "@/assets/staff-photo-2.jpg";
import staffTeamPhoto from "@/assets/staff-team-photo.jpg";

const Leadership = () => {
  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Leadership & Staff</h1>
          <p className="text-xl text-white/90 max-w-3xl animate-fade-in">
            Meet our dedicated team of professionals committed to excellence in early childhood education
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Management Structure */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Shield className="h-8 w-8 text-primary" />
                Management Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <p>
                LECDTTI is governed by a Board of Directors that provides strategic oversight and ensures the institute's adherence to its mission and values. The day-to-day operations are managed by the Principal, who works closely with the teaching staff to deliver high-quality education.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground">Board of Directors</h3>
                <p>Our Board comprises experienced professionals who provide strategic direction and oversight:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Ogwang Moses (Chairman & Principal)</li>
                  <li>• Ajok Joan (Warden)</li>
                  <li>• Okello Geoffrey</li>
                  <li>• Orac Joe Jaspher</li>
                  <li>• Angole Godfrey</li>
                  <li>• Otile Alfred</li>
                  <li>• Adur Ruth</li>
                </ul>
                <p className="text-sm italic">Key Responsibilities: Strategic oversight, policy formulation, fundraising, financial oversight, accountability to stakeholders, and long-term planning for institutional growth.</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-foreground">Executive Leadership</h3>
                <div className="border-l-4 border-primary pl-4 space-y-2">
                  <h4 className="font-semibold text-primary">Principal: Ogwang Moses</h4>
                  <p className="text-sm">Chief executive officer responsible for overall leadership, academic affairs, external relations (Kyambogo University, MoES), staff management, and financial oversight.</p>
                </div>
                <div className="border-l-4 border-secondary pl-4 space-y-2">
                  <h4 className="font-semibold text-secondary">Warden: Ajok Joan</h4>
                  <p className="text-sm">Manages student welfare, hostel management, discipline, and facility maintenance coordination.</p>
                </div>
                <div className="border-l-4 border-accent pl-4 space-y-2">
                  <h4 className="font-semibold text-accent">Project Manager: Opio Denis</h4>
                  <p className="text-sm">Oversees all construction projects, ensuring adherence to timelines and budget, managing building teams.</p>
                </div>
              </div>

              <p>
                Our current team consists of 9 dedicated staff members, including qualified Grade V and Diploma-level educators, with several tutors holding Bachelor's degrees in education. As part of our growth plan, we are actively recruiting an additional 9 tutors to bring our total staff to 18, ensuring an improved student-to-teacher ratio and enhanced learning outcomes.
              </p>
            </CardContent>
          </Card>

          {/* Staff Photos */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-soft overflow-hidden">
                <img 
                  src={staffTeamPhoto} 
                  alt="LECDTTI Staff Team" 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <p className="text-center text-muted-foreground">Our Dedicated Staff Team</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft overflow-hidden">
                <img 
                  src={staffPhoto} 
                  alt="LECDTTI Staff Member" 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <p className="text-center text-muted-foreground">Committed to Excellence</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft overflow-hidden">
                <img 
                  src={staffPhoto2} 
                  alt="LECDTTI Staff Member" 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-4">
                  <p className="text-center text-muted-foreground">Professional Educators</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Staff Qualifications */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Our Tutors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  Our teaching staff are highly qualified professionals with extensive experience in early childhood education. They bring a wealth of knowledge and practical expertise to the classroom, ensuring that our students receive the best possible training.
                </p>
                <p>
                  All tutors are committed to our core values of professionalism, child-centeredness, and continuous improvement, and they actively engage in ongoing professional development.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-secondary" />
                  Staff Expansion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>
                  As part of our strategic growth plan, we are actively recruiting additional qualified tutors to support our expanding student body and maintain our commitment to quality education.
                </p>
                <div className="pt-4 space-y-2">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold">Current Staff:</span>
                    <span className="text-primary">9</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-semibold">Target Staff:</span>
                    <span className="text-secondary">18</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-semibold">Student-to-Staff Ratio:</span>
                    <span className="text-accent">28:1 (improving)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Join Our Team */}
          <Card className="shadow-soft bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Join Our Team</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Are you a qualified educator passionate about early childhood development? We're always looking for dedicated professionals to join our growing team. Contact us to learn about current opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
