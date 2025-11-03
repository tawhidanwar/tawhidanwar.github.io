import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, Calendar, Award, Mic } from "lucide-react";
import administrativeData from "@/data/administrative-data.json";

export function AdministrativeSection() {
  const { roles, judging, talksOutreach } = administrativeData;

  return (
    <section id="administrative" className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 flex items-center gap-3">
            <Briefcase className="h-10 w-10" />
            ADMINISTRATIVE & DEPARTMENTAL ROLES
          </h2>
        </div>

        {/* Administrative Roles */}
        <div className="space-y-8 mb-16">
          {roles.map((role, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <CardTitle className="text-xl font-serif flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary flex-shrink-0" />
                    <span>{role.title}</span>
                  </CardTitle>
                  <Badge variant="outline" className="border-primary/30 text-primary flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {role.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2.5">
                  {role.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 text-lg leading-none">•</span>
                      <span className="text-[15px] leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Judging */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold mb-8 flex items-center gap-3">
            <Award className="h-7 w-7 text-primary" />
            {judging.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {judging.competitions.map((competition, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-serif text-primary">
                    {competition.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">
                    {competition.organizer}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {competition.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Talks & Outreach */}
        <div>
          <h3 className="text-2xl font-serif font-semibold mb-8 flex items-center gap-3">
            <Mic className="h-7 w-7 text-primary" />
            {talksOutreach.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {talksOutreach.events.map((event, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-lg font-serif text-primary">
                      {event.name}
                    </CardTitle>
                    <Badge variant="outline" className="border-primary/30 text-primary whitespace-nowrap">
                      {event.year}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {event.organizer}
                  </p>
                </CardHeader>
                {event.description && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
