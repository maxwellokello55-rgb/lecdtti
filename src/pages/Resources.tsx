import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, BookOpen, ExternalLink, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources & Downloads</h1>
          <p className="text-xl text-white/90">
            Access important documents, guidelines, and learning materials for ECD education
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-5xl space-y-8">
          {/* Downloadable Documents */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <Download className="h-6 w-6" />
                Downloadable Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Important documents and forms to support your application and studies at LECDTTI.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4 hover:shadow-medium transition-shadow">
                  <div className="flex items-start gap-3">
                    <FileText className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Institute Prospectus</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Comprehensive guide to LECDTTI programs, facilities, and admission requirements
                      </p>
                      <Button variant="outline" size="sm" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Coming Soon
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-medium transition-shadow">
                  <div className="flex items-start gap-3">
                    <FileText className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Application Form</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Download and complete our application form to begin your journey
                      </p>
                      <Button variant="outline" size="sm" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Coming Soon
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-medium transition-shadow">
                  <div className="flex items-start gap-3">
                    <FileText className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Academic Calendar</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Semester dates, examination periods, and important deadlines
                      </p>
                      <Button variant="outline" size="sm" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Coming Soon
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 hover:shadow-medium transition-shadow">
                  <div className="flex items-start gap-3">
                    <FileText className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Student Handbook</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Code of conduct, policies, and guidelines for LECDTTI students
                      </p>
                      <Button variant="outline" size="sm" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Coming Soon
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ministry of Education Resources */}
          <Card className="shadow-soft border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <LinkIcon className="h-6 w-6" />
                Ministry of Education ECD Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Official policies and guidelines from the Ministry of Education and Sports (MoES) Uganda.
              </p>
              <div className="space-y-3 mt-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold mb-1">National Early Childhood Development Policy</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Uganda's framework for quality early childhood development and education
                  </p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <a 
                      href="https://www.education.go.ug" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Visit MoES Website <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold mb-1">ECD Teacher Training Standards</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Professional standards and competencies for ECD educators in Uganda
                  </p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <a 
                      href="https://www.education.go.ug" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Visit MoES Website <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold mb-1">ECD Curriculum Framework</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Guidelines for curriculum development in early childhood education centers
                  </p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <a 
                      href="https://www.education.go.ug" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Visit MoES Website <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommended Reading */}
          <Card className="shadow-soft border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Recommended Reading & Study Materials
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Essential books and resources to support your learning in early childhood development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-secondary">Child Development</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Understanding Child Development</li>
                    <li>• Stages of Early Childhood Growth</li>
                    <li>• Cognitive Development in Young Children</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-secondary">Teaching Methods</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Play-Based Learning Strategies</li>
                    <li>• Classroom Management for ECD</li>
                    <li>• Inclusive Education Practices</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-secondary">Health & Nutrition</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Child Health and Safety</li>
                    <li>• Nutrition for Young Children</li>
                    <li>• First Aid in Child Care Settings</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-secondary">Professional Ethics</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Ethics in Early Childhood Education</li>
                    <li>• Child Rights and Protection</li>
                    <li>• Professional Conduct for Teachers</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground pt-4">
                <strong>Note:</strong> Specific textbook lists and reading materials will be provided to enrolled 
                students at the beginning of each semester.
              </p>
            </CardContent>
          </Card>

          {/* Research & Reports */}
          <Card className="shadow-soft border-l-4 border-l-accent">
            <CardHeader>
              <CardTitle className="text-2xl text-accent flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Research & Reports
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Research insights and institutional reports on early childhood development in Uganda.
              </p>
              <div className="space-y-3 mt-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">LECDTTI Strategic Development Plan 2025-2027</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our comprehensive roadmap for institutional growth, infrastructure development, and 
                    achieving independent registration with the Ministry of Education.
                  </p>
                  <Button variant="outline" size="sm" disabled>
                    <Download className="mr-2 h-4 w-4" />
                    Coming Soon
                  </Button>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-2">The State of ECD in Northern Uganda</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Analysis of early childhood development needs and opportunities in the Northern region.
                  </p>
                  <Button variant="outline" size="sm" disabled>
                    <Download className="mr-2 h-4 w-4" />
                    Coming Soon
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-none shadow-soft">
            <CardContent className="py-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Need Specific Information?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Contact our admissions office for personalized assistance 
                and additional resources.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={() => window.location.href = '/contact'}>
                  Contact Us
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.location.href = '/faqs'}>
                  View FAQs
                </Button>
                <Button size="lg" variant="outline" onClick={() => window.location.href = '/about'}>
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Resources;
