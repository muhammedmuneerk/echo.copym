import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, useScroll, useTransform } from "framer-motion";
import {
  Typography,
  Box,
} from "@mui/material";
import GradientLetters from "../../components/GradientLetters";

const mockAssets = [
  {
    id: 1,
    title: "Premium Office Building",
    category: "Real Estate",
    location: "New York, USA",
    expectedRoi: "8.5%",
    price: 250000,
    availableTokens: 750,
    totalTokens: 1000,
    image: "/assets/images/office.jpg",
  },
  {
    id: 2,
    title: "Digital Art Collection",
    category: "Art",
    location: "Digital",
    expectedRoi: "Variable",
    price: 15000,
    availableTokens: 65,
    totalTokens: 100,
    image: "/assets/images/digital.jpg",
  },
  {
    id: 3,
    title: "Gold Reserve",
    category: "Commodities",
    location: "Secure Vault, Switzerland",
    expectedRoi: "5.2%",
    price: 50000,
    availableTokens: 320,
    totalTokens: 500,
    image: "/assets/images/gold.jpg",
  },
  {
    id: 4,
    title: "Solar Farm Project",
    category: "Infrastructure",
    location: "Arizona, USA",
    expectedRoi: "7.3%",
    price: 120000,
    availableTokens: 1800,
    totalTokens: 2000,
    image: "/assets/images/solar.jpg",
  },
  {
    id: 5,
    title: "Tech Startup Equity",
    category: "Startups",
    location: "San Francisco, USA",
    expectedRoi: "High Risk/Reward",
    price: 75000,
    availableTokens: 210,
    totalTokens: 300,
    image: "/assets/images/tech.jpg",
  },
  {
    id: 6,
    title: "Luxury Apartment Complex",
    category: "Real Estate",
    location: "Miami, USA",
    expectedRoi: "6.8%",
    price: 350000,
    availableTokens: 1200,
    totalTokens: 1500,
    image: "/assets/images/apartment.jpg",
  },
];

const categories = [
  "All Categories",
  "Real Estate",
  "Art",
  "Commodities",
  "Infrastructure",
  "Startups",
];

export default function Marketplace() {
  const [searchParams, setSearchParams] = useState({
    query: "",
    category: "All Categories",
    priceRange: [0, 1000000],
    sortBy: "Latest",
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();

  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  // Format price for display
  const formatPrice = (value) => {
    return `$${value.toLocaleString()}`;
  };

  // Initial animation sequence
  useEffect(() => {
    const loadSequence = async () => {
      // Initial fade in
      await controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.6, 0.05, 0.01, 0.9]
        }
      });
      
      // Staggered card appearance
      await controls.start("visible");
      setIsLoaded(true);
    };

    loadSequence();

    // Cinematic entrance effect
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 2500);

    return () => clearTimeout(timer);
  }, [controls]);

  // Filter and sort assets
  const filteredAssets = useMemo(() => {
    return mockAssets
      .filter((asset) => {
        // Search filter
        const searchLower = searchParams.query.toLowerCase();
        const matchesSearch =
          asset.title.toLowerCase().includes(searchLower) ||
          asset.location.toLowerCase().includes(searchLower) ||
          asset.category.toLowerCase().includes(searchLower);

        // Category filter
        const matchesCategory =
          searchParams.category === "All Categories" ||
          asset.category === searchParams.category;

        // Price range filter
        const matchesPriceRange =
          asset.price >= searchParams.priceRange[0] &&
          asset.price <= searchParams.priceRange[1];

        return matchesSearch && matchesCategory && matchesPriceRange;
      })
      .sort((a, b) => {
        switch (searchParams.sortBy) {
          case "Price: Low to High":
            return a.price - b.price;
          case "Price: High to Low":
            return b.price - a.price;
          case "ROI":
            // Convert ROI strings to numbers for comparison
            const getROIValue = (roi) => {
              if (roi === "Variable" || roi === "High Risk/Reward") return -1;
              return parseFloat(roi.replace("%", ""));
            };
            return getROIValue(b.expectedRoi) - getROIValue(a.expectedRoi);
          case "Latest":
          default:
            return b.id - a.id; // Assuming higher IDs are more recent
        }
      });
  }, [searchParams]);

  // Handle search parameter updates
  const updateSearchParams = (updates) => {
    // Add animation when filters change
    controls.start({
      scale: 0.98,
      opacity: 0.8,
      transition: { duration: 0.2 }
    });

    setTimeout(() => {
      setSearchParams((prev) => ({
        ...prev,
        ...updates,
      }));
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { 
          duration: 0.3,
          type: "spring",
          stiffness: 200
        }
      });
    }, 300);
  };

  // Card variant for Framer Motion
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: -50,
      rotate: -10
    },
    visible: (index) => ({ 
      opacity: 1, 
      scale: 1,
      x: 0,
      rotate: 0,
      transition: {
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }),
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <div className="w-full min-h-screen py-16 bg-gradient-to-br text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
          className="text-center mb-12"
        >
        </motion.div>
        <motion.div
          style={{
            opacity: headerOpacity,
            scale: headerScale
          }}
        >
        <Typography
          variant="h1"
          className="w-full text-4xl md:text-5xl lg:text-6xl font-bold mb-4 mt-20 text-center"
        >
          <Box
            component="div"
            className="flex flex-col items-center justify-center w-full"
          >
            {/* Large Screens (1 line) */}
            <Box className="hidden lg:flex lg:justify-center w-full">
              <GradientLetters
                text="Asset Tokenization Marketplace"
                keyPrefix="lg-line1"
              />
            </Box>

            {/* Small and Medium screens: 2 lines */}
            <Box className="flex flex-col items-center justify-center lg:hidden w-full">
              <Box component="div" className="flex justify-center w-full">
                <GradientLetters text="Asset Tokenization" keyPrefix="sm-line1" />
              </Box>

              <Box component="div" className="flex justify-center w-full">
                <GradientLetters text="Marketplace" keyPrefix="sm-line2" />
              </Box>
            </Box>
          </Box>
        </Typography>
        </motion.div>

        <Typography
          variant="body1"
          className="text-text-secondary text-center max-w-3xl mx-auto mb-12"
        >
          Discover and invest in tokenized assets across various categories.
          Each asset is fractionally divided, allowing for smaller investment
          thresholds.
        </Typography>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search assets..."
              className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white col-span-2 focus:ring-2 focus:ring-green-500 transition duration-300"
              value={searchParams.query}
              onChange={(e) => updateSearchParams({ query: e.target.value })}
            />

            {/* Category Dropdown */}
            <select
              className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-green-500 transition duration-300"
              value={searchParams.category}
              onChange={(e) => updateSearchParams({ category: e.target.value })}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Price Range */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-400 whitespace-nowrap">
                ${searchParams.priceRange[1].toLocaleString()}
              </span>
              <input
                type="range"
                min="0"
                max="1000000"
                step="10000"
                value={searchParams.priceRange[1]}
                onChange={(e) => updateSearchParams({ 
                  priceRange: [searchParams.priceRange[0], Number(e.target.value)] 
                })}
                className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer"
              />
            </div>

            {/* Sort Dropdown */}
            <select
              className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:ring-2 focus:ring-green-500 transition duration-300"
              value={searchParams.sortBy}
              onChange={(e) => updateSearchParams({ sortBy: e.target.value })}
            >
              {["Latest", "ROI", "Price: Low to High", "Price: High to Low"].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Results Count */}
        <p className="mb-4 text-gray-400">
          Showing {filteredAssets.length} of {mockAssets.length} assets
        </p>

        {/* Asset Grid */}
        <AnimatePresence>
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center"
          >
            {filteredAssets.map((asset, index) => (
              <motion.div
                key={asset.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="w-full max-w-[400px]"
              >
                <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 transform transition-all w-full">
                  {/* Asset Image */}
                  <div className="w-full aspect-video overflow-hidden relative">
                    <motion.img 
                      src={asset.image} 
                      alt={asset.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Asset Details */}
                  <div className="p-6">
                    <div className="mb-3">
                      <motion.span 
                        className="inline-block px-3 py-1 rounded-full text-sm bg-green-900 text-green-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {asset.category}
                      </motion.span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-white">
                      {asset.title}
                    </h2>
                    <p className="text-gray-400 mb-2">
                      Location: {asset.location}
                    </p>
                    <p className="text-gray-400 mb-3">
                      Expected ROI: {asset.expectedRoi}
                    </p>
                    
                    {/* Token Availability */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-400 mb-2">
                        Available: {asset.availableTokens}/{asset.totalTokens} tokens
                      </p>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <motion.div 
                          className="bg-green-500 h-2.5 rounded-full" 
                          initial={{ width: 0 }}
                          animate={{ 
                            width: `${(asset.availableTokens / asset.totalTokens) * 100}%`
                          }}
                          transition={{ 
                            duration: 0.5,
                            type: "spring",
                            stiffness: 50
                          }}
                        ></motion.div>
                      </div>
                    </div>

                    {/* Price and Invest Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-green-400">
                        ${asset.price.toLocaleString()}
                      </span>
                      <motion.button 
                        className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Invest
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}