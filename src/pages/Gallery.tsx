import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Video, Youtube } from "lucide-react";
import morningBriefing from "@/assets/morning-briefing.jpg";
import principalOffice from "@/assets/principal-office.jpg";
import staffPhoto from "@/assets/staff-photo.jpg";
import studentsAssembly from "@/assets/students-assembly.jpg";
import studentsExams from "@/assets/students-exams.jpg";
import administrationBlock from "@/assets/administration-block.jpg";
import { useState, useEffect } from "react";
import administrationBlockFront from "@/assets/administration-block-front.jpg";
import administrationBlockGarden from "@/assets/administration-block-garden.jpg";
import studentsAssembly3 from "@/assets/students-assembly-3.jpg";
import studentsExamHall from "@/assets/students-exam-hall.jpg";
import staffTeamPhoto from "@/assets/staff-team-photo.jpg";
import studentsReady from "@/assets/students-ready.jpg";

const Gallery = () => {
  const [currentBg, setCurrentBg] = useState(0);
  
  const backgrounds = [
    administrationBlockFront,
    administrationBlockGarden,
    studentsAssembly3,
    studentsExamHall,
    staffTeamPhoto,
    studentsReady
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative py-16 px-6 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {backgrounds.map((bg, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                currentBg === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/30 to-primary/20"></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Gallery</h1>
          <p className="text-xl text-white/90">
            Capturing moments of learning, growth, and community at LECDTTI
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          {/* Photo Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
              <Camera className="mr-3 h-8 w-8 text-primary" />
              Photo Gallery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { image: studentsReady, caption: "Students ready for school practice" },
                { image: studentsAssembly, caption: "Students at morning assembly" },
                { image: studentsExams, caption: "Students during examinations" },
                { image: morningBriefing, caption: "Staff morning briefing" },
                { image: staffPhoto, caption: "LECDTTI Staff Team" },
                { image: principalOffice, caption: "Principal in the office" },
                { image: administrationBlock, caption: "Administration Block" },
              ].map((item, index) => (
                <Card key={index} className="overflow-hidden shadow-soft hover:shadow-medium transition-all group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-medium">{item.caption}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Video Gallery */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
              <Video className="mr-3 h-8 w-8 text-secondary" />
              Video Gallery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden shadow-soft">
                <CardContent className="p-0">
                  <video 
                    controls 
                    className="w-full h-auto"
                    poster={studentsAssembly}
                  >
                    <source src="/videos/students-morning-circle.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Students Morning Circle</h3>
                    <p className="text-muted-foreground text-sm">
                      Daily morning activities at LECDTTI
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-soft">
                <CardContent className="p-0">
                  <video 
                    controls 
                    className="w-full h-auto"
                    poster={morningBriefing}
                  >
                    <source src="/videos/tutor-demonstration-lesson.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Tutor Demonstration Lesson</h3>
                    <p className="text-muted-foreground text-sm">
                      A tutor conducting a demonstration lesson for students at LECDTTI
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-none shadow-soft">
              <CardContent className="py-8 text-center space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Want to Share Your LECDTTI Story?</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    If you have photos or videos from your time at LECDTTI that you'd like to share, 
                    we'd love to hear from you! Contact us to contribute to our growing gallery.
                  </p>
                </div>
                <div className="pt-4">
                  <Button 
                    size="lg" 
                    variant="default"
                    onClick={() => window.open("https://youtube.com/@LECDTTI", "_blank")}
                  >
                    <Youtube className="mr-2 h-5 w-5" />
                    Visit Our YouTube Channel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
