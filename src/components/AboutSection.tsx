
import React from 'react';
import { Book } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <Book className="h-12 w-12 text-ajudaqi-purple mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre o AjudaQi</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ajudaqi-purple to-ajudaqi-light-purple rounded-full mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 card-hover">
            <h3 className="text-2xl font-bold mb-4 text-ajudaqi-purple">Objetivos do Software</h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-start">
                <span className="bg-ajudaqi-light-purple text-ajudaqi-purple text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-1">✓</span>
                <p>Ser o melhor software de plataformas de aprendizagem colaborativa entre os usuários que têm a intenção de compartilhar seus conhecimentos ou solicitar ajuda em uma comunidade online.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-ajudaqi-light-purple text-ajudaqi-purple text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-1">✓</span>
                <p>Proporcionar interação e aprendizado entre os alunos da instituição.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-ajudaqi-light-purple text-ajudaqi-purple text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-1">✓</span>
                <p>Revolucionar a forma de aprendizado do acadêmico utilizando a tecnologia a seu favor.</p>
              </li>
              <li className="flex items-start">
                <span className="bg-ajudaqi-light-purple text-ajudaqi-purple text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center mr-2 mt-1">✓</span>
                <p>Aplicar métodos de mentorias entre os próprios alunos, estimulando a cooperatividade em busca de resultados.</p>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 card-hover">
            <h3 className="text-2xl font-bold mb-4 text-ajudaqi-purple">Missão</h3>
            <p className="text-gray-700 leading-relaxed text-left">
              Auxiliar os estudos dos acadêmicos implementando um método de mentorias entre os próprios alunos, utilizando características de uma rede social para conectar os usuários, baseando em curso, período e conteúdo que o estudante solicita ajuda, oferecendo suporte para fazer upload de mapas mentais, artigos e chats em tempo reais, buscando melhorar o sistema de ensino implementando um método no qual os acadêmicos se ajudam em troca de horas.
              <br /><br />
              Nosso software vai ser monitorado por alunos e professores, para que haja sistemas de avaliação a fim de agregar a instituição.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
