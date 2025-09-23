import { Button } from "@/components/ui/button";
import { Mail, Download, ExternalLink, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-academic.jpg";
import professorPortrait from "@/assets/Tawhid_Anwar_Portrait.jpg";
import professorData from "@/data/professor-data.json";
import { url } from "inspector";
import { FaLinkedin } from 'react-icons/fa';

export function HeroSection() {
  const handleContactClick = () => {
    const email = professorData.personal.email || "";
    // window.location.href = `mailto:${email}`;
    window.open("https://bd.linkedin.com/in/md-tawhid-anwar", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
      {/* default: small devices */}
      <div
        className="absolute inset-0 
          bg-gradient-to-r from-zinc-900/70 via-zinc-800/50 to-transparent 
          backdrop-blur-sm
        "
      />
          
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Professor Portrait - Mobile First */}
          <div className="order-1 lg:order-2 flex justify-center w-full">
            <div className="relative sm: mt-8 lg:mt-0">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden shadow-academic bg-gradient-card border-2 sm:border-4 border-background/50">
                <img 
                  src={professorPortrait}
                  alt={professorData.personal.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full opacity-20"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-academic-gold rounded-full opacity-30"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-tight">
                {professorData.personal.name}
                {/* <span className="block text-primary">{professorData.personal.name.split(' ').slice(1).join(' ')}</span> */}
              </h1>
              <p className="text-lg sm:text-xl text-academic-blue font-medium">
                {professorData.personal.title} • {professorData.personal.institution}
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-amber-50 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {professorData.personal.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  onClick={handleContactClick} 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-academic w-full sm:w-auto"
                >
                  {/* <Mail className="mr-2 h-4 w-4" /> */}
                  {/* <Linkedin className="mr-2 h-4 w-4" /> */}
                  <FaLinkedin size={24} className="h-4 w-4"  />


                  Contact Me
                </Button>
                <Button
                  onClick={() => window.open(professorData.personal.cvLink, '_blank')} 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="text-amber-50 hover:bg-primary/10 w-full sm:w-auto lg:hidden xl:flex"
                  onClick={() => window.open(professorData.research.researchProfile, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Research Profile
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 max-w-sm mx-auto lg:max-w-none lg:mx-0">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">{professorData.stats.publications}</div>
                <div className="text-xs sm:text-sm text-amber-50">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">{professorData.stats.yearsTeaching}</div>
                <div className="text-xs sm:text-sm text-amber-50">Years Teaching</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary">{professorData.stats.awards}</div>
                <div className="text-xs sm:text-sm text-amber-50">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

    </section>
  );
}