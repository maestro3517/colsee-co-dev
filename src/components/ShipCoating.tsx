import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProductDialog from "./ProductDialog";
import { FaChevronDown } from "react-icons/fa";

const ShipCoating = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const coatingLayers = [
    {
      name: "Top Coat",
      color: "bg-blue-500/80",
      delay: 0.6,
      description: "The final protective layer providing durability and aesthetic finish.",
      products: [
        {
          name: "2K Epoxy Top Coat (Col-Finish)",
          description: "High-performance two-component epoxy finish providing excellent chemical resistance and durability in marine environments.",
          features: [
            "Superior corrosion protection",
            "Excellent chemical resistance",
            "High durability finish",
            "UV stable formulation",
            "Long service life"
          ]
        },
        {
          name: "SPL Antifouling Red (Short Term)",
          description: "Specialized short-term antifouling coating designed to prevent marine growth on vessel hulls for periods up to 12 months.",
          features: [
            "Effective biocide release mechanism",
            "Prevents barnacle attachment",
            "Reduces hull maintenance costs",
            "Improves fuel efficiency",
            "Easy application and recoating"
          ]
        },
        {
          name: "Col-Guard Marine Platinum (Long Term)",
          description: "Premium long-term antifouling solution providing extended protection against marine growth for commercial vessels.",
          features: [
            "Extended service life up to 60 months",
            "Self-polishing technology",
            "Superior fouling resistance",
            "Reduced maintenance intervals",
            "Environmentally compliant formulation"
          ]
        }
      ]
    },
    {
      name: "Tie Coat",
      color: "bg-green-500/80",
      delay: 0.4,
      description: "Intermediate layer ensuring compatibility between different coating systems.",
      products: [
        {
          name: "Col-Interseal",
          description: "Specialized tie coat formulated to ensure optimal adhesion between base and top coat systems in marine applications.",
          features: [
            "Excellent intercoat adhesion",
            "Compatible with various coating systems",
            "Moisture-tolerant application",
            "Extends system durability",
            "Suitable for splash zone areas"
          ]
        }
      ]
    },
    {
      name: "Base Coat",
      color: "bg-red-500/80",
      delay: 0.2,
      description: "The foundation coating providing critical corrosion protection for marine vessels.",
      products: [
        {
          name: "2K Epoxy Base Coat (Col-Prime)",
          description: "High-build two-component epoxy primer offering exceptional corrosion protection and adhesion properties.",
          features: [
            "Superior adhesion to prepared steel",
            "High-build formulation",
            "Excellent barrier protection",
            "Salt water resistance",
            "Impact and abrasion resistance"
          ]
        },
        {
          name: "Coaltar Epoxy Base Coat (Col-Tar Protect)",
          description: "Coal tar reinforced epoxy coating designed for immersion service providing exceptional water resistance.",
          features: [
            "Superior water resistance",
            "Extended corrosion protection",
            "Excellent cathodic protection compatibility",
            "Suitable for immersed structures",
            "Long-term durability in marine environments"
          ]
        }
      ]
    },
    {
      name: "Steel Base",
      color: "bg-zinc-800/80",
      delay: 0,
      description: "The foundation of the marine vessel, properly prepared for maximum coating system performance.",
      features: [
        "Surface preparation standards",
        "Blast cleaning profile",
        "Structural integrity",
        "Quality inspection",
        "Material certification"
      ]
    }
  ];

  const scrollToProducts = () => {
    document
      .getElementById("products-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-lg">
      {/* Background Image */}
      <Image
        src="https://assets.co.dev/96f77038-8ef2-4350-be52-4912f83b3206/shiphull2-fe8724f.webp"
        alt="Ship Hull"
        fill
        className="object-cover"
        priority
      />

      {/* Coating Layers */}
      <div className="absolute right-8 top-8 w-[300px]">
        {coatingLayers.map((layer, index) => (
          <motion.div
            key={layer.name}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: layer.delay,
              ease: "easeOut",
            }}
            onClick={() => setSelectedProduct(index)}
            className="relative mb-3 cursor-pointer group"
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.2,
                delay: layer.delay + 0.3,
                ease: "easeInOut",
              }}
              className={`h-14 ${layer.color} rounded-lg relative overflow-hidden 
                backdrop-blur-sm group-hover:brightness-110 transition-all`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: layer.delay + 1,
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-semibold"
              >
                {layer.name}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Product Dialog */}
      {selectedProduct !== null && (
        <ProductDialog
          isOpen={selectedProduct !== null}
          onClose={() => setSelectedProduct(null)}
          product={coatingLayers[selectedProduct]}
        />
      )}
    </div>
  );
};

export default ShipCoating;
