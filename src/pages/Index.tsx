import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroCarousel from "@/components/home/HeroCarousel";
import ApplicationCards from "@/components/home/ApplicationCards";
import StatisticsSection from "@/components/home/StatisticsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <ApplicationCards />
        <StatisticsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
