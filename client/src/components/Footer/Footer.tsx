import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <h3>Investe AE</h3>
              <p>Tudo que o investidor precisa em um só lugar</p>
            </div>
            <div className={styles.socialLinks}>
              <p>Siga-nos nas redes sociais:</p>
              <div className={styles.socialIcons}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">📺</a>
              </div>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4>Ativos</h4>
              <ul>
                <li><a href="#acoes">Ações</a></li>
                <li><a href="#fiis">Fundos Imobiliários</a></li>
                <li><a href="#stocks">Stocks</a></li>
                <li><a href="#bdrs">BDRs</a></li>
                <li><a href="#etfs">ETFs</a></li>
                <li><a href="#criptos">Criptomoedas</a></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4>Ferramentas</h4>
              <ul>
                <li><a href="#carteira">Gerenciar Carteira</a></li>
                <li><a href="#rankings">Rankings</a></li>
                <li><a href="#comparador">Comparador</a></li>
                <li><a href="#dividendos">Agenda Dividendos</a></li>
                <li><a href="#calculadoras">Calculadoras</a></li>
                <li><a href="#radar">Radar de Dividendos</a></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4>Educação</h4>
              <ul>
                <li><a href="#cursos">Cursos</a></li>
                <li><a href="#guia-iniciante">Guia do Iniciante</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#irpf">Guia do IRPF</a></li>
                <li><a href="#analises">Análises</a></li>
                <li><a href="#webinars">Webinars</a></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h4>Empresa</h4>
              <ul>
                <li><a href="#sobre">Sobre Nós</a></li>
                <li><a href="#contato">Contato</a></li>
                <li><a href="#suporte">Suporte</a></li>
                <li><a href="#termos">Termos de Uso</a></li>
                <li><a href="#privacidade">Política de Privacidade</a></li>
                <li><a href="#seguranca">Segurança</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.disclaimer}>
            <p>
              <strong>Aviso Legal:</strong> O InvestHome não tem como objetivo a recomendação e/ou sugestão de compra de ativos. 
              Nosso site possui caráter meramente informativo e educativo. Não nos responsabilizamos por qualquer decisão 
              que o investidor venha a tomar a partir das informações contidas em nosso site.
            </p>
          </div>
          
          <div className={styles.copyright}>
            <p>&copy; {currentYear} Investe AE. Todos os direitos reservados.</p>
            <div className={styles.badges}>
              <span className={styles.badge}>🔒 SSL Seguro</span>
              <span className={styles.badge}>📊 Dados B3</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

