import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import ProductImage from "./ProductImage";

const products = [
  {
    name: "2K Epoxy Base Coat",
    code: "Col-Prime",
    type: "Marine",
    category: "Base Coat",
    description:
      "High-build two-component epoxy primer offering exceptional corrosion protection and adhesion properties.",
    image: "/images/rect.png",
    pdf: "/pdfs/col-prime.pdf",
    features: [
      "Superior adhesion to prepared steel",
      "High-build formulation",
      "Excellent barrier protection",
      "Salt water resistance",
      "Impact and abrasion resistance",
    ],
  },
  {
    name: "Coaltar Epoxy Base Coat",
    code: "Col-Tar Protect",
    type: "Marine",
    category: "Base Coat",
    description:
      "Coal tar reinforced epoxy coating designed for immersion service providing exceptional water resistance.",
    image: "/images/rect.png",
    pdf: "/pdfs/col-tar.pdf",
    features: [
      "Superior water resistance",
      "Extended corrosion protection",
      "Excellent cathodic protection compatibility",
      "Suitable for immersed structures",
      "Long-term durability in marine environments",
    ],
  },
  {
    name: "Interseal Tie Coat",
    code: "Col-Interseal",
    type: "Marine",
    category: "Tie Coat",
    description:
      "Specialized tie coat formulated to ensure optimal adhesion between base and top coat systems in marine applications.",
    image: "/images/rect.png",
    pdf: "/pdfs/col-interseal.pdf",
    features: [
      "Excellent intercoat adhesion",
      "Compatible with various coating systems",
      "Moisture-tolerant application",
      "Extends system durability",
      "Suitable for splash zone areas",
    ],
  },
  {
    name: "2K Epoxy Top Coat",
    code: "Col-Finish",
    type: "Marine",
    category: "Top Coat",
    description:
      "High-performance two-component epoxy finish providing excellent chemical resistance and durability in marine environments.",
    image: "/images/rect.png",
    pdf: "/pdfs/col-finish.pdf",
    features: [
      "Superior corrosion protection",
      "Excellent chemical resistance",
      "High durability finish",
      "UV stable formulation",
      "Long service life",
    ],
  },
  {
    name: "SPL Antifouling Red",
    code: "Short Term Protection",
    type: "Marine",
    category: "Top Coat",
    description:
      "Specialized short-term antifouling coating designed to prevent marine growth on vessel hulls for periods up to 12 months.",
    image: "/images/rect.png",
    pdf: "/pdfs/col-antifouling.pdf",
    features: [
      "Effective biocide release mechanism",
      "Prevents barnacle attachment",
      "Reduces hull maintenance costs",
      "Improves fuel efficiency",
      "Easy application and recoating",
    ],
  },
  {
    name: "Marine Platinum",
    code: "Col-Guard (Long Term)",
    type: "Marine",
    category: "Top Coat",
    description:
      "Premium long-term antifouling solution providing extended protection against marine growth for commercial vessels.",
    image: "/images/rect.png",
    pdf: "/pdfs/col-guard.pdf",
    features: [
      "Extended service life up to 60 months",
      "Self-polishing technology",
      "Superior fouling resistance",
      "Reduced maintenance intervals",
      "Environmentally compliant formulation",
    ],
  },
];

type Product = {
  name: string;
  code?: string;
  type: string;
  category: string;
  description: string;
  image: string;
  pdf: string;
  features: string[];
};

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.type === filter);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: 0.2,
      },
    },
  };

  const tabsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        delay: 0.3,
      },
    },
  };

  return (
    <section id="products-section" className="py-16 container mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={headerVariants}
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Our Premium Products
        </h2>
      </motion.div>

      <motion.div
        className="flex justify-center mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={tabsVariants}
      >
        <Tabs
          defaultValue="all"
          onValueChange={setFilter}
          className="w-full max-w-md"
        >
          <TabsList className="w-full">
            <TabsTrigger value="all" className="flex-1">
              All Products
            </TabsTrigger>
            <TabsTrigger value="Marine" className="flex-1">
              Marine Coatings
            </TabsTrigger>
            <TabsTrigger value="Standard" className="flex-1">
              Standard Paints
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Card
                className="h-full cursor-pointer overflow-hidden transition-all duration-300 hover:border-primary"
                onClick={() => openModal(product)}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <motion.div
                    className="aspect-square relative mb-4 overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <ProductImage
                      type={product.type}
                      category={product.category}
                      name={product.name}
                    />
                    <motion.div
                      className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 + 0.5 }}
                    >
                      {product.category}
                    </motion.div>
                  </motion.div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-1">
                      {product.name}
                    </h3>
                    {product.code && (
                      <p className="text-sm text-primary mb-2">
                        {product.code}
                      </p>
                    )}
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {selectedProduct && (
        <Dialog open={!!selectedProduct} onOpenChange={closeModal}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{selectedProduct.name}</DialogTitle>
              {selectedProduct.code && (
                <p className="text-sm text-primary">{selectedProduct.code}</p>
              )}
              <DialogDescription className="mt-2">
                {selectedProduct.description}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 flex items-center gap-4">
              <motion.div
                className="w-24 h-24 rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ProductImage
                  type={selectedProduct.type}
                  category={selectedProduct.category}
                  name={selectedProduct.name}
                />
              </motion.div>

              <div className="flex-1">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  {selectedProduct.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <span className="text-sm text-muted-foreground">
                Category: {selectedProduct.category}
              </span>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => window.open(selectedProduct.pdf, "_blank")}
                >
                  Download Specification
                </Button>
              </motion.div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default ProductsSection;
