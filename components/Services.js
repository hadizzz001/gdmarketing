"use client";
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

const services = [
  { 
    title: "Venture Capital Brokerage & Investment Matchmaking", 
    description: "Facilitating connections between entrepreneurs and investors." 
  },
  { 
    title: "Fintech & Leasing", 
    description: "Offering innovative financial solutions, including lease-to-own models and investment strategies." 
  },
  { 
    title: "Mobile Hospitals & Military Shelter Solutions", 
    description: "Providing rapidly deployable medical and shelter infrastructure for emergency response, defense, and humanitarian operations." 
  },
  { 
    title: "Fast Fashion & Retail (La Moda Group)", 
    description: "Bringing ready-to-market fashion collections with efficient production and distribution." 
  },
  { 
    title: "Renewable Energy", 
    description: "Driving sustainable and innovative energy solutions for businesses and governments." 
  },
  { 
    title: "Events, Hospitality & Special Projects", 
    description: "Managing large-scale business and event-driven initiatives with strategic precision." 
  },
  { 
    title: "Mini and Medium Storage Facility", 
    description: "From online e-commerce entrepreneurs to medium-sized companies, we can provide storage and logistics." 
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  }),
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }
};

const ServicesSection = () => {
  return (
    <Container sx={{ textAlign: "center", py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2} className="myHead">
          Our Services
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth="800px" mx="auto" mb={4} className="myP">
          We provide a broad range of specialized services, ensuring our clients benefit from expertise in multiple sectors.
        </Typography>
      </motion.div>

      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} key={index} display="flex" justifyContent="center">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              custom={index}
            >
              <Box
                sx={{
                  width: 280,
                  height: 280,
                  borderRadius: "50%",
                  backgroundColor: "#044877",
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  boxShadow: 3,
                  p: 3,
                  transition: "transform 0.3s ease-in-out"
                }}
              >
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  {service.title}
                </Typography>
                <Typography variant="body2">{service.description}</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesSection;
