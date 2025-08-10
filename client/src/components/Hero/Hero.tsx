import React, { useState } from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar busca de ativos
    console.log('Buscando:', searchQuery);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.heroOverlay}></div>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.searchContainer}>
          <h1 className={styles.heroTitle}>
            Investe AE
          </h1>
          <p className={styles.heroSubtitle}>
            Tudo que o investidor precisa em um só lugar
          </p>
          
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.searchBox}>
              <input 
                type="text" 
                placeholder="Buscar ativos, ações, FIIs..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>
                🔍 Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;

