import { Container, Typography, Box, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowForward } from "@mui/icons-material";

const features = [
  {
    title: "Cross-Chain Infrastructure",
    description:
      "Seamlessly bridge assets across all major blockchains through our unified interface.",
      icon: (
        <img
          src="/assets/icons/cross-chain-infrastructure.png"
          alt="Cross Chain"
          className="w-8 h-8 object-contain filter grayscale invert"
          style={{ filter: "brightness(0) invert(1) sepia(1) hue-rotate(180deg)" }}
        />)
  },
  {
    title: "Comprehensive Compliance",
    description:
      "Built-in KYC/AML, regulatory frameworks, and automated compliance across jurisdictions.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield text-gray-400"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>,
  },
  {
    title: "Fractional Ownership",
    description:
      "Divide assets into tradable fractions, democratizing access to previously exclusive investments.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers text-gray-400"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>,
  },
  {
    title: "Complete Wallet Ecosystem",
    description:
      "Support for custodial, non-custodial, MPC, and hardware wallet solutions.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallet text-gray-400"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>,
  },
  {
    title: "End-to-End Marketplace",
    description:
      "Primary issuance, secondary trading, liquidity pools, and OTC services all in one place.",
    icon: "🏛️",
  },
  {
    title: "Developer Toolkit",
    description:
      "APIs, SDKs, and no-code solutions to build on top of the Copym ecosystem.",
    icon: "⚙️",
  },
];

export default function Features() {
  return (
    <Box className="py-24 relative overflow-hidden">
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography
            variant="overline"
            className="text-primary font-medium tracking-wider block mb-2"
          >
            ALL-IN-ONE PLATFORM
          </Typography>
          <Typography variant="h2" className="font-orbitron text-4xl md:text-5xl mb-4">
            Everything You Need In{" "}
            <span className="text-primary">One Place</span>
          </Typography>
          <Typography
            variant="body1"
            className="text-text-secondary max-w-2xl mx-auto"
          >
            No more juggling multiple services or platforms. Copym provides
            end-to-end solutions for the entire tokenization lifecycle.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={feature.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Box
                  className="bg-background-paper rounded-lg p-6 h-full relative"
                  sx={{
                    background: "rgba(18, 19, 26, 0.5)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                    "&:hover .top-border": {
                      animation: "flowRight 2s linear infinite",
                    },
                    "&:hover .right-border": {
                      animation: "flowDown 2s linear infinite",
                      animationDelay: "0.5s",
                    },
                    "&:hover .bottom-border": {
                      animation: "flowLeft 2s linear infinite",
                      animationDelay: "1s",
                    },
                    "&:hover .left-border": {
                      animation: "flowUp 2s linear infinite",
                      animationDelay: "1.5s",
                    },
                    "@keyframes flowRight": {
                      "0%": {
                        left: "0%",
                        width: "0%",
                        backgroundColor: "#000000",
                      },
                      "50%": {
                        left: "0%",
                        width: "100%",
                        backgroundColor: "rgba(0, 255, 133, 0.8)",
                      },
                      "100%": {
                        left: "100%",
                        width: "0%",
                        backgroundColor: "#000000",
                      }
                    },
                    "@keyframes flowDown": {
                      "0%": {
                        top: "0%",
                        height: "0%",
                        backgroundColor: "#000000",
                      },
                      "50%": {
                        top: "0%",
                        height: "100%",
                        backgroundColor: "rgba(0, 255, 133, 0.8)",
                      },
                      "100%": {
                        top: "100%",
                        height: "0%",
                        backgroundColor: "#000000",
                      }
                    },
                    "@keyframes flowLeft": {
                      "0%": {
                        right: "0%",
                        width: "0%",
                        backgroundColor: "#000000",
                      },
                      "50%": {
                        right: "0%",
                        width: "100%",
                        backgroundColor: "rgba(0, 255, 133, 0.8)",
                      },
                      "100%": {
                        right: "100%",
                        width: "0%",
                        backgroundColor: "#000000",
                      }
                    },
                    "@keyframes flowUp": {
                      "0%": {
                        bottom: "0%",
                        height: "0%",
                        backgroundColor: "#000000",
                      },
                      "50%": {
                        bottom: "0%",
                        height: "100%",
                        backgroundColor: "rgba(0, 255, 133, 0.8)",
                      },
                      "100%": {
                        bottom: "100%",
                        height: "0%",
                        backgroundColor: "#000000",
                      }
                    }
                  }}
                >
                  {/* Animated borders */}
                  <div className="top-border absolute top-0 left-0 h-1 z-10" />
                  <div className="right-border absolute top-0 right-0 w-1 z-10" />
                  <div className="bottom-border absolute bottom-0 right-0 h-1 z-10" />
                  <div className="left-border absolute bottom-0 left-0 w-1 z-10" />

                  <Box
                    className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-2xl"
                    sx={{
                      background: "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" className="mb-3">
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-text-secondary mb-4"
                  >
                    {feature.description}
                  </Typography>
                  <Button
                    endIcon={<ArrowForward />}
                    className="text-primary hover:bg-primary/5 px-0"
                  >
                    Learn more
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Background Glow Effect */}
        <Box
          className="absolute inset-0 pointer-events-none"
          sx={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(0, 255, 133, 0.1) 0%, rgba(10, 11, 13, 0) 50%)",
          }}
        />
      </Container>
    </Box>
  );
}