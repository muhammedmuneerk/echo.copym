import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Asset Icons
const AssetIcons = {
  RealEstate: ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Gold: ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <text x="12" y="16" textAnchor="middle" fontSize="8" fill="currentColor">Au</text>
    </svg>
  ),
  CarbonCredits: ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M17 3.34a10 10 0 1 1-14.995 8.984" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 7v10M8 9l4-2 4 2M8 15l4 2 4-2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  PrivateEquity: ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Art: ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
      <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Infrastructure: ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

// Token component
const Token = ({ x, y, delay = 0, targetX, targetY, color = "#00ff85", isMobile = false }) => (
  <motion.div
    initial={{ 
      x, 
      y, 
      scale: 0, 
      opacity: 0,
      background: color
    }}
    animate={{ 
      x: [x, targetX], 
      y: [y, targetY], 
      scale: [0, 1, 0.8], 
      opacity: [0, 1, 0.8],
      background: [color, "#ffffff", color]
    }}
    transition={{ 
      duration: 2, 
      delay,
      ease: "easeInOut"
    }}
    className={`absolute ${isMobile ? 'w-2 h-2' : 'w-3 h-3'} rounded-full shadow-lg`}
    style={{
      boxShadow: `0 0 ${isMobile ? '6px' : '10px'} ${color}`,
    }}
  />
);

// Investor avatar component
const InvestorAvatar = ({ x, y, delay = 0, isMobile = false }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    className={`absolute ${isMobile ? 'w-6 h-6 text-xs' : 'w-8 h-8 text-xs'} rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg`}
    style={{ left: x, top: y }}
  >
    👤
  </motion.div>
);

