
import React from 'react';
import ToolCategory, { CategoryProps } from './ToolCategory';
import { HelpCircle, Users, Medal } from 'lucide-react';

// Mock data for our platform features
const categories: CategoryProps[] = [
  {
    title: "Aprendizagem Colaborativa",
    description: "Compartilhe seus conhecimentos e aprenda com outros alunos da UNIFAN em um ambiente colaborativo.",
    tools: [
      {
        id: "1",
        title: "Fórum de Perguntas e Respostas",
        description: "Tire suas dúvidas sobre qualquer disciplina e receba respostas dos colegas com mais experiência.",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
        url: "#",
        tags: ["Perguntas", "Respostas", "Colaborativo"],
        isPaid: false
      },
      {
        id: "2",
        title: "Mentorias entre alunos",
        description: "Conecte-se com mentores de semestres mais avançados para obter orientações em disciplinas específicas.",
        imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
        url: "#",
        tags: ["Mentoria", "Orientação", "Desenvolvimento"],
        isPaid: false
      },
      {
        id: "3",
        title: "Avaliações e Reputação",
        description: "Sistema de pontuação e avaliação para identificar os melhores colaboradores da plataforma.",
        imageUrl: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
        url: "#",
        tags: ["Avaliação", "Feedback", "Melhoria"],
        isPaid: false
      }
    ]
  },
  {
    title: "Benefícios e Recompensas",
    description: "Ganhe pontos por suas contribuições e troque-os por benefícios reais na faculdade.",
    tools: [
      {
        id: "4",
        title: "Loja de Pontos",
        description: "Troque seus pontos acumulados por horas de atividades complementares na UNIFAN.",
        imageUrl: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
        url: "#",
        tags: ["Recompensas", "Horas", "Troca"],
        isPaid: false
      },
      {
        id: "5",
        title: "Ranking de Colaboradores",
        description: "Veja quem são os alunos que mais contribuem com a comunidade e se destaque também!",
        imageUrl: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
        url: "#",
        tags: ["Ranking", "Competição", "Destaque"],
        isPaid: false
      },
      {
        id: "6",
        title: "Certificados de Participação",
        description: "Receba reconhecimento oficial da sua participação como mentor ou colaborador ativo.",
        imageUrl: "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
        url: "#",
        tags: ["Certificado", "Reconhecimento", "Currículo"],
        isPaid: false
      }
    ]
  }
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-10">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Recursos do <span className="gradient-text">AjudaQi</span></h2>
          <p className="text-lg text-gray-600">
            Conheça as funcionalidades da nossa plataforma de aprendizagem colaborativa para alunos da UNIFAN.
          </p>
        </div>
        
        {categories.map((category, index) => (
          <ToolCategory 
            key={index} 
            title={category.title} 
            description={category.description} 
            tools={category.tools} 
          />
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
