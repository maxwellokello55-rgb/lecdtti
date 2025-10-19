import { Card, CardContent } from "@/components/ui/card";
import { Camera, Video, Upload } from "lucide-react";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-white py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-white/90">
            Capturing moments of learning, growth, and community at LECDTTI
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          {/* Placeholder for Photos */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
              <Camera className="mr-3 h-8 w-8 text-primary" />
              Photo Gallery
            </h2>
            
            <Card className="shadow-soft border-2 border-dashed">
              <CardContent className="py-20 text-center">
                <Upload className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-3">Photo Gallery Coming Soon</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  We're building an inspiring collection of photos showcasing our campus, classrooms, students, 
                  teaching activities, and community events. Check back soon to see LECDTTI in action!
                </p>
                <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg max-w-xl mx-auto">
                  <p className="font-semibold mb-2">What you'll see here:</p>
                  <ul className="space-y-1 text-left">
                    <li>• Classroom learning and practical sessions</li>
                    <li>• Student activities and achievements</li>
                    <li>• Campus facilities and infrastructure</li>
                    <li>• Graduation ceremonies and special events</li>
                    <li>• Community engagement and partnerships</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Placeholder for Videos */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
              <Video className="mr-3 h-8 w-8 text-secondary" />
              Video Gallery
            </h2>
            
            <Card className="shadow-soft border-2 border-dashed">
              <CardContent className="py-20 text-center">
                <Upload className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-3">Video Gallery Coming Soon</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  Experience LECDTTI through dynamic video content featuring teaching demonstrations, student testimonials, 
                  campus tours, and special moments from our community.
                </p>
                <div className="text-sm text-muted-foreground bg-muted/30 p-4 rounded-lg max-w-xl mx-auto">
                  <p className="font-semibold mb-2">What you'll see here:</p>
                  <ul className="space-y-1 text-left">
                    <li>• Virtual campus tours</li>
                    <li>• Teaching demonstrations and methodology</li>
                    <li>• Student and alumni testimonials</li>
                    <li>• Special events and celebrations</li>
                    <li>• Messages from leadership and staff</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info Section */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-none shadow-soft">
              <CardContent className="py-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Want to Share Your LECDTTI Story?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  If you have photos or videos from your time at LECDTTI that you'd like to share, 
                  we'd love to hear from you! Contact us to contribute to our growing gallery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
