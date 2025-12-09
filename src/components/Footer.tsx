import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-ajudaqi-purple mb-4">AjudaQI</h3>
            <p className="text-gray-600 mb-4">
              Seu sistema de aprendizagem acadêmico com as melhores ferramentas para aumentar sua produtividade.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-ajudaqi-purple">Home</a></li>
              <li><a href="#tools" className="text-gray-600 hover:text-ajudaqi-purple">Ferramentas</a></li>
              <li><a href="#benefits" className="text-gray-600 hover:text-ajudaqi-purple">Benefícios</a></li>
              <li><Link to="/countdown" className="text-gray-600 hover:text-ajudaqi-purple">Começar agora</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Entre em Contato</h4>
            <p className="text-gray-600">
              Tem uma pergunta ou quer sugerir uma parceria? Entre em contato conosco.
            </p>
            <a href="mailto:contatoajudaqi@gmail.com" className="text-ajudaqi-purple hover:underline">
              contatoajudaqi@gmail.com
            </a>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} AjudaQI. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-ajudaqi-purple">Termos de Uso</a>
            <a href="#" className="text-gray-600 hover:text-ajudaqi-purple">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
