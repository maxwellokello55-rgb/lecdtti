import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { BookOpen, Clock, RefreshCw, CheckCircle, Users } from "lucide-react";

const ShortCourses = () => {
  const courseTypes = [
    {
      title: "Child Care Program",
      duration: "1 Year",
      fee: "280,000 UGX per semester",
      description: "Focused on the operational and practical aspects of running a nursery or child care facility",
      enrollment: "9% of current students",
    },
    {
      title: "Refresher Courses",
      duration: "Varies (2-6 weeks)",
      fee: "Contact for pricing",
      description: "Short-term training for practicing teachers to update skills and learn new methodologies",
      enrollment: "Available on demand",
    },
  ];

  const childCareHighlights = [
    "One-year intensive program focusing on practical child care operations",
    "Essential skills for daily management of nursery and child care facilities",
    "Business and administrative aspects of running a child care center",
    "Child health, safety, and nutrition fundamentals",
    "Age-appropriate activities and developmental monitoring",
    "Ideal for aspiring nursery owners and child care providers",
  ];

  const refresherTopics = [
    "Latest early childhood development research and methodologies",
    "New curriculum implementation strategies",
    "Technology integration in early childhood classrooms",
    "Inclusive education and special needs support",
    "Parent engagement and communication skills",
    "Child protection and safeguarding practices",
  ];

  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-accent to-accent/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-4">
            <RefreshCw className="h-16 w-16" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">Short Courses & Refresher Training</h1>
              <p className="text-xl text-white/90 mt-2">Practical programs for specific needs and professional development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Program Overview */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl">Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                LECDTTI offers specialized short-term programs designed to meet specific needs in the early childhood education sector. Whether you're looking to run your own child care facility or update your teaching skills, we have programs tailored for you.
              </p>
              <p>
                These programs are flexible, practical, and focused on delivering immediate value to students and practicing educators.
              </p>
            </CardContent>
          </Card>

          {/* Course Types */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">Available Programs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {courseTypes.map((course, index) => (
                <Card key={index} className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <BookOpen className="h-6 w-6 text-primary" />
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{course.enrollment}</span>
                    </div>
                    <p className="text-muted-foreground">{course.description}</p>
                    <div className="pt-2 font-semibold text-primary">{course.fee}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Child Care Program Details */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <CheckCircle className="h-8 w-8 text-primary" />
                Child Care Program Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {childCareHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Refresher Course Topics */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <RefreshCw className="h-8 w-8 text-secondary" />
                Refresher Course Topics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our refresher courses are designed for practicing teachers and educators who want to stay current with best practices and new developments in early childhood education:
              </p>
              <ul className="space-y-3">
                {refresherTopics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{topic}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Who Should Enroll */}
          <Card className="shadow-soft bg-gradient-to-br from-accent/5 to-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Who Should Enroll?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Child Care Program is ideal for:</h3>
                <ul className="space-y-2 ml-6 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Aspiring nursery school owners and operators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Individuals wanting to start child care businesses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Parents seeking to improve their childcare knowledge</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground">Refresher Courses are ideal for:</h3>
                <ul className="space-y-2 ml-6 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Practicing early childhood educators seeking professional development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Teachers returning to the profession after a break</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Educators wanting to learn new methodologies and approaches</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ShortCourses;
