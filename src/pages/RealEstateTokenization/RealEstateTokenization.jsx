import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Building, BarChart, ShieldCheck, Globe, Landmark, FileCheck, Coins, Repeat } from "lucide-react";
import PropertyCard from "./PropertyCard";
import BackgroundTheme from "../../ui/GridBackgroundTheme";
import GradientLetters from "../../components/GradientLetters";
import {
  Container,
  Typography,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
  Slider,
} from "@mui/material";

// Custom components to replace MUI

export const Card = ({ children, className, as3D = false }) => {
  return (
    <motion.div
      whileHover={as3D ? { translateY: -10 } : { scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`bg-[#121212] relative rounded-xl border border-gray-700 ${
        as3D 
          ? "shadow-[0_20px_25px_-5px_rgba(16,185,129,0.15),0_10px_10px_-5px_rgba(16,185,129,0.08)]" 
          : "shadow-md"
      } backdrop-filter backdrop-blur-sm bg-opacity-80 ${className}`}
    >
      <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-emerald-500/10 to-transparent opacity-30 transition-opacity duration-300 group-hover:opacity-100"></div>
      {children}
    </motion.div>
  );
};

// Main component
const RealEstateTokenization = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [currentProperty, setCurrentProperty] = useState(0);
  const [animateTokens, setAnimateTokens] = useState(true); // Set to true initially to skip animation

  // Properties data
  const properties = [
    {
      name: "Skyline Tower",
      location: "New York, USA",
      type: "Commercial",
      value: "28.5M",
      tokens: "285,000",
      investors: "1,240",
      soldPercentage: 92,
      expectedReturns: "8.2% annual",
    },
    {
      name: "Marina Heights",
      location: "Dubai, UAE",
      type: "Mixed-Use",
      value: "42.1M",
      tokens: "421,000",
      investors: "1,890",
      soldPercentage: 85,
      expectedReturns: "9.4% annual",
    },
  ];

  // Removed the useEffect for token animation so it starts immediately

  // Removed animation variants that were used for initial loading

  return (
    <div>
      {/* Hero Section */}
      <section className="relative container mx-auto px-6 py-24">
        <div className="max-w-4xl mt-20 relative z-10">
          <div className="h-px bg-gradient-to-r from-emerald-500 to-transparent absolute -top-4 left-0 w-[60%]" />
          <div className="h-px bg-gradient-to-r from-emerald-500 to-transparent absolute -top-8 left-0 w-[30%]" />

          <Typography
            variant="h1"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 pb-1 text-center"
          >
            <Box component="div" className="flex flex-wrap">
              {/* Large Screens (1 lines) */}
              <Box className="hidden lg:block">
                <GradientLetters
                  text="Real Estate Tokenization"
                  keyPrefix="lg-line1"
                />
              </Box>

              {/* Small and Medium screens: 3 lines */}
              <Box className="block lg:hidden">
                <Box component="div" className="flex flex-wrap ">
                  <GradientLetters
                    text="Real Estate"
                    keyPrefix="sm-line1"
                  />
                </Box>

                <Box component="div" className="flex flex-wrap ">
                  <GradientLetters text="Tokenization" keyPrefix="sm-line2" />
                </Box>
              </Box>
            </Box>
          </Typography>

          <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-300">
            Transform Property Investment with Blockchain Technology
          </h2>

          <p className="text-gray-400 mb-8 max-w-2xl">
            Democratize real estate investment through fractional ownership,
            enhanced liquidity, and global accessibility. The future of property
            investment is here.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              onClick={() => {}}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#00A86B]/10 backdrop-blur-lg text-[#00A86B] px-8 py-3 rounded-full font-medium transition-all border border-[#00A86B]/50 shadow-[0_0_15px_rgba(0,168,107,0.2)] hover:shadow-[0_0_25px_rgba(0,168,107,0.4)] hover:bg-[#00A86B]/20 hover:scale-105 group"
            >
              <span className="flex items-center">
                Start Tokenizing
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.span>
              </span>
            </motion.button>
            <motion.button
              onClick={() => {}}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#001a12]/10 backdrop-blur-lg text-[#DDFFDD] px-8 py-3 rounded-full font-medium transition-all border border-[#00A86B]/30 shadow-[0_0_15px_rgba(0,168,107,0.1)] hover:shadow-[0_0_25px_rgba(0,168,107,0.2)] hover:bg-[#001a12]/20 hover:scale-105"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </section>

      {/* Revolutionize Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="relative mb-8">
              <div className="absolute left-0 top-0 h-12 w-1 bg-emerald-500 opacity-80" />
              <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold mb-6 pl-6">
                Revolutionalize
                <span className="block text-emerald-400">
                  Real Estate Investment
                </span>
              </h2>
            </div>

            <p className="text-gray-300 mb-10 text-lg">
              Copym enables investors to tokenize and trade real estate assets
              with unprecedented ease, transparency, and efficiency.
            </p>

            {/* Feature Cards with Fixed Border Animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Building className="h-6 w-6 text-emerald-400" />,
                  title: "Fractional Property Ownership",
                  desc: "Invest in premium real estate with lower entry barriers and increased liquidity.",
                },
                {
                  icon: <BarChart className="h-6 w-6 text-emerald-400" />,
                  title: "Dynamic Valuation",
                  desc: "Real-time market pricing and transparent asset valuation through blockchain.",
                },
                {
                  icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
                  title: "Comprehensive Compliance",
                  desc: "Automated regulatory checks and investor verification for seamless transactions.",
                },
                {
                  icon: <Globe className="h-6 w-6 text-emerald-400" />,
                  title: "Global Accessibility",
                  desc: "Trade and invest in international real estate markets without geographical limitations.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:border-emerald-900 transition-all duration-500 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-md bg-emerald-500 bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                  {/* Border animation now positioned inside the card boundaries */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-600 to-emerald-400 group-hover:w-full transition-all duration-700" />
                </Card>
              ))}
            </div>
          </div>

          {/* Property Card */}
          <div className="lg:w-full">
            <PropertyCard
              property={properties[currentProperty]}
              animateTokens={animateTokens}
              onNext={() =>
                setCurrentProperty((prev) => (prev + 1) % properties.length)
              }
              onPrev={() =>
                setCurrentProperty((prev) =>
                  prev === 0 ? properties.length - 1 : prev - 1
                )
              }
            />
          </div>
        </div>
      </section>

      {/* Tokenization Process Section */}
      <section className="container mx-auto px-6 py-20 relative">
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-10 w-24 h-24 rounded-full bg-emerald-500 filter blur-[80px] opacity-30" />

          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold mb-4">
            Real Estate{" "}
            <span className="text-emerald-400">Tokenization Process</span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Our streamlined process makes tokenizing real estate assets simple
            and efficient
          </p>
        </div>

        {/* Process Steps with connecting lines */}
        <div className="relative">
          {/* Connecting line - removed animation */}
          <div className="absolute hidden md:block top-1/2 left-[10%] right-[10%] h-1 bg-gray-800 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              {
                step: 1,
                icon: <Building className="h-6 w-6 text-emerald-400" />,
                title: "Property Onboarding",
                desc: "Register property details, documentation, and ownership verification.",
              },
              {
                step: 2,
                icon: <FileCheck className="h-6 w-6 text-emerald-400" />,
                title: "Legal Structure",
                desc: "Set up the appropriate legal framework based on jurisdiction and property type.",
              },
              {
                step: 3,
                icon: <Coins className="h-6 w-6 text-emerald-400" />,
                title: "Token Issuance",
                desc: "Create property tokens with compliance and regulatory parameters built-in.",
              },
              {
                step: 4,
                icon: <Repeat className="h-6 w-6 text-emerald-400" />,
                title: "Investment & Trading",
                desc: "Enable primary offering and secondary market trading for property tokens.",
              },
            ].map((process, index) => (
              <div key={index} className="flex justify-center">
                <Card className="relative w-full">
                  <motion.div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0a0a] border-4 border-emerald-500 flex items-center justify-center text-xl font-bold shadow-lg shadow-emerald-500/20"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {process.step}
                  </motion.div>

                  <div className="pt-12 p-6">
                    <div className="mb-4 flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-md bg-emerald-900 bg-opacity-20 flex items-center justify-center mb-6">
                        {process.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">
                        {process.title}
                      </h3>
                      <p className="text-gray-400">{process.desc}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold mb-4">
            Benefits of{" "}
            <span className="text-emerald-400">Real Estate Tokenization</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "For Property Owners",
              benefits: [
                "Unlock liquidity without full property sale",
                "Access global investor capital",
                "Streamlined property management",
                "Reduced transaction costs",
              ],
            },
            {
              title: "For Investors",
              benefits: [
                "Lower investment minimums",
                "Portfolio diversification",
                "Secondary market liquidity",
                "Automated income distributions",
              ],
            },
          ].map((benefitGroup, groupIndex) => (
            <div key={groupIndex}>
              <Card className="h-full backdrop-blur-sm group">
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-8 text-emerald-400">
                    {benefitGroup.title}
                  </h3>

                  <ul className="space-y-6">
                    {benefitGroup.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <div className="rounded-full p-1 bg-emerald-500 bg-opacity-20 mr-4">
                          <Check className="h-5 w-5 text-emerald-500" />
                        </div>
                        <span className="text-white text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section with enhanced background */}
      <section className="container mx-auto px-6 py-20 text-center relative">
        {/* Advanced background glow - keeping animation as it's not a startup animation */}
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-emerald-500 filter blur-[100px] opacity-15"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Animated network lines in background - keeping animation as it provides ambient movement */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {Array.from({ length: 8 }).map((_, i) => {
              const y1 = 20 + i * 10;
              const y2 = 25 + i * 8;
              return (
                <motion.path
                  key={`line-${i}`}
                  d={`M0 ${y1} Q 50 ${y1 < 50 ? y1 + 20 : y1 - 20}, 100 ${y2}`}
                  stroke="#10b981"
                  strokeWidth="0.4"
                  fill="none"
                  initial={{ pathLength: 1, opacity: 0.5 }} // Set initial state to final state
                  animate={{
                    pathLength: 1,
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              );
            })}
          </svg>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>

          <h2 className="font-['Orbitron'] text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Ready to Transform Your Real Estate Portfolio?
          </h2>

          <p className="text-gray-300 mb-10 text-xl">
            Join thousands of property owners and investors already tokenizing
            real estate on the Copym platform.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#00A86B]/10 backdrop-blur-lg text-[#00A86B] px-8 py-4 rounded-full font-medium transition-all border border-[#00A86B]/50 shadow-[0_0_15px_rgba(0,168,107,0.2)] hover:shadow-[0_0_25px_rgba(0,168,107,0.4)] hover:bg-[#00A86B]/20 hover:scale-105 text-lg group"
            >
              <span className="flex items-center">
                Start Tokenizing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#001a12]/10 backdrop-blur-lg text-[#DDFFDD] px-8 py-4 rounded-full font-medium transition-all border border-[#00A86B]/30 shadow-[0_0_15px_rgba(0,168,107,0.1)] hover:shadow-[0_0_25px_rgba(0,168,107,0.2)] hover:bg-[#001a12]/20 hover:scale-105 text-lg"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};


export default RealEstateTokenization;