import { Box, Typography, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import TokenizationAnimation from "./TokenizationAnimation";

const SplashScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);

    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const steps = [
    {
      title: "Real-World Assets",
      subtitle: "Traditional investments meet blockchain technology",
      highlight: "Physical assets digitized"
    },
    {
      title: "Smart Tokenization",
      subtitle: "Fractional ownership made accessible to everyone",
      highlight: "Powered by blockchain"
    },
    {
      title: "Global Access",
      subtitle: "Invest from anywhere, anytime with complete transparency",
      highlight: "Worldwide opportunity"
    },
    {
      title: "Secure Trading",
      subtitle: "Licensed platform with institutional-grade security",
      highlight: "Trusted & regulated"
    }
  ];

  const stats = [
    { value: "$2.5B+", label: "Assets Tokenized" },
    { value: "50K+", label: "Active Investors" },
    { value: "99.9%", label: "Platform Uptime" },
    { value: "24/7", label: "Global Trading" }
  ];

  return (
    <Box className="relative h-screen bg-custom-gradient w-full  text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic grid */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundSize: isMobile ? '40px 40px' : '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating orbs */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 blur-xl"
            style={{
              width: isMobile ? '120px' : '150px',
              height: isMobile ? '120px' : '150px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <Container maxWidth="xl" className="relative z-10 h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="py-4 flex justify-between items-center"
        >
          <div className="flex items-center space-x-2">
            <motion.img
              src="/assets/icons/logo-svg-transparent.svg"
              alt="COPYM"
              className={`${isMobile ? "w-6 h-6" : "w-8 h-8"}`}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <Typography 
              variant={isMobile ? "h6" : "h5"} 
              className="font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            >
              COPYM
            </Typography>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 backdrop-blur-sm"
          >
            <Typography variant="caption" className="text-emerald-400 font-medium">
              Next-Gen Tokenization
            </Typography>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-2 gap-8'} items-center h-[calc(100vh-120px)]`}>
          
          {/* Left Side - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-4"
          >
            {/* Main Headline */}
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="inline-block px-2 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/30"
              >
                <Typography variant="caption" className="text-emerald-300 font-medium">
                  Revolutionizing Asset Investment
                </Typography>
              </motion.div>

              <Typography 
                variant={isMobile ? "h4" : "h2"} 
                className="font-bold leading-tight"
              >
                Welcome to the{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Future
                </span>{" "}
                of Tokenization
              </Typography>

              <Typography 
                variant={isMobile ? "body2" : "body1"} 
                className="text-slate-300 leading-relaxed max-w-lg"
              >
                Transform traditional assets into digital tokens. Invest fractionally, 
                trade globally, and access previously exclusive opportunities.
              </Typography>
            </div>

            {/* Dynamic Steps */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <Typography variant="caption" className="text-emerald-400 font-semibold uppercase tracking-wider">
                    {steps[currentStep].highlight}
                  </Typography>
                </div>
                <Typography variant={isMobile ? "subtitle2" : "h6"} className="font-bold mb-1">
                  {steps[currentStep].title}
                </Typography>
                <Typography variant="caption" className="text-slate-300">
                  {steps[currentStep].subtitle}
                </Typography>
              </motion.div>
            </AnimatePresence>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-4'} gap-3`}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.2 + index * 0.1 }}
                  className="text-center p-3 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-slate-700/30"
                >
                  <Typography variant={isMobile ? "subtitle2" : "h6"} className="font-bold text-emerald-400">
                    {stat.value}
                  </Typography>
                  <Typography variant="caption" className="text-slate-400 uppercase tracking-wide">
                    {stat.label}
                  </Typography>
                </motion.div>
              ))}
            </motion.div>

            {/* Progress Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="flex items-center space-x-2"
            >
              <Typography variant="caption" className="text-slate-400">
                Loading platform...
              </Typography>
              <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden max-w-xs">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, delay: 3.5, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Animation */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className={`relative w-full ${isMobile ? 'h-80' : 'h-96'} flex items-center justify-center`}>
              <TokenizationAnimation isMobile={isMobile} />
            </div>
          </motion.div>
        </div>
      </Container>
    </Box>
  );
};

export default SplashScreen;
