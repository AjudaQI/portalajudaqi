
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, Users, Coins, Medal } from 'lucide-react';

const benefits = [
  {
    title: "Ajude e pergunte!",
    description: "No nosso sistema, você poderá tirar todas as suas dúvidas e caso tenha conhecimento poderá ajudar outros amigos também.",
    icon: HelpCircle
  },
  {
    title: "Sistema de pontuação",
    description: "Cada perfil conterá um sistema de avaliações, para você poder tirar dúvidas com os melhores, sem ficar com receio.",
    icon: Medal
  },
  {
    title: "Mentorias entre alunos",
    description: "Aplicar métodos de mentorias entre os próprios alunos, estimulando a cooperatividade em busca de resultados.",
    icon: Users
  },
  {
    title: "Troca de pontos",
    description: "Na nossa loja virtual, você poderá trocar os seus pontos de ajudas por horas na faculdade!",
    icon: Coins
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Por que usar o <span className="gradient-text">AjudaQi</span>?</h2>
          <p className="text-lg text-gray-600">
            Revolucione seu aprendizado acadêmico com nossa plataforma colaborativa da UNIFAN.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="card-hover border-t-4 border-t-ajudaqi-purple">
              <CardHeader>
                <div className="text-4xl mb-4">
                  <benefit.icon className="w-10 h-10 text-ajudaqi-purple" />
                </div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
