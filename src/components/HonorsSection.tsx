import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Trophy } from "lucide-react";
import aboutData from "@/data/about-data.json";

export function HonorsSection() {
  const { honors } = aboutData;

  return (
    <section id="honors" className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 flex items-center gap-3">
            <Award className="h-10 w-10" />
            AWARDS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {honors.map((honor, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[17px] text-foreground font-medium leading-relaxed">
                      {honor}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
