const express = require('express');
const router = express.Router();

// GET /api/dividends - Agenda de dividendos
router.get('/', async (req, res) => {
  try {
    const { month, year, type } = req.query;
    
    // TODO: Implementar busca de dividendos por filtros
    const mockDividends = [
      {
        symbol: 'VALE3',
        name: 'Vale S.A.',
        exDate: '2024-12-15',
        paymentDate: '2024-12-30',
        amount: 2.50,
        type: 'stock',
        yield: 3.8
      },
      {
        symbol: 'KNRI11',
        name: 'Kinea Renda Imobiliária',
        exDate: '2024-12-10',
        paymentDate: '2024-12-25',
        amount: 0.65,
        type: 'fii',
        yield: 7.2
      }
    ];

    res.json({
      success: true,
      data: mockDividends,
      filters: { month, year, type },
      total: mockDividends.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar agenda de dividendos',
      error: error.message
    });
  }
});

// GET /api/dividends/:symbol - Histórico de dividendos de um ativo
router.get('/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    const { limit = 12 } = req.query;

    // TODO: Implementar histórico de dividendos
    const mockHistory = [
      {
        date: '2024-11-15',
        amount: 2.50,
        yield: 3.8,
        paymentDate: '2024-11-30'
      },
      {
        date: '2024-08-15',
        amount: 2.30,
        yield: 3.5,
        paymentDate: '2024-08-30'
      }
    ];

    res.json({
      success: true,
      data: {
        symbol: symbol.toUpperCase(),
        history: mockHistory.slice(0, parseInt(limit)),
        totalPaid: mockHistory.reduce((sum, div) => sum + div.amount, 0),
        averageYield: 3.65
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar histórico de dividendos',
      error: error.message
    });
  }
});

// GET /api/dividends/rankings/yield - Ranking por dividend yield
router.get('/rankings/yield', async (req, res) => {
  try {
    const { type = 'all', limit = 20 } = req.query;

    // TODO: Implementar ranking de dividend yield
    const mockRanking = [
      { symbol: 'KNRI11', name: 'Kinea Renda Imobiliária', yield: 12.5, type: 'fii' },
      { symbol: 'VALE3', name: 'Vale S.A.', yield: 8.2, type: 'stock' },
      { symbol: 'XPLG11', name: 'XP Log', yield: 7.8, type: 'fii' }
    ];

    res.json({
      success: true,
      data: mockRanking.slice(0, parseInt(limit)),
      type,
      total: mockRanking.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar ranking de dividend yield',
      error: error.message
    });
  }
});

module.exports = router;




