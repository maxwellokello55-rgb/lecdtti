import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { Calendar, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IntakeDates = () => {
  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Intake Dates</h1>
          <p className="text-xl text-white/90">Plan your educational journey with us</p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          <Card className="shadow-soft border-t-4 border-t-primary bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-primary" />
                2025 Admissions Now Open!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-4">
                We are currently accepting applications for our 2025 intake. Don't miss this opportunity to start your journey 
                as an early childhood educator!
              </p>
              <Button asChild size="lg">
                <Link to="/admissions/how-to-apply">Apply Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Calendar className="h-6 w-6 text-primary" />
                Academic Calendar 2025
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-l-primary">
                  <h3 className="text-xl font-semibold text-primary mb-3">First Intake (Main Intake)</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Application Period:</p>
                        <p>January 15 - February 28, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Orientation Week:</p>
                        <p>March 10-14, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Classes Begin:</p>
                        <p>March 17, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">First Semester Ends:</p>
                        <p>July 25, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-l-secondary">
                  <h3 className="text-xl font-semibold text-secondary mb-3">Second Intake</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Application Period:</p>
                        <p>July 1 - August 15, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Orientation Week:</p>
                        <p>August 25-29, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Classes Begin:</p>
                        <p>September 1, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Second Semester Ends:</p>
                        <p>December 20, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-xl">Important Deadlines & Reminders</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Early Application Encouraged</p>
                    <p className="text-muted-foreground text-sm">
                      Spaces are limited. Apply early to secure your place and increase scholarship consideration.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Late Applications</p>
                    <p className="text-muted-foreground text-sm">
                      Late applications may be considered on a case-by-case basis depending on space availability.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Tuition Payment</p>
                    <p className="text-muted-foreground text-sm">
                      At least 50% of tuition must be paid before the start of classes. Payment plans available.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Orientation Attendance</p>
                    <p className="text-muted-foreground text-sm">
                      All new students must attend orientation week. Important information and materials will be provided.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-soft bg-accent/5 border-l-4 border-l-accent">
            <CardHeader>
              <CardTitle className="text-xl">Need More Information?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have questions about intake dates, application deadlines, or need to discuss special circumstances, 
                please don't hesitate to contact our admissions office.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/admissions/faqs">View FAQs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default IntakeDates;
