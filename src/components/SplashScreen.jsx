import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import TokenizationAnimation from "./TokenizationAnimation";


// Animation Variants for tagline
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 2,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const SplashScreen = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);

    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  const tagline = "Welcome to the future of tokenization.";

  return (
    <Box className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-emerald-950 text-white font-orbitron">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 133, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 133, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: isMobile ? '30px 30px' : isTablet ? '35px 35px' : '40px 40px'
          }}
        />
        
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(0, 255, 133, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(0, 255, 133, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(0, 255, 133, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(0, 255, 133, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(0, 255, 133, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Animation Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* Tokenization Animation */}
        <div className={`relative w-full ${isMobile ? 'max-w-xs h-60' : isTablet ? 'max-w-sm h-72' : 'max-w-md h-80'} mb-8`}>
          <TokenizationAnimation isMobile={isMobile} isTablet={isTablet} />
        </div>

        {/* Tagline */}
        <motion.div
          className={`${isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-base md:text-lg'} font-medium bg-gradient-to-r from-white via-green-300 to-green-500 bg-clip-text text-transparent text-center px-4`}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {tagline.split("").map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        {/* Subtle progress indicator */}
        <motion.div
          className={`mt-8 ${isMobile ? 'w-24' : isTablet ? 'w-28' : 'w-32'} h-1 bg-gray-700 rounded-full overflow-hidden`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, delay: 1, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </Box>
  );
};

export default SplashScreen;
