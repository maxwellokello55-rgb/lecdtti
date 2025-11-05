import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import schoolLogo from "@/assets/school-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [studentLifeOpen, setStudentLifeOpen] = useState(false);
  const [newsContactOpen, setNewsContactOpen] = useState(false);

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
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center space-x-3">
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
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
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
                <DropdownMenuItem asChild>
                  <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="w-full cursor-pointer">About Us Home</Link>
                </DropdownMenuItem>
                {aboutDropdown.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to} onClick={() => window.scrollTo(0, 0)} className="w-full cursor-pointer">
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
                <DropdownMenuItem asChild>
                  <Link to="/programs" onClick={() => window.scrollTo(0, 0)} className="w-full cursor-pointer">Programs Home</Link>
                </DropdownMenuItem>
                {programsDropdown.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to} onClick={() => window.scrollTo(0, 0)} className="w-full cursor-pointer">
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
                <DropdownMenuItem asChild>
                  <Link to="/admissions" onClick={() => window.scrollTo(0, 0)} className="w-full cursor-pointer">Admissions Home</Link>
                </DropdownMenuItem>
                {admissionsDropdown.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to} onClick={() => window.scrollTo(0, 0)} className="w-full cursor-pointer">
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
                <DropdownMenuItem asChild>
                  <Link to="/student-life" onClick={() => window.scrollTo(0, 0)} className="w-full cursor-pointer">Student Life Home</Link>
                </DropdownMenuItem>
                {studentLifeDropdown.map((item) => (
                  <DropdownMenuItem key={item.to} asChild>
                    <Link to={item.to} onClick={() => window.scrollTo(0, 0)} className="w-full cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* News & Events */}
            <Link to="/news-events" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                News & Events
              </Button>
            </Link>

            {/* Contact */}
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Contact
              </Button>
            </Link>
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
              onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Home
            </Link>

            {/* About Us Mobile */}
            <Collapsible open={aboutOpen} onOpenChange={setAboutOpen}>
              <div className="px-4 py-2">
                <CollapsibleTrigger className="flex items-center justify-between w-full font-semibold text-foreground">
                  <Link to="/about" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>About Us</Link>
                  {aboutOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-1">
                  {aboutDropdown.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Programs Mobile */}
            <Collapsible open={programsOpen} onOpenChange={setProgramsOpen}>
              <div className="px-4 py-2">
                <CollapsibleTrigger className="flex items-center justify-between w-full font-semibold text-foreground">
                  <Link to="/programs" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>Programs</Link>
                  {programsOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-1">
                  {programsDropdown.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Admissions Mobile */}
            <Collapsible open={admissionsOpen} onOpenChange={setAdmissionsOpen}>
              <div className="px-4 py-2">
                <CollapsibleTrigger className="flex items-center justify-between w-full font-semibold text-foreground">
                  <Link to="/admissions" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>Admissions</Link>
                  {admissionsOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-1">
                  {admissionsDropdown.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Student Life Mobile */}
            <Collapsible open={studentLifeOpen} onOpenChange={setStudentLifeOpen}>
              <div className="px-4 py-2">
                <CollapsibleTrigger className="flex items-center justify-between w-full font-semibold text-foreground">
                  <Link to="/student-life" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>Student Life</Link>
                  {studentLifeOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-1">
                  {studentLifeDropdown.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* News & Events */}
            <Link
              to="/news-events"
              onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              News & Events
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
              className="block px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
