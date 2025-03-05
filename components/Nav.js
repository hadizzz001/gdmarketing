"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div>
        <img
          src="https://res.cloudinary.com/dgkipuarc/image/upload/v1741181949/it6kszf5yydjw2jqsmki.jpg"
          alt="Logo"
          style={styles.logo}
        />
      </div>

      {/* Hamburger Menu */}
      <div
        style={{ ...styles.menuToggle, display: "flex" }}
        onClick={toggleMenu}
      >
        <div style={{ ...styles.bar, ...(isOpen ? styles.barOpen1 : {}) }}></div>
        <div style={{ ...styles.bar, ...(isOpen ? styles.barHidden : {}) }}></div>
        <div style={{ ...styles.bar, ...(isOpen ? styles.barOpen2 : {}) }}></div>
      </div>

      {/* Menu */}
      <ul style={{ ...styles.menu, ...(isOpen ? styles.menuOpen : {}) }}>
        <li><a href="/" style={styles.menuItem}>Home</a></li>
        <li><a href="/venture-capital" style={styles.menuItem}>Venture Capital</a></li>
        <li><a href="/fintech-leasing" style={styles.menuItem}>Fintech & Leasing</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#044877",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    position: "relative",
  },
  logo: {
    width: "100px",
    height: "auto",
  },
  menuToggle: {
    cursor: "pointer",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "21px",
    width: "25px",
    zIndex: 10,
  },
  bar: {
    height: "3px",
    width: "100%",
    backgroundColor: "white",
    transition: "all 0.3s ease",
  },
  barOpen1: { transform: "rotate(45deg) translateY(7px)" },
  barHidden: { opacity: 0 },
  barOpen2: { transform: "rotate(-45deg) translateY(-7px)" },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  menuItem: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
  },
  menuOpen: {
    position: "absolute",
    top: "70px",
    left: "0",
    width: "100%",
    backgroundColor: "#044877",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
    transition: "all 0.3s ease",
  },
  // Mobile Styles
  "@media (max-width: 768px)": {
    menu: { display: "none" },
    menuOpen: { display: "flex" },
  },
};

export default Navbar;
