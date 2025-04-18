import React, { useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Leaf, Users, Shield, Coins, Recycle, LineChart, Globe2, TreePine, Building2, Lock, Sparkles } from "lucide-react";
import GreenGlobe from "../../components/GreenGlobe";
import { useEffect } from "react";
import EarthGlb from "../../components/EarthGlb"
import ComparativeSnapshot from "./ComparisonCard";

const esgData = [
  {
    title: "Environmental",
    icon: <Leaf className="w-8 h-8 text-[#00A86B] mb-4" />,
    points: [
      "We champion sustainable innovation by tokenizing responsibly sourced commodities like gold and copper, reducing emissions through digital infrastructure, and promoting circular economy practices in asset creation.",
    ],
  },
  {
    title: "Social",
    icon: <Users className="w-8 h-8 text-[#00A86B] mb-4" />,
    points: [
      "Our platform fosters inclusive finance through fractional ownership, supports ethical labor practices, and drives community development by embedding social impact into every tokenized asset.",
    ],
  },
  {
    title: "Governance",
    icon: <Shield className="w-8 h-8 text-[#00A86B] mb-4" />,
    points: [
      "With blockchain transparency, smart contract automation, and alignment to global ESG standards, we deliver secure, verifiable governance across all tokenized investments.",
    ],
  },
];

const FadeSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="z-10 relative"
  >
    {children}
  </motion.div>
);

const GreenTokenization = () => {
  return (
    <div className="relative min-h-screen bg-black text-[#DDFFDD] overflow-hidden px-4 pt-16 pb-24 space-y-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black text-[#DDFFDD] overflow-hidden opacity-90">
        <div className="absolute inset-0 bg-[linear-gradient(35deg,#006f3c_15%,transparent_15%,transparent_85%,#006f3c_85%)] opacity-40 blur-lg animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(35deg,#004b2f_30%,transparent_30%,transparent_70%,#004b2f_70%)] opacity-40 blur-lg animate-pulse" />
        <div className="absolute inset-0 bg-black opacity-20" />
      </div>

      {/* Hero Section */}
      <FadeSection>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 text-left pt-8">
          {/* Content Section - Left */}
          <div className="relative w-full md:w-1/2 z-10 md:-mt-20">
            <div className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl mb-6 text-center md:text-left">
              {/* Mobile layout */}
              <div className="block lg:hidden space-y-1">
                <div className="flex flex-wrap justify-center md:justify-start">
                  {"Green".split("").map((char, i) => (
                    <span key={`sm-line1-${i}`} className="gradient-letter">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}{" "}
                  {"Tokenization".split("").map((char, i) => (
                    <span key={`sm-line1b-${i}`} className="gradient-letter">{char}</span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center md:justify-start">
                  {"&".split("").map((char, i) => (
                    <span key={`sm-line2-${i}`} className="gradient-letter">{char}</span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center md:justify-start">
                  {"ESG Integration".split("").map((char, i) => (
                    <span key={`sm-line3-${i}`} className="gradient-letter">{char}</span>
                  ))}
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden lg:block space-y-1">
                <div className="flex flex-wrap justify-start">
                  {"Green Tokenization".split("").map((char, i) => (
                    <span key={`lg-line1-${i}`} className="gradient-letter">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-start">
                  {"& ESG Integration".split("").map((char, i) => (
                    <span key={`lg-line2-${i}`} className="gradient-letter">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-base md:text-lg text-[#CCCCCC] leading-relaxed font-futuristic text-center md:text-left">
              <Globe2 className="inline-block w-5 h-5 text-[#00A86B] mr-2 mb-1" />
              <span className="text-[#00A86B] font-semibold">Copym</span> revolutionizes sustainable investing by converting real-world
              assets into secure digital tokens. From <span className="text-[#00A86B] font-medium">metals</span> to ESG-aligned funds,
              our blockchain-powered approach ensures transparency, access, and
              lasting impact — aligning your values with{" "}
              <span className="text-[#00A86B] font-semibold">futuristic finance</span>.
            </p>
          </div>

          {/* Earth GLB Section - Right */}
          <div className="relative w-full md:w-1/2 flex items-start justify-center md:justify-start md:-mt-20">
            <div className="w-[450px] md:w-[600px] h-[450px] md:h-[600px] md:ml-0">
              <EarthGlb />
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ESG Commitment Boxes */}
      <FadeSection>
        <section className="pt-12 pb-20">
          <div className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-12 space-y-1">
            <div className="flex flex-wrap justify-center">
              {"Our ESG".split("").map((char, i) => (
                <span key={`esg-line1-${i}`} className="gradient-letter">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center">
              {"Commitments".split("").map((char, i) => (
                <span key={`esg-line2-${i}`} className="gradient-letter">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch mb-16 px-4 md:px-8">
            {esgData.map((section, idx) => (
              <div
                key={idx}
                className="flex-1 bg-[#001a12]/30 backdrop-blur-x4 border border-[#00FFAA]/30 rounded-2xl p-6 space-y-4 text-center shadow-lg flex flex-col"
              >
                <div className="flex flex-col items-center justify-center">
                  {section.icon}
                  <h2 className="text-xl font-bold text-[#00A86B] font-orbitron">
                    {section.title}
                  </h2>
                </div>
                <ul className="text-[#CCCCCC] font-futuristic text-sm space-y-2 flex-grow leading-snug sm:leading-normal">
                  {section.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </FadeSection>

      {/* Other Sections */}
      <FadeSection>
        <section className="space-y-24 text-[#CCCCCC]">
          {/* Metals */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 bg-[#001a12]/30 backdrop-blur-x4 border border-[#00A86B]/20 p-8 rounded-2xl shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Coins className="w-8 h-8 text-[#00A86B]" />
                <h2 className="text-2xl md:text-4xl font-orbitron font-bold flex flex-wrap gap-1">
                  {"Focus on Metals: Our Core Offering".split(" ").map((word, wordIndex) => (
                    <span key={`metals-word-${wordIndex}`} className="flex">
                      {word.split("").map((char, i) => (
                        <span key={`metals-letter-${wordIndex}-${i}`} className="gradient-letter">
                          {char}
                        </span>
                      ))}
                      <span className="w-1" />
                    </span>
                  ))}
                </h2>
              </div>
              <p className="text-base font-futuristic text-left mb-3 leading-normal">
                <span className="text-[#00A86B] font-semibold">Metals</span> are at the center of our strategy due to their critical role in sustainable technology.
              </p>
              <p className="text-base font-futuristic text-left leading-normal">
                Each tokenized metal is vetted for <span className="text-[#00A86B] font-medium">sustainable sourcing</span>, traceability, and environmental impact, with transparent records across the value chain.
              </p>
            </div>
          </div>

          {/* Portfolio */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 bg-[#001a12]/30 backdrop-blur-x4 border border-[#00A86B]/20 p-8 rounded-2xl shadow-xl">
            <img src="/images/esg-diversified.jpg" alt="Diversified ESG Portfolio" className="rounded-xl shadow-md" />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <LineChart className="w-8 h-8 text-[#00A86B]" />
                <h2 className="text-2xl md:text-4xl font-orbitron font-bold flex flex-wrap gap-1">
                  {"Diversified ESG Commodities Portfolio".split(" ").map((word, wordIndex) => (
                    <span key={`portfolio-word-${wordIndex}`} className="flex">
                      {word.split("").map((char, i) => (
                        <span key={`portfolio-letter-${wordIndex}-${i}`} className="gradient-letter">
                          {char}
                        </span>
                      ))}
                      <span className="w-1" />
                    </span>
                  ))}
                </h2>
              </div>
              <p className="text-base font-futuristic text-left leading-normal">
                While <span className="text-[#00A86B] font-semibold">metals</span> are our flagship, we are expanding into other ESG-aligned asset categories. This diversified approach ensures investors can build a balanced and impactful <span className="text-[#00A86B] font-medium">ESG portfolio</span>.
              </p>
            </div>
          </div>

          {/* Blockchain Role */}
          <div className="max-w-6xl mx-auto bg-[#001a12]/30 backdrop-blur-x4 border border-[#00A86B]/20 p-4 sm:p-8 rounded-2xl shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 text-center sm:text-left">
              <Lock className="w-8 h-8 text-[#00A86B]" />
              <h2 className="text-xl sm:text-2xl md:text-4xl font-orbitron font-bold flex flex-wrap justify-center sm:justify-start gap-1">
                {"The Role of Blockchain".split(" ").map((word, wordIndex) => (
                  <span key={`blockchain-word-${wordIndex}`} className="flex">
                    {word.split("").map((char, i) => (
                      <span key={`blockchain-letter-${wordIndex}-${i}`} className="gradient-letter">
                        {char}
                      </span>
                    ))}
                    <span className="w-1" />
                  </span>
                ))}
              </h2>
            </div>
            <ul className="text-sm sm:text-base font-futuristic text-left space-y-4 max-w-3xl mx-auto leading-normal">
              <li className="flex items-start sm:items-center gap-2">
                <Recycle className="w-5 h-5 text-[#00A86B] mt-0.5 sm:mt-0 flex-shrink-0" />
                <div>
                  <strong className="text-[#00A86B] block sm:inline">Traceability:</strong>
                  <span className="block sm:inline sm:ml-1">Every asset's lifecycle is visible, preventing greenwashing.</span>
                </div>
              </li>
              <li className="flex items-start sm:items-center gap-2">
                <Coins className="w-5 h-5 text-[#00A86B] mt-0.5 sm:mt-0 flex-shrink-0" />
                <div>
                  <strong className="text-[#00A86B] block sm:inline">Liquidity:</strong>
                  <span className="block sm:inline sm:ml-1">Tokenized assets are tradable 24/7 with global reach.</span>
                </div>
              </li>
              <li className="flex items-start sm:items-center gap-2">
                <Shield className="w-5 h-5 text-[#00A86B] mt-0.5 sm:mt-0 flex-shrink-0" />
                <div>
                  <strong className="text-[#00A86B] block sm:inline">Security:</strong>
                  <span className="block sm:inline sm:ml-1">Smart contracts ensure direct, tamper-proof ownership and compliance.</span>
                </div>
              </li>
              <li className="flex items-start sm:items-center gap-2">
                <Users className="w-5 h-5 text-[#00A86B] mt-0.5 sm:mt-0 flex-shrink-0" />
                <div>
                  <strong className="text-[#00A86B] block sm:inline">Accessibility:</strong>
                  <span className="block sm:inline sm:ml-1">Lower entry points via fractionalization expand participation in ESG investing.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Comparison */}
          <div className="max-w-6xl mx-auto text-center bg-[#001a12]/30 backdrop-blur-x4 border border-[#00A86B]/20 p-4 sm:p-8 rounded-2xl shadow-xl">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-orbitron font-bold mb-6">
              <div className="flex flex-wrap justify-center gap-1 px-2">
                {"Comparative Snapshot:".split(" ").map((word, wordIndex) => (
                  <span key={`compare-word-1-${wordIndex}`} className="flex">
                    {word.split("").map((char, i) => (
                      <span key={`compare-letter-1-${wordIndex}-${i}`} className="gradient-letter">
                        {char}
                      </span>
                    ))}
                    <span className="w-1" />
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-1 px-2 mt-2">
                {"Metals vs. Other ESG Assets".split(" ").map((word, wordIndex) => (
                  <span key={`compare-word-2-${wordIndex}`} className="flex">
                    {word.split("").map((char, i) => (
                      <span key={`compare-letter-2-${wordIndex}-${i}`} className="gradient-letter">
                        {char}
                      </span>
                    ))}
                    <span className="w-1" />
                  </span>
                ))}
              </div>
            </h2>
            <div className="overflow-x-auto">
              <ComparativeSnapshot />
            </div>
            <p className="text-sm sm:text-base font-futuristic text-left mt-4 leading-normal max-w-2xl mx-auto px-2">
              This clear focus ensures <span className="text-[#00A86B] font-semibold">metals</span> lead our impact, with complementary assets scaling the platform's ESG reach.
            </p>
          </div>
        </section>
      </FadeSection>
    </div>
  );
};

export default GreenTokenization;

