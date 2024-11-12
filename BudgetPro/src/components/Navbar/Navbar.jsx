// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navItem}>Home</Link>
      <Link to="/login" className={styles.navItem}>Login</Link>
      <Link to="/about" className={styles.navItem}>About</Link>
      <Link to="/contact" className={styles.navItem}>Contact</Link>
    </nav>
  );
}

export default Navbar;
