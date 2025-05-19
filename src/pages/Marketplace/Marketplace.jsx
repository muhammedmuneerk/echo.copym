import { useState, useMemo, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";
import { Typography, Box } from "@mui/material";
import GradientLetters from "../../components/GradientLetters"; // Replace or comment if not available

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

const sortOptions = [
  "Latest",
  "Price: Low to High",
  "Price: High to Low",
  "ROI",
];

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 + i * 0.12,
      type: "spring",
      stiffness: 60,
      damping: 18,
    },
  }),
  filtering: { opacity: 0.5, scale: 0.97, transition: { duration: 0.2 } },
};

// Fill overlay animation
const fillVariants = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: { duration: 1.1, ease: [0.4, 0, 0.2, 1] },
  },
};

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
    controls.start("filtering");

    setTimeout(() => {
      setSearchParams((prev) => ({
        ...prev,
        ...updates,
      }));
      controls.start("visible");
    }, 300);
  };

  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 1.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const filterItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const searchVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    filtering: {
      scale: 0.98,
      opacity: 0.8,
      transition: { duration: 0.2 },
    },
  };

  // Page load intro animation
  const introOverlayVariants = {
    hidden: { height: "100vh" },
    visible: {
      height: "0vh",
      transition: {
        duration: 1.2,
        ease: [0.83, 0, 0.17, 1], // Custom easing
        delay: 1.1,
      },
    },
  };

  const introLogoVariants = {
    hidden: { scale: 1.5, opacity: 1 },
    visible: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
        delay: 1.5,
      },
    },
  };

  return (
    <>
      {/* Cinematic Intro Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            variants={introOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="visible"
            className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          >
            <motion.div
              variants={introLogoVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center"
            >
              <span className="font-mono text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-teal-400 to-blue-500 pb-1">
                Marketplace
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mt-1">
                premium asset tokenization
              </span>
              <motion.div
                className="w-24 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 mt-3"
                initial={{ width: 0 }}
                animate={{
                  width: 96,
                  transition: {
                    delay: 0.2,
                    duration: 0.8,
                    ease: [0.19, 1, 0.22, 1],
                  },
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full min-h-screen py-16 bg-gradient-to-br  text-white overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header Section */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            style={{
              opacity: headerOpacity,
              scale: headerScale,
            }}
            className="text-center mb-16 pt-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1.2,
                  duration: 1,
                  type: "spring",
                  stiffness: 50,
                },
              }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-1 text-xs uppercase tracking-widest border border-green-500/30 rounded-full text-green-400 bg-green-900/20">
                Exclusive Opportunities
              </span>
            </motion.div>

            <Typography
              variant="h1"
              className="w-full text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-10 text-center"
            >
              <Box
                component="div"
                className="flex flex-col items-center justify-center w-full"
              >
                {/* Large Screens (1 line) */}
                <motion.div
                  className="hidden lg:flex lg:justify-center w-full relative"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { delay: 1.5, duration: 1 },
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0"
                    initial={{ x: "-100%" }}
                    animate={{
                      x: "100%",
                      transition: {
                        delay: 1.8,
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 5,
                      },
                    }}
                  />
                  <GradientLetters
                    text="Asset Tokenization Marketplace"
                    keyPrefix="lg-line1"
                  />
                </motion.div>

                {/* Small and Medium screens: 2 lines */}
                <Box className="flex flex-col items-center justify-center lg:hidden w-full">
                  <motion.div
                    className="flex justify-center w-full relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 1.5, duration: 1 },
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0"
                      initial={{ x: "-100%" }}
                      animate={{
                        x: "100%",
                        transition: {
                          delay: 1.8,
                          duration: 1.5,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 7,
                        },
                      }}
                    />
                    <GradientLetters
                      text="Asset Tokenization"
                      keyPrefix="sm-line1"
                    />
                  </motion.div>
                  <motion.div
                    className="flex justify-center w-full relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 1.7, duration: 1 },
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/20 to-green-500/0"
                      initial={{ x: "-100%" }}
                      animate={{
                        x: "100%",
                        transition: {
                          delay: 2.2,
                          duration: 1.5,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 7,
                        },
                      }}
                    />
                    <GradientLetters text="Marketplace" keyPrefix="sm-line2" />
                  </motion.div>
                </Box>
              </Box>
            </Typography>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1.9,
                  duration: 0.8,
                  type: "spring",
                },
              }}
            >
              <Typography
                variant="body1"
                className="text-text-secondary text-center max-w-3xl mx-auto mb-12 text-gray-300"
              >
                Discover and invest in premium tokenized assets across various
                categories. Each asset is fractionally divided, allowing for
                sophisticated portfolio diversification.
              </Typography>
            </motion.div>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div
            variants={searchVariants}
            initial="hidden"
            animate={controls}
            className="mb-12 backdrop-blur-lg bg-gray-900/70 p-6 rounded-2xl border border-gray-800 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
              {/* Search Input */}
              <motion.div variants={filterItemVariants} className="col-span-2">
                <input
                  type="text"
                  placeholder="Search assets..."
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  value={searchParams.query}
                  onChange={(e) =>
                    updateSearchParams({ query: e.target.value })
                  }
                />
              </motion.div>
              {/* Category Filter */}
              <motion.div variants={filterItemVariants} className="col-span-1">
                <select
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  value={searchParams.category}
                  onChange={(e) =>
                    updateSearchParams({ category: e.target.value })
                  }
                >
                  {categories.map((cat) => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </motion.div>
              {/* Price Range Filter */}
              <motion.div variants={filterItemVariants} className="col-span-1">
                <input
                  type="range"
                  min={0}
                  max={1000000}
                  value={searchParams.priceRange[1]}
                  onChange={(e) =>
                    updateSearchParams({
                      priceRange: [0, Number(e.target.value)],
                    })
                  }
                  className="w-full"
                />
                <div className="text-xs mt-1 text-gray-400">
                  Up to {formatPrice(searchParams.priceRange[1])}
                </div>
              </motion.div>
              {/* Sort By */}
              <motion.div variants={filterItemVariants} className="col-span-1">
                <select
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  value={searchParams.sortBy}
                  onChange={(e) =>
                    updateSearchParams({ sortBy: e.target.value })
                  }
                >
                  {sortOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </motion.div>
            </div>
          </motion.div>

          {/* Asset Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {filteredAssets.map((asset, i) => (
                <motion.div
                  key={asset.id}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/10 backdrop-blur-lg"
                  style={{
                    minHeight: 340,
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.25)",
                    border: "1.5px solid rgba(255,255,255,0.08)",
                  }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 16px 48px 0 rgba(0,255,200,0.18)",
                    scale: 1.025,
                    transition: { type: "spring", stiffness: 200 },
                  }}
                >
                  {/* Fill Animation Overlay */}
                  <motion.div
                    variants={fillVariants}
                    initial="initial"
                    animate="animate"
                    className="absolute inset-0 z-10 bg-gradient-to-r from-green-400/30 via-blue-400/20 to-transparent pointer-events-none origin-left"
                    style={{ borderRadius: "inherit" }}
                  />

                  {/* Card Content */}
                  <div className="relative z-20 flex flex-col h-full">
                    <div className="h-44 w-full overflow-hidden rounded-t-3xl">
                      <img
                        src={asset.image}
                        alt={asset.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 flex flex-col p-6">
                      <Typography
                        variant="h6"
                        className="font-bold text-lg text-white mb-1"
                      >
                        {asset.title}
                      </Typography>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-600/30 text-green-200 font-semibold uppercase tracking-wider">
                          {asset.category}
                        </span>
                        <span className="text-xs text-gray-300">
                          {asset.location}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-auto pt-4">
                        <div>
                          <span className="block text-xs text-gray-400">
                            Expected ROI
                          </span>
                          <span className="text-green-300 font-bold">
                            {asset.expectedRoi}
                          </span>
                        </div>
                        <div>
                          <span className="block text-xs text-gray-400">
                            Price
                          </span>
                          <span className="text-blue-200 font-bold">
                            {formatPrice(asset.price)}
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-2 mt-4 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-400 to-blue-400"
                          style={{
                            width: `${
                              (asset.availableTokens / asset.totalTokens) * 100
                            }%`,
                            transition: "width 1s cubic-bezier(.4,0,.2,1)",
                          }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 mt-1">
                        {asset.availableTokens} of {asset.totalTokens} tokens available
                      </span>

                      {/* ==== MASSIVE, CLASSY, ANIMATED BUTTON ==== */}
                      <motion.button
                        whileHover={{
                          scale: 1.08,
                          boxShadow:
                            "0 0 0 4px #34d39944, 0 8px 32px 0 #22d3ee66",
                          background:
                            "linear-gradient(90deg, #34d399 0%, #22d3ee 100%)",
                          color: "#fff",
                          transition: { type: "spring", stiffness: 300 },
                        }}
                        whileTap={{ scale: 0.97 }}
                        className="
                          mt-6
                          w-full
                          py-3
                          rounded-2xl
                          font-extrabold
                          text-lg
                          tracking-wide
                          bg-gradient-to-r from-green-400 via-teal-400 to-blue-400
                          text-white
                          shadow-xl
                          transition-all
                          duration-300
                          outline-none
                          border-none
                          relative
                          overflow-hidden
                          focus:ring-2
                          focus:ring-blue-400
                          focus:ring-offset-2
                          hover:from-green-500 hover:to-blue-500
                          active:scale-95
                        "
                      >
                        Invest Now
                        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl opacity-50 pointer-events-none select-none">
                          →
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}


