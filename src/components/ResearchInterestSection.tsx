import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import professorData from "@/data/professor-data.json";

export function ResearchInterestSection() {
  const { research } = professorData;

  return (
    <section id="research-interest" className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 flex items-center gap-3">
            <Lightbulb className="h-10 w-10" />
            RESEARCH INTERESTS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Research Areas */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-semibold mb-6">Areas of Interest</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {research.areas.map((area, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-[17px] text-foreground font-medium leading-relaxed">
                        {area}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Profile Link */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-border/50 lg:sticky lg:top-24">
              <CardContent className="pt-6">
                <h3 className="text-xl font-serif font-semibold mb-4">Research Profile</h3>
                <p className="text-muted-foreground mb-6 text-[16px]">
                  Explore my complete research profile, publications, and citations on Google Scholar.
                </p>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
                  onClick={() => window.open(research.researchProfile, "_blank")}
                  type="button"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Google Scholar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
