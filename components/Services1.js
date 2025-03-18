"use client";

import { Box, Typography, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from 'next/navigation';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" },
};

const ServicesSection = () => {
  const searchParams = useSearchParams();
  const searchId = searchParams.get('id');
  const [services, setServices] = useState([]);
  const [tservices, settServices] = useState('');
  const [last, setLast] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`api/products/${searchId}`);
        const data = await response.json();
        setServices(data[0].service2);
        settServices(data[0].tservice2);
        setLast(data[0].last);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  console.log(tservices);


  return (
    <Container sx={{ textAlign: "center", py: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2} className="myHead">
          {tservices}
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
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <Typography variant="h6" fontWeight="bold" mb={1}>
                  {service.title}
                </Typography>
                <Typography variant="body2">{service.desc}</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <div className="mt-40 mb-20">
        <p

          dangerouslySetInnerHTML={{ __html: last }}
          className="mt-2 myP"
        />
      </div>
    </Container>
  );
};

export default ServicesSection;
