import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, BookOpen, User } from "lucide-react";
import aboutData from "@/data/about-data.json";

export function AboutSection() {
  const { education, experience, expertise, biography } = aboutData;

  return (
    <>
    <section id="about" className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 flex items-center gap-3">
            <User className="h-10 w-10" />
            ABOUT
          </h2>
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

            {/* Professional Roles Summary */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-serif flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Current Roles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary/30 pl-4">
                      <h4 className="text-[17px] font-semibold text-foreground">
                        {exp.position}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {exp.institution}
                      </p>
                      <p className="text-xs text-primary mt-0.5">
                        {exp.period}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Professional Experience */}
        {/* <div>
          <h3 className="text-3xl font-serif font-semibold mb-12 flex items-start gap-2">
            <Users className="h-7 w-7 mt-1" />
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold text-foreground uppercase">
                    {exp.position}
                  </h4>
                  <span className="text-lg text-primary font-medium whitespace-nowrap ml-4">
                    {exp.period}
                  </span>
                </div>
                <div className="space-y-2 text-[16px]">
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Institution:</span> {exp.institution}
                  </p>
                  <p className="text-muted-foreground italic">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>

    {/* Education Section */}
    <section id="education" className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 flex items-center gap-3">
            <GraduationCap className="h-10 w-10" />
            EDUCATION
          </h2>
        </div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-2xl font-bold text-foreground uppercase">
                  {edu.degree}
                </h4>
                <span className="text-lg text-primary font-medium whitespace-nowrap ml-4">
                  {edu.year}
                </span>
              </div>
              <div className="space-y-2 text-[16px]">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Subject:</span> {edu.focus}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{edu.institution_type}:</span> {edu.institution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  );
}