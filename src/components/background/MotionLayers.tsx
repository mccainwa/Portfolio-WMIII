import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useReducedMotion } from '../../lib/useReducedMotion';

// Dark space theme colors
const spaceColors = {
  background: 'rgba(17, 24, 39, 1)',
  primary: 'rgba(59, 130, 246, 0.25)',
  secondary: 'rgba(147, 51, 234, 0.2)',
  accent: 'rgba(236, 72, 153, 0.15)',
  starColors: ['#E0E7FF', '#DBEAFE', '#F3F4F6'],
  particleColors: [
    'rgba(59, 130, 246, 0.15)',  // Reduced from 0.4 to 0.15
    'rgba(147, 51, 234, 0.15)',  // Reduced from 0.4 to 0.15
    'rgba(236, 72, 153, 0.15)',  // Reduced from 0.4 to 0.15
    'rgba(168, 85, 247, 0.12)',  // Reduced from 0.3 to 0.12
    'rgba(99, 102, 241, 0.12)',  // Reduced from 0.3 to 0.12
    'rgba(139, 92, 246, 0.12)',  // Reduced from 0.3 to 0.12
  ]
};

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
  type: 'fast' | 'medium' | 'slow';
  brightness: number;
}

interface Constellation {
  id: number;
  stars: { x: number; y: number; brightness: number }[];
  connections: { from: number; to: number }[];
}

