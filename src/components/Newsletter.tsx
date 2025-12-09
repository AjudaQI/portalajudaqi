
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-ajudaqi-purple text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-4">Junte-se à comunidade acadêmica</h2>
          <p className="text-lg mb-8 opacity-90">
            Receba atualizações sobre novas funcionalidades e participe deste projeto inovador da UNIFAN.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu email acadêmico"
              className="bg-white/10 border-white/20 placeholder:text-white/70 text-white"
            />
            <Button className="group flex items-center gap-2 bg-white text-[#6A03EB] font-semibold border border-[#6A03EB] rounded-full px-4 py-2 shadow-md hover:bg-white hover:border-[#5000c5] hover:shadow-lg transition-all duration-300 hover:scale-105">
              Participar
            </Button>
          </form>
          
          <p className="text-sm mt-4 opacity-70">
            Projeto acadêmico exclusivo para alunos da UNIFAN. Revolucione seu aprendizado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
