import { motion } from 'framer-motion';

interface ProjectVisualProps {
  projectSlug: string;
  className?: string;
}

export default function ProjectVisual({ projectSlug, className = "w-full h-full" }: ProjectVisualProps) {
  const getVisual = () => {
    if (projectSlug.includes('ai') || projectSlug.includes('jobfinder')) {
      return (
        <svg viewBox="0 0 200 120" className={className}>
          <defs>
            <radialGradient id="aiGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.6)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
            </radialGradient>
            <linearGradient id="aiFlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.8)" />
            </linearGradient>
          </defs>
          
          {/* Neural network pattern */}
          <g transform="translate(100,60)">
            {/* Input layer */}
            <circle cx="-60" cy="-30" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="-60" cy="-10" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="-60" cy="10" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="-60" cy="30" r="3" fill="currentColor" opacity="0.8" />
            
            {/* Hidden layers */}
            <circle cx="-20" cy="-25" r="4" fill="currentColor" opacity="0.9" />
            <circle cx="-20" cy="-5" r="4" fill="currentColor" opacity="0.9" />
            <circle cx="-20" cy="15" r="4" fill="currentColor" opacity="0.9" />
            
            <circle cx="20" cy="-20" r="4" fill="currentColor" opacity="0.9" />
            <circle cx="20" cy="0" r="4" fill="currentColor" opacity="0.9" />
            <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.9" />
            
            {/* Output layer */}
            <circle cx="60" cy="-10" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="60" cy="10" r="3" fill="currentColor" opacity="0.8" />
            
            {/* Connections */}
            <g stroke="url(#aiFlow)" strokeWidth="1" fill="none" opacity="0.5">
              <path d="M-57,-30 L-24,-25 M-57,-30 L-24,-5 M-57,-30 L-24,15" />
              <path d="M-57,-10 L-24,-25 M-57,-10 L-24,-5 M-57,-10 L-24,15" />
              <path d="M-57,10 L-24,-25 M-57,10 L-24,-5 M-57,10 L-24,15" />
              <path d="M-57,30 L-24,-25 M-57,30 L-24,-5 M-57,30 L-24,15" />
              
              <path d="M-16,-25 L16,-20 M-16,-25 L16,0 M-16,-25 L16,20" />
              <path d="M-16,-5 L16,-20 M-16,-5 L16,0 M-16,-5 L16,20" />
              <path d="M-16,15 L16,-20 M-16,15 L16,0 M-16,15 L16,20" />
              
              <path d="M24,-20 L57,-10 M24,-20 L57,10" />
              <path d="M24,0 L57,-10 M24,0 L57,10" />
              <path d="M24,20 L57,-10 M24,20 L57,10" />
            </g>
            
            {/* Data flow particles */}
            <motion.circle
              cx="-40"
              cy="-15"
              r="1.5"
              fill="url(#aiGrad)"
              animate={{
                cx: [-40, 40],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        </svg>
      );
    }

    if (projectSlug.includes('bio') || projectSlug.includes('viral') || projectSlug.includes('comp483')) {
      return (
        <svg viewBox="0 0 200 120" className={className}>
          <defs>
            <linearGradient id="bioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(236, 72, 153, 0.6)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.5)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
            </linearGradient>
          </defs>
          
          {/* DNA helix with cosmic background */}
          <g transform="translate(100,60)">
            {/* Double helix structure */}
            <path d="M-60,-40 Q-30,-20 0,0 Q30,20 60,40" 
                  stroke="url(#bioGrad)" strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M-60,40 Q-30,20 0,0 Q30,-20 60,-40" 
                  stroke="url(#bioGrad)" strokeWidth="3" fill="none" opacity="0.8" />
            
            {/* Base pairs as constellation connections */}
            <g stroke="currentColor" strokeWidth="1" opacity="0.6">
              <line x1="-45" y1="-30" x2="-45" y2="30" />
              <line x1="-15" y1="-10" x2="-15" y2="10" />
              <line x1="15" y1="-10" x2="15" y2="10" />
              <line x1="45" y1="-30" x2="45" y2="30" />
            </g>
            
            {/* Nucleotide stars */}
            <circle cx="-45" cy="-30" r="2" fill="currentColor" opacity="0.9" />
            <circle cx="-45" cy="30" r="2" fill="currentColor" opacity="0.9" />
            <circle cx="-15" cy="-10" r="2" fill="currentColor" opacity="0.9" />
            <circle cx="-15" cy="10" r="2" fill="currentColor" opacity="0.9" />
            <circle cx="15" cy="-10" r="2" fill="currentColor" opacity="0.9" />
            <circle cx="15" cy="10" r="2" fill="currentColor" opacity="0.9" />
            <circle cx="45" cy="-30" r="2" fill="currentColor" opacity="0.9" />
            <circle cx="45" cy="30" r="2" fill="currentColor" opacity="0.9" />
            
            {/* Surrounding constellation */}
            <circle cx="-80" cy="-20" r="1" fill="currentColor" opacity="0.5" />
            <circle cx="80" cy="20" r="1" fill="currentColor" opacity="0.5" />
            <circle cx="-70" cy="35" r="1" fill="currentColor" opacity="0.5" />
            <circle cx="70" cy="-35" r="1" fill="currentColor" opacity="0.5" />
          </g>
        </svg>
      );
    }

    if (projectSlug.includes('data') || projectSlug.includes('btc') || projectSlug.includes('dataset')) {
      return (
        <svg viewBox="0 0 200 120" className={className}>
          <defs>
            <linearGradient id="dataGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.7)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.5)" />
            </linearGradient>
          </defs>
          
          {/* Data visualization constellation */}
          <g transform="translate(100,60)">
            {/* Chart lines */}
            <path d="M-80,-30 L-50,-20 L-20,10 L10,5 L40,25 L70,15" 
                  stroke="url(#dataGrad)" strokeWidth="2" fill="none" opacity="0.8" />
            <path d="M-80,-10 L-50,0 L-20,-15 L10,-5 L40,10 L70,20" 
                  stroke="url(#dataGrad)" strokeWidth="2" fill="none" opacity="0.6" />
            
            {/* Data points as stars */}
            <circle cx="-80" cy="-30" r="2.5" fill="currentColor" />
            <circle cx="-50" cy="-20" r="3" fill="currentColor" />
            <circle cx="-20" cy="10" r="2.5" fill="currentColor" />
            <circle cx="10" cy="5" r="3.5" fill="currentColor" />
            <circle cx="40" cy="25" r="2.5" fill="currentColor" />
            <circle cx="70" cy="15" r="3" fill="currentColor" />
            
            <circle cx="-80" cy="-10" r="2" fill="currentColor" opacity="0.8" />
            <circle cx="-50" cy="0" r="2.5" fill="currentColor" opacity="0.8" />
            <circle cx="-20" cy="-15" r="2" fill="currentColor" opacity="0.8" />
            <circle cx="10" cy="-5" r="2.5" fill="currentColor" opacity="0.8" />
            <circle cx="40" cy="10" r="2" fill="currentColor" opacity="0.8" />
            <circle cx="70" cy="20" r="2.5" fill="currentColor" opacity="0.8" />
            
            {/* Grid constellation */}
            <g stroke="currentColor" strokeWidth="0.5" opacity="0.3">
              <line x1="-90" y1="-40" x2="80" y2="-40" />
              <line x1="-90" y1="0" x2="80" y2="0" />
              <line x1="-90" y1="40" x2="80" y2="40" />
              <line x1="-80" y1="-50" x2="-80" y2="50" />
              <line x1="-20" y1="-50" x2="-20" y2="50" />
              <line x1="40" y1="-50" x2="40" y2="50" />
            </g>
          </g>
        </svg>
      );
    }

    if (projectSlug.includes('web') || projectSlug.includes('flow') || projectSlug.includes('portfolio')) {
      return (
        <svg viewBox="0 0 200 120" className={className}>
          <defs>
            <radialGradient id="webGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.6)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
            </radialGradient>
          </defs>
          
          {/* Web network constellation */}
          <g transform="translate(100,60)">
            {/* Central hub */}
            <circle cx="0" cy="0" r="6" fill="url(#webGrad)" />
            <circle cx="0" cy="0" r="12" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            
            {/* Network nodes */}
            <circle cx="-50" cy="-30" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="50" cy="-30" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="-60" cy="20" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="60" cy="20" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="-30" cy="40" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="30" cy="40" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="0" cy="-50" r="3" fill="currentColor" opacity="0.8" />
            
            {/* Connection lines */}
            <g stroke="url(#webGrad)" strokeWidth="1.5" opacity="0.6">
              <path d="M0,0 L-50,-30 M0,0 L50,-30 M0,0 L-60,20 M0,0 L60,20" />
              <path d="M0,0 L-30,40 M0,0 L30,40 M0,0 L0,-50" />
              <path d="M-50,-30 L50,-30 M-60,20 L60,20 M-30,40 L30,40" />
            </g>
            
            {/* Data packets */}
            <motion.circle
              cx="-25"
              cy="-15"
              r="1.5"
              fill="currentColor"
              animate={{
                cx: [-25, 25],
                cy: [-15, 15],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        </svg>
      );
    }

    if (projectSlug.includes('comp') || projectSlug.includes('research')) {
      return (
        <svg viewBox="0 0 200 120" className={className}>
          <defs>
            <linearGradient id="researchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.7)" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.5)" />
            </linearGradient>
          </defs>
          
          {/* Research lab constellation */}
          <g transform="translate(100,60)">
            {/* Central research hub */}
            <circle cx="0" cy="0" r="5" fill="url(#researchGrad)" />
            
            {/* Research instruments */}
            <circle cx="-40" cy="-25" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="40" cy="-25" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="-50" cy="15" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="50" cy="15" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="0" cy="-40" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="0" cy="35" r="3" fill="currentColor" opacity="0.8" />
            
            {/* Data flow lines */}
            <g stroke="url(#researchGrad)" strokeWidth="1" opacity="0.6">
              <path d="M0,0 L-40,-25 M0,0 L40,-25 M0,0 L-50,15 M0,0 L50,15" />
              <path d="M0,0 L0,-40 M0,0 L0,35" />
            </g>
            
            {/* Observation rings */}
            <circle cx="0" cy="0" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <circle cx="0" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
            
            {/* Discovery points */}
            <circle cx="-15" cy="-10" r="1" fill="currentColor" opacity="0.6" />
            <circle cx="15" cy="10" r="1" fill="currentColor" opacity="0.6" />
            <circle cx="-10" cy="20" r="1" fill="currentColor" opacity="0.6" />
            <circle cx="20" cy="-15" r="1" fill="currentColor" opacity="0.6" />
          </g>
        </svg>
      );
    }

    // Default space visual
    return (
      <svg viewBox="0 0 200 120" className={className}>
        <defs>
          <radialGradient id="defaultGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(147, 51, 234, 0.6)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
          </radialGradient>
        </defs>
        
        {/* Generic space constellation */}
        <g transform="translate(100,60)">
          <circle cx="0" cy="0" r="4" fill="url(#defaultGrad)" />
          <circle cx="-30" cy="-20" r="2" fill="currentColor" opacity="0.8" />
          <circle cx="30" cy="-20" r="2" fill="currentColor" opacity="0.8" />
          <circle cx="-35" cy="15" r="2" fill="currentColor" opacity="0.8" />
          <circle cx="35" cy="15" r="2" fill="currentColor" opacity="0.8" />
          <circle cx="0" cy="-35" r="2" fill="currentColor" opacity="0.8" />
          <circle cx="0" cy="30" r="2" fill="currentColor" opacity="0.8" />
          
          <g stroke="url(#defaultGrad)" strokeWidth="1" opacity="0.5">
            <path d="M0,0 L-30,-20 M0,0 L30,-20 M0,0 L-35,15 M0,0 L35,15 M0,0 L0,-35 M0,0 L0,30" />
          </g>
        </g>
      </svg>
    );
  };

  return (
    <motion.div
      className="w-full h-full flex items-center justify-center text-primary-400"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {getVisual()}
    </motion.div>
  );
}
