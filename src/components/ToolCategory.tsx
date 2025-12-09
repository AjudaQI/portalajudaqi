import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export type Tool = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  tags?: string[];
  isPaid?: boolean;
};

export type CategoryProps = {
  title: string;
  description: string;
  tools: Tool[];
};

const ToolCategory = ({ title, description, tools }: CategoryProps) => {
  return (
    <div className="py-10">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 mb-8">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-600 max-w-3xl">{description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(tool => (
            <Card key={tool.id} className="card-hover overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={tool.imageUrl} 
                  alt={tool.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {tool.isPaid && (
                  <Badge className="absolute top-3 right-3 bg-ajudaqi-purple">
                    Pago
                  </Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription className="line-clamp-2">{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {tool.tags?.map(tag => (
                    <Badge key={tag} variant="outline" className="bg-gray-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="w-full group flex items-center justify-center gap-2 bg-white text-[#6A03EB] font-semibold border border-[#6A03EB] rounded-full px-4 py-2 shadow-md hover:bg-white hover:border-[#5000c5] hover:shadow-lg transition-all duration-300 hover:scale-105" asChild>
                  <Link to="/countdown">
                    Em breve! <ExternalLink className="h-4 w-4 text-[#6A03EB] group-hover:animate-pulse" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolCategory;
