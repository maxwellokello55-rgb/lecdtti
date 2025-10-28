import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NewsEvents from "./pages/NewsEvents";
import NotFound from "./pages/NotFound";
// About Pages
import WhoWeAre from "./pages/about/WhoWeAre";
import MissionVision from "./pages/about/MissionVision";
import Leadership from "./pages/about/Leadership";
import Facilities from "./pages/about/Facilities";
import Accreditation from "./pages/about/Accreditation";
// Programs Pages
import Diploma from "./pages/programs/Diploma";
import Certificate from "./pages/programs/Certificate";
import ShortCourses from "./pages/programs/ShortCourses";
import TeachingPractice from "./pages/programs/TeachingPractice";
import Curriculum from "./pages/programs/Curriculum";
// Admissions Pages
import HowToApply from "./pages/admissions/HowToApply";
// Student Life Pages
import InstitutionLife from "./pages/student-life/InstitutionLife";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* About Routes */}
              <Route path="/about/who-we-are" element={<WhoWeAre />} />
              <Route path="/about/mission-vision" element={<MissionVision />} />
              <Route path="/about/leadership" element={<Leadership />} />
              <Route path="/about/facilities" element={<Facilities />} />
              <Route path="/about/accreditation" element={<Accreditation />} />
              {/* Programs Routes */}
              <Route path="/programs/diploma" element={<Diploma />} />
              <Route path="/programs/certificate" element={<Certificate />} />
              <Route path="/programs/short-courses" element={<ShortCourses />} />
              <Route path="/programs/teaching-practice" element={<TeachingPractice />} />
              <Route path="/programs/curriculum" element={<Curriculum />} />
              {/* Admissions Routes */}
              <Route path="/admissions/how-to-apply" element={<HowToApply />} />
              {/* Student Life Routes */}
              <Route path="/student-life/institution-life" element={<InstitutionLife />} />
              {/* News & Contact */}
              <Route path="/news-events" element={<NewsEvents />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
