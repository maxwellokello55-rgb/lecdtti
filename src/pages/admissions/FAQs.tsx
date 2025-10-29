import { Card, CardContent } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqCategories = [
    {
      category: "Admissions",
      questions: [
        {
          q: "What are the minimum entry requirements?",
          a: "For Diploma: UCE with 5 passes and UACE with 1 principal + 1 subsidiary. For Certificate: UCE with 5 passes or PLE Division 3. For Child Care Program: PLE certificate. All applicants must be at least 18 years old."
        },
        {
          q: "When can I apply?",
          a: "We have two intakes per year. Main intake: January-February (classes start in March). Second intake: July-August (classes start in September). Applications are reviewed on a rolling basis."
        },
        {
          q: "How do I apply?",
          a: "Visit our campus at Kichope Cell, Lira City to get an application form. Complete it with required documents (academic certificates, ID, photos) and submit it to our admissions office along with the application fee."
        },
        {
          q: "Is there an application fee?",
          a: "Yes, the application fee is UGX 50,000 (one-time, non-refundable). This covers application processing and interview costs."
        },
      ]
    },
    {
      category: "Programs & Curriculum",
      questions: [
        {
          q: "What is the difference between Diploma and Certificate programs?",
          a: "The Diploma program is more comprehensive and requires higher entry qualifications (UACE). Both are 2-year programs, but the Diploma covers advanced topics and provides more career advancement opportunities. The Certificate is ideal for those with lower qualifications or wanting to start teaching quickly."
        },
        {
          q: "How long are the programs?",
          a: "Diploma and Certificate programs are 2 years (4 semesters). The Child Care Program is 1 year (2 semesters)."
        },
        {
          q: "Is there teaching practice included?",
          a: "Yes! All programs include supervised teaching practice at partner nursery schools and daycare centers. This hands-on experience is essential for developing practical skills."
        },
        {
          q: "Are the programs recognized by the government?",
          a: "Yes, LECDTTI is accredited by the Ministry of Education and Sports Uganda. Our qualifications are nationally recognized."
        },
      ]
    },
    {
      category: "Fees & Payment",
      questions: [
        {
          q: "How much is the tuition?",
          a: "Diploma: UGX 350,000 per semester. Certificate: UGX 280,000 per semester. Child Care Program: UGX 280,000 per semester. Additional fees apply for registration, exams, and accommodation."
        },
        {
          q: "Can I pay in installments?",
          a: "Yes, we offer flexible payment plans. You can pay tuition in installments throughout the semester without additional interest charges. At least 50% must be paid before classes start."
        },
        {
          q: "Are scholarships available?",
          a: "Yes! We offer merit-based scholarships, community development scholarships, and women empowerment fund support. Scholarship applications are reviewed separately from admissions."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept cash, bank transfers, and mobile money (MTN and Airtel Money). Contact our finance office for bank account details."
        },
      ]
    },
    {
      category: "Student Life",
      questions: [
        {
          q: "Is accommodation available?",
          a: "Yes, we have dormitory facilities (2 for ladies, 1 for gentlemen) at UGX 200,000 per semester. Accommodation is optional and subject to availability."
        },
        {
          q: "Is there a library?",
          a: "Yes, we have a library with learning resources, textbooks, and study spaces available to all students."
        },
        {
          q: "What student support services are available?",
          a: "We provide academic counseling, welfare support, career guidance, and assistance with teaching practice placements. Our student welfare team is here to help."
        },
        {
          q: "Are there clubs and activities?",
          a: "Yes! Students can participate in various clubs, community outreach programs, and educational events throughout the year."
        },
      ]
    },
    {
      category: "Career & Graduation",
      questions: [
        {
          q: "What can I do after graduation?",
          a: "Graduates work as nursery school teachers, daycare providers, ECD trainers, education officers, or start their own nursery schools. Many continue to degree programs in education."
        },
        {
          q: "Do you help with job placement?",
          a: "Yes, we maintain partnerships with nursery schools and daycare centers throughout the region and assist graduates with job placement opportunities."
        },
        {
          q: "Can I upgrade from Certificate to Diploma?",
          a: "Yes! Certificate holders with good performance can apply to upgrade to the Diploma program with some credit transfers. Contact our academic office for details."
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
            <HelpCircle className="h-12 w-12" />
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90">Find answers to common questions about LECDTTI</p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl space-y-12">
          {faqCategories.map((category, idx) => (
            <Card key={idx} className="shadow-soft">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-primary mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, qIdx) => (
                    <AccordionItem key={qIdx} value={`${idx}-${qIdx}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}

          <Card className="shadow-soft bg-primary/5 border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                If you couldn't find the answer you were looking for, please don't hesitate to contact us directly. 
                Our admissions team is happy to help!
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="tel:+256783254350" 
                  className="text-primary hover:underline font-semibold"
                >
                  📞 +256 783 254 350
                </a>
                <span className="text-muted-foreground">|</span>
                <a 
                  href="https://wa.me/256783254350" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
