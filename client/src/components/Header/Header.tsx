import React, { useState } from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <h1>Investe AE</h1>
          </div>
          
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <ul className={styles.navList}>
              <li><a href="#acoes">Ações</a></li>
              <li><a href="#fiis">FIIs</a></li>
              <li><a href="#internacional">Internacional</a></li>
              <li><a href="#noticias">Notícias</a></li>
              <li><a href="#ferramentas">Ferramentas</a></li>
            </ul>
          </nav>



          <div className={styles.authButtons}>
            <button className="btn-secondary">Entrar</button>
            <button className="btn-primary">Cadastrar</button>
          </div>

          <button 
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

