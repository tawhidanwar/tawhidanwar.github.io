import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Calendar } from "lucide-react";
import researchData from "@/data/research-data.json";

export function ResearchSection() {
  const { researchProjects } = researchData;
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? researchProjects : researchProjects.slice(0, 4);

  return (
    <section id="research" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the frontiers of artificial intelligence through innovative research projects
            that push the boundaries of technology and understanding.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-academic transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.year}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {project.collaborators} collaborators
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={project.status === "Active" ? "default" : "secondary"}
                    className={project.status === "Active" ? "bg-primary text-primary-foreground" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>

                <div className="space-y-3">
                  <div className="text-sm">
                    <span className="font-medium text-foreground">Funding: </span>
                    <span className="text-muted-foreground">{project.funding}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs border-primary/20 text-primary hover:bg-primary/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:border-primary group-hover:text-primary"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Toggle button */}
        {researchProjects.length > 4 && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {showAll ? "Show Less" : "View All Research Projects"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
