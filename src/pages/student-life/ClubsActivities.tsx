import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTAButtons from "@/components/CTAButtons";
import { Users, Music, BookOpen, Heart, Trophy, Sparkles } from "lucide-react";

const ClubsActivities = () => {
  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      <section className="relative py-20 px-6 bg-gradient-to-r from-accent to-accent/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Clubs & Activities</h1>
          <p className="text-xl text-white/90">Get involved and make the most of your student experience</p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-lg text-muted-foreground">
              At LECDTTI, student life extends beyond the classroom. We offer various clubs and activities 
              that help you develop leadership skills, build friendships, and contribute to the community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-soft border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Music className="h-6 w-6 text-primary" />
                  Drama & Music Club
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Express your creativity through drama, singing, and dance. Learn performance skills that you can 
                  use in your future classroom to engage young learners through the arts.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-secondary" />
                  Reading & Storytelling Club
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop your storytelling abilities and discover children's literature. Practice techniques for 
                  reading aloud and creating engaging stories that captivate young minds.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-t-4 border-t-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-accent" />
                  Sports & Recreation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Stay active and healthy through netball, football, volleyball, and other sports activities. 
                  Learn how physical education contributes to child development.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-primary" />
                  Community Outreach Program
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Make a difference in local communities through volunteer activities, awareness campaigns, 
                  and educational outreach to children and families in need.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-t-4 border-t-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-secondary" />
                  Arts & Crafts Workshop
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create teaching materials, learn hands-on activities for children, and explore various art 
                  techniques that promote creativity and fine motor skills development.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-t-4 border-t-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-accent" />
                  Student Council
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Represent your fellow students, organize events, and develop leadership skills. 
                  The Student Council is the voice of students in institute decision-making.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-soft bg-muted/30">
            <CardHeader>
              <CardTitle className="text-2xl">Annual Events & Activities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-lg border">
                  <h4 className="font-semibold text-primary mb-2">🎓 Orientation Week</h4>
                  <p className="text-sm text-muted-foreground">
                    Welcome new students with team-building activities, campus tours, and social events
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg border">
                  <h4 className="font-semibold text-primary mb-2">📚 Education Week</h4>
                  <p className="text-sm text-muted-foreground">
                    Workshops, seminars, and demonstrations on early childhood education best practices
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg border">
                  <h4 className="font-semibold text-primary mb-2">🎉 Graduation Ceremony</h4>
                  <p className="text-sm text-muted-foreground">
                    Celebrate achievements with a formal ceremony recognizing graduating students
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg border">
                  <h4 className="font-semibold text-primary mb-2">⚽ Sports Day</h4>
                  <p className="text-sm text-muted-foreground">
                    Annual inter-house sports competition promoting teamwork and physical fitness
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg border">
                  <h4 className="font-semibold text-primary mb-2">🎭 Talent Show</h4>
                  <p className="text-sm text-muted-foreground">
                    Showcase your talents in music, drama, poetry, and other performing arts
                  </p>
                </div>
                <div className="p-4 bg-background rounded-lg border">
                  <h4 className="font-semibold text-primary mb-2">🤝 Community Service Day</h4>
                  <p className="text-sm text-muted-foreground">
                    Give back to the community through organized volunteer activities and outreach
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-l-4 border-l-primary bg-primary/5">
            <CardHeader>
              <CardTitle>Get Involved!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                All clubs and activities are open to students. Whether you want to develop new skills, 
                meet new friends, or contribute to the community, there's something for everyone at LECDTTI.
              </p>
              <p className="text-sm text-muted-foreground italic">
                For more information about joining clubs or starting a new one, contact the Student Welfare Office.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ClubsActivities;
