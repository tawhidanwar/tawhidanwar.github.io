import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ResearchSection } from "@/components/ResearchSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { TeachingSection } from "@/components/TeachingSection";
import { ContactSection } from "@/components/ContactSection";
import professorData from "@/data/professor-data.json";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="academic-theme">
      <div className="min-h-screen bg-background">
        {/* Sidebar for desktop */}
        <Sidebar />
        
        {/* Mobile Navigation */}
        <Navigation />
        
        {/* Main content with left margin on desktop to account for sidebar */}
        <div className="lg:ml-72">
          <main>
            <HeroSection />
            <AboutSection />
            {/* <ResearchSection /> */}
            <PublicationsSection />
            <TeachingSection />
            <ContactSection />
          </main>
          
          {/* Footer */}
          <footer className="bg-card border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-serif font-semibold mb-4">{professorData.personal.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {professorData.personal.title} at {professorData.personal.institution}, dedicated to student-centered learning and large-scale CS education.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                    {/* <li><a href="#research" className="text-muted-foreground hover:text-primary transition-colors">Research</a></li> */}
                    <li><a href="#publications" className="text-muted-foreground hover:text-primary transition-colors">Research & Publications</a></li>
                    <li><a href="#teaching" className="text-muted-foreground hover:text-primary transition-colors">Teaching</a></li>
                    <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-4">Contact Info</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>{professorData.contact.office}</p>
                    <p>{professorData.contact.institution}</p>
                    <p>{professorData.contact.address}</p>
                    <p>
                      <a href={`mailto:${professorData.contact.email}`} className="hover:text-primary transition-colors">
                        {professorData.contact.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border mt-8 pt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  © 2025 {professorData.personal.name}. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;