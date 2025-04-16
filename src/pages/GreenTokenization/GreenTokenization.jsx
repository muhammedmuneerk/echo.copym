import React, { useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import GreenGlobe from "../../components/GreenGlobe";
import { useEffect } from "react";
import EarthGlb from "../../components/EarthGlb"

const esgData = [
  {
    title: "Environmental",
    points: [
      "We champion sustainable innovation by tokenizing responsibly sourced commodities like gold and copper, reducing emissions through digital infrastructure, and promoting circular economy practices in asset creation.",
    ],
  },
  {
    title: "Social",
    points: [
      "Our platform fosters inclusive finance through fractional ownership, supports ethical labor practices, and drives community development by embedding social impact into every tokenized asset.",
    ],
  },
  {
    title: "Governance",
    points: [
      "With blockchain transparency, smart contract automation, and alignment to global ESG standards, we deliver secure, verifiable governance across all tokenized investments.",
    ],
  },
];


const ESGBox = ({ title, points }) => {
  const [pointIndex, setPointIndex] = useState(0);

  return (
    <motion.div
      className="relative bg-black border border-[#00A86B]/40 shadow-xl shadow-[#00A86B]/30 rounded-xl p-6 w-full max-w-sm text-left flex flex-col items-start"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold mb-4 font-futuristic bg-gradient-to-r from-[#00A86B] via-gray-400 to-[#00A86B] text-transparent bg-clip-text">
        {title}
      </h2>

      <div className="h-32 flex items-center justify-start px-1">
        <AnimatePresence mode="wait">
          <motion.p
            key={pointIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-lg text-[#DDFFDD] font-futuristic text-left leading-relaxed"
          >
            {points[pointIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex gap-4 self-start">
        <button
          onClick={() => setPointIndex((pointIndex - 1 + points.length) % points.length)}
          className="bg-[#00A86B]/10 hover:bg-[#00A86B]/20 p-2 rounded-full border border-[#00A86B]/30 transition"
        >
          <ArrowLeft size={20} className="text-[#00A86B]" />
        </button>
        <button
          onClick={() => setPointIndex((pointIndex + 1) % points.length)}
          className="bg-[#00A86B]/10 hover:bg-[#00A86B]/20 p-2 rounded-full border border-[#00A86B]/30 transition"
        >
          <ArrowRight size={20} className="text-[#00A86B]" />
        </button>
      </div>
    </motion.div>
  );
};

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
    <div className="relative min-h-screen bg-[#001a12] text-[#DDFFDD] overflow-hidden px-4 pt-16 pb-24 space-y-24">


      {/* Green Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[#000d08]">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_97%,#00ff99_98%)] [background-size:20px_20px] opacity-10" />
      </div>
      {/* herosection */}
      <FadeSection>
      <div className="relative w-full bg-[#001a12]/30 backdrop-blur-x4 rounded-2xl px-4 md:px-8 py-6 md:py-8 mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 text-left">
      {/* Content Section - Left */}
      <div className="relative w-full md:w-1/2 z-10">
        <div className="font-orbitron text-3xl sm:text-4xl md:text-5xl mb-4">
          {/* Mobile layout */}
          <div className="block lg:hidden space-y-1 text-center md:text-left">
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
          <span className="text-[#00A86B] font-semibold">Copym</span> revolutionizes sustainable investing by converting real-world
          assets into secure digital tokens. From <span className="text-[#00A86B] font-medium">metals</span> to ESG-aligned funds,
          our blockchain-powered approach ensures transparency, access, and
          lasting impact — aligning your values with{" "}
          <span className="text-[#00A86B] font-semibold">futuristic finance</span>.
        </p>
      </div>

      {/* GLB Model - Right */}
      <div className="relative w-full md:w-1/2 flex items-center justify-end h-[260px] md:h-[360px] lg:h-[460px] pr-4 md:pr-10">
        <EarthGlb />
      </div>

    </div>
  </div>
</FadeSection>



      {/* ESG Commitment Boxes */}
      <FadeSection>
  <section className="pt-12 pb-20">
    <div className="font-orbitron text-3xl sm:text-4xl md:text-5xl text-center mb-12 space-y-1">
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
          <h2 className="text-xl font-bold text-[#00A86B] font-orbitron">
            {section.title}
          </h2>
          <ul className="text-[#CCCCCC] font-futuristic text-sm space-y-2 flex-grow">
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
    
    {/* Other Sections */}
    <FadeSection>
  <section className="space-y-24 text-[#CCCCCC]">

    {/* Metals */}
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 bg-[#001a12]/30 backdrop-blur-x4 border border-[#00A86B]/20 p-8 rounded-2xl shadow-xl">
      <div>
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 flex flex-wrap gap-1">
          {"Focus on Metals: Our Core Offering".split(" ").map((word, wordIndex) => (
            <span key={`metals-word-${wordIndex}`} className="flex">
              {word.split("").map((char, i) => (
                <span key={`metals-letter-${wordIndex}-${i}`} className="gradient-letter">
                  {char}
                </span>
              ))}
              <span className="w-1" /> {/* spacer between words */}
            </span>
          ))}
        </h2>
        <p className="text-lg font-futuristic text-justify mb-4">
          <span className="text-[#00A86B] font-semibold">Metals</span> are at the center of our strategy due to their critical role in sustainable technology.
        </p>
        <p className="text-base font-futuristic text-justify">
          Each tokenized metal is vetted for <span className="text-[#00A86B] font-medium">sustainable sourcing</span>, traceability, and environmental impact, with transparent records across the value chain.
        </p>
      </div>
      <img src="/images/metal-use-case.jpg" alt="Metal Use Case" className="rounded-xl shadow-md" />
    </div>

    {/* Portfolio */}
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 bg-[#001a12]/30 backdrop-blur-x4 border border-[#00A86B]/20 p-8 rounded-2xl shadow-xl">
      <img src="/images/esg-diversified.jpg" alt="Diversified ESG Portfolio" className="rounded-xl shadow-md" />
      <div>
        <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4 flex flex-wrap gap-1">
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
        <p className="text-lg font-futuristic text-justify">
          While <span className="text-[#00A86B] font-semibold">metals</span> are our flagship, we are expanding into other ESG-aligned asset categories. This diversified approach ensures investors can build a balanced and impactful <span className="text-[#00A86B] font-medium">ESG portfolio</span>.
        </p>
      </div>
    </div>

    {/* Blockchain Role */}
    <div className="max-w-6xl mx-auto bg-[#001a12]/30 backdrop-blur-x4 border border-[#00A86B]/20 p-8 rounded-2xl shadow-xl">
      <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 flex flex-wrap justify-center md:justify-center gap-1">
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
      <ul className="text-lg font-futuristic text-justify space-y-2 max-w-3xl mx-auto">
        <li><strong className="text-[#00A86B]">• Traceability:</strong> Every asset’s lifecycle is visible, preventing greenwashing.</li>
        <li><strong className="text-[#00A86B]">• Liquidity:</strong> Tokenized assets are tradable 24/7 with global reach.</li>
        <li><strong className="text-[#00A86B]">• Security:</strong> Smart contracts ensure direct, tamper-proof ownership and compliance.</li>
        <li><strong className="text-[#00A86B]">• Accessibility:</strong> Lower entry points via fractionalization expand participation in ESG investing.</li>
      </ul>
    </div>

    {/* Comparison */}
    <div className="max-w-6xl mx-auto text-center bg-[#001a12]/30 backdrop-blur-x4 border border-[#00A86B]/20 p-8 rounded-2xl shadow-xl">
      <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 flex flex-wrap justify-center gap-1">
        {"Comparative Snapshot: Metals vs. Other ESG Assets".split(" ").map((word, wordIndex) => (
          <span key={`compare-word-${wordIndex}`} className="flex">
            {word.split("").map((char, i) => (
              <span key={`compare-letter-${wordIndex}-${i}`} className="gradient-letter">
                {char}
              </span>
            ))}
            <span className="w-1" />
          </span>
        ))}
      </h2>
      <img src="/images/metals-vs-esg.jpg" alt="Metals vs ESG Comparison" className="mx-auto rounded-xl shadow-md" />
      <p className="text-lg font-futuristic text-justify mt-4">
        This clear focus ensures <span className="text-[#00A86B] font-semibold">metals</span> lead our impact, with complementary assets scaling the platform’s ESG reach.
      </p>
    </div>

  </section>
</FadeSection>


    </div>
  );
};

export default GreenTokenization;
