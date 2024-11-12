// src/components/BottomNav/BottomNav.jsx

import React from 'react';
import styles from './BottomNav.module.css';

const BottomNav = () => {
  return (
    <nav className={styles.bottomNav}>
      <div className={styles.navItem}>Transactions</div>
      <div className={styles.navItem}>Bills</div>
      <div className={styles.navItem}>Home</div>
      <div className={styles.navItem}>Budget</div>
      <div className={styles.navItem}>Wallet</div>
    </nav>
  );
};

export default BottomNav;
