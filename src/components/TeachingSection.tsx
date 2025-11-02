import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Clock, Star, Video, BookOpen, TrendingUp } from "lucide-react";
import teachingData from "@/data/teaching-data.json";

export function TeachingSection() {
  const { courses, teachingPhilosophy, achievements, contentCreation, curriculumTransition } = teachingData;

  return (
    <section id="teaching" className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 flex items-center gap-3">
            <GraduationCap className="h-10 w-10" />
            TEACHING EXPERIENCE
          </h2>
        </div>

        {/* Teaching Philosophy */}
        {/* <Card className="mb-12 bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl font-serif text-center">
              {teachingPhilosophy.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              {teachingPhilosophy.content}
            </p>
          </CardContent>
        </Card>  */}

        {/* Current Courses */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold text-center mb-8">Current Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-{Math.ceil(courses.length / 2)} gap-6">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-academic transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-serif group-hover:text-primary transition-colors">
                        {course.code}
                      </CardTitle>
                      <CardDescription className="font-medium text-base mt-1">
                        {course.title}
                      </CardDescription>
                    </div>
                    <Badge 
                      variant={course.level === "Graduate" ? "default" : "secondary"}
                      className={course.level === "Graduate" ? "bg-primary text-primary-foreground" : ""}
                    >
                      {course.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                  
                  {/* <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{course.semester}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{course.students} students</span>
                    </div>
                  </div> */}

                  {/* <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-academic-gold fill-current" />
                      <span className="font-medium">{course.rating}/5.0</span>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group-hover:border-primary group-hover:text-primary"
                    >
                      <GraduationCap className="mr-2 h-4 w-4" />
                      Syllabus
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Content Creation & Pedagogy */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold mb-8 text-center">Content Creation & Pedagogy</h3>
          <Card className="bg-gradient-card border-border/50">
            <CardContent className="pt-6 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {contentCreation.description}
              </p>
              
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Video className="h-5 w-5 text-primary" />
                  Created a large catalog of video materials used on buX and YouTube:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {contentCreation.videoSeries.map((series, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/30">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <span className="text-sm text-muted-foreground">{series.title}</span>
                      </div>
                      <Badge variant="outline" className="border-primary/30 text-primary font-semibold">
                        {series.count} videos
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Impact: </span>
                    <span className="text-muted-foreground">{contentCreation.impact}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Curriculum & Language Transition */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold mb-8 text-center">Curriculum & Language Transition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculumTransition.map((item, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-serif flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{item.year}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-base">{item.transition}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Teaching Awards */}
        {/* <div>
          <h3 className="text-2xl font-serif font-semibold text-center mb-8">Teaching Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-serif text-primary">
                    {achievement.title}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {achievement.organization} • {achievement.year}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}