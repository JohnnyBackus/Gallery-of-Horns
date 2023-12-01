import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.hdr}>
      <h1>Magnificent Horned Beasts</h1>
      <p>Click the images to select your favorites!</p>
    </header>
  )
}

export default Header;
