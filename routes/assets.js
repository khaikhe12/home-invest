const express = require('express');
const router = express.Router();

// GET /api/assets - Buscar ativos
router.get('/', async (req, res) => {
  try {
    // TODO: Implementar busca de ativos na base de dados ou API externa
    // Por enquanto, retorna dados mockados
    const mockAssets = [
      {
        symbol: 'VALE3',
        name: 'Vale S.A.',
        price: 65.50,
        change: 1.20,
        changePercent: 1.87,
        type: 'stock'
      },
      {
        symbol: 'PETR4',
        name: 'Petrobras PN',
        price: 28.90,
        change: 0.80,
        changePercent: 2.85,
        type: 'stock'
      }
    ];

    res.json({
      success: true,
      data: mockAssets,
      total: mockAssets.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar ativos',
      error: error.message
    });
  }
});

// GET /api/assets/:symbol - Buscar ativo específico
router.get('/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    
    // TODO: Implementar busca específica por símbolo
    const mockAsset = {
      symbol: symbol.toUpperCase(),
      name: 'Ativo Exemplo',
      price: 100.00,
      change: 2.50,
      changePercent: 2.56,
      type: 'stock',
      details: {
        marketCap: 50000000000,
        pe: 15.5,
        dividendYield: 4.2,
        volume: 1000000
      }
    };

    res.json({
      success: true,
      data: mockAsset
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar ativo',
      error: error.message
    });
  }
});

// GET /api/assets/category/:type - Buscar por categoria (stocks, fiis, etc)
router.get('/category/:type', async (req, res) => {
  try {
    const { type } = req.params;
    
    // TODO: Implementar filtro por categoria
    const mockAssets = [];

    res.json({
      success: true,
      data: mockAssets,
      category: type,
      total: mockAssets.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar ativos por categoria',
      error: error.message
    });
  }
});

module.exports = router;




