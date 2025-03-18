import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from './Link';
import Curve from './Curve';

const staticNavItems = [
  {
    title: "Home",
    href: "/",
  }, 
];

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const [navItems, setNavItems] = useState(staticNavItems);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        
        // Map API data to navigation items
        const productNavItems = data.map(product => ({
          title: product.title,
          href: `/service?id=${product._id}`,
        }));

        setNavItems([...staticNavItems, ...productNavItems]);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
      <div className={styles.body}>
        <div onMouseLeave={() => setSelectedIndicator(pathname)} className={styles.nav}>
          {navItems.map((data, index) => (
            <Link key={index} data={{ ...data, index }} isActive={selectedIndicator === data.href} setSelectedIndicator={setSelectedIndicator} />
          ))}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
