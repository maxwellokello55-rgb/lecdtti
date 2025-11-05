import { Calendar, Users, BookOpen, Award, TrendingUp, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const NewsEvents = () => {
  const announcements = [
    {
      id: 1,
      title: "2025 Intake Now Open",
      date: "January 2025",
      category: "Admission",
      description: "Applications are now open for Diploma, Certificate, and Child Care programs starting February 2025. Don't miss this opportunity to join our growing community of 250+ students.",
      urgent: true
    },
    {
      id: 2,
      title: "Graduation Ceremony 2025",
      date: "December 2025",
      category: "Event",
      description: "Join us in celebrating our graduating class of 2025. Ceremony details and program schedule to be announced soon.",
      urgent: false
    },
    {
      id: 3,
      title: "Enrollment Milestone Achieved",
      date: "October 2024",
      category: "Achievement",
      description: "LECDTTI celebrates reaching 250 students, growing from just 14 students in 2019. We're proud to report 95% female enrollment, empowering women in education.",
      urgent: false
    }
  ];

  const events = [
    {
      id: 1,
      title: "Community Outreach Program",
      date: "March 2025",
      location: "Local Primary Schools, Lira City",
      description: "Our students and faculty will conduct informational sessions at local primary and secondary schools, sharing insights on early childhood education careers.",
      icon: Users
    },
    {
      id: 2,
      title: "Career Fair Participation",
      date: "April 2025",
      location: "Lira City Center",
      description: "Meet our team and learn about our programs at the annual Lira Education Career Fair. Discover opportunities in Early Childhood Development.",
      icon: TrendingUp
    },
    {
      id: 3,
      title: "Open Day at New Campus",
      date: "Mid 2025",
      location: "LECDTTI Campus",
      description: "Tour our facilities, meet our tutors, and experience hands-on demonstrations at our ECD demonstration center. Registration required.",
      icon: Calendar
    },
    {
      id: 4,
      title: "Professional Development Workshop",
      date: "Quarterly",
      location: "LECDTTI Training Hall",
      description: "Ongoing professional development programs for tutors focusing on modern pedagogical practices and innovative teaching methods.",
      icon: BookOpen
    }
  ];

  const articles = [
    {
      id: 1,
      title: "The Growing Demand for Early Childhood Educators in Northern Uganda",
      excerpt: "As Lira City continues to grow as an urban hub, the demand for qualified early childhood educators is increasing. Families are prioritizing formal early learning, creating opportunities for trained professionals.",
      category: "Industry Trends",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Empowering Women Through Education Leadership",
      excerpt: "With 95% female enrollment, LECDTTI is uniquely positioned to empower women in the education sector. Learn how our programs address gender equity and create opportunities for women in Northern Uganda.",
      category: "Gender Equity",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Child-Centered Learning: Modern Approaches to ECD",
      excerpt: "Explore the latest methodologies in early childhood development that focus on holistic child development, practical skills, and ethical grounding in education.",
      category: "Teaching Methods",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Role of ICT in Modern Teacher Training",
      excerpt: "Technology is transforming education. Discover how LECDTTI is planning to integrate modern ICT labs and digital resources to prepare future educators for 21st-century classrooms.",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "Building Partnerships: Schools and Teacher Training Institutions",
      excerpt: "Learn about our partnerships with local nursery and primary schools that provide practical internship sites and hands-on experience for our students.",
      category: "Partnerships",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "From 14 to 250 Students: Our Growth Story",
      excerpt: "A look back at LECDTTI's remarkable journey from a small institution in 2019 to becoming a leading provider of early childhood education training in Northern Uganda.",
      category: "Success Stories",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Events</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Stay informed about the latest announcements, upcoming events, and insights on early childhood education
          </p>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Bell className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Latest Announcements</h2>
          </div>

          <div className="space-y-6">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className={announcement.urgent ? "border-primary shadow-lg" : ""}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <CardTitle className="text-2xl">{announcement.title}</CardTitle>
                        {announcement.urgent && (
                          <Badge variant="destructive" className="text-xs">Urgent</Badge>
                        )}
                        <Badge variant="secondary">{announcement.category}</Badge>
                      </div>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {announcement.date}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{announcement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Events & Activities Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Upcoming Events & Activities</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event) => {
              const IconComponent = event.icon;
              return (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <CardDescription className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3 w-3" />
                            <span>{event.date}</span>
                          </div>
                          <div className="text-xs">{event.location}</div>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Blog/Articles Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Articles & Insights</h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            Explore our latest articles on early childhood education trends, best practices, and stories from our community.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader className="flex-1">
                  <Badge variant="outline" className="w-fit mb-3">{article.category}</Badge>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    <Button variant="link" className="p-0 h-auto">Read More →</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <Award className="h-16 w-16 mx-auto opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold">Stay Connected</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Don't miss important updates, event announcements, and insights on early childhood education. Follow us on social media or contact us directly.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button variant="secondary" size="lg" onClick={() => { window.scrollTo(0, 0); window.location.href = '/contact'; }}>
              Contact Us
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => { window.scrollTo(0, 0); window.location.href = '/admissions'; }}>
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;
