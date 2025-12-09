import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Sparkles } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isFixed?: boolean;
  showNavigation?: boolean;
}

const Header = ({ isFixed = false, showNavigation = true }: HeaderProps) => {
  return (
    <header className={`${isFixed ? 'fixed' : ''} top-0 left-0 w-full z-50 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-violet-300/40 bg-gradient-to-r from-[#1100A0]/90 to-[#6A03EB]/90`}>
      <div className="container flex items-center justify-between py-4">
        
        {/* Logo e título */}
        <a href="/" className="flex items-center gap-2">
          <img 
            src="\images\logoajudaqi.png" 
            alt="AjudaQi Logo" 
            className="h-10 w-auto transition-transform hover:scale-105"
          />
          <h1 className="text-2xl font-bold text-white drop-shadow-sm">
            AjudaQi
          </h1>
        </a>

        {/* Navegação Desktop */}
        {showNavigation && (
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white font-medium hover:underline">Sobre</a>
            <a href="#tools" className="text-white font-medium hover:underline">Ferramentas</a>
            <a href="#benefits" className="text-white font-medium hover:underline">Benefícios</a>

            <Button className="group flex items-center gap-2 bg-white text-[#6A03EB] font-semibold border border-[#6A03EB] rounded-full px-4 py-2 shadow-md hover:bg-white hover:border-[#5000c5] hover:shadow-lg transition-all duration-300 hover:scale-105" asChild>
              <Link to="/countdown">
                
                Começar agora
              </Link>
            </Button>
          </nav>
        )}

        {/* Navegação Mobile */}
        {showNavigation && (
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-white/60">
                <Menu className="h-5 w-5 text-black" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-6 mt-10">
                <a href="#about" className="text-lg font-medium hover:text-ajudaqi-purple transition-colors">
                  Sobre
                </a>
                <a href="#tools" className="text-lg font-medium hover:text-ajudaqi-purple transition-colors">
                  Ferramentas
                </a>
                <a href="#benefits" className="text-lg font-medium hover:text-ajudaqi-purple transition-colors">
                  Benefícios
                </a>

                <Button className="group flex items-center gap-2 bg-white text-[#6A03EB] font-semibold border border-[#6A03EB] rounded-full px-4 py-2 shadow-md hover:bg-white hover:border-[#5000c5] hover:shadow-lg transition-all duration-300 hover:scale-105 mt-4" asChild>
                  <Link to="/countdown">
                    
                    Começar agora
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default Header;
