import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import schoolLogo from "@/assets/school-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const aboutDropdown = [
    { to: "/about/who-we-are", label: "Who We Are" },
    { to: "/about/mission-vision", label: "Mission, Vision & Core Values" },
    { to: "/about/leadership", label: "Leadership & Staff" },
    { to: "/about/facilities", label: "Institute & Facilities" },
    { to: "/about/accreditation", label: "Accreditation & Partnerships" },
  ];

  const programsDropdown = [
    { to: "/programs/diploma", label: "Diploma in ECD" },
    { to: "/programs/certificate", label: "Certificate in ECD" },
    { to: "/programs/short-courses", label: "Short Courses / Refresher Training" },
    { to: "/programs/teaching-practice", label: "Teaching Practice" },
    { to: "/programs/curriculum", label: "Curriculum Overview" },
  ];

  const admissionsDropdown = [
    { to: "/admissions/how-to-apply", label: "How to Apply" },
    { to: "/admissions/requirements", label: "Admission Requirements" },
    { to: "/admissions/fees", label: "Fees Structure" },
    { to: "/admissions/scholarships", label: "Scholarships & Support" },
    { to: "/admissions/intake-dates", label: "Intake Dates" },
    { to: "/admissions/faqs", label: "FAQs" },
  ];

  const studentLifeDropdown = [
    { to: "/student-life/institution-life", label: "Institution Life" },
    { to: "/student-life/clubs-activities", label: "Clubs & Activities" },
    { to: "/student-life/gallery", label: "Gallery" },
  ];

  const newsContactDropdown = [
    { to: "/news-events", label: "News & Events" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={schoolLogo} 
              alt="LECDTTI Logo" 
              className="w-14 h-14 object-contain"
            />
            <div className="hidden md:block">
              <div className="font-bold text-primary text-lg">LECDTTI</div>
              <div className="text-xs text-muted-foreground">Ethics and Integrity</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Home
              </Button>
            </Link>

            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  About Us <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background z-50">
                {aboutDropdown.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to} className="w-full cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Programs Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  Programs <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background z-50">
                {programsDropdown.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to} className="w-full cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Admissions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  Admissions <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background z-50">
                {admissionsDropdown.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to} className="w-full cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Student Life Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  Student Life <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background z-50">
                {studentLifeDropdown.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to} className="w-full cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* News & Contact Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  News & Contact <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background z-50">
                {newsContactDropdown.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to} className="w-full cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 animate-fade-in">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Home
            </Link>

            {/* About Us Mobile */}
            <div className="px-4 py-2">
              <div className="font-semibold text-foreground mb-2">About Us</div>
              {aboutDropdown.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Programs Mobile */}
            <div className="px-4 py-2">
              <div className="font-semibold text-foreground mb-2">Programs</div>
              {programsDropdown.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Admissions Mobile */}
            <div className="px-4 py-2">
              <div className="font-semibold text-foreground mb-2">Admissions</div>
              {admissionsDropdown.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Student Life Mobile */}
            <div className="px-4 py-2">
              <div className="font-semibold text-foreground mb-2">Student Life</div>
              {studentLifeDropdown.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* News & Contact Mobile */}
            <div className="px-4 py-2">
              <div className="font-semibold text-foreground mb-2">News & Contact</div>
              {newsContactDropdown.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