// Main animation sequence component
const TokenizationAnimation = ({ isMobile = false, isTablet = false }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showTokens, setShowTokens] = useState(false);
  const [showInvestors, setShowInvestors] = useState(false);

  // Desktop stays exactly the same as original, mobile/tablet get responsive scaling
  const assets = [
    { 
      icon: AssetIcons.RealEstate, 
      color: "#4169E1", 
      name: "Real Estate",
      position: isMobile ? 
        { x: 60 * 0.7, y: 90 * 0.7 } : 
        isTablet ? 
        { x: 80 * 0.85, y: 120 * 0.85 } : 
        { x: 100, y: 150 } // Original desktop values
    },
    { 
      icon: AssetIcons.Gold, 
      color: "#FFD700", 
      name: "Gold",
      position: isMobile ? 
        { x: 140 * 0.7, y: 70 * 0.7 } : 
        isTablet ? 
        { x: 170 * 0.85, y: 95 * 0.85 } : 
        { x: 200, y: 120 } // Original desktop values
    },
    { 
      icon: AssetIcons.CarbonCredits, 
      color: "#00ff85", 
      name: "Carbon Credits",
      position: isMobile ? 
        { x: 80 * 0.7, y: 150 * 0.7 } : 
        isTablet ? 
        { x: 100 * 0.85, y: 185 * 0.85 } : 
        { x: 120, y: 220 } // Original desktop values
    },
    { 
      icon: AssetIcons.PrivateEquity, 
      color: "#00e676", 
      name: "Private Equity",
      position: isMobile ? 
        { x: 120 * 0.7, y: 120 * 0.7 } : 
        isTablet ? 
        { x: 150 * 0.85, y: 150 * 0.85 } : 
        { x: 180, y: 180 } // Original desktop values
    },
    { 
      icon: AssetIcons.Art, 
      color: "#9C27B0", 
      name: "Art",
      position: isMobile ? 
        { x: 100 * 0.7, y: 55 * 0.7 } : 
        isTablet ? 
        { x: 125 * 0.85, y: 75 * 0.85 } : 
        { x: 150, y: 100 } // Original desktop values
    },
    { 
      icon: AssetIcons.Infrastructure, 
      color: "#FF6B35", 
      name: "Infrastructure",
      position: isMobile ? 
        { x: 50 * 0.7, y: 110 * 0.7 } : 
        isTablet ? 
        { x: 65 * 0.85, y: 140 * 0.85 } : 
        { x: 80, y: 180 } // Original desktop values
    }
  ];

  const investors = isMobile ? [
    { x: 200 * 0.7, y: 85 * 0.7 },
    { x: 220 * 0.7, y: 65 * 0.7 },
    { x: 240 * 0.7, y: 105 * 0.7 },
    { x: 200 * 0.7, y: 125 * 0.7 },
    { x: 225 * 0.7, y: 115 * 0.7 },
    { x: 210 * 0.7, y: 95 * 0.7 }
  ] : isTablet ? [
    { x: 260 * 0.85, y: 112 * 0.85 },
    { x: 285 * 0.85, y: 88 * 0.85 },
    { x: 310 * 0.85, y: 136 * 0.85 },
    { x: 260 * 0.85, y: 162 * 0.85 },
    { x: 295 * 0.85, y: 152 * 0.85 },
    { x: 275 * 0.85, y: 125 * 0.85 }
  ] : [
    // Original desktop values
    { x: 320, y: 140 },
    { x: 350, y: 110 },
    { x: 380, y: 170 },
    { x: 320, y: 200 },
    { x: 360, y: 190 },
    { x: 340, y: 160 }
  ];

  useEffect(() => {
    const sequence = [
      () => setCurrentPhase(1), // Show assets
      () => setCurrentPhase(2), // Start tokenization
      () => setShowTokens(true), // Show tokens
      () => setShowInvestors(true), // Show investors
      () => setCurrentPhase(3), // Distribution phase
      () => setCurrentPhase(0), // Reset for loop
    ];

    let timeouts = [];
    sequence.forEach((action, index) => {
      timeouts.push(setTimeout(action, index * 1500));
    });

    // Loop the animation
    const loopTimeout = setTimeout(() => {
      setCurrentPhase(0);
      setShowTokens(false);
      setShowInvestors(false);
    }, sequence.length * 1500);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(loopTimeout);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Tokenization Hub */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: currentPhase >= 2 ? 1 : 0.8, 
          opacity: currentPhase >= 1 ? 1 : 0,
          boxShadow: currentPhase >= 2 ? "0 0 30px rgba(0, 255, 133, 0.5)" : "none"
        }}
        transition={{ duration: 1 }}
        className={isMobile ? 
          "absolute w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center z-10" :
          isTablet ?
          "absolute w-18 h-18 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center z-10" :
          "absolute w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center z-10"
        }
        style={isMobile ? 
          { left: "140px", top: "120px", transform: "translate(-50%, -50%)" } :
          isTablet ?
          { left: "180px", top: "150px", transform: "translate(-50%, -50%)" } :
          { left: "50%", top: "50%", transform: "translate(-50%, -50%)" } // Original desktop positioning
        }
      >
        {/* <span className={`text-white font-bold ${isMobile ? 'text-xs' : 'text-xs'}`}>
          {isMobile ? 'COPYM' : 'COPYM'}
        </span> */}

        <img
          src="/assets/icons/logo-svg-transparent.svg"
          className={`${isMobile ? "w-16" : "w-24"}`}
        />
      </motion.div>

      {/* Assets */}
      {assets.map((asset, index) => (
        <motion.div
          key={asset.name}
          initial={{ scale: 0, opacity: 0, x: asset.position.x, y: asset.position.y }}
          animate={{ 
            scale: currentPhase >= 1 ? 1 : 0,
            opacity: currentPhase >= 1 ? 1 : 0,
            x: currentPhase >= 2 ? asset.position.x + (isMobile ? 10 : isTablet ? 15 : 20) : asset.position.x, // Original desktop offset
            y: currentPhase >= 2 ? asset.position.y + (isMobile ? 5 : isTablet ? 8 : 10) : asset.position.y // Original desktop offset
          }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className={`absolute ${isMobile ? 'w-8 h-8' : isTablet ? 'w-10 h-10' : 'w-12 h-12'} rounded-lg flex items-center justify-center`}
          style={{ 
            background: `linear-gradient(135deg, ${asset.color}20, ${asset.color}40)`,
            border: `2px solid ${asset.color}`,
            color: asset.color
          }}
        >
          <asset.icon size={isMobile ? 16 : isTablet ? 20 : 24} />
        </motion.div>
      ))}

      {/* Tokenization beams */}
      {currentPhase >= 2 && assets.map((asset, index) => (
        <motion.div
          key={`beam-${index}`}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: isMobile ? 35 : isTablet ? 50 : 60, opacity: 0.6 }} // Original desktop width
          transition={{ duration: 1, delay: index * 0.1 }}
          className="absolute h-0.5 origin-left"
          style={{
            left: asset.position.x + (isMobile ? 32 : isTablet ? 40 : 48), // Original desktop offset
            top: asset.position.y + (isMobile ? 16 : isTablet ? 20 : 24), // Original desktop offset
            background: `linear-gradient(to right, ${asset.color}, #00ff85)`,
            transform: isMobile ? 
              `rotate(${Math.atan2(120 - asset.position.y, 140 - asset.position.x) * 180 / Math.PI}deg)` :
              isTablet ?
              `rotate(${Math.atan2(150 - asset.position.y, 180 - asset.position.x) * 180 / Math.PI}deg)` :
              `rotate(${Math.atan2(200 - asset.position.y, 250 - asset.position.x) * 180 / Math.PI}deg)`, // Original desktop calculation
            boxShadow: `0 0 ${isMobile ? '6px' : '10px'} ${asset.color}`
          }}
        />
      ))}

      {/* Tokens */}
      {showTokens && assets.map((asset, assetIndex) => 
        Array.from({ length: isMobile ? 4 : 6 }, (_, tokenIndex) => (
          <Token
            key={`token-${assetIndex}-${tokenIndex}`}
            x={isMobile ? 140 : isTablet ? 180 : 250} // Original desktop center
            y={isMobile ? 120 : isTablet ? 150 : 200} // Original desktop center
            delay={assetIndex * 0.1 + tokenIndex * 0.05}
            targetX={investors[tokenIndex % investors.length].x}
            targetY={investors[tokenIndex % investors.length].y}
            color={asset.color}
            isMobile={isMobile}
          />
        ))
      )}

      {/* Investors */}
      {showInvestors && investors.map((investor, index) => (
        <InvestorAvatar
          key={index}
          x={investor.x}
          y={investor.y}
          delay={index * 0.1 + 1}
          isMobile={isMobile}
        />
      ))}

      {/* Connection lines between investors */}
      {showInvestors && currentPhase >= 3 && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {investors.map((investor, index) => 
            investors.slice(index + 1).map((nextInvestor, nextIndex) => (
              <motion.line
                key={`connection-${index}-${nextIndex}`}
                x1={investor.x + (isMobile ? 12 : 16)} // Original desktop offset
                y1={investor.y + (isMobile ? 12 : 16)} // Original desktop offset
                x2={nextInvestor.x + (isMobile ? 12 : 16)} // Original desktop offset
                y2={nextInvestor.y + (isMobile ? 12 : 16)} // Original desktop offset
                stroke="rgba(0, 255, 133, 0.3)"
                strokeWidth={isMobile ? "0.5" : "1"} // Original desktop stroke width
                strokeDasharray="2,2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1, delay: 2 + index * 0.1 }}
              />
            ))
          )}
        </svg>
      )}

      {/* Floating particles - reduced for mobile */}
      {/* {Array.from({ length: isMobile ? 10 : isTablet ? 15 : 20 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-emerald-400 rounded-full"
          animate={{
            x: [Math.random() * (isMobile ? 280 : isTablet ? 350 : 400), Math.random() * (isMobile ? 280 : isTablet ? 350 : 400)], // Original desktop range
            y: [Math.random() * (isMobile ? 200 : isTablet ? 250 : 300), Math.random() * (isMobile ? 200 : isTablet ? 250 : 300)], // Original desktop range
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            left: Math.random() * (isMobile ? 280 : isTablet ? 350 : 400), // Original desktop range
            top: Math.random() * (isMobile ? 200 : isTablet ? 250 : 300) // Original desktop range
          }}
        />
      ))} */}
    </div>
  );
};

export default TokenizationAnimation;