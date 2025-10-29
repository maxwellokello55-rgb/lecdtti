import CTAButtons from "@/components/CTAButtons";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import administrationBlock from "@/assets/administration-block.jpg";
import administrationBlock1 from "@/assets/administration-block-1.jpg";
import administrationBlock2 from "@/assets/administration-block-2.jpg";
import administrationBlock3 from "@/assets/administration-block-3.jpg";
import administrationBlock4 from "@/assets/administration-block-4.jpg";
import administrationBlockFront from "@/assets/administration-block-front.jpg";
import administrationBlockGarden from "@/assets/administration-block-garden.jpg";
import ictRoom from "@/assets/ict-room.jpg";
import morningBriefing from "@/assets/morning-briefing.jpg";
import principalOffice from "@/assets/principal-office.jpg";
import principalOffice2 from "@/assets/principal-office-2.jpg";
import staffPhoto from "@/assets/staff-photo.jpg";
import staffPhoto2 from "@/assets/staff-photo-2.jpg";
import staffTeamPhoto from "@/assets/staff-team-photo.jpg";
import studentsAssembly from "@/assets/students-assembly.jpg";
import studentsAssembly2 from "@/assets/students-assembly-2.jpg";
import studentsAssembly3 from "@/assets/students-assembly-3.jpg";
import studentsExamHall from "@/assets/students-exam-hall.jpg";
import studentsExams from "@/assets/students-exams.jpg";
import studentsReady from "@/assets/students-ready.jpg";
import studentsSittingExams from "@/assets/students-sitting-exams.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: administrationBlock, caption: "Administration Block", category: "Campus" },
    { src: administrationBlock1, caption: "Administration Building View", category: "Campus" },
    { src: administrationBlock2, caption: "Administration Block Entrance", category: "Campus" },
    { src: administrationBlock3, caption: "Administration Complex", category: "Campus" },
    { src: administrationBlock4, caption: "Administration Block Side View", category: "Campus" },
    { src: administrationBlockFront, caption: "Administration Block Front", category: "Campus" },
    { src: administrationBlockGarden, caption: "Campus Garden Area", category: "Campus" },
    { src: ictRoom, caption: "ICT Room", category: "Facilities" },
    { src: principalOffice, caption: "Principal's Office", category: "Facilities" },
    { src: principalOffice2, caption: "Principal's Office Interior", category: "Facilities" },
    { src: morningBriefing, caption: "Staff Morning Briefing", category: "Staff" },
    { src: staffPhoto, caption: "Staff Members", category: "Staff" },
    { src: staffPhoto2, caption: "Staff Team", category: "Staff" },
    { src: staffTeamPhoto, caption: "Full Staff Team Photo", category: "Staff" },
    { src: studentsAssembly, caption: "Students at Morning Assembly", category: "Student Life" },
    { src: studentsAssembly2, caption: "Assembly Gathering", category: "Student Life" },
    { src: studentsAssembly3, caption: "Students Assembly", category: "Student Life" },
    { src: studentsReady, caption: "Students Ready for Practice", category: "Student Life" },
    { src: studentsExamHall, caption: "Examination Hall", category: "Academics" },
    { src: studentsExams, caption: "Students During Exams", category: "Academics" },
    { src: studentsSittingExams, caption: "Students Taking Exams", category: "Academics" },
  ];

  const categories = ["All", "Campus", "Facilities", "Staff", "Student Life", "Academics"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <CTAButtons />
      <section className="relative py-20 px-6 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl text-white/90">Explore life at LECDTTI through our photo collection</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-soft"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden shadow-soft hover:shadow-medium transition-all cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-semibold">{image.caption}</p>
                      <p className="text-sm text-white/80">{image.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-primary transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            <img 
              src={selectedImage} 
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
