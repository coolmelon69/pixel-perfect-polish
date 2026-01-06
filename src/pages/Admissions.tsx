import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  Award, 
  Settings,
  Megaphone,
  FileText,
  Globe,
  DollarSign,
  Users,
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
}

interface ContactPerson {
  name: string;
  phone: string;
  email: string;
}

interface ContactGroup {
  title: string;
  contacts: ContactPerson[];
  icon: React.ComponentType<{ className?: string }>;
  color: "red" | "blue" | "grey";
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
  },
  {
    title: "BACHELOR",
    status: "OPEN",
    malaysianLink: "#",
    internationalLink: "#",
    programmeLink: "#",
    icon: GraduationCap,
    color: "blue",
  },
  {
    title: "POSTGRADUATE",
    status: "OPEN",
    malaysianLink: "#",
    internationalLink: "#",
    programmeLink: "#",
    icon: Award,
    color: "grey",
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
  },
];

const contactGroups: ContactGroup[] = [
  {
    title: "For Local Marketing",
    icon: Megaphone,
    color: "red",
    contacts: [
      {
        name: "Zaharatul Nadzirah Bt Aziz",
        phone: "+6053688346",
        email: "zaharatul.azizul@utp.edu.my",
      },
      {
        name: "Muhammad Iqbal Bin Ahmad Nasir",
        phone: "+6053688407",
        email: "miqbal.ahmadnasir@utp.edu.my",
      },
    ],
  },
  {
    title: "For Local Admission",
    icon: FileText,
    color: "blue",
    contacts: [
      {
        name: "Anas B Zainal",
        phone: "+6053688356",
        email: "anas.zainal@utp.edu.my",
      },
      {
        name: "Nurfarahin Bt M Suffi",
        phone: "+6053688064",
        email: "nurfarahin.msuffi@utp.edu.my",
      },
      {
        name: "Amerul Hazriq B Ibrahim",
        phone: "+6053688063",
        email: "hazriq.ibrahim@utp.edu.my",
      },
      {
        name: "Hamidi B M Jabar",
        phone: "+6053688344",
        email: "hamidijabar@utp.edu.my",
      },
    ],
  },
  {
    title: "For International Marketing & Admission",
    icon: Globe,
    color: "blue",
    contacts: [
      {
        name: "Norain Farhana Bt Ahmad Fuaad",
        phone: "+6053688349",
        email: "norain.fuaad@utp.edu.my",
      },
      {
        name: "M Azri bin Mustaffa (Foundation & Undergraduate)",
        phone: "+6053688372",
        email: "azri.mustaffa@utp.edu.my",
      },
      {
        name: "Tun M Faliq Aizat Bin Tajul Ariffin (Postgraduate)",
        phone: "+6053688352",
        email: "tunfaliq.tajul@utp.edu.my",
      },
      {
        name: "Intan Zairina Bt Kamaruddin",
        phone: "+6053688353",
        email: "intanzairina_kamaruddi@utp.edu.my",
      },
      {
        name: "Nur Farina Faruvash Khan",
        phone: "+6053688349",
        email: "farina.faruvash@utp.edu.my",
      },
    ],
  },
  {
    title: "For Sponsorship",
    icon: DollarSign,
    color: "grey",
    contacts: [
      {
        name: "Tajul Ariffin B Shamsuddin",
        phone: "+6053688243",
        email: "tajul_ariffin@utp.edu.my",
      },
      {
        name: "Nur'ain Bt M Sani",
        phone: "+6053688347",
        email: "ain.sani@utp.edu.my",
      },
      {
        name: "Faridah Bt Harun",
        phone: "+6053688543",
        email: "faridah.harun@utp.edu.my",
      },
    ],
  },
];

const Admissions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/15 via-blue-500/10 to-slate-500/10 py-16 md:py-20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-blue-600 mb-6 shadow-lg">
                <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                UNITEN REGISTRY - ADMISSION
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl">
                Your gateway to quality education at Universiti Tenaga Nasional
              </p>
            </div>
          </div>
        </section>

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
                      <Button
                        variant={programme.status === "CLOSED" ? "outline" : "default"}
                        className="w-full"
                        disabled={programme.status === "CLOSED"}
                        asChild
                      >
                        <Link to="/application-details" className="flex items-center justify-center gap-2">
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
                      <Button
                        variant={programme.status === "CLOSED" ? "outline" : "default"}
                        className="w-full"
                        disabled={programme.status === "CLOSED"}
                        asChild
                      >
                        <Link to="/application-details" className="flex items-center justify-center gap-2">
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

        {/* Contact Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 mb-4 shadow-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                CONTACT US
              </h2>
              <p className="text-muted-foreground text-lg">
                Get in touch with our admission and marketing teams
              </p>
            </div>

            <div className="space-y-12">
              {contactGroups.map((group, groupIndex) => {
                const IconComponent = group.icon;
                const colorClasses = {
                  red: "border-primary/30 bg-gradient-to-br from-primary/5 to-transparent",
                  blue: "border-blue-500/30 bg-gradient-to-br from-blue-500/5 to-transparent",
                  grey: "border-slate-500/30 bg-gradient-to-br from-slate-500/5 to-transparent",
                };
                const iconBgClasses = {
                  red: "bg-primary/10 text-primary border-primary/20",
                  blue: "bg-blue-500/10 text-blue-600 border-blue-500/20",
                  grey: "bg-slate-500/10 text-slate-600 border-slate-500/20",
                };
                const hoverClasses = {
                  red: "hover:border-primary/50 hover:bg-primary/10",
                  blue: "hover:border-blue-500/50 hover:bg-blue-500/10",
                  grey: "hover:border-slate-500/50 hover:bg-slate-500/10",
                };
                
                return (
                  <div key={groupIndex}>
                    <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-border">
                      <div className={`p-2 rounded-lg border ${iconBgClasses[group.color]}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {group.title}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                      {group.contacts.map((contact, contactIndex) => (
                        <Card
                          key={contactIndex}
                          className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-2 ${colorClasses[group.color]} ${hoverClasses[group.color]}`}
                        >
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base font-semibold text-foreground leading-tight">
                              {contact.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <a
                              href={`tel:${contact.phone}`}
                              className={`flex items-center gap-2 text-sm text-muted-foreground transition-colors group/phone ${
                                group.color === "red"
                                  ? "hover:text-primary"
                                  : group.color === "blue"
                                  ? "hover:text-blue-600"
                                  : "hover:text-slate-600"
                              }`}
                            >
                              <Phone className={`h-4 w-4 ${
                                group.color === "red"
                                  ? "group-hover/phone:text-primary"
                                  : group.color === "blue"
                                  ? "group-hover/phone:text-blue-600"
                                  : "group-hover/phone:text-slate-600"
                              }`} />
                              <span>{contact.phone}</span>
                            </a>
                            <a
                              href={`mailto:${contact.email}`}
                              className={`flex items-center gap-2 text-sm text-muted-foreground transition-colors group/email break-all ${
                                group.color === "red"
                                  ? "hover:text-primary"
                                  : group.color === "blue"
                                  ? "hover:text-blue-600"
                                  : "hover:text-slate-600"
                              }`}
                            >
                              <Mail className={`h-4 w-4 flex-shrink-0 ${
                                group.color === "red"
                                  ? "group-hover/email:text-primary"
                                  : group.color === "blue"
                                  ? "group-hover/email:text-blue-600"
                                  : "group-hover/email:text-slate-600"
                              }`} />
                              <span className="break-all">{contact.email}</span>
                            </a>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
