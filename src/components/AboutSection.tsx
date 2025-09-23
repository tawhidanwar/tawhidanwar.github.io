import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";
import aboutData from "@/data/about-data.json";

export function AboutSection() {
  const { education, experience, honors, expertise, biography } = aboutData;

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            About
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {aboutData.metaDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Biography */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Biography</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {biography.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Research Interests */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-serif flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Research Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((area, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="border-primary/20 text-primary hover:bg-primary/10"
                    >
                      {area}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-serif flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Honors & Awards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {honors.map((honor, index) => (
                    <li key={index} className="text-muted-foreground flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      {honor}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold text-center mb-8 flex items-center justify-center gap-2">
            <GraduationCap className="h-6 w-6" />
            Education
          </h3>
          <div className={`grid gap-6 grid-cols-1 md:grid-cols-${education.length}`}>
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-serif text-primary">
                    {edu.degree}
                  </CardTitle>
                  <CardDescription className="font-medium">
                    {edu.institution}
                  </CardDescription>
                  <div className="text-sm text-muted-foreground">
                    {edu.year}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {edu.focus}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div>
          <h3 className="text-2xl font-serif font-semibold text-center mb-8 flex items-center justify-center gap-2">
            <Users className="h-6 w-6" />
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card 
                key={index} 
                className="hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-serif text-primary">
                        {exp.position}
                      </CardTitle>
                      <CardDescription className="text-base font-medium mt-1">
                        {exp.institution}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-sm">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}