// src/pages/Home/Home.jsx

import React from 'react';
import styles from './Home.module.css';
import BottomNav from '../../components/BottomNav/BottomNav';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      {/* Top Header Section */}
      <div className={styles.header}>
        <button className={styles.menuButton}>☰</button>
        <h2>Hi, Habiba!</h2>
        <img className={styles.avatar} src="/assets/avatar.png" alt="User Avatar" />
      </div>

      {/* Income Overview Section */}
      <div className={styles.incomeOverview}>
        <div className={styles.incomeCircle}>
          <div className={styles.incomeText}>
            <p>Income</p>
            <h3>20,000 AED</h3>
          </div>
        </div>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.budgetDot}></span> Budget
          </div>
          <div className={styles.legendItem}>
            <span className={styles.goalsDot}></span> Goals
          </div>
          <div className={styles.legendItem}>
            <span className={styles.savingsDot}></span> Savings
          </div>
          <p className={styles.statusText}>You are on track!</p>
        </div>
      </div>

      {/* My Cards Section */}
      <div className={styles.cardsSection}>
        <h3>My Cards</h3>
        <div className={styles.card}>
          <div className={styles.cardDetails}>
            <p>Primary Card Balance</p>
            <h4>20,000 USD</h4>
            <p>Master Card - xxxx xxxx xxxx 0123</p>
          </div>
          <p className={styles.cardDate}>04/29</p>
        </div>
      </div>

      {/* My Goals Section */}
      <div className={styles.goalsSection}>
        <h3>My Goals</h3>
        <div className={styles.goal}>
          <div className={styles.goalIcon}></div>
          <div className={styles.goalDetails}>
            <h4>Vacation</h4>
            <p>200 / 1,000 USD</p>
            <p>Goal will be completed on 21st July, 2023</p>
          </div>
          <p className={styles.goalAmount}>800 USD left</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Home;
