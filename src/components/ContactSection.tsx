import React from "react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-16 container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        Our team of experts is here to help you choose the perfect coating solutions for your marine vessels
      </p>
      <Button size="lg" className="bg-primary hover:bg-primary/90">
        Contact Us
      </Button>
    </section>
  );
};

export default ContactSection;
