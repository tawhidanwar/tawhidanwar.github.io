import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Quote, Calendar, Users, BookOpen } from "lucide-react";
import publicationsData from "@/data/publications-data.json";

export function PublicationsSection() {
  const { publications } = publicationsData;
  const [showAll, setShowAll] = useState(false);

  const displayedPublications = showAll ? publications : publications.slice(0, 4);

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High Impact":
        return "bg-primary text-primary-foreground";
      case "Review":
        return "bg-academic-blue text-white";
      case "Monograph":
        return "bg-academic-gold text-black";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  return (
    <section id="publications" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 flex items-center gap-3">
            <BookOpen className="h-10 w-10" />
            PUBLICATIONS
          </h2>
        </div>

        {/* Publications list */}
        <div className="space-y-6">
          {displayedPublications.map((pub, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors leading-tight">
                      {pub.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {pub.year}
                      </div>
                      {/* <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {pub.authors.length} authors
                      </div> */}
                      {/* <div className="flex items-center gap-1">
                        <Quote className="h-4 w-4" />
                        {pub.citations} citations
                      </div> */}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <Badge className={getImpactColor(pub.impact)}>
                      {pub.type}
                    </Badge>
                    {/* <Badge variant="outline" className="text-xs">
                      {pub.type}
                    </Badge> */}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium text-foreground">
                      {pub.type === "Journal Article" ? "Journal: " : "Conference: "}
                    </span>
                    <span className="text-primary font-medium">{pub.journal}</span>
                  </div>
                  {/* <div className="text-sm">
                    <span className="font-medium text-foreground">Authors: </span>
                    <span className="text-muted-foreground">{pub.authors.join(", ")}</span>
                  </div> */}
                  {/* <div className="text-sm">
                    <span className="font-medium text-foreground">DOI: </span>
                    <span className="text-muted-foreground font-mono text-xs">{pub.doi}</span>
                  </div> */}
                </div>
                
                <CardDescription className="text-base leading-relaxed">
                  {pub.abstract}
                </CardDescription>

                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group-hover:border-primary group-hover:text-primary"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Paper
                  </Button>
                  {/* <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Quote className="mr-2 h-4 w-4" />
                    Cite
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Toggle button */}
        {publications.length > 4 && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {showAll ? "Show Less" : "View Complete Publication List"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
