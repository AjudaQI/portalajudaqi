import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Resetar a posição da rolagem quando a página for carregada
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateTimeLeft = () => {
    const difference = new Date('2026-01-01').getTime() - new Date().getTime();
    
    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }
  };

  useEffect(() => {
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header showNavigation={false} />
      
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="gradient-text mb-8">Em breve no ar!</h1>
          
          <div className="flex flex-col items-center mb-12">
            <Timer className="h-16 w-16 text-ajudaqi-purple mb-4" />
            <p className="text-xl text-gray-700 mb-8">
              O AjudaQi está quase pronto para revolucionar a forma como você aprende e compartilha conhecimento
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Dias', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Minutos', value: timeLeft.minutes },
              { label: 'Segundos', value: timeLeft.seconds }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white border border-ajudaqi-light-purple rounded-lg p-6 shadow-lg animate-pulse-light"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-ajudaqi-purple mb-2">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-gray-500">{item.label}</div>
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-ajudaqi-purple to-ajudaqi-light-purple" 
                style={{ 
                  width: `${100 - (timeLeft.days / 365) * 100}%`,
                  transition: 'width 1s ease-in-out'
                }}
              />
            </div>
            
            <div className="flex justify-center">
            <Button className="group flex items-center gap-2 bg-white text-[#6A03EB] font-semibold border border-[#6A03EB] rounded-full px-4 py-2 shadow-md hover:bg-white hover:border-[#5000c5] hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Link to="/">Voltar para Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Countdown;
