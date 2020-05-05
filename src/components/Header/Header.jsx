import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

const Header = () => (
  <header className={styles.Header}>
    <h1>Artist-Search</h1>
    <Link to={'/'}>Home</Link>
  </header>
);

export default Header;