export default function MotionLayers() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [constellations, setConstellations] = useState<Constellation[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax transforms with safe window dimensions
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 1080;

  const backgroundX = useTransform(mouseX, [0, windowWidth], [-20, 20]);
  const backgroundY = useTransform(mouseY, [0, windowHeight], [-20, 20]);
  const starsX = useTransform(mouseX, [0, windowWidth], [-10, 10]);
  const starsY = useTransform(mouseY, [0, windowHeight], [-10, 10]);

  // Generate stars and constellations
  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 200; i++) { // Reduced star count from 300 to 200
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.1, // Reduced size range from 3+0.2 to 2+0.1
          opacity: Math.random() * 0.4 + 0.1, // Reduced opacity from 0.9+0.1 to 0.4+0.1
          twinkleDelay: Math.random() * 8, // Increased delay for slower twinkling
        });
      }
      setStars(newStars);
    };

    const generateConstellations = () => {
      const newConstellations: Constellation[] = [];
      for (let i = 0; i < 3; i++) {
        const starCount = 4 + Math.floor(Math.random() * 4);
        const constellationStars = [];
        const connections = [];

        for (let j = 0; j < starCount; j++) {
          constellationStars.push({
            x: Math.random() * 30 + (i * 35),
            y: Math.random() * 40 + 20,
            brightness: Math.random() * 0.6 + 0.4,
          });

          if (j > 0 && Math.random() < 0.7) {
            connections.push({ from: j - 1, to: j });
          }
        }

        newConstellations.push({
          id: i,
          stars: constellationStars,
          connections,
        });
      }
      setConstellations(newConstellations);
    };

    generateStars();
    generateConstellations();
  }, []);

  // Generate shooting stars periodically (only if motion is not reduced)
  useEffect(() => {
    if (prefersReducedMotion) return;

    const generateShootingStar = () => {
      const types: ('fast' | 'medium' | 'slow')[] = ['fast', 'medium', 'slow'];
      const type = types[Math.floor(Math.random() * types.length)];

      const durations = { fast: 0.8, medium: 1.5, slow: 2.5 };
      const brightness = Math.random() * 0.6 + 0.4;

      // More varied trajectories
      const startSide = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      let startX, startY, endX, endY;

      switch (startSide) {
        case 0: // From top
          startX = Math.random() * 100;
          startY = -10;
          endX = Math.random() * 100;
          endY = Math.random() * 50 + 50;
          break;
        case 1: // From right
          startX = 110;
          startY = Math.random() * 100;
          endX = Math.random() * 50;
          endY = Math.random() * 100;
          break;
        case 2: // From bottom
          startX = Math.random() * 100;
          startY = 110;
          endX = Math.random() * 100;
          endY = Math.random() * 50;
          break;
        default: // From left
          startX = -10;
          startY = Math.random() * 100;
          endX = Math.random() * 50 + 50;
          endY = Math.random() * 100;
      }

      const newShootingStar: ShootingStar = {
        id: Date.now() + Math.random(),
        startX,
        startY,
        endX,
        endY,
        duration: durations[type] + Math.random() * 0.5,
        delay: 0,
        type,
        brightness,
      };

      setShootingStars(prev => [...prev, newShootingStar]);

      // Remove shooting star after animation
      setTimeout(() => {
        setShootingStars(prev => prev.filter(star => star.id !== newShootingStar.id));
      }, (newShootingStar.duration + newShootingStar.delay) * 1000);
    };

    const interval = setInterval(() => {
      if (Math.random() < 0.1) { // Reduced from 25% to 10% chance for more subtle shooting stars
        generateShootingStar();
      }
    }, 8000); // Increased interval from 4000ms to 8000ms

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" style={{ background: spaceColors.background }}>
      {/* Deep space background with nebula */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/40 to-purple-900/50"
        style={{ x: backgroundX, y: backgroundY }}
      />



      {/* Subtle accent stars for depth */}
      {Array.from({ length: 10 }).map((_, i) => ( // Reduced from 20 to 10
        <motion.div
          key={`accent-star-${i}`}
          className="absolute w-0.5 h-0.5 bg-blue-300 rounded-full" // Reduced size and brightness
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1], // Reduced opacity from [0.3, 1, 0.3] to [0.1, 0.3, 0.1]
            scale: [0.8, 1.1, 0.8], // Reduced scale from [0.5, 1.5, 0.5] to [0.8, 1.1, 0.8]
          }}
          transition={{
            duration: 4 + Math.random() * 4, // Increased duration for slower animation
            repeat: Infinity,
            delay: Math.random() * 4, // Increased delay
            ease: 'easeInOut',
          }}
        />
      ))}



      {/* Vibrant Central Spiral Galaxy - Andromeda Style (No Conic Gradients) */}
      <motion.div
        className="absolute inset-0 opacity-40" // Restored higher opacity for visual appeal
        animate={prefersReducedMotion ? {} : {
          rotate: [0, 360],
        }}
        transition={prefersReducedMotion ? {} : {
          duration: 420, // 7 minutes for realistic rotation
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: `
            /* Central supermassive black hole region */
            radial-gradient(circle 15px at 50% 50%, rgba(0, 0, 0, 0.9) 0%, transparent 100%),
            /* Bright galactic nucleus - yellow/orange older stars */
            radial-gradient(circle 60px at 50% 50%, rgba(255, 220, 150, 0.7) 0%, rgba(255, 200, 120, 0.4) 40%, transparent 70%),
            /* Inner stellar bulge - K and M type stars */
            radial-gradient(ellipse 180px 100px at 50% 50%, rgba(255, 180, 100, 0.35) 0%, rgba(255, 160, 80, 0.25) 60%, transparent 85%),
            /* Main galactic disk - mixed stellar populations */
            radial-gradient(ellipse 500px 250px at 50% 50%, rgba(200, 220, 255, 0.15) 0%, rgba(180, 200, 255, 0.08) 70%, transparent 90%),
            /* Outer galactic halo - metal-poor stars */
            radial-gradient(ellipse 700px 350px at 50% 50%, rgba(240, 240, 255, 0.06) 0%, transparent 95%),
            /* Star formation regions - scattered HII regions */
            radial-gradient(circle 25px at 45% 35%, rgba(255, 150, 180, 0.4) 0%, rgba(255, 100, 150, 0.2) 50%, transparent 80%),
            radial-gradient(circle 20px at 60% 65%, rgba(150, 200, 255, 0.35) 0%, rgba(100, 180, 255, 0.18) 50%, transparent 75%),
            radial-gradient(circle 30px at 35% 70%, rgba(255, 180, 150, 0.3) 0%, rgba(255, 150, 120, 0.15) 50%, transparent 80%),
            radial-gradient(circle 18px at 70% 30%, rgba(180, 150, 255, 0.32) 0%, rgba(150, 120, 255, 0.16) 50%, transparent 75%)`,
        }}
      />

      {/* Distant Elliptical Galaxy - M87 Style */}
      <motion.div
        className="absolute inset-0 opacity-35" // Increased opacity for better visibility
        animate={prefersReducedMotion ? {} : {
          rotate: [360, 0],
        }}
        transition={prefersReducedMotion ? {} : {
          duration: 540, // Increased from 180s to 540s (9 minutes) for realistic rotation
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: `
            /* Central supermassive black hole and jet */
            radial-gradient(circle 8px at 75% 25%, rgba(0, 0, 0, 0.8) 0%, transparent 100%),
            /* Bright elliptical nucleus - old red giant stars */
            radial-gradient(circle 35px at 75% 25%, rgba(255, 200, 150, 0.6) 0%, rgba(255, 180, 120, 0.3) 50%, transparent 80%),
            /* Inner elliptical bulge - K-type stars */
            radial-gradient(ellipse 200px 140px at 75% 25%, rgba(255, 220, 180, 0.25) 0%, rgba(255, 200, 160, 0.15) 60%, transparent 85%),
            /* Main elliptical halo - old stellar population */
            radial-gradient(ellipse 350px 200px at 75% 25%, rgba(255, 240, 220, 0.12) 0%, rgba(255, 230, 200, 0.06) 70%, transparent 90%),
            /* Outer stellar halo - metal-poor stars */
            radial-gradient(ellipse 450px 250px at 75% 25%, rgba(240, 240, 255, 0.05) 0%, transparent 95%),
            /* Globular cluster system */
            radial-gradient(circle 4px at 70% 20%, rgba(255, 240, 200, 0.5) 0%, transparent 100%),
            radial-gradient(circle 3px at 80% 30%, rgba(255, 240, 200, 0.4) 0%, transparent 100%),
            radial-gradient(circle 5px at 72% 28%, rgba(255, 240, 200, 0.55) 0%, transparent 100%),
            radial-gradient(circle 3px at 78% 22%, rgba(255, 240, 200, 0.35) 0%, transparent 100%),
            radial-gradient(circle 4px at 73% 32%, rgba(255, 240, 200, 0.45) 0%, transparent 100%)`,
        }}
      />



      {/* Edge-on Spiral Galaxy - NGC 4565 "Needle Galaxy" Style */}
      <motion.div
        className="absolute inset-0 opacity-30" // Increased opacity for better visibility
        animate={prefersReducedMotion ? {} : {
          rotate: [180, 540],
        }}
        transition={prefersReducedMotion ? {} : {
          duration: 720, // Increased from 250s to 720s (12 minutes) for realistic rotation
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: `
            /* Central bulge - old stellar population */
            radial-gradient(ellipse 50px 100px at 85% 60%, rgba(255, 200, 150, 0.6) 0%, rgba(255, 180, 120, 0.4) 60%, transparent 85%),
            /* Galactic disk - edge-on view with stellar populations */
            linear-gradient(to bottom,
              transparent 0%,
              rgba(200, 220, 255, 0.25) 42%,
              rgba(180, 200, 255, 0.4) 47%,
              rgba(220, 230, 255, 0.5) 50%,
              rgba(180, 200, 255, 0.4) 53%,
              rgba(200, 220, 255, 0.25) 58%,
              transparent 100%),
            /* Prominent dust lane - cosmic dust and dark matter */
            linear-gradient(to bottom,
              transparent 0%,
              transparent 47%,
              rgba(0, 0, 0, 0.6) 49%,
              rgba(0, 0, 0, 0.8) 50%,
              rgba(0, 0, 0, 0.6) 51%,
              transparent 53%,
              transparent 100%),
            /* Outer stellar halo - metal-poor stars */
            radial-gradient(ellipse 350px 180px at 85% 60%, rgba(240, 240, 255, 0.1) 0%, transparent 80%),
            /* HII regions and star formation - scattered throughout disk */
            radial-gradient(circle 4px at 82% 56%, rgba(255, 150, 180, 0.5) 0%, transparent 100%),
            radial-gradient(circle 3px at 88% 64%, rgba(150, 200, 255, 0.4) 0%, transparent 100%),
            radial-gradient(circle 5px at 85% 52%, rgba(255, 180, 150, 0.35) 0%, transparent 100%),
            radial-gradient(circle 3px at 83% 68%, rgba(180, 150, 255, 0.4) 0%, transparent 100%)`,
        }}
      />
















      {/* Vibrant Star Formation Regions and Nebulae (No Rotating Patterns) */}
      <motion.div
        className="absolute inset-0 opacity-35"
        animate={prefersReducedMotion ? {} : {
          opacity: [0.3, 0.4, 0.3],
          scale: [1, 1.02, 1],
        }}
        transition={prefersReducedMotion ? {} : {
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: `
            /* Emission nebulae - red/pink hydrogen regions */
            radial-gradient(ellipse 120px 60px at 25% 35%, rgba(255, 100, 150, 0.4) 0%, rgba(255, 50, 100, 0.2) 50%, transparent 80%),
            radial-gradient(ellipse 100px 50px at 75% 65%, rgba(255, 150, 100, 0.35) 0%, rgba(255, 100, 50, 0.18) 60%, transparent 85%),
            /* Reflection nebulae - blue dust clouds */
            radial-gradient(ellipse 140px 70px at 60% 25%, rgba(100, 150, 255, 0.3) 0%, rgba(50, 100, 200, 0.15) 60%, transparent 80%),
            radial-gradient(ellipse 90px 45px at 30% 75%, rgba(150, 100, 255, 0.28) 0%, rgba(100, 50, 200, 0.14) 50%, transparent 75%),
            /* Planetary nebulae */
            radial-gradient(circle 35px at 80% 40%, rgba(100, 255, 200, 0.4) 0%, rgba(50, 200, 150, 0.2) 40%, transparent 70%),
            radial-gradient(circle 25px at 20% 60%, rgba(255, 200, 100, 0.35) 0%, rgba(255, 150, 50, 0.18) 45%, transparent 75%)`,
        }}
      />

      {/* Supernova Remnants and Stellar Nurseries (Static Positions) */}
      <motion.div
        className="absolute inset-0 opacity-25"
        animate={prefersReducedMotion ? {} : {
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={prefersReducedMotion ? {} : {
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: `
            /* Supernova remnant - expanding shock wave */
            radial-gradient(circle 60px at 40% 30%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 200, 100, 0.25) 30%, rgba(255, 100, 50, 0.1) 70%, transparent 100%),
            /* Young stellar nursery */
            radial-gradient(circle 45px at 70% 80%, rgba(100, 255, 200, 0.4) 0%, rgba(50, 200, 150, 0.2) 40%, transparent 80%),
            /* Wolf-Rayet star region */
            radial-gradient(circle 30px at 85% 20%, rgba(255, 100, 255, 0.35) 0%, rgba(200, 50, 200, 0.18) 45%, transparent 75%)`,
        }}
      />

      {/* Enhanced twinkling stars with varied brightness */}
      <motion.div
        className="absolute inset-0"
        style={{ x: starsX, y: starsY }}
      >
        {stars.map((star) => {
          const starColor = star.size > 2 ? spaceColors.starColors[0] : star.size > 1.5 ? spaceColors.starColors[1] : spaceColors.starColors[2];
          const glowIntensity = star.size > 2 ? 'drop-shadow-sm' : '';

          return (
            <motion.div
              key={star.id}
              className={`absolute rounded-full ${glowIntensity}`}
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: starColor,
                boxShadow: star.size > 2 ? `0 0 ${star.size * 2}px rgba(59, 130, 246, 0.3)` : 'none',
                ...(prefersReducedMotion ? { opacity: star.opacity } : {}),
              }}
              animate={prefersReducedMotion ? {} : {
                opacity: [star.opacity * 0.3, star.opacity * 0.6, star.opacity * 0.3], // Reduced intensity
                scale: [0.9, 1.1, 0.9], // Reduced scale variation
                filter: star.size > 2 ? [
                  'brightness(0.95) saturate(1.0)',
                  'brightness(1.1) saturate(1.1)',
                  'brightness(0.95) saturate(1.0)'
                ] : [
                  'brightness(0.98)',
                  'brightness(1.02)',
                  'brightness(0.98)'
                ],
              }}
              transition={prefersReducedMotion ? {} : {
                duration: 5 + Math.random() * 6, // Increased duration for slower twinkling
                repeat: Infinity,
                delay: star.twinkleDelay,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </motion.div>

      {/* Additional background star layer for depth */}
      <motion.div
        className="absolute inset-0 opacity-35" // Increased for better visibility
        style={{ x: starsX, y: starsY }}
      >
        {Array.from({ length: 60 }).map((_, i) => ( // Reduced from 100 to 60
          <motion.div
            key={`bg-star-${i}`}
            className="absolute bg-blue-100 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 1 + 0.2}px`,
              height: `${Math.random() * 1 + 0.2}px`,
            }}
            animate={prefersReducedMotion ? {} : {
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={prefersReducedMotion ? {} : {
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Shooting stars */}
      {shootingStars.map((shootingStar) => (
        <motion.div
          key={shootingStar.id}
          className="absolute"
          style={{
            left: `${shootingStar.startX}%`,
            top: `${shootingStar.startY}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            x: `${(shootingStar.endX - shootingStar.startX) * (windowWidth / 100)}px`,
            y: `${(shootingStar.endY - shootingStar.startY) * (windowHeight / 100)}px`,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: shootingStar.duration,
            delay: shootingStar.delay,
            ease: 'easeOut',
          }}
        >
          <div className="relative">
            {/* Shooting star trail */}
            <motion.div
              className="absolute w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent shadow-lg shadow-white/50"
              style={{
                transformOrigin: 'left center',
                rotate: `${Math.atan2(
                  shootingStar.endY - shootingStar.startY,
                  shootingStar.endX - shootingStar.startX
                ) * (180 / Math.PI)}deg`,
              }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: shootingStar.duration,
                ease: 'easeOut',
              }}
            />
            {/* Shooting star head */}
            <motion.div
              className="w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50"
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: shootingStar.duration,
                ease: 'easeOut',
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Subtle floating cosmic dust particles */}
      {Array.from({ length: 40 }).map((_, i) => { // Reduced from 80 to 40
        // Use theme-aware particle colors
        const particleSize = Math.random() * 3 + 0.3;
        const driftDistance = Math.random() * 200 + 100;

        return (
          <motion.div
            key={`dust-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${particleSize}px`,
              height: `${particleSize}px`,
              background: spaceColors.particleColors[Math.floor(Math.random() * spaceColors.particleColors.length)],
              filter: particleSize > 2 ? 'blur(0.5px)' : 'none',
            }}
            animate={prefersReducedMotion ? {} : {
              x: [0, Math.random() * driftDistance - driftDistance/2, Math.random() * driftDistance - driftDistance/2],
              y: [0, Math.random() * driftDistance - driftDistance/2, Math.random() * driftDistance - driftDistance/2],
              opacity: [0, 0.9, 0.3, 0.9, 0],
              scale: [0.3, 1.5, 0.8, 1.2, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={prefersReducedMotion ? {} : {
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeInOut',
            }}
          />
        );
      })}

      {/* Drifting space debris */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={`debris-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 1.5 + 0.5}px`,
            height: `${Math.random() * 8 + 2}px`,
            background: 'linear-gradient(90deg, transparent, rgba(156, 163, 175, 0.3), transparent)',
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={prefersReducedMotion ? {} : {
            x: [0, Math.random() * 300 - 150],
            y: [0, Math.random() * 300 - 150],
            opacity: [0, 0.6, 0],
            rotate: [0, 360],
          }}
          transition={prefersReducedMotion ? {} : {
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: 'linear',
          }}
        />
      ))}

      {/* Interactive cursor trail effect */}
      <motion.div
        className="absolute w-4 h-4 pointer-events-none"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-sm" />
      </motion.div>

      {/* Constellation patterns */}
      {constellations.map((constellation) => (
        <motion.div
          key={constellation.id}
          className="absolute inset-0 opacity-40"
          animate={prefersReducedMotion ? {} : {
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={prefersReducedMotion ? {} : {
            duration: 8 + constellation.id * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Constellation stars */}
          {constellation.stars.map((star, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-1 bg-blue-200 rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                opacity: star.brightness,
              }}
              animate={prefersReducedMotion ? {} : {
                scale: [0.8, 1.4, 0.8],
                opacity: [star.brightness * 0.5, star.brightness, star.brightness * 0.5],
              }}
              transition={prefersReducedMotion ? {} : {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: index * 0.3,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Constellation connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {constellation.connections.map((connection, index) => {
              const fromStar = constellation.stars[connection.from];
              const toStar = constellation.stars[connection.to];
              return (
                <motion.line
                  key={index}
                  x1={`${fromStar.x}%`}
                  y1={`${fromStar.y}%`}
                  x2={`${toStar.x}%`}
                  y2={`${toStar.y}%`}
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="0.5"
                  animate={prefersReducedMotion ? {} : {
                    opacity: [0.1, 0.5, 0.1],
                  }}
                  transition={prefersReducedMotion ? {} : {
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: 'easeInOut',
                  }}
                />
              );
            })}
          </svg>
        </motion.div>
      ))}



      {/* Pulsing distant stars */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`distant-star-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 1.5 + 0.5}px`,
            height: `${Math.random() * 1.5 + 0.5}px`,
            background: ['#60A5FA', '#A855F7', '#EC4899'][Math.floor(Math.random() * 3)],
          }}
          animate={prefersReducedMotion ? {} : {
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={prefersReducedMotion ? {} : {
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
