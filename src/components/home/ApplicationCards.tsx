import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const applicationTypes = [
  {
    title: "Foundation / Diploma",
    subtitle: "(MALAYSIAN)",
    path: "/apply/foundation-malaysian",
    delay: "0ms",
  },
  {
    title: "Foundation / Diploma",
    subtitle: "(INTERNATIONAL)",
    path: "/apply/foundation-international",
    delay: "100ms",
  },
  {
    title: "Bachelor / Postgraduate",
    subtitle: "(MALAYSIAN / INTERNATIONAL)",
    path: "/apply/bachelor",
    delay: "200ms",
  },
];

const ApplicationCards = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {applicationTypes.map((type, index) => (
            <div
              key={index}
              className="group relative bg-primary rounded-xl p-8 md:p-10 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: type.delay }}
            >
              {/* Background decoration */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary-hover/30 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-1 leading-tight">
                  {type.title}
                </h3>
                <p className="text-sm md:text-base font-semibold text-primary-foreground/90 mb-6">
                  {type.subtitle}
                </p>
                
                <Button
                  asChild
                  variant="secondary"
                  className="group/btn bg-card text-primary hover:bg-card/90 font-medium shadow-md"
                >
                  <Link to={type.path} className="flex items-center gap-2">
                    Click to Apply
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationCards;
