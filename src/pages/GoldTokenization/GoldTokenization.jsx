import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowForward,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  ExpandMore,
  Check,
  Language,
  Security,
  AccountBalance,
  ArrowRightAlt,
} from "@mui/icons-material";


const GoldTokenization = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Function to render an accurate token distribution chart
  const renderTokenDistributionChart = () => {
    // Chart data
    const totalColumns = 10;
    const totalRows = 10;
    const soldPercentage = 72;

    // Calculate how many cells should be filled (gold color)
    const totalCells = totalColumns * totalRows;
    const filledCells = Math.round((soldPercentage / 100) * totalCells);

    // Create the grid cells
    const cells = [];
    let cellCounter = 0;

    for (let row = 0; row < totalRows; row++) {
      for (let col = 0; col < totalColumns; col++) {
        cellCounter++;
        cells.push(
          <div
            key={`${row}-${col}`}
            className={`h-4 rounded-sm ${cellCounter <= filledCells ? "bg-yellow-500" : "bg-gray-600"
              }`}
          />
        );
      }
    }

    return cells;
  };

  return (
    <div className="bg-gradient-to-b from-[#050505] to-[#0a0a0a] text-white min-h-screen relative overflow-hidden font-sans">
      {/* Enhanced Layered Background Elements */}
      
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNENjk5MkIiIHN0cm9rZS13aWR0aD0iMC42Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiBvcGFjaXR5PSIwLjE1Ii8+PC9zdmc+')]"></div>
      
      {/* Hexagonal pattern overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDg0IDQ4Ij48ZGVmcz48cGF0dGVybiBpZD0iaGV4IiB3aWR0aD0iODQiIGhlaWdodD0iNDgiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InNjYWxlKDAuMTYpIj48cGF0aCBkPSJNNDIgMTIgNzMuODIzIDMxIDczLjgyMyA2OSA0MiA4OCAxMC4xNzcgNjkgMTAuMTc3IDMxeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRjJEQTU3IiBzdHJva2Utd2lkdGg9IjEuOCIgLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjaGV4KSIgb3BhY2l0eT0iMC4xODc1IiAvPjwvc3ZnPg==')] opacity-60"></div>

      {/* Diagonal grid overlay */}
      <div className="fixed inset-0 opacity-[0.225] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRpYWdvbmFsLWdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTYwIDAgTDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q2OTkyQiIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZGlhZ29uYWwtZ3JpZCkiIG9wYWNpdHk9IjEiLz48L3N2Zz4=')]"></div>

      {/* Animated gradient overlay */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-tr from-amber-900/[0.1875] via-transparent to-yellow-900/[0.1875]"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(146,95,14,0.15) 0%, rgba(0,0,0,0) 50%, rgba(184,134,11,0.15) 100%)",
            "linear-gradient(135deg, rgba(184,134,11,0.15) 0%, rgba(0,0,0,0) 50%, rgba(146,95,14,0.15) 100%)",
            "linear-gradient(135deg, rgba(146,95,14,0.15) 0%, rgba(0,0,0,0) 50%, rgba(184,134,11,0.15) 100%)"
          ]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      {/* Sophisticated noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.09] mix-blend-soft-light bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuMDEiIG51bU9jdGF2ZXM9IjUiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"></div>
      
      {/* Circuit board pattern overlay */}
      <div className="fixed inset-0 opacity-[0.225] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJjaXJjdWl0IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTEwIDEwIEw1MCAxMCBMNTAgNTAgTDkwIDUwIEw5MCA5MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZEMTAwIiBzdHJva2Utd2lkdGg9IjEuMzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik05MCAxMCBMNTAgMTAgTDUwIDUwIEwxMCA1MCBMMTAgOTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGRDM1MCIgc3Ryb2tlLXdpZHRoPSIxLjM1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIyLjYyNSIgZmlsbD0iI0ZGRDEwMCIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMTAiIHI9IjIuNjI1IiBmaWxsPSIjRkZEMTAwIi8+PGNpcmNsZSBjeD0iOTAiIGN5PSIxMCIgcj0iMi42MjUiIGZpbGw9IiNGRkQxMDAiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjUwIiByPSIyLjYyNSIgZmlsbD0iI0ZGRDM1MCIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjIuNjI1IiBmaWxsPSIjRkZEMzUwIi8+PGNpcmNsZSBjeD0iOTAiIGN5PSI1MCIgcj0iMi42MjUiIGZpbGw9IiNGRkQzNTAiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjkwIiByPSIyLjYyNSIgZmlsbD0iI0ZGRDM1MCIvPjxjaXJjbGUgY3g9IjkwIiBjeT0iOTAiIHI9IjIuNjI1IiBmaWxsPSIjRkZEMTAwIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2NpcmN1aXQpIi8+PC9zdmc+')]"></div>
      
      {/* Vignette shadow overlay */}
      <div className="fixed inset-0 pointer-events-none bg-radial-gradient opacity-[0.225] z-[1]" 
        style={{ background: "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.15) 70%, rgba(0, 0, 0, 0.375) 100%)" }}>
      </div>
      
      {/* Optional color tint */}
      <div className="fixed inset-0 bg-amber-500/[0.0375] mix-blend-overlay"></div>

      <div className="relative px-4 pt-16 pb-24 space-y-24">
        {/* Header Section */}
        <div className="container mx-auto py-20 px-4 md:px-12 pt-20">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            {/* Left - Text */}
            <div className="max-w-3xl p-6 md:p-10">
              <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-2">
                {["Gold", "Tokenization"].map((word, wordIndex) => (
                  <span key={`word-${wordIndex}`} className="flex flex-wrap">
                    {word.split("").map((char, i) => (
                      <span
                        key={`char-${i}`}
                        className="gradient-letter bg-gradient-to-r from-[#FFD700] via-[#DAA520] to-[#B8860B] text-transparent bg-clip-text"
                      >
                        {char}
                      </span>
                    ))}
                    <span className="w-2" />
                  </span>
                ))}
              </h1>
              <h2 className="text-xl md:text-2xl mb-4 text-[#FFFDD0]">
                Democratizing Gold Investment Through Blockchain
              </h2>
              <p className="text-[#E6E6FA] text-lg mb-8">
                Transform your approach to gold investing with fractional ownership,
                enhanced liquidity, and transparent trading
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#B8860B]/10 backdrop-blur-lg text-[#FFD700] px-8 py-3 rounded-full font-medium transition-all border border-[#FFD700]/50 shadow-[0_0_15px_rgba(218,165,32,0.2)] hover:shadow-[0_0_25px_rgba(218,165,32,0.4)] hover:bg-[#B8860B]/20 hover:scale-105">
                  Start Investing in Gold
                </button>
                <button className="bg-[#001a12]/10 backdrop-blur-lg text-[#FFFDD0] px-8 py-3 rounded-full font-medium transition-all border border-[#FFD700]/30 shadow-[0_0_15px_rgba(218,165,32,0.1)] hover:shadow-[0_0_25px_rgba(218,165,32,0.2)] hover:bg-[#001a12]/20 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Revolutionize Gold Investment Section */}
        <div className="py-16">
          <div className="container mx-auto px-4 md:px-12">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
                  {["Revolutionize", "Gold", "Investment"].map((word, wordIndex) => (
                    <span key={`word-${wordIndex}`} className="flex flex-wrap">
                      {word.split("").map((char, i) => (
                        <span
                          key={`char-${i}`}
                          className="gradient-letter bg-gradient-to-r from-[#FFD700] via-[#DAA520] to-[#B8860B] text-transparent bg-clip-text"
                        >
                          {char}
                        </span>
                      ))}
                      <span className="w-2" />
                    </span>
                  ))}
                </h2>
                <p className="text-[#E6E6FA] mb-6">
                  Unlock the potential of gold through blockchain-powered fractional ownership
                </p>

                <div className="flex flex-col gap-6">
                  {/* Feature Card 1 */}
                  <div className="bg-[#001a12]/30 backdrop-blur-md border border-[#FFD700]/20 p-6 rounded-2xl transition-all hover:bg-[#001a12]/40">
                    <div className="text-[#FFD700] mb-4">
                      <AccountBalance fontSize="large" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[#FFFDD0]">Fractional Gold Ownership</h3>
                    <p className="text-[#E6E6FA]">
                      Invest in premium gold assets with lower entry barriers
                    </p>
                  </div>

                  {/* Feature Card 2 */}
                  <div className="bg-[#001a12]/30 backdrop-blur-md border border-[#FFD700]/20 p-6 rounded-2xl transition-all hover:bg-[#001a12]/40">
                    <div className="text-[#FFD700] mb-4">
                      <Security fontSize="large" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[#FFFDD0]">Secure Storage</h3>
                    <p className="text-[#E6E6FA]">
                      Professionally vaulted and insured gold assets
                    </p>
                  </div>

                  {/* Feature Card 3 */}
                  <div className="bg-[#001a12]/30 backdrop-blur-md border border-[#FFD700]/20 p-6 rounded-2xl transition-all hover:bg-[#001a12]/40">
                    <div className="text-[#FFD700] mb-4">
                      <Language fontSize="large" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[#FFFDD0]">
                      Global Accessibility
                    </h3>
                    <p className="text-[#E6E6FA]">
                      Trade gold tokens from anywhere in the world
                    </p>
                  </div>
                </div>
              </div>

              {/* Gold Vault Card */}
              <div className="lg:w-1/2 lg:pl-10">
                <div className="bg-[#001a12]/30 backdrop-blur-md border border-[#FFD700]/20 rounded-2xl overflow-hidden">
                  <div className="relative">
                    <div className="bg-gradient-to-r from-[#B8860B] to-[#DAA520] p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-2xl font-bold text-[#FFFDD0]">Royal Gold Vault</h3>
                          <p className="text-[#E6E6FA]">
                            Swiss Secure Vault • 99.99% Pure Gold
                          </p>
                        </div>
                        <div className="flex">
                          <button className="bg-[#001a12]/10 backdrop-blur-lg p-2.5 rounded-full border border-[#FFD700]/30 transition-all hover:bg-[#001a12]/20 hover:scale-105 shadow-[0_0_15px_rgba(218,165,32,0.1)] hover:shadow-[0_0_25px_rgba(218,165,32,0.2)]">
                            <KeyboardArrowLeft className="text-[#FFD700]" />
                          </button>
                          <button className="bg-[#001a12]/10 backdrop-blur-lg p-2.5 rounded-full border border-[#FFD700]/30 transition-all hover:bg-[#001a12]/20 hover:scale-105 shadow-[0_0_15px_rgba(218,165,32,0.1)] hover:shadow-[0_0_25px_rgba(218,165,32,0.2)]">
                            <KeyboardArrowRight className="text-[#FFD700]" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 bg-[#001a12]/30 backdrop-blur-md">
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div>
                          <p className="text-gray-400 text-sm">Total Value</p>
                          <p className="text-lg flex items-center">
                            <span className="text-yellow-500 mr-1">$</span>28.5M
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Total Tokens</p>
                          <p className="text-lg">285,000</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Investors</p>
                          <p className="text-lg flex items-center">
                            <span className="text-yellow-500 mr-1">👤</span>1,240
                          </p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between mb-2">
                          <p className="text-gray-400">Token Distribution</p>
                          <p className="text-gray-300">
                            Token Price{" "}
                            <span className="text-yellow-500">$100</span>
                          </p>
                        </div>

                        {/* Updated Token Distribution Chart */}
                        <div className="grid grid-cols-10 gap-1 mb-1">
                          {renderTokenDistributionChart()}
                        </div>

                        <div className="flex justify-between mt-1">
                          <p className="text-sm text-yellow-500">72% Sold</p>
                          <p className="text-sm text-gray-400">28% Available</p>
                        </div>
                      </div>

                      <button
                        className="flex justify-between items-center w-full bg-[#001a12]/10 backdrop-blur-lg border border-[#FFD700]/30 hover:bg-[#001a12]/20 p-3 rounded-full transition-all shadow-[0_0_15px_rgba(218,165,32,0.1)] hover:shadow-[0_0_25px_rgba(218,165,32,0.2)]"
                        onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                      >
                        <span className="font-medium text-[#FFD700] ml-4">Gold Asset Details</span>
                        <ExpandMore
                          className={`transform transition-transform text-[#FFD700] ${isDetailsOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {isDetailsOpen && (
                        <div className="bg-gray-700 -mt-4 mb-4 p-4 rounded-b-md">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-gray-400 text-sm">
                                Total Weight
                              </p>
                              <p className="text-gray-200">500 kg</p>
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm">
                                Expected Returns
                              </p>
                              <p className="text-gray-200">6.5% annual</p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-gray-400 text-sm mb-1">
                              Certification
                            </p>
                            <div className="flex items-center">
                              <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                              <p className="text-gray-200">
                                LBMA Good Delivery Standard
                              </p>
                            </div>
                          </div>

                          <div>
                            <p className="text-gray-400 text-sm mb-2">
                              Tokenization Benefits
                            </p>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="text-yellow-500 mr-2">→</span>
                                <span className="text-gray-200">
                                  Fractional ownership starting from $100
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-yellow-500 mr-2">→</span>
                                <span className="text-gray-200">
                                  Secure vault storage
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-yellow-500 mr-2">→</span>
                                <span className="text-gray-200">
                                  Transparent ownership records
                                </span>
                              </li>
                              <li className="flex items-start">
                                <span className="text-yellow-500 mr-2">→</span>
                                <span className="text-gray-200">
                                  Easy liquidity
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      <button className="w-full bg-[#B8860B]/10 backdrop-blur-lg py-3 px-6 rounded-full font-medium flex items-center justify-center transition-all border border-[#FFD700]/50 shadow-[0_0_15px_rgba(218,165,32,0.2)] hover:shadow-[0_0_25px_rgba(218,165,32,0.4)] hover:bg-[#B8860B]/20 hover:scale-105">
                        <span className="text-[#FFD700]">Invest in Gold Tokens</span>
                        <ArrowForward className="ml-2 text-[#FFD700]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tokenizable Gold Assets Section */}
        <div className="relative z-10 py-16">
          <div className="container mx-auto px-4 md:px-12 text-center">
            <h2 className="font-orbitron text-xl sm:text-3xl md:text-4xl font-bold mb-6">
              <div className="flex flex-wrap justify-center gap-1">
                {"Tokenizable Gold Assets".split(" ").map((word, wordIndex) => (
                  <span key={`assets-word-${wordIndex}`} className="flex">
                    {word.split("").map((char, i) => (
                      <span
                        key={`assets-letter-${wordIndex}-${i}`}
                        className="gradient-letter bg-gradient-to-r from-[#FFD700] via-[#DAA520] to-[#B8860B] text-transparent bg-clip-text"
                      >
                        {char}
                      </span>
                    ))}
                    <span className="w-1" />
                  </span>
                ))}
              </div>
            </h2>
            <p className="text-[#E6E6FA] mb-10 max-w-2xl mx-auto">
              Explore the diverse range of gold assets available for tokenization
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <button className="bg-[#001a12]/10 backdrop-blur-lg border border-[#FFD700]/30 hover:bg-[#001a12]/20 text-[#FFFDD0] px-6 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(218,165,32,0.1)] hover:shadow-[0_0_25px_rgba(218,165,32,0.2)] hover:scale-105">
                Bullion Bars
              </button>
              <button className="bg-[#001a12]/10 backdrop-blur-lg border border-[#FFD700]/30 hover:bg-[#001a12]/20 text-[#FFFDD0] px-6 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(218,165,32,0.1)] hover:shadow-[0_0_25px_rgba(218,165,32,0.2)] hover:scale-105">
                Numismatic Coins
              </button>
              <button className="bg-[#001a12]/10 backdrop-blur-lg border border-[#FFD700]/30 hover:bg-[#001a12]/20 text-[#FFFDD0] px-6 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(218,165,32,0.1)] hover:shadow-[0_0_25px_rgba(218,165,32,0.2)] hover:scale-105">
                Refined Gold
              </button>
              <button className="bg-[#001a12]/10 backdrop-blur-lg border border-[#FFD700]/30 hover:bg-[#001a12]/20 text-[#FFFDD0] px-6 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(218,165,32,0.1)] hover:shadow-[0_0_25px_rgba(218,165,32,0.2)] hover:scale-105">
                Gold Certificates
              </button>
              <button className="bg-[#001a12]/10 backdrop-blur-lg border border-[#FFD700]/30 hover:bg-[#001a12]/20 text-[#FFFDD0] px-6 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(218,165,32,0.1)] hover:shadow-[0_0_25px_rgba(218,165,32,0.2)] hover:scale-105">
                Mining Shares
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="relative z-10 py-16">
          <div className="container mx-auto px-4 md:px-12 text-center">
            <h2 className="font-orbitron text-xl sm:text-3xl md:text-4xl font-bold mb-6">
              <div className="flex flex-wrap justify-center gap-1">
                {"Benefits of Gold Tokenization".split(" ").map((word, wordIndex) => (
                  <span key={`benefits-word-${wordIndex}`} className="flex">
                    {word.split("").map((char, i) => (
                      <span
                        key={`benefits-letter-${wordIndex}-${i}`}
                        className="gradient-letter bg-gradient-to-r from-[#FFD700] via-[#DAA520] to-[#B8860B] text-transparent bg-clip-text"
                      >
                        {char}
                      </span>
                    ))}
                    <span className="w-1" />
                  </span>
                ))}
              </div>
            </h2>
            <p className="text-[#E6E6FA] mb-10 max-w-2xl mx-auto">
              Discover the advantages of investing in tokenized gold assets
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* For Investors */}
              <div className="bg-[#001a12]/30 backdrop-blur-md border border-[#FFD700]/20 p-8 rounded-2xl text-left transition-all hover:bg-[#001a12]/40">
                <h3 className="text-2xl font-bold text-[#FFD700] mb-6">
                  For Investors
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="text-[#FFD700] mr-2 mt-1" />
                    <span className="text-[#E6E6FA]">Low minimum investment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#FFD700] mr-2 mt-1" />
                    <span className="text-[#E6E6FA]">High liquidity</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#FFD700] mr-2 mt-1" />
                    <span className="text-[#E6E6FA]">Transparent ownership</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#FFD700] mr-2 mt-1" />
                    <span className="text-[#E6E6FA]">Global market access</span>
                  </li>
                </ul>
              </div>

              {/* For Gold Owners */}
              <div className="bg-[#001a12]/30 backdrop-blur-md border border-[#FFD700]/20 p-8 rounded-2xl text-left transition-all hover:bg-[#001a12]/40">
                <h3 className="text-2xl font-bold text-[#FFD700] mb-6">
                  For Gold Owners
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="text-[#FFD700] mr-2 mt-1" />
                    <span className="text-[#E6E6FA]">Unlock asset value</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#FFD700] mr-2 mt-1" />
                    <span className="text-[#E6E6FA]">Attract global investors</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#FFD700] mr-2 mt-1" />
                    <span className="text-[#E6E6FA]">Reduce storage costs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#FFD700] mr-2 mt-1" />
                    <span className="text-[#E6E6FA]">Enhanced asset liquidity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="relative z-10 py-16">
          <div className="container mx-auto px-4 md:px-12 text-center">
            <h2 className="font-orbitron text-xl sm:text-3xl md:text-4xl font-bold mb-6">
              <div className="flex flex-wrap justify-center gap-1">
                {"Ready to Invest in".split(" ").map((word, wordIndex) => (
                  <span key={`cta-word-1-${wordIndex}`} className="flex">
                    {word.split("").map((char, i) => (
                      <span
                        key={`cta-letter-1-${wordIndex}-${i}`}
                        className="gradient-letter bg-gradient-to-r from-[#FFD700] via-[#DAA520] to-[#B8860B] text-transparent bg-clip-text"
                      >
                        {char}
                      </span>
                    ))}
                    <span className="w-1" />
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-1 mt-2">
                {"Tokenized Gold?".split(" ").map((word, wordIndex) => (
                  <span key={`cta-word-2-${wordIndex}`} className="flex">
                    {word.split("").map((char, i) => (
                      <span
                        key={`cta-letter-2-${wordIndex}-${i}`}
                        className="gradient-letter bg-gradient-to-r from-[#FFD700] via-[#DAA520] to-[#B8860B] text-transparent bg-clip-text"
                      >
                        {char}
                      </span>
                    ))}
                    <span className="w-1" />
                  </span>
                ))}
              </div>
            </h2>
            <p className="text-[#E6E6FA] mb-8 max-w-2xl mx-auto">
              Join the future of gold investment with our secure, transparent, and
              accessible platform
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#B8860B]/10 backdrop-blur-lg text-[#FFD700] px-8 py-3 rounded-full font-medium transition-all border border-[#FFD700]/50 shadow-[0_0_15px_rgba(218,165,32,0.2)] hover:shadow-[0_0_25px_rgba(218,165,32,0.4)] hover:bg-[#B8860B]/20 hover:scale-105">
                Start Investing
              </button>
              <button className="bg-[#001a12]/10 backdrop-blur-lg text-[#FFFDD0] px-8 py-3 rounded-full font-medium transition-all border border-[#FFD700]/30 shadow-[0_0_15px_rgba(218,165,32,0.1)] hover:shadow-[0_0_25px_rgba(218,165,32,0.2)] hover:bg-[#001a12]/20 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldTokenization;
