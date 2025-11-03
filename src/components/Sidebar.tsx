import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import professorPortrait from "@/assets/Tawhid_Anwar_Portrait.jpg";

export function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "EDUCATION", href: "#education" },
    { name: "RESEARCH", href: "#research-interest" },
    { name: "PUBLICATIONS", href: "#publications" },
    { name: "HONORS", href: "#honors" },
    { name: "TEACHING", href: "#teaching" },
    { name: "ADMIN", href: "#administrative" },
    { name: "CONTACT", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      // Add transitioning class to body for animation
      document.body.classList.add('page-transitioning');
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Remove transitioning class after animation
      setTimeout(() => {
        document.body.classList.remove('page-transitioning');
      }, 600);
    }
  };

  const handleProfileClick = () => {
    setActiveSection(""); // Clear active section
    
    // Add transitioning class to body for animation
    document.body.classList.add('page-transitioning');
    
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    // Remove transitioning class after animation
    setTimeout(() => {
      document.body.classList.remove('page-transitioning');
    }, 600);
  };

  // Observe scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#about", "#education", "#research-interest", "#publications", "#honors", "#teaching", "#administrative", "#contact"];
      const scrollPosition = window.scrollY + 150; // Adjusted offset for better detection

      // Find the section that's currently most visible
      let currentSection = "";
      
      for (const sectionId of sections) {
        const section = document.querySelector(sectionId);
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-background/40 backdrop-blur-xl border-r border-border/50 flex-col items-center py-6 px-6 z-50 overflow-hidden shadow-2xl">
      {/* Glassmorphic overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
      
      <div className="relative z-10 w-full flex flex-col items-center h-full">
        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-6">
          <div 
            onClick={handleProfileClick}
            className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl mb-3 mt-5 ring-2 ring-primary/10 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:ring-primary/20"
            title="Back to top"
          >
            <img 
              src={professorPortrait}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Theme Toggle */}
          {/* <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="w-10 h-10 p-0 hover:bg-primary/10 rounded-full backdrop-blur-sm bg-background/30 border border-border/50"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button> */}
        </div>

        {/* Navigation Items */}
        <nav className="w-full flex flex-col space-y-1.5 flex-grow">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`
                text-muted-foreground hover:text-primary 
                px-4 py-3 text-sm font-medium tracking-wide
                transition-all duration-300 rounded-xl text-center
                backdrop-blur-sm border border-transparent
                ${activeSection === item.href 
                  ? 'bg-primary/15 text-primary font-semibold border-primary/30 shadow-lg shadow-primary/10' 
                  : 'hover:bg-background/30 hover:border-primary/20 hover:shadow-md'
                }
              `}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="w-full mt-auto pt-4 flex justify-left">
          <Button
            id="theme-toggle-btn"
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="w-10 h-10 p-0 hover:bg-primary/10 rounded-full backdrop-blur-sm bg-background/30 border border-border/50"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </aside>
  );
}
