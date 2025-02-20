import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import ShipCoating from "@/components/ShipCoating";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const products = [
  {
    name: "Colsee Emulsion",
    description: "Premium quality interior wall paint",
    image: "/images/rect.png"
  },
  {
    name: "Colsee Enamel",
    description: "High-gloss finish for wood and metal",
    image: "/images/rect.png"
  },
  {
    name: "Colsee Primer",
    description: "Superior adhesion and surface preparation",
    image: "/images/rect.png"
  }
];

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Colsee Paints - Premium Quality Marine Coatings</title>
        <meta name="description" content="Colsee Paints - Transforming and protecting marine vessels with premium quality coatings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        
        {/* Hero Section with Animation */}
        <section className="relative min-h-[800px] w-full overflow-hidden bg-gradient-to-b from-background to-background/80">
          <div className="container mx-auto px-4 pt-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Advanced Marine Coating Solutions
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Protecting vessels with cutting-edge marine coatings engineered for superior performance
              </p>
            </div>
            
            {/* Ship Coating Animation */}
            <ShipCoating />
            
            <div className="text-center mt-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Our Solutions
              </Button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Premium Products</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="m-2">
                    <CardContent className="p-6">
                      <div className="aspect-square relative mb-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground">{product.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Features Section */}
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

        {/* Contact Section */}
        <section className="py-16 container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team of experts is here to help you choose the perfect coating solutions for your marine vessels
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Contact Us
          </Button>
        </section>
      </div>
    </>
  );
}