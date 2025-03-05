"use client"; 
import { Box, Typography, Container, Grid } from "@mui/material";
 
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  { 
    title: "Extensive Investor Network", 
    description: "Strong relationships with venture capital firms and investment leaders."
  },
  { 
    title: "Industry Expertise", 
    description: "Deep understanding of market trends and investor expectations."
  },
  { 
    title: "Tailored Funding Solutions", 
    description: "Personalized matchmaking for optimal investment alignment."
  },
  { 
    title: "Confidential & Professional Approach", 
    description: "Ensuring discretion and strategic deal execution."
  }
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
        Why Choose Us?
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
                  width: 380,
                  height: 380,
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
<div className="mt-40 mb-20">


      <h1 className="myHead">Stay Connected</h1> 
              <p className="mt-2 myP">
              For updates and inquiries, follow our journey as we give brilliant ideas the second chance they deserve.
              </p>
              </div>
    </Container>
  );
};

export default ServicesSection;
