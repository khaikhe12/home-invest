const express = require('express');
const router = express.Router();

// GET /api/news - Últimas notícias
router.get('/', async (req, res) => {
  try {
    const { category, limit = 10 } = req.query;

    // TODO: Implementar integração com feeds de notícias financeiras
    const mockNews = [
      {
        id: 1,
        title: 'Mercado de ações registra alta histórica no mês',
        summary: 'Ibovespa atinge novo patamar impulsionado por setor de commodities e tecnologia.',
        content: 'Conteúdo completo da notícia...',
        category: 'mercado',
        author: 'Equipe InvestHome',
        publishedAt: new Date().toISOString(),
        imageUrl: null,
        tags: ['ibovespa', 'alta', 'commodities']
      },
      {
        id: 2,
        title: 'Taxa Selic mantida em 11,75% pelo Copom',
        summary: 'Comitê de Política Monetária decide manter taxa básica de juros inalterada.',
        content: 'Conteúdo completo da notícia...',
        category: 'economia',
        author: 'Equipe InvestHome',
        publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        imageUrl: null,
        tags: ['selic', 'copom', 'juros']
      },
      {
        id: 3,
        title: 'FIIs de logística lideram ganhos no trimestre',
        summary: 'Setor de fundos imobiliários focados em logística apresenta forte desempenho.',
        content: 'Conteúdo completo da notícia...',
        category: 'fiis',
        author: 'Equipe InvestHome',
        publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
        imageUrl: null,
        tags: ['fiis', 'logística', 'ganhos']
      }
    ];

    let filteredNews = mockNews;
    
    if (category) {
      filteredNews = mockNews.filter(news => news.category === category);
    }

    res.json({
      success: true,
      data: filteredNews.slice(0, parseInt(limit)),
      category,
      total: filteredNews.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar notícias',
      error: error.message
    });
  }
});

// GET /api/news/:id - Notícia específica
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // TODO: Implementar busca por ID específico
    const mockNews = {
      id: parseInt(id),
      title: 'Mercado de ações registra alta histórica no mês',
      summary: 'Ibovespa atinge novo patamar impulsionado por setor de commodities e tecnologia.',
      content: `
        <p>O mercado de ações brasileiro fechou a sessão desta sexta-feira em alta, 
        com o Ibovespa atingindo nova máxima histórica...</p>
        
        <p>Os principais destaques do pregão foram as ações do setor de commodities, 
        que se beneficiaram da alta dos preços internacionais...</p>
        
        <h3>Destaques do Dia</h3>
        <ul>
          <li>Vale (VALE3): +2,5%</li>
          <li>Petrobras (PETR4): +1,8%</li>
          <li>CSN (CSNA3): +3,2%</li>
        </ul>
      `,
      category: 'mercado',
      author: 'Equipe InvestHome',
      publishedAt: new Date().toISOString(),
      imageUrl: null,
      tags: ['ibovespa', 'alta', 'commodities'],
      views: 1250,
      readTime: '3 min'
    };

    res.json({
      success: true,
      data: mockNews
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar notícia',
      error: error.message
    });
  }
});

// GET /api/news/categories - Listar categorias disponíveis
router.get('/categories', async (req, res) => {
  try {
    // TODO: Implementar busca dinâmica de categorias
    const categories = [
      { slug: 'mercado', name: 'Mercado', count: 150 },
      { slug: 'economia', name: 'Economia', count: 89 },
      { slug: 'fiis', name: 'FIIs', count: 67 },
      { slug: 'acoes', name: 'Ações', count: 134 },
      { slug: 'internacional', name: 'Internacional', count: 45 },
      { slug: 'dividendos', name: 'Dividendos', count: 78 }
    ];

    res.json({
      success: true,
      data: categories,
      total: categories.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar categorias',
      error: error.message
    });
  }
});

module.exports = router;




