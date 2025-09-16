import { motion } from 'framer-motion';

interface SpaceWorkingIllustrationProps {
  className?: string;
}

export default function SpaceWorkingIllustration({ className = "w-full h-full" }: SpaceWorkingIllustrationProps) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 400 400" className="w-full h-full max-w-md">
        <defs>
          {/* Gradients */}
          <radialGradient id="spaceGrad" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.6)" />
            <stop offset="100%" stopColor="rgba(17, 24, 39, 0.9)" />
          </radialGradient>
          
          <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(75, 85, 99, 0.9)" />
            <stop offset="100%" stopColor="rgba(55, 65, 81, 0.9)" />
          </linearGradient>
          
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.6)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.4)" />
          </linearGradient>
          
          <radialGradient id="personGrad" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(156, 163, 175, 0.9)" />
            <stop offset="100%" stopColor="rgba(107, 114, 128, 0.8)" />
          </radialGradient>
        </defs>
        
        {/* Background space */}
        <rect width="400" height="400" fill="url(#spaceGrad)" />
        
        {/* Background stars */}
        <g opacity="0.6">
          <circle cx="50" cy="80" r="1" fill="currentColor" />
          <circle cx="120" cy="60" r="1.5" fill="currentColor" />
          <circle cx="180" cy="90" r="1" fill="currentColor" />
          <circle cx="250" cy="70" r="1.2" fill="currentColor" />
          <circle cx="320" cy="85" r="1" fill="currentColor" />
          <circle cx="350" cy="120" r="1.5" fill="currentColor" />
          <circle cx="80" cy="150" r="1" fill="currentColor" />
          <circle cx="300" cy="140" r="1.2" fill="currentColor" />
          <circle cx="40" cy="200" r="1" fill="currentColor" />
          <circle cx="360" cy="180" r="1.5" fill="currentColor" />
          <circle cx="100" cy="320" r="1" fill="currentColor" />
          <circle cx="280" cy="340" r="1.2" fill="currentColor" />
          <circle cx="340" cy="300" r="1" fill="currentColor" />
        </g>
        
        {/* Floating data particles */}
        <g opacity="0.4">
          <motion.circle
            cx="70"
            cy="160"
            r="2"
            fill="rgba(59, 130, 246, 0.8)"
            animate={{
              cy: [160, 140, 160],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.circle
            cx="330"
            cy="200"
            r="1.5"
            fill="rgba(147, 51, 234, 0.8)"
            animate={{
              cy: [200, 180, 200],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.circle
            cx="90"
            cy="280"
            r="1.8"
            fill="rgba(236, 72, 153, 0.8)"
            animate={{
              cy: [280, 260, 280],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </g>
        
        {/* Person silhouette */}
        <g transform="translate(200, 200)">
          {/* Head */}
          <circle cx="0" cy="-60" r="25" fill="url(#personGrad)" />
          
          {/* Body */}
          <ellipse cx="0" cy="-20" rx="30" ry="40" fill="url(#personGrad)" />
          
          {/* Arms */}
          <ellipse cx="-35" cy="-25" rx="12" ry="25" fill="url(#personGrad)" transform="rotate(-20)" />
          <ellipse cx="35" cy="-25" rx="12" ry="25" fill="url(#personGrad)" transform="rotate(20)" />
          
          {/* Hands on keyboard */}
          <circle cx="-25" cy="10" r="8" fill="url(#personGrad)" />
          <circle cx="25" cy="10" r="8" fill="url(#personGrad)" />
        </g>
        
        {/* Laptop */}
        <g transform="translate(200, 280)">
          {/* Laptop base */}
          <ellipse cx="0" cy="20" rx="80" ry="15" fill="url(#laptopGrad)" />
          <rect x="-75" y="5" width="150" height="30" rx="5" fill="url(#laptopGrad)" />
          
          {/* Laptop screen */}
          <rect x="-70" y="-60" width="140" height="90" rx="8" fill="url(#laptopGrad)" />
          <rect x="-65" y="-55" width="130" height="80" rx="5" fill="url(#screenGrad)" />
          
          {/* Code on screen */}
          <g opacity="0.8">
            <rect x="-60" y="-50" width="40" height="3" rx="1" fill="rgba(255, 255, 255, 0.8)" />
            <rect x="-60" y="-42" width="60" height="3" rx="1" fill="rgba(59, 130, 246, 0.8)" />
            <rect x="-60" y="-34" width="35" height="3" rx="1" fill="rgba(147, 51, 234, 0.8)" />
            <rect x="-60" y="-26" width="55" height="3" rx="1" fill="rgba(236, 72, 153, 0.8)" />
            <rect x="-60" y="-18" width="45" height="3" rx="1" fill="rgba(255, 255, 255, 0.6)" />
            <rect x="-60" y="-10" width="70" height="3" rx="1" fill="rgba(59, 130, 246, 0.6)" />
            <rect x="-60" y="-2" width="30" height="3" rx="1" fill="rgba(147, 51, 234, 0.6)" />
            
            {/* Cursor */}
            <motion.rect
              x="15"
              y="-2"
              width="2"
              height="3"
              fill="rgba(255, 255, 255, 0.9)"
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        </g>
        
        {/* Data flow lines */}
        <g opacity="0.3">
          <motion.path
            d="M100,150 Q200,100 300,150"
            stroke="rgba(59, 130, 246, 0.6)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: [0, -20],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.path
            d="M80,250 Q200,200 320,250"
            stroke="rgba(147, 51, 234, 0.6)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: [0, -20],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5,
            }}
          />
        </g>
        
        {/* Neural network nodes */}
        <g opacity="0.4">
          <circle cx="120" cy="180" r="3" fill="rgba(59, 130, 246, 0.8)" />
          <circle cx="280" cy="180" r="3" fill="rgba(147, 51, 234, 0.8)" />
          <circle cx="200" cy="120" r="3" fill="rgba(236, 72, 153, 0.8)" />
          
          {/* Connections */}
          <line x1="120" y1="180" x2="200" y2="120" stroke="rgba(59, 130, 246, 0.4)" strokeWidth="1" />
          <line x1="280" y1="180" x2="200" y2="120" stroke="rgba(147, 51, 234, 0.4)" strokeWidth="1" />
          <line x1="120" y1="180" x2="280" y2="180" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="1" />
        </g>
        
        {/* Floating geometric shapes */}
        <g opacity="0.3">
          <motion.polygon
            points="60,120 70,100 80,120 70,140"
            fill="rgba(59, 130, 246, 0.5)"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.polygon
            points="320,160 335,140 350,160 335,180"
            fill="rgba(147, 51, 234, 0.5)"
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </g>
      </svg>
    </div>
  );
}
