import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroCarousel from "@/components/home/HeroCarousel";
import StatisticsSection from "@/components/home/StatisticsSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Settings,
  Users,
  Globe,
  CheckCircle2,
  XCircle
} from "lucide-react";

interface Programme {
  title: string;
  subtitle?: string;
  status: "CLOSED" | "OPEN";
  malaysianLink: string;
  internationalLink: string;
  programmeLink: string;
  icon: React.ComponentType<{ className?: string }>;
  color: "red" | "blue" | "grey";
  intakes: string[];
}

const programmes: Programme[] = [
  {
    title: "FOUNDATION",
    status: "OPEN",
    malaysianLink: "#",
    internationalLink: "#",
    programmeLink: "#",
    icon: BookOpen,
    color: "red",
    intakes: ["June 2026", "September 2026"],
  },
  {
    title: "BACHELOR",
    status: "OPEN",
    malaysianLink: "#",
    internationalLink: "#",
    programmeLink: "#",
    icon: GraduationCap,
    color: "blue",
    intakes: ["June 2026"],
  },
  {
    title: "POSTGRADUATE",
    status: "OPEN",
    malaysianLink: "#",
    internationalLink: "#",
    programmeLink: "#",
    icon: Award,
    color: "grey",
    intakes: ["June 2026", "September 2026"],
  },
  {
    title: "SPECIAL PROGRAMME",
    subtitle: "INTEGRATED ENGINEERING",
    status: "OPEN",
    malaysianLink: "#",
    internationalLink: "#",
    programmeLink: "#",
    icon: Settings,
    color: "blue",
    intakes: ["June 2026"],
  },
];

const Index = () => {
  // State to track selected intake for each programme and student type
  const [selectedIntakes, setSelectedIntakes] = useState<Record<string, string>>({});

  const handleIntakeChange = (programmeIndex: number, studentType: "malaysian" | "international", value: string) => {
    const key = `${programmeIndex}-${studentType}`;
    setSelectedIntakes((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const getSelectedIntake = (programmeIndex: number, studentType: "malaysian" | "international", intakes: string[]) => {
    const key = `${programmeIndex}-${studentType}`;
    return selectedIntakes[key] || intakes[0];
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        
        {/* Programme Sections */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {programmes.map((programme, index) => {
                const IconComponent = programme.icon;
                
                return (
                  <Card
                    key={index}
                    className="group relative bg-card rounded-xl shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-border"
                  >
                    {/* Background decoration */}
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-muted/30 rounded-full blur-2xl" />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-muted text-muted-foreground mb-3 shadow-sm">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <CardTitle className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                            {programme.title}
                          </CardTitle>
                        </div>
                      </div>
                      {programme.subtitle && (
                        <p className="text-sm font-semibold text-muted-foreground mb-4">
                          {programme.subtitle}
                        </p>
                      )}
                    </CardHeader>

                  <CardContent className="relative z-10 space-y-3">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        For MALAYSIAN Students
                      </p>
                      <div className="space-y-2">
                        <Label className="text-xs font-medium text-muted-foreground">Open Intake</Label>
                        <Select
                          value={getSelectedIntake(index, "malaysian", programme.intakes)}
                          onValueChange={(value) => handleIntakeChange(index, "malaysian", value)}
                          disabled={programme.status === "CLOSED"}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select intake" />
                          </SelectTrigger>
                          <SelectContent>
                            {programme.intakes.map((intake, intakeIndex) => (
                              <SelectItem key={intakeIndex} value={intake}>
                                {intake}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <Button
                        variant={programme.status === "CLOSED" ? "outline" : "default"}
                        className="w-full"
                        disabled={programme.status === "CLOSED"}
                        asChild
                      >
                        <Link to="/apply/foundation-malaysian" className="flex items-center justify-center gap-2">
                          {programme.status === "CLOSED" ? (
                            <>
                              <XCircle className="w-4 h-4" />
                              CLOSED
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="w-4 h-4" />
                              Apply Now!
                            </>
                          )}
                        </Link>
                      </Button>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                        <Globe className="w-3 h-3" />
                        For INTERNATIONAL Students
                      </p>
                      <div className="space-y-2">
                        <Label className="text-xs font-medium text-muted-foreground">Open Intake</Label>
                        <Select
                          value={getSelectedIntake(index, "international", programme.intakes)}
                          onValueChange={(value) => handleIntakeChange(index, "international", value)}
                          disabled={programme.status === "CLOSED"}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select intake" />
                          </SelectTrigger>
                          <SelectContent>
                            {programme.intakes.map((intake, intakeIndex) => (
                              <SelectItem key={intakeIndex} value={intake}>
                                {intake}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <Button
                        variant={programme.status === "CLOSED" ? "outline" : "default"}
                        className="w-full"
                        disabled={programme.status === "CLOSED"}
                        asChild
                      >
                        <Link to="/apply/foundation-malaysian" className="flex items-center justify-center gap-2">
                          {programme.status === "CLOSED" ? (
                            <>
                              <XCircle className="w-4 h-4" />
                              CLOSED
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="w-4 h-4" />
                              Apply Now!
                            </>
                          )}
                        </Link>
                      </Button>
                    </div>

                    <Separator />

                    <Button
                      variant="ghost"
                      className="w-full text-primary hover:text-primary-hover hover:bg-primary/5"
                      asChild
                    >
                      <a href={programme.programmeLink} className="flex items-center justify-center gap-2">
                        Programme Information
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
              })}
            </div>
          </div>
        </section>

        <StatisticsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
