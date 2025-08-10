import React from 'react';
import styles from './NewsSection.module.css';

interface NewsItem {
  title: string;
  summary: string;
  category: string;
  time: string;
  imageUrl?: string;
}

const NewsSection: React.FC = () => {
  // Mock data - será substituído por API
  const news: NewsItem[] = [
    {
      title: 'Mercado de ações registra alta histórica no mês',
      summary: 'Ibovespa atinge novo patamar impulsionado por setor de commodities e tecnologia.',
      category: 'Mercado',
      time: '2 horas atrás'
    },
    {
      title: 'Taxa Selic mantida em 11,75% pelo Copom',
      summary: 'Comitê de Política Monetária decide manter taxa básica de juros inalterada.',
      category: 'Economia',
      time: '4 horas atrás'
    },
    {
      title: 'FIIs de logística lideram ganhos no trimestre',
      summary: 'Setor de fundos imobiliários focados em logística apresenta forte desempenho.',
      category: 'FIIs',
      time: '6 horas atrás'
    },
    {
      title: 'Petrobras anuncia novo dividendo extraordinário',
      summary: 'Companhia aprova distribuição de R$ 5 bilhões aos acionistas.',
      category: 'Dividendos',
      time: '8 horas atrás'
    }
  ];

  const marketIndicators = [
    { name: 'IBOVESPA', value: '125.430', change: '+1,01%', positive: true },
    { name: 'IFIX', value: '2.985', change: '-0,51%', positive: false },
    { name: 'Dólar', value: 'R$ 5,15', change: '+0,35%', positive: false },
    { name: 'Euro', value: 'R$ 5,58', change: '-0,12%', positive: true }
  ];

  return (
    <section className={styles.newsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Últimas Notícias</h2>
          <p>Mantenha-se atualizado com as principais notícias do mercado financeiro</p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.newsContainer}>
            <div className={styles.newsHeader}>
              <h3>Principais Notícias</h3>
              <a href="#noticias" className={styles.viewAll}>Ver todas →</a>
            </div>
            
            <div className={styles.newsList}>
              {news.map((item, index) => (
                <article key={index} className={styles.newsCard}>
                  <div className={styles.newsContent}>
                    <div className={styles.newsCategory}>{item.category}</div>
                    <h4 className={styles.newsTitle}>{item.title}</h4>
                    <p className={styles.newsSummary}>{item.summary}</p>
                    <div className={styles.newsTime}>{item.time}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.indicatorsCard}>
              <h3>Indicadores em Tempo Real</h3>
              <div className={styles.indicatorsList}>
                {marketIndicators.map((indicator, index) => (
                  <div key={index} className={styles.indicator}>
                    <div className={styles.indicatorName}>{indicator.name}</div>
                    <div className={styles.indicatorValue}>{indicator.value}</div>
                    <div className={`${styles.indicatorChange} ${indicator.positive ? styles.positive : styles.negative}`}>
                      {indicator.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.ctaCard}>
              <h4>Acompanhe o Mercado</h4>
              <p>Receba alertas personalizados sobre seus ativos favoritos</p>
              <button className="btn-primary">Configurar Alertas</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;




