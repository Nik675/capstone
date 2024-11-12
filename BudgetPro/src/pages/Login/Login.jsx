// src/pages/Login/Login.jsx
import React from 'react';
import Button from '../../components/Button/Button';
import styles from './Login.module.css';

const Login = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Login</h1>
    <input type="email" placeholder="Email" className={styles.input} />
    <input type="password" placeholder="Password" className={styles.input} />
    <Button className={styles.button} text="Log In" />
  </div>
);

export default Login;
