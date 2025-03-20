'use client';
import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [homeDescription, setHomeDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesResponse = await fetch("/api/products");
        const homeResponse = await fetch("/api/home");

        if (!servicesResponse.ok || !homeResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const servicesData = await servicesResponse.json();
        const homeData = await homeResponse.json();

        setServices(
          servicesData.map((service) => ({
            id: service._id,
            title: service.title,
            description: service.subtitle,
          }))
        );

        setHomeDescription(homeData.sdescription);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container sx={{ textAlign: "center", py: 6 }}>
      <div style={{ opacity: 1, transition: "opacity 0.8s ease-out" }}>
        <Typography variant="h4" fontWeight="bold" mb={2} className="myHead">
          Our Services
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          maxWidth="800px"
          mx="auto"
          mb={4}
          className="myP"
        >
          {homeDescription ||
            "We provide a broad range of specialized services, ensuring our clients benefit from expertise in multiple sectors."}
        </Typography>
      </div>

      <Grid container spacing={3} justifyContent="center">
        {services.map((service) => (
          <Grid item xs={12} sm={6} key={service.id} display="flex" justifyContent="center">
            <a href={`/service?id=${service.id}`} style={{ textDecoration: "none" }}>
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
                <Typography variant="body2">{service.description}</Typography>
              </Box>
            </a>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesSection;
