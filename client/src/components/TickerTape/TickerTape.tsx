import React, { useState, useEffect } from 'react';
import styles from './TickerTape.module.css';

interface TickerItem {
  symbol: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
}

const TickerTape: React.FC = () => {
  const [tickerItems, setTickerItems] = useState<TickerItem[]>([
    { symbol: 'IBOV', price: '125.430,50', change: '+1.250,30', changePercent: '+1,01%', isPositive: true },
    { symbol: 'VALE3', price: 'R$ 65,50', change: '+1,20', changePercent: '+1,87%', isPositive: true },
    { symbol: 'PETR4', price: 'R$ 28,90', change: '+0,80', changePercent: '+2,85%', isPositive: true },
    { symbol: 'ITUB4', price: 'R$ 32,15', change: '-0,45', changePercent: '-1,38%', isPositive: false },
    { symbol: 'BBDC4', price: 'R$ 15,80', change: '+0,30', changePercent: '+1,93%', isPositive: true },
    { symbol: 'IFIX', price: '2.985,75', change: '-15,20', changePercent: '-0,51%', isPositive: false },
    { symbol: 'KNRI11', price: 'R$ 8,95', change: '+0,15', changePercent: '+1,70%', isPositive: true },
    { symbol: 'XPLG11', price: 'R$ 95,20', change: '-1,80', changePercent: '-1,86%', isPositive: false },
    { symbol: 'MXRF11', price: 'R$ 9,85', change: '+0,20', changePercent: '+2,07%', isPositive: true },
    { symbol: 'VISC11', price: 'R$ 8,45', change: '+0,10', changePercent: '+1,20%', isPositive: true },
  ]);

  // Simular atualizações em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerItems(prev => prev.map(item => {
        // Manter preços originais e apenas simular pequenas variações
        let basePrice: number;
        
        if (item.symbol === 'IBOV') {
          basePrice = 125430.50;
        } else if (item.symbol === 'IFIX') {
          basePrice = 2985.75;
        } else {
          // Para outros ativos, extrair o número do preço
          const priceStr = item.price.replace(/[^\d,]/g, '').replace(',', '.');
          basePrice = parseFloat(priceStr) || 100; // fallback para 100 se falhar
        }
        
        const variation = (Math.random() - 0.5) * 0.02; // Variação de ±1%
        const newPrice = basePrice * (1 + variation);
        
        const change = (Math.random() - 0.5 > 0 ? '+' : '-') + (Math.random() * 2).toFixed(2);
        const changePercent = (Math.random() - 0.5 > 0 ? '+' : '-') + (Math.random() * 3).toFixed(2) + '%';
        const isPositive = Math.random() > 0.5;
        
        let formattedPrice: string;
        if (item.symbol === 'IBOV') {
          formattedPrice = newPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        } else if (item.symbol === 'IFIX') {
          formattedPrice = newPrice.toFixed(2);
        } else {
          formattedPrice = 'R$ ' + newPrice.toFixed(2).replace('.', ',');
        }
        
        return {
          ...item,
          price: formattedPrice,
          change,
          changePercent,
          isPositive
        };
      }));
    }, 5000); // Atualiza a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.tickerTape}>
      <div className={styles.tickerContainer}>
        <div className={styles.tickerTrack}>
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className={styles.tickerItem}>
              <span className={styles.symbol}>{item.symbol}</span>
              <span className={styles.price}>{item.price}</span>
              <span className={`${styles.change} ${item.isPositive ? styles.positive : styles.negative}`}>
                {item.change} ({item.changePercent})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TickerTape;
