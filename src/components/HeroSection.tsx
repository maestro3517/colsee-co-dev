import React from "react";
import { Button } from "@/components/ui/button";
import ShipCoating from "@/components/ShipCoating";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[800px] w-full overflow-hidden bg-gradient-to-b from-background to-background/80 pt-12">
      <div className="container mx-auto px-4 pt-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Advanced Marine Coating Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Protecting vessels with cutting-edge marine coatings engineered for superior performance
          </p>
        </div>
        <ShipCoating />
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Explore Our Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
