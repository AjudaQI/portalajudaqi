import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="gradient-text mb-6">
              Tire suas maiores dúvidas com acadêmicos dispostos a ajudar!
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Tire suas dúvidas pelo nosso aplicativo de mentorias para universitários a qualquer momento.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* Botão "Começar agora" sem ícone */}
              <Button className="group flex items-center gap-2 bg-white text-[#6A03EB] font-semibold border border-[#6A03EB] rounded-full px-4 py-2 shadow-md hover:border-[#5000c5] hover:shadow-lg transition-all duration-300 hover:scale-105">
                <Link to="/countdown">Começar agora</Link>
              </Button>

              {/* Botão "Saiba mais" sem ícone */}
              <Button className="group flex items-center gap-2 bg-white text-[#6A03EB] font-semibold border border-[#6A03EB] rounded-full px-4 py-2 shadow-md hover:border-[#5000c5] hover:shadow-lg transition-all duration-300 hover:scale-105">
                Saiba mais
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src="/images/7a2eaaa8-4cb4-4373-a077-737fb3035a2d.png" 
                alt="Estudantes colaborando" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
