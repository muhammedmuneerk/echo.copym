import { useState, useEffect, useMemo } from 'react';

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
const CircuitNetwork = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg width="100%" height="100%" className="absolute inset-0">
      {/* Circuit paths */}
      <g opacity="0.4">
        {/* Horizontal circuits */}
        <path 
          d="M0,200 L300,200 L320,220 L600,220 L620,200 L100%,200" 
          fill="none" 
          stroke="url(#circuitGradient)" 
          strokeWidth="2"
          className="animate-pulse"
        />
        <path 
          d="M0,400 L200,400 L220,380 L500,380 L520,400 L100%,400" 
          fill="none" 
          stroke="url(#circuitGradient)" 
          strokeWidth="2"
          style={{ animationDelay: '1s' }}
          className="animate-pulse"
        />
        <path 
          d="M0,600 L400,600 L420,580 L700,580 L720,600 L100%,600" 
          fill="none" 
          stroke="url(#circuitGradient)" 
          strokeWidth="2"
          style={{ animationDelay: '2s' }}
          className="animate-pulse"
        />
        
        {/* Vertical circuits */}
        <path 
          d="M300,0 L300,250 L320,270 L320,500 L300,520 L300,100%" 
          fill="none" 
          stroke="url(#circuitGradient)" 
          strokeWidth="2"
          style={{ animationDelay: '1.5s' }}
          className="animate-pulse"
        />
        <path 
          d="M600,0 L600,180 L580,200 L580,350 L600,370 L600,100%" 
          fill="none" 
          stroke="url(#circuitGradient)" 
          strokeWidth="2"
          style={{ animationDelay: '0.5s' }}
          className="animate-pulse"
        />
      </g>
      
      {/* Circuit nodes */}
      <g>
        {[
          { x: 300, y: 200 }, { x: 600, y: 220 }, { x: 200, y: 400 },
          { x: 500, y: 380 }, { x: 400, y: 600 }, { x: 300, y: 270 },
          { x: 600, y: 200 }, { x: 320, y: 500 }
        ].map((node, i) => (
          <g key={i}>
            <circle 
              cx={node.x} 
              cy={node.y} 
              r="4" 
              fill="rgba(9, 121, 43, 0.8)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
            <circle 
              cx={node.x} 
              cy={node.y} 
              r="8" 
              fill="none" 
              stroke="rgba(24, 204, 14, 0.4)"
              strokeWidth="1"
              className="animate-ping"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          </g>
        ))}
      </g>
      
      <defs>
        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(11, 26, 161, 0.1)" />
          <stop offset="50%" stopColor="rgba(9, 121, 43, 0.8)" />
          <stop offset="100%" stopColor="rgba(24, 204, 14, 0.1)" />
        </linearGradient>
      </defs>
    </svg>
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