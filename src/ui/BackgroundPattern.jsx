import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BackgroundPattern = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed w-full h-screen overflow-hidden" 
         style={{ 
           background: 'linear-gradient(90deg, rgba(11, 26, 161, 0.2) 0%, rgba(9, 121, 43, 0.2) 38%, rgba(24, 204, 14, 0.2) 100%)',
           backgroundColor: '#050505'
         }}>
      {/* Dynamic gradient overlay that follows mouse */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(24, 204, 14, 0.15), transparent 70%)`,
          transition: 'background 0.3s ease-out'
        }}
      />
      
      {/* Grid pattern overlay */}
      <GridPattern />
      
      {/* Circuit board patterns */}
      <CircuitNetwork />
      
      {/* Scanning lines */}
      <ScanningLines />
      
      {/* HUD overlay */}
      <HUDLayer />
      
      {/* Content overlay */}
      <div className="relative z-20 w-full h-full pointer-events-none">
        {/* Content goes here */}
      </div>
    </div>
  );
};

// Grid pattern component
const GridPattern = () => (
  <div className="absolute inset-0 opacity-20">
    <svg width="100%" height="100%" className="absolute inset-0">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path 
            d="M 40 0 L 0 0 0 40" 
            fill="none" 
            stroke="rgba(24, 204, 14, 0.3)" 
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

// Circuit network component
const CircuitNetwork = () => {
  const paths = [
    // Horizontal
    "M0,200 L300,200 L320,220 L600,220 L620,200 L100%,200",
    "M0,400 L200,400 L220,380 L500,380 L520,400 L100%,400",
    "M0,600 L400,600 L420,580 L700,580 L720,600 L100%,600",
    // Vertical
    "M300,0 L300,250 L320,270 L320,500 L300,520 L300,100%",
    "M600,0 L600,180 L580,200 L580,350 L600,370 L600,100%",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(11, 26, 161, 0.1)" />
            <stop offset="50%" stopColor="rgba(9, 121, 43, 0.8)" />
            <stop offset="100%" stopColor="rgba(24, 204, 14, 0.1)" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Circuit paths */}
        <g opacity="0.6" filter="url(#glow)">
          {paths.map((d, idx) => (
            <motion.path
              key={idx}
              d={d}
              fill="none"
              stroke="url(#circuitGradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="8 6"
              initial={{ strokeDashoffset: 14 }}
              animate={{ strokeDashoffset: -14 }}
              transition={{ duration: 4 + idx * 0.5, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </g>

        {/* Circuit nodes */}
        <g>
          {[
            { x: 300, y: 200 }, { x: 600, y: 220 }, { x: 200, y: 400 },
            { x: 500, y: 380 }, { x: 400, y: 600 }, { x: 300, y: 270 },
            { x: 600, y: 200 }, { x: 320, y: 500 }
          ].map((node, i) => (
            <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}>
              <circle 
                cx={node.x} 
                cy={node.y} 
                r="3" 
                fill="rgba(9, 121, 43, 0.9)"
              />
              <motion.circle 
                cx={node.x} 
                cy={node.y} 
                r="6" 
                fill="none" 
                stroke="rgba(24, 204, 14, 0.4)"
                strokeWidth="1"
                animate={{ r: [6, 10], opacity: [1, 0] }}
                transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeOut" }}
              />
            </motion.g>
          ))}
        </g>
      </svg>
    </div>
  );
};

// Simple HUD overlay with subtle concentric rings and crosshair lines
const HUDLayer = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <motion.svg
      width="100%"
      height="100%"
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.4, 0.4, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    >
      <g stroke="rgba(24, 204, 14, 0.25)" strokeWidth="1" strokeLinecap="round">
        {/* Outer dashed border */}
        <rect x="2%" y="2%" width="96%" height="96%" fill="none" strokeDasharray="6 6" />
        {/* Crosshair */}
        <line x1="50%" y1="0" x2="50%" y2="100%" opacity="0.3" />
        <line x1="0" y1="50%" x2="100%" y2="50%" opacity="0.3" />
        {/* Concentric circles */}
        <circle cx="50%" cy="50%" r="60" fill="none" opacity="0.25" />
        <circle cx="50%" cy="50%" r="120" fill="none" opacity="0.15" />
        <motion.circle
          cx="50%"
          cy="50%"
          r="90"
          fill="none"
          opacity="0.2"
          animate={{ rotate: 360 }}
          transformOrigin="50% 50%"
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </g>
    </motion.svg>
  </div>
);

// Scanning lines effect
const ScanningLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(3)].map((_, i) => (
      <div 
        key={i}
        className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60"
        style={{
          top: `${20 + i * 30}%`,
          animation: `scan 8s infinite ease-in-out ${i * 2}s`,
          boxShadow: '0 0 10px rgba(24, 204, 14, 0.8)'
        }}
      />
    ))}
    
    <style jsx>{`
      @keyframes scan {
        0%, 100% { transform: translateX(-100%); opacity: 0; }
        10%, 90% { opacity: 0.6; }
        50% { transform: translateX(0%); opacity: 1; }
      }
    `}</style>
  </div>
);

export default BackgroundPattern;