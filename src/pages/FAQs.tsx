import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, MessageCircle } from "lucide-react";

const FAQs = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/256783254350", "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-white/90">
            Find answers to common questions about LECDTTI programs, admissions, and student life
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-4xl space-y-8">
          {/* Admissions Questions */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Admissions</h2>
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What are the admission requirements?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-3">
                        <strong>For Diploma in ECD:</strong> Uganda Certificate of Education (UCE) with at least 5 passes 
                        or Uganda Advanced Certificate of Education (UACE) with at least 1 principal pass.
                      </p>
                      <p className="text-muted-foreground mb-3">
                        <strong>For Certificate in ECD:</strong> Uganda Certificate of Education (UCE) with at least 3 passes.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>For Child Care Program:</strong> Basic literacy and passion for working with young children.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I apply?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-2">
                        You can apply in three easy ways:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Visit our campus at Kichope Cell, Lira City West Division, Lira City</li>
                        <li>Contact us via WhatsApp at +256 783 254350</li>
                        <li>Call our admissions office at +256 772 506628 or +256 783 254350</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>When does the academic year start?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-2">
                        Our academic year is divided into two semesters:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li><strong>Semester 1:</strong> February to June</li>
                        <li><strong>Semester 2:</strong> August to December</li>
                      </ul>
                      <p className="text-muted-foreground mt-2">
                        Applications are accepted throughout the year, but we recommend applying at least one month 
                        before the semester begins.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Are there any scholarships or financial aid available?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        LECDTTI is committed to making quality education accessible. We offer affordable tuition fees 
                        and flexible payment plans. We are also working on establishing scholarship programs for deserving 
                        students. Please contact our admissions office to discuss payment options and upcoming financial aid 
                        opportunities.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Tuition & Payment */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Tuition & Payment</h2>
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-5">
                    <AccordionTrigger>How much are the tuition fees?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-2">
                        Our tuition fees per semester are:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li><strong>Diploma in ECD:</strong> UGX 350,000 per semester</li>
                        <li><strong>Certificate in ECD:</strong> UGX 280,000 per semester</li>
                        <li><strong>Child Care Program:</strong> UGX 280,000 per semester</li>
                      </ul>
                      <p className="text-muted-foreground mt-2">
                        These fees cover tuition, registration, and basic learning materials. Accommodation is available 
                        at an additional cost.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger>What payment options are available?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        We offer flexible payment plans to accommodate different financial situations. Students can pay 
                        in full at the beginning of the semester or arrange installment payments. Contact our admissions 
                        office to discuss the payment plan that works best for you.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7">
                    <AccordionTrigger>Are there additional costs beyond tuition?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-2">
                        Additional costs may include:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Accommodation (if you choose on-campus housing)</li>
                        <li>Meals and personal expenses</li>
                        <li>Transport for field practice</li>
                        <li>Additional study materials or reference books</li>
                      </ul>
                      <p className="text-muted-foreground mt-2">
                        We strive to keep all costs affordable and transparent.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Programs & Courses */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Programs & Courses</h2>
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-8">
                    <AccordionTrigger>What is the difference between the Diploma and Certificate programs?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-2">
                        Both programs last two years, but they differ in depth and entry requirements:
                      </p>
                      <p className="text-muted-foreground mb-2">
                        <strong>Diploma in ECD:</strong> A comprehensive professional qualification requiring higher entry 
                        qualifications (UCE with 5 passes or UACE). It provides in-depth training for a full professional 
                        career as an early childhood educator.
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Certificate in ECD:</strong> A foundational program requiring UCE with 3 passes. It provides 
                        essential knowledge and practical skills for those entering the field or upgrading their qualifications.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9">
                    <AccordionTrigger>Is the Child Care Program recognized?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Yes, the one-year Child Care Program is designed for individuals who want practical training in 
                        running nurseries and child care facilities. While it is shorter than the Diploma and Certificate 
                        programs, it equips students with essential operational and management skills recognized by employers 
                        in the child care sector.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10">
                    <AccordionTrigger>Are students registered with Kyambogo University?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Yes, currently all LECDTTI students are registered under Kyambogo University, which provides academic 
                        credibility and stability. We are actively working toward full, independent registration with the 
                        Ministry of Education, which will further enhance our institutional capacity and recognition.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-11">
                    <AccordionTrigger>Can I study part-time?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Currently, our programs are offered on a full-time basis to ensure students receive comprehensive 
                        training and adequate practical experience. However, we understand the need for flexibility and are 
                        exploring part-time and evening class options for future intakes. Contact us to express your interest.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Student Life & Facilities */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Student Life & Facilities</h2>
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-12">
                    <AccordionTrigger>Is accommodation available?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Yes, we have three on-campus dormitories (two for ladies and one for gentlemen) with basic amenities 
                        including water and electricity. Accommodation is supervised by our dedicated Warden who manages 
                        student welfare and safety. Contact us for accommodation fees and availability.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-13">
                    <AccordionTrigger>What facilities does the institute have?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-2">
                        Current facilities include:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Five well-equipped classrooms</li>
                        <li>Three dormitories (on-campus housing)</li>
                        <li>Administrative office</li>
                        <li>Sanitation facilities (VIP latrines)</li>
                        <li>Kitchen and dining area</li>
                      </ul>
                      <p className="text-muted-foreground mt-2">
                        We are actively developing a permanent campus that will include a modern library, ICT lab, additional 
                        classrooms, and an ECD demonstration center.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-14">
                    <AccordionTrigger>What is the student-to-teacher ratio?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        We currently have a staff-to-student ratio of approximately 1:28 (9 tutors for 250 students). We are 
                        committed to improving this ratio by recruiting additional qualified tutors to ensure personalized 
                        attention and quality education. Our goal is to expand to 18 tutors as enrollment grows.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-15">
                    <AccordionTrigger>Do students get practical teaching experience?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Yes! Practical experience is a core component of our training. Students participate in field practice 
                        at partner nursery and primary schools throughout the region. This hands-on training is supervised by 
                        experienced educators and prepares students for real-world teaching. We are also establishing an 
                        on-campus ECD demonstration center for additional practical training.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Career & Certification */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Career & Certification</h2>
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-16">
                    <AccordionTrigger>What career opportunities are available after graduation?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-2">
                        Graduates of LECDTTI are well-prepared for diverse careers in early childhood education:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Early childhood teacher in nursery schools</li>
                        <li>Child care center manager or operator</li>
                        <li>Community education facilitator</li>
                        <li>ECD curriculum developer</li>
                        <li>Parent educator and trainer</li>
                        <li>Education program coordinator for NGOs</li>
                      </ul>
                      <p className="text-muted-foreground mt-2">
                        With 95% female enrollment, our graduates are empowering women in education leadership and addressing 
                        the growing demand for qualified ECD teachers in Northern Uganda.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-17">
                    <AccordionTrigger>Will my certificate be recognized by employers?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Yes. Our students are currently registered under Kyambogo University, which provides strong academic 
                        credibility. We are also pursuing full, independent registration with the Ministry of Education to 
                        further enhance recognition. Our practical, hands-on training approach ensures graduates are job-ready 
                        and highly valued by employers across the education sector.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-18">
                    <AccordionTrigger>Can I continue my education after completing my program?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">
                        Absolutely! Many of our graduates go on to pursue higher qualifications:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                        <li>Certificate holders can upgrade to the Diploma program</li>
                        <li>Diploma graduates can pursue Bachelor's degrees in Education or ECD</li>
                        <li>We also plan to offer continuing professional development (CPD) courses for in-service teachers</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-none shadow-soft mt-12">
            <CardContent className="py-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're here to help! Contact our admissions team for personalized assistance with your questions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" onClick={handleWhatsApp}>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
