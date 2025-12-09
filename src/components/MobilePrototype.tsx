import React from "react";
import { Button } from "@/components/ui/button";
import { FigmaIcon } from "lucide-react";

const MobilePrototype = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Protótipo Mobile</h2>
          <div className="h-1 w-24 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 border-4 border-purple-200 rounded-lg shadow-xl overflow-hidden">
            <img 
              src="\images\prototipo-1-1024x407.jpg" 
              alt="Protótipo Mobile do Ajudaqi"
              className="w-full max-w-[800px] h-auto"
              width={800}
              height={318}
            />
          </div>
          
          <Button
            className="gap-2 bg-white text-[#6A03EB] font-semibold border border-[#6A03EB] rounded-full px-4 py-2 shadow-md hover:border-[#5000c5] hover:shadow-lg transition-all duration-300 hover:scale-105"
            asChild
                >
            <a
              href="https://www.figma.com/proto/CzG8x7asvN8O05BbHLt4Qp/Untitled?type=design&node-id=185-100&t=o8XXHb0nvz2jEs2O-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=185%3A100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FigmaIcon className="h-5 w-5" />
              <span>Ver no Figma</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MobilePrototype;
