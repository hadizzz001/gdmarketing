"use client";
import { Box, Typography, Container, Grid } from "@mui/material";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Predictable Cash Flow",
    description: "Generate steady lease income with structured agreements."
  },
  {
    title: "Asset Protection",
    description: "Investors maintain ownership of vehicles while earning from lease payments."
  },
  {
    title: "Reduced Risk",
    description: "Drivers with vested interest take better care of the vehicle, reducing maintenance and turnover."
  },
  {
    title: "Win-Win Model",
    description: "Provides an accessible car ownership path for drivers while securing long-term profitability for investors."
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
          Why Invest?
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
      <div className="mt-40 mb-20">


        <h1 className="myHead">Get Involved</h1>
        <p className="mt-2 myP">
        Whether you’re an investor looking for stable returns or a driver seeking an affordable path to vehicle ownership, our Lease-to-Own model presents an excellent opportunity. Contact us to explore available vehicles and investment options.

        </p>
        <h1 className="myHead"> Stay Connected</h1>
        <p className="mt-2 myP">
       
For inquiries and updates, reach out to our team to learn more about how you can benefit from this strategic investment model.

        </p>
      </div>
    </Container>
  );
};

export default ServicesSection;
