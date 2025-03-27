
import React from 'react';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={cn(
      "relative overflow-hidden bg-accent py-10 px-6",
      "before:absolute before:top-0 before:left-0 before:w-full before:h-full",
      "before:bg-[linear-gradient(90deg,#4f46e5_0%,#3b82f6_100%)] before:opacity-5",
      className
    )}>
      <div className="container relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-primary bg-primary/10 rounded-full">
            Information for Turkish Citizens
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-balance">
            Tracking Visa Application Experiences Together
          </h1>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6 text-balance">
            This platform documents the visa application process and timelines experienced by Turkish citizens. 
            By sharing our collective experiences, we hope to bring transparency to the process and advocate for fair treatment.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <div className="glass-card px-4 py-2 rounded-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium">Crowdsourced Data</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium">Real Experiences</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium">Transparent Process</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
