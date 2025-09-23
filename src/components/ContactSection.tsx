import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Building, Send } from "lucide-react";
import contactData from "@/data/contact-data.json";

export function ContactSection() {
  const { contactInfo, officeHours, appointmentLink } = contactData;

  // Map icon names to components
  const iconMap = {
    Mail,
    Phone,
    MapPin,
    Building
  };
  
  // Add the actual icon components to contact info
  const contactInfoWithIcons = contactInfo.map(info => ({
    ...info,
    icon: iconMap[info.icon as keyof typeof iconMap]
  }));

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
            Contact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch for collaborations, academic inquiries, or student consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Office Hours */}
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
                <CardTitle className="text-xl font-serif">Office Hours</CardTitle>
                <CardDescription>
                  Drop by during these times or schedule an appointment
                </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border/50">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open(appointmentLink, "_blank")}
                >
                  Schedule Appointment
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfoWithIcons.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">{info.label}</div>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl font-serif">Send a Message</CardTitle>
              <CardDescription>
                I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input placeholder="Research collaboration inquiry" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your inquiry or research interests..."
                    rows={6}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-academic"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
}