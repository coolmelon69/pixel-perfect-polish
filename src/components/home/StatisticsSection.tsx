import { Users, Package, Building, Settings } from "lucide-react";
import statsBackground from "@/assets/stats-background.jpg";

const statistics = [
  {
    icon: Users,
    value: "6,167",
    label: "Our Active Students",
  },
  {
    icon: Package,
    value: "9",
    label: "Foundation Programmes",
  },
  {
    icon: Building,
    value: "24",
    label: "Diploma & Degree Programmes",
  },
  {
    icon: Settings,
    value: "26",
    label: "Postgraduate Programme",
  },
];

const StatisticsSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={statsBackground}
          alt="Students background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-card/10 backdrop-blur-sm mb-4 group-hover:bg-card/20 transition-colors">
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-card" strokeWidth={1.5} />
              </div>
              
              <div className="text-3xl md:text-5xl font-bold text-card mb-2 tracking-tight">
                {stat.value}
              </div>
              
              <div className="text-sm md:text-base text-card/90 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
