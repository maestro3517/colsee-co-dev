import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Superior Quality",
    description: "Our paints are manufactured with the finest raw materials ensuring lasting beauty"
  },
  {
    title: "Eco-Friendly",
    description: "Environment-conscious formulations for a sustainable future"
  },
  {
    title: "Expert Support",
    description: "Professional guidance for all your painting needs"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Colsee Paints?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
