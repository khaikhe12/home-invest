import React from 'react';
import styles from './ToolsSection.module.css';

interface Tool {
  title: string;
  description: string;
  icon: string;
  comingSoon?: boolean;
}

const ToolsSection: React.FC = () => {
  const tools: Tool[] = [
    {
      title: 'Gerenciador de Carteira',
      description: 'Gerencie sua carteira de investimentos de forma inteligente',
      icon: '📊'
    },
    {
      title: 'Radar de Dividendos',
      description: 'Acompanhe os melhores pagadores de dividendos',
      icon: '💰'
    },
    {
      title: 'Comparador de Ativos',
      description: 'Compare ativos lado a lado com métricas detalhadas',
      icon: '⚖️'
    },
    {
      title: 'Agenda de Dividendos',
      description: 'Não perca nenhum pagamento de dividendos',
      icon: '📅'
    },
    {
      title: 'Rankings Inteligentes',
      description: 'Descubra os melhores ativos por categoria',
      icon: '🏆'
    },
    {
      title: 'Calculadora do Primeiro Milhão',
      description: 'Calcule quanto tempo levará para atingir seu primeiro milhão',
      icon: '🎯'
    }
  ];

  return (
    <section className={styles.toolsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Ferramentas Profissionais</h2>
          <p>Tudo que você precisa para tomar decisões inteligentes de investimento</p>
        </div>

        <div className={styles.toolsGrid}>
          {tools.map((tool, index) => (
            <div key={index} className={styles.toolCard}>
              <div className={styles.toolIcon}>{tool.icon}</div>
              <h3 className={styles.toolTitle}>{tool.title}</h3>
              <p className={styles.toolDescription}>{tool.description}</p>
              <button className="btn-primary">
                {tool.comingSoon ? 'Em Breve' : 'Acessar'}
              </button>
            </div>
          ))}
        </div>

        <div className={styles.proSection}>
          <div className={styles.proCard}>
            <div className={styles.proContent}>
              <div className={styles.proText}>
                <h3>InvestHome PRO</h3>
                <p>Acesse todas as ferramentas premium e análises avançadas</p>
                <ul className={styles.proFeatures}>
                  <li>✅ Integração com a B3</li>
                  <li>✅ Análise Graham e Bazin</li>
                  <li>✅ Relatórios detalhados</li>
                  <li>✅ Carteiras recomendadas</li>
                  <li>✅ Suporte prioritário</li>
                </ul>
              </div>
              <div className={styles.proPrice}>
                <div className={styles.priceTag}>
                  <span className={styles.oldPrice}>R$ 59,90</span>
                  <span className={styles.newPrice}>R$ 29,90</span>
                  <span className={styles.priceInfo}>por mês</span>
                </div>
                <button className="btn-primary">Assinar PRO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;




