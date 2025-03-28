import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Colsee Paints - Premium Quality Marine Coatings</title>
        <meta name="description" content="Colsee Paints - Transforming and protecting marine vessels with premium quality coatings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-background min-h-screen flex flex-col w-full">
        <Header />
        <HeroSection />
        <div id="products-section">
          <ProductsSection />
        </div>
        <FeaturesSection />
        <ContactSection />
      </div>
    </>
  );
}