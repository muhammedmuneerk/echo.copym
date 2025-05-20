import { useState, useEffect } from 'react';

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
  
  // Calculate gradient position based on mouse movement
  const gradientPosition = {
    x: 50 + (mousePosition.x - 0.5) * 10,
    y: 50 + (mousePosition.y - 0.5) * 10
  };
  
  return (
    <div className="fixed w-full h-screen overflow-hidden ">
      {/* Base gradient background */}
      <div 
        className="absolute inset-0 "
        style={{
          backgroundPosition: `${gradientPosition.x}% ${gradientPosition.y}%`,
          transition: 'background-position 0.5s ease-out'
        }}
      />
      
      {/* Circuit patterns */}
      <CircuitLines />
      
      {/* Hexagon grid */}
      <HexagonGrid />
      
      {/* Glowing orbs */}
      <GlowingOrbs />
      
      {/* Tech circles */}
      <TechCircle 
        size={240} 
        position={{ x: '10%', y: '30%' }} 
        animationDelay={0} 
      />
      <TechCircle 
        size={180} 
        position={{ x: '85%', y: '70%' }} 
        animationDelay={1.5} 
      />
      
      {/* Content container */}
      <div className="relative z-10 w-full h-full">
        {/* Your actual content would go here */}
      </div>
    </div>
  );
};

// Circuit pattern component
const CircuitLines = () => (
  <div className="absolute inset-0 overflow-hidden opacity-30">
    {/* Horizontal lines */}
    {[...Array(20)].map((_, i) => (
      <div 
        key={`h-line-${i}`}
        className="absolute h-px bg-cyan-400"
        style={{
          top: `${5 + i * 5}%`,
          left: Math.random() * 30 + '%',
          width: Math.random() * 40 + 10 + '%',
          opacity: Math.random() * 0.5 + 0.2,
          boxShadow: '0 0 5px rgba(6, 182, 212, 0.7)'
        }}
      />
    ))}
    
    {/* Vertical lines */}
    {[...Array(20)].map((_, i) => (
      <div 
        key={`v-line-${i}`}
        className="absolute w-px bg-cyan-400"
        style={{
          left: `${5 + i * 5}%`,
          top: Math.random() * 30 + '%',
          height: Math.random() * 40 + 10 + '%',
          opacity: Math.random() * 0.5 + 0.2,
          boxShadow: '0 0 5px rgba(6, 182, 212, 0.7)'
        }}
      />
    ))}
    
    {/* Connection dots */}
    {[...Array(15)].map((_, i) => (
      <div 
        key={`dot-${i}`}
        className="absolute w-1 h-1 rounded-full bg-cyan-300"
        style={{
          left: Math.random() * 90 + 5 + '%',
          top: Math.random() * 90 + 5 + '%',
          opacity: Math.random() * 0.8 + 0.2,
          boxShadow: '0 0 8px rgba(6, 182, 212, 0.9)'
        }}
      />
    ))}
  </div>
);

// Hexagon grid component
const HexagonGrid = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern 
          id="hexGrid" 
          width="56" 
          height="100" 
          patternUnits="userSpaceOnUse"
          patternTransform="scale(2)"
        >
          <path 
            d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66Z" 
            fill="none" 
            stroke="rgba(56, 189, 248, 0.5)" 
            strokeWidth="0.5"
          />
          <path 
            d="M56 50L28 66L0 50" 
            fill="none" 
            stroke="rgba(56, 189, 248, 0.8)" 
            strokeWidth="0.5"
          />
          <path 
            d="M0 16L28 0L56 16" 
            fill="none" 
            stroke="rgba(56, 189, 248, 0.8)" 
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexGrid)" />
    </svg>
  </div>
);

// Glowing orbs component
const GlowingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(8)].map((_, i) => {
      const size = Math.random() * 6 + 2;
      const animationDuration = Math.random() * 10 + 20;
      
      return (
        <div 
          key={`orb-${i}`}
          className="absolute rounded-full bg-cyan-400"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
            boxShadow: `0 0 ${size * 2}px rgba(6, 182, 212, 0.8)`,
            animation: `float ${animationDuration}s infinite ease-in-out`
          }}
        />
      );
    })}
    
    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(20px, 10px); }
        50% { transform: translate(10px, 20px); }
        75% { transform: translate(-10px, 10px); }
      }
    `}</style>
  </div>
);

// Tech circle component
const TechCircle = ({ size, position, animationDelay }) => (
  <div 
    className="absolute opacity-40"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      left: position.x,
      top: position.y,
      transform: 'translate(-50%, -50%)'
    }}
  >
    {/* Outer circle */}
    <div 
      className="absolute inset-0 border border-cyan-400 rounded-full"
      style={{
        animation: `pulse 4s infinite ease-in-out ${animationDelay}s`
      }}
    />
    
    {/* Middle circle */}
    <div 
      className="absolute rounded-full border border-cyan-300"
      style={{
        top: '15%',
        left: '15%',
        right: '15%',
        bottom: '15%',
        animation: `rotate 20s infinite linear ${animationDelay}s`
      }}
    >
      {/* Dots around the middle circle */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x = Math.cos(angle) * 50 + 50;
        const y = Math.sin(angle) * 50 + 50;
        
        return (
          <div 
            key={`circle-dot-${i}`}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 5px rgba(6, 182, 212, 0.9)'
            }}
          />
        );
      })}
    </div>
    
    {/* Inner circle */}
    <div 
      className="absolute bg-cyan-400 rounded-full"
      style={{
        top: '40%',
        left: '40%',
        right: '40%',
        bottom: '40%',
        opacity: 0.6,
        boxShadow: '0 0 15px rgba(6, 182, 212, 0.8)',
        animation: `pulse 3s infinite ease-in-out ${animationDelay + 1}s`
      }}
    />
    
    <style jsx>{`
      @keyframes pulse {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 0.7; }
      }
      
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);



export default BackgroundPattern;