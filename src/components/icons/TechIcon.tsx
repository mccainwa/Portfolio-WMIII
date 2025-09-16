import { motion } from 'framer-motion';

interface TechIconProps {
  name: string;
  className?: string;
}

export default function TechIcon({ name, className = "w-8 h-8" }: TechIconProps) {
  const getIcon = () => {
    switch (name.toLowerCase()) {
      case 'python':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <defs>
              <radialGradient id="pythonGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.6)" />
              </radialGradient>
            </defs>
            {/* Constellation pattern resembling Python's interconnected nature */}
            <circle cx="20" cy="30" r="2" fill="currentColor" opacity="0.8" />
            <circle cx="50" cy="20" r="2.5" fill="currentColor" />
            <circle cx="80" cy="35" r="2" fill="currentColor" opacity="0.8" />
            <circle cx="30" cy="60" r="2" fill="currentColor" opacity="0.7" />
            <circle cx="70" cy="70" r="2.5" fill="currentColor" />
            <circle cx="50" cy="80" r="2" fill="currentColor" opacity="0.8" />
            
            {/* Connecting lines */}
            <path d="M20,30 L50,20 L80,35 M30,60 L50,20 M70,70 L80,35 M30,60 L50,80 L70,70" 
                  stroke="url(#pythonGrad)" strokeWidth="1" fill="none" opacity="0.6" />
            
            {/* Central node */}
            <circle cx="50" cy="50" r="3" fill="currentColor" />
            <circle cx="50" cy="50" r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          </svg>
        );

      case 'r':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <defs>
              <linearGradient id="rGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.6)" />
              </linearGradient>
            </defs>
            {/* Statistical constellation pattern */}
            <g transform="translate(50,50)">
              {/* Data points as stars */}
              <circle cx="-20" cy="-15" r="1.5" fill="currentColor" />
              <circle cx="-10" cy="-25" r="2" fill="currentColor" />
              <circle cx="0" cy="-20" r="1.5" fill="currentColor" />
              <circle cx="10" cy="-10" r="2" fill="currentColor" />
              <circle cx="20" cy="-5" r="1.5" fill="currentColor" />
              <circle cx="15" cy="10" r="2" fill="currentColor" />
              <circle cx="5" cy="20" r="1.5" fill="currentColor" />
              <circle cx="-15" cy="15" r="2" fill="currentColor" />
              
              {/* Trend line */}
              <path d="M-25,-20 Q0,-15 25,5" stroke="url(#rGrad)" strokeWidth="2" fill="none" opacity="0.7" />
              
              {/* Grid pattern */}
              <g opacity="0.3">
                <line x1="-25" y1="0" x2="25" y2="0" stroke="currentColor" strokeWidth="0.5" />
                <line x1="0" y1="-25" x2="0" y2="25" stroke="currentColor" strokeWidth="0.5" />
              </g>
            </g>
          </svg>
        );

      case 'sql':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <defs>
              <pattern id="starField" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="0.5" fill="currentColor" opacity="0.3" />
              </pattern>
            </defs>
            {/* Database structure with cosmic background */}
            <rect x="20" y="20" width="60" height="15" rx="7" fill="url(#starField)" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <rect x="20" y="40" width="60" height="15" rx="7" fill="url(#starField)" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <rect x="20" y="60" width="60" height="15" rx="7" fill="url(#starField)" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            
            {/* Connection lines */}
            <line x1="85" y1="27" x2="95" y2="27" stroke="currentColor" strokeWidth="1" opacity="0.8" />
            <line x1="85" y1="47" x2="95" y2="47" stroke="currentColor" strokeWidth="1" opacity="0.8" />
            <line x1="85" y1="67" x2="95" y2="67" stroke="currentColor" strokeWidth="1" opacity="0.8" />
            
            {/* Query indicator */}
            <circle cx="50" cy="85" r="3" fill="currentColor" opacity="0.8" />
            <circle cx="50" cy="85" r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          </svg>
        );

      case 'aws':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <defs>
              <radialGradient id="cloudGrad" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.4)" />
              </radialGradient>
            </defs>
            {/* Cosmic cloud formation */}
            <g transform="translate(50,50)">
              {/* Cloud layers */}
              <ellipse cx="-10" cy="-5" rx="15" ry="8" fill="url(#cloudGrad)" opacity="0.6" />
              <ellipse cx="5" cy="-8" rx="12" ry="6" fill="url(#cloudGrad)" opacity="0.7" />
              <ellipse cx="0" cy="5" rx="18" ry="10" fill="url(#cloudGrad)" opacity="0.5" />
              
              {/* Stars within cloud */}
              <circle cx="-5" cy="-2" r="1" fill="currentColor" opacity="0.9" />
              <circle cx="8" cy="-5" r="0.8" fill="currentColor" opacity="0.8" />
              <circle cx="2" cy="3" r="1.2" fill="currentColor" opacity="0.9" />
              
              {/* Connection points */}
              <circle cx="-20" cy="0" r="1.5" fill="currentColor" opacity="0.6" />
              <circle cx="20" cy="0" r="1.5" fill="currentColor" opacity="0.6" />
              <line x1="-15" y1="0" x2="15" y2="0" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
            </g>
          </svg>
        );

      case 'gcp':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <defs>
              <linearGradient id="gcpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.6)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.4)" />
              </linearGradient>
            </defs>
            {/* Global network constellation */}
            <g transform="translate(50,50)">
              {/* Central hub */}
              <circle cx="0" cy="0" r="4" fill="currentColor" />
              <circle cx="0" cy="0" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              
              {/* Network nodes */}
              <circle cx="-25" cy="-15" r="2" fill="currentColor" opacity="0.8" />
              <circle cx="25" cy="-15" r="2" fill="currentColor" opacity="0.8" />
              <circle cx="-25" cy="15" r="2" fill="currentColor" opacity="0.8" />
              <circle cx="25" cy="15" r="2" fill="currentColor" opacity="0.8" />
              <circle cx="0" cy="-30" r="2" fill="currentColor" opacity="0.8" />
              <circle cx="0" cy="30" r="2" fill="currentColor" opacity="0.8" />
              
              {/* Connection lines */}
              <path d="M0,0 L-25,-15 M0,0 L25,-15 M0,0 L-25,15 M0,0 L25,15 M0,0 L0,-30 M0,0 L0,30" 
                    stroke="url(#gcpGrad)" strokeWidth="1" opacity="0.6" />
            </g>
          </svg>
        );

      case 'docker':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <defs>
              <linearGradient id="dockerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.6)" />
              </linearGradient>
            </defs>
            {/* Container constellation */}
            <g transform="translate(50,50)">
              {/* Container blocks */}
              <rect x="-20" y="-15" width="12" height="8" rx="2" fill="url(#dockerGrad)" opacity="0.7" />
              <rect x="-5" y="-15" width="12" height="8" rx="2" fill="url(#dockerGrad)" opacity="0.8" />
              <rect x="10" y="-15" width="12" height="8" rx="2" fill="url(#dockerGrad)" opacity="0.7" />
              
              <rect x="-20" y="0" width="12" height="8" rx="2" fill="url(#dockerGrad)" opacity="0.8" />
              <rect x="-5" y="0" width="12" height="8" rx="2" fill="url(#dockerGrad)" opacity="0.9" />
              <rect x="10" y="0" width="12" height="8" rx="2" fill="url(#dockerGrad)" opacity="0.8" />
              
              {/* Stars between containers */}
              <circle cx="-26" cy="-11" r="0.8" fill="currentColor" opacity="0.6" />
              <circle cx="28" cy="-11" r="0.8" fill="currentColor" opacity="0.6" />
              <circle cx="1" cy="-20" r="1" fill="currentColor" opacity="0.7" />
              <circle cx="1" cy="12" r="1" fill="currentColor" opacity="0.7" />
            </g>
          </svg>
        );

      case 'machine learning':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <defs>
              <radialGradient id="mlGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.8)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
              </radialGradient>
            </defs>
            {/* Neural network constellation */}
            <g transform="translate(50,50)">
              {/* Input layer */}
              <circle cx="-30" cy="-15" r="2" fill="currentColor" />
              <circle cx="-30" cy="0" r="2" fill="currentColor" />
              <circle cx="-30" cy="15" r="2" fill="currentColor" />
              
              {/* Hidden layer */}
              <circle cx="0" cy="-20" r="2.5" fill="currentColor" />
              <circle cx="0" cy="-7" r="2.5" fill="currentColor" />
              <circle cx="0" cy="7" r="2.5" fill="currentColor" />
              <circle cx="0" cy="20" r="2.5" fill="currentColor" />
              
              {/* Output layer */}
              <circle cx="30" cy="-7" r="2" fill="currentColor" />
              <circle cx="30" cy="7" r="2" fill="currentColor" />
              
              {/* Connections */}
              <g stroke="url(#mlGrad)" strokeWidth="0.8" fill="none" opacity="0.6">
                <path d="M-28,-15 L-2,-20 M-28,-15 L-2,-7 M-28,-15 L-2,7 M-28,-15 L-2,20" />
                <path d="M-28,0 L-2,-20 M-28,0 L-2,-7 M-28,0 L-2,7 M-28,0 L-2,20" />
                <path d="M-28,15 L-2,-20 M-28,15 L-2,-7 M-28,15 L-2,7 M-28,15 L-2,20" />
                <path d="M2,-20 L28,-7 M2,-20 L28,7" />
                <path d="M2,-7 L28,-7 M2,-7 L28,7" />
                <path d="M2,7 L28,-7 M2,7 L28,7" />
                <path d="M2,20 L28,-7 M2,20 L28,7" />
              </g>
            </g>
          </svg>
        );

      case 'bioinformatics':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <defs>
              <linearGradient id="bioGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(236, 72, 153, 0.8)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.6)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
              </linearGradient>
            </defs>
            {/* DNA helix with constellation */}
            <g transform="translate(50,50)">
              {/* DNA backbone */}
              <path d="M-20,-30 Q-10,-15 -20,0 Q-30,15 -20,30" stroke="url(#bioGrad)" strokeWidth="2" fill="none" />
              <path d="M20,-30 Q10,-15 20,0 Q30,15 20,30" stroke="url(#bioGrad)" strokeWidth="2" fill="none" />
              
              {/* Base pairs as stars */}
              <line x1="-18" y1="-25" x2="18" y2="-25" stroke="currentColor" strokeWidth="1" opacity="0.7" />
              <line x1="-15" y1="-10" x2="15" y2="-10" stroke="currentColor" strokeWidth="1" opacity="0.7" />
              <line x1="-18" y1="5" x2="18" y2="5" stroke="currentColor" strokeWidth="1" opacity="0.7" />
              <line x1="-15" y1="20" x2="15" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.7" />
              
              {/* Star nodes */}
              <circle cx="-18" cy="-25" r="1.5" fill="currentColor" />
              <circle cx="18" cy="-25" r="1.5" fill="currentColor" />
              <circle cx="-15" cy="-10" r="1.5" fill="currentColor" />
              <circle cx="15" cy="-10" r="1.5" fill="currentColor" />
              <circle cx="-18" cy="5" r="1.5" fill="currentColor" />
              <circle cx="18" cy="5" r="1.5" fill="currentColor" />
              <circle cx="-15" cy="20" r="1.5" fill="currentColor" />
              <circle cx="15" cy="20" r="1.5" fill="currentColor" />
            </g>
          </svg>
        );

      case 'hpc':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <defs>
              <linearGradient id="hpcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                <stop offset="50%" stopColor="rgba(147, 51, 234, 0.9)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.8)" />
              </linearGradient>
            </defs>
            {/* High-performance cluster constellation */}
            <g transform="translate(50,50)">
              {/* Central processing core */}
              <circle cx="0" cy="0" r="5" fill="url(#hpcGrad)" />
              <circle cx="0" cy="0" r="10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              
              {/* Processing nodes */}
              <circle cx="-20" cy="-20" r="3" fill="currentColor" />
              <circle cx="20" cy="-20" r="3" fill="currentColor" />
              <circle cx="-20" cy="20" r="3" fill="currentColor" />
              <circle cx="20" cy="20" r="3" fill="currentColor" />
              
              {/* Energy lines */}
              <path d="M0,0 L-20,-20 M0,0 L20,-20 M0,0 L-20,20 M0,0 L20,20" 
                    stroke="url(#hpcGrad)" strokeWidth="2" opacity="0.8" />
              
              {/* Power indicators */}
              <circle cx="-20" cy="-20" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              <circle cx="20" cy="-20" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              <circle cx="-20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            </g>
          </svg>
        );

      case 'sagemaker':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <defs>
              <radialGradient id="sageGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.8)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
              </radialGradient>
            </defs>
            {/* Research lab constellation */}
            <g transform="translate(50,50)">
              {/* Central research hub */}
              <circle cx="0" cy="0" r="4" fill="url(#sageGrad)" />
              
              {/* Research instruments */}
              <circle cx="-25" cy="-10" r="2" fill="currentColor" opacity="0.8" />
              <circle cx="25" cy="-10" r="2" fill="currentColor" opacity="0.8" />
              <circle cx="0" cy="-25" r="2" fill="currentColor" opacity="0.8" />
              <circle cx="-15" cy="20" r="2" fill="currentColor" opacity="0.8" />
              <circle cx="15" cy="20" r="2" fill="currentColor" opacity="0.8" />
              
              {/* Data flow lines */}
              <path d="M0,0 L-25,-10 M0,0 L25,-10 M0,0 L0,-25 M0,0 L-15,20 M0,0 L15,20" 
                    stroke="url(#sageGrad)" strokeWidth="1" opacity="0.6" />
              
              {/* Observation rings */}
              <circle cx="0" cy="0" r="12" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              <circle cx="0" cy="0" r="18" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
            </g>
          </svg>
        );

      case 'bigquery':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <defs>
              <linearGradient id="bqGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.6)" />
              </linearGradient>
            </defs>
            {/* Data analytics constellation */}
            <g transform="translate(50,50)">
              {/* Query path */}
              <path d="M-30,-20 L-15,-10 L0,5 L15,15 L30,20" 
                    stroke="url(#bqGrad)" strokeWidth="2" fill="none" opacity="0.8" />
              
              {/* Data points */}
              <circle cx="-30" cy="-20" r="2" fill="currentColor" />
              <circle cx="-15" cy="-10" r="2.5" fill="currentColor" />
              <circle cx="0" cy="5" r="3" fill="currentColor" />
              <circle cx="15" cy="15" r="2.5" fill="currentColor" />
              <circle cx="30" cy="20" r="2" fill="currentColor" />
              
              {/* Analysis grid */}
              <g opacity="0.3">
                <line x1="-35" y1="-25" x2="35" y2="-25" stroke="currentColor" strokeWidth="0.5" />
                <line x1="-35" y1="0" x2="35" y2="0" stroke="currentColor" strokeWidth="0.5" />
                <line x1="-35" y1="25" x2="35" y2="25" stroke="currentColor" strokeWidth="0.5" />
                <line x1="-30" y1="-30" x2="-30" y2="30" stroke="currentColor" strokeWidth="0.5" />
                <line x1="0" y1="-30" x2="0" y2="30" stroke="currentColor" strokeWidth="0.5" />
                <line x1="30" y1="-30" x2="30" y2="30" stroke="currentColor" strokeWidth="0.5" />
              </g>
            </g>
          </svg>
        );

      case 'llm':
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <defs>
              <radialGradient id="llmGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.9)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.5)" />
              </radialGradient>
            </defs>
            {/* Neural constellation representing language processing */}
            <g transform="translate(50,50)">
              {/* Central processing core */}
              <circle cx="0" cy="0" r="6" fill="url(#llmGrad)" />
              
              {/* Language processing nodes */}
              <circle cx="-20" cy="-15" r="2" fill="currentColor" opacity="0.9" />
              <circle cx="20" cy="-15" r="2" fill="currentColor" opacity="0.9" />
              <circle cx="-25" cy="10" r="2" fill="currentColor" opacity="0.8" />
              <circle cx="25" cy="10" r="2" fill="currentColor" opacity="0.8" />
              <circle cx="0" cy="-25" r="2" fill="currentColor" opacity="0.9" />
              <circle cx="0" cy="25" r="2" fill="currentColor" opacity="0.9" />
              
              {/* Thought connections */}
              <path d="M0,0 L-20,-15 M0,0 L20,-15 M0,0 L-25,10 M0,0 L25,10 M0,0 L0,-25 M0,0 L0,25" 
                    stroke="url(#llmGrad)" strokeWidth="1.5" opacity="0.7" />
              
              {/* Consciousness rings */}
              <circle cx="0" cy="0" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
              <circle cx="0" cy="0" r="22" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              
              {/* Synaptic sparks */}
              <circle cx="-10" cy="-8" r="0.8" fill="currentColor" opacity="0.6" />
              <circle cx="12" cy="-5" r="0.8" fill="currentColor" opacity="0.6" />
              <circle cx="-8" cy="12" r="0.8" fill="currentColor" opacity="0.6" />
              <circle cx="8" cy="15" r="0.8" fill="currentColor" opacity="0.6" />
            </g>
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 100 100" className={className}>
            <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.6" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-center"
    >
      {getIcon()}
    </motion.div>
  );
}
