import React from 'react';
import styles from './AssetsSection.module.css';

interface Asset {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  dividend?: string;
}

const AssetsSection: React.FC = () => {
  // Mock data - será substituído por API
  const topAcoes: Asset[] = [
    { symbol: 'VALE3', name: 'Vale S.A.', price: 'R$ 65,50', change: '+1,20', changePercent: '+1,87%' },
    { symbol: 'PETR4', name: 'Petrobras PN', price: 'R$ 28,90', change: '+0,80', changePercent: '+2,85%' },
    { symbol: 'ITUB4', name: 'Itaú Unibanco PN', price: 'R$ 32,15', change: '-0,45', changePercent: '-1,38%' },
    { symbol: 'BBDC4', name: 'Bradesco PN', price: 'R$ 15,80', change: '+0,30', changePercent: '+1,93%' },
  ];

  const topFiis: Asset[] = [
    { symbol: 'KNRI11', name: 'Kinea Renda Imobiliária', price: 'R$ 8,95', change: '+0,15', changePercent: '+1,70%', dividend: '0,065' },
    { symbol: 'XPLG11', name: 'XP Log', price: 'R$ 95,20', change: '-1,80', changePercent: '-1,86%', dividend: '0,85' },
    { symbol: 'MXRF11', name: 'Maxi Renda', price: 'R$ 9,85', change: '+0,20', changePercent: '+2,07%', dividend: '0,075' },
    { symbol: 'VISC11', name: 'Vinci Shopping Centers', price: 'R$ 8,45', change: '+0,10', changePercent: '+1,20%', dividend: '0,055' },
  ];

  const AssetCard: React.FC<{ asset: Asset; showDividend?: boolean }> = ({ asset, showDividend = false }) => (
    <div className={styles.assetCard}>
      <div className={styles.assetHeader}>
        <span className={styles.assetSymbol}>{asset.symbol}</span>
        <span className={`${styles.assetChange} ${asset.change.startsWith('+') ? styles.positive : styles.negative}`}>
          {asset.changePercent}
        </span>
      </div>
      <h4 className={styles.assetName}>{asset.name}</h4>
      <div className={styles.assetPrice}>{asset.price}</div>
      {showDividend && asset.dividend && (
        <div className={styles.assetDividend}>Dividend Yield: {asset.dividend}%</div>
      )}
    </div>
  );

  return (
    <section className={styles.assetsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Ativos em Destaque</h2>
          <p>Acompanhe os principais ativos do mercado em tempo real</p>
        </div>

        <div className={styles.assetsGrid}>
          <div className={styles.assetCategory}>
            <div className={styles.categoryHeader}>
              <h3>Ações Mais Buscadas</h3>
              <a href="#acoes" className={styles.viewAll}>Ver todas →</a>
            </div>
            <div className={styles.assetsList}>
              {topAcoes.map((asset) => (
                <AssetCard key={asset.symbol} asset={asset} />
              ))}
            </div>
          </div>

          <div className={styles.assetCategory}>
            <div className={styles.categoryHeader}>
              <h3>FIIs Mais Buscados</h3>
              <a href="#fiis" className={styles.viewAll}>Ver todos →</a>
            </div>
            <div className={styles.assetsList}>
              {topFiis.map((asset) => (
                <AssetCard key={asset.symbol} asset={asset} showDividend />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.marketSummary}>
          <div className={styles.summaryCard}>
            <h4>IBOVESPA</h4>
            <div className={styles.indexValue}>125.430,50</div>
            <div className={styles.indexChange}>+1.250,30 (+1,01%)</div>
          </div>
          <div className={styles.summaryCard}>
            <h4>IFIX</h4>
            <div className={styles.indexValue}>2.985,75</div>
            <div className={styles.indexChange}>-15,20 (-0,51%)</div>
          </div>
          <div className={styles.summaryCard}>
            <h4>CDI</h4>
            <div className={styles.indexValue}>11,75%</div>
            <div className={styles.indexChange}>ao ano</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetsSection;




