# 📚 Documentação Técnica - Investe AE

Documentação completa do projeto Investe AE, incluindo arquitetura, componentes, APIs e funcionalidades.

## 🏗️ Arquitetura do Sistema

### Visão Geral
O Investe AE é uma aplicação web full-stack com arquitetura cliente-servidor:

```
┌─────────────────┐    HTTP/JSON    ┌─────────────────┐
│   Frontend      │ ◄─────────────► │    Backend      │
│   (React)       │                 │   (Node.js)     │
│                 │                 │   (Express)     │
└─────────────────┘                 └─────────────────┘
        │                                    │
        │                                    │
        ▼                                    ▼
┌─────────────────┐                 ┌─────────────────┐
│   Browser       │                 │   APIs Externas │
│   (Chrome, etc) │                 │   (Futuras)     │
└─────────────────┘                 └─────────────────┘
```

### Stack Tecnológica

#### Frontend
- **Framework**: React 18.2.0
- **Linguagem**: TypeScript 4.9.5
- **Estilização**: CSS Modules
- **Build Tool**: Create React App
- **Estado**: React Hooks (useState, useEffect)

#### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 4.18.2
- **Linguagem**: JavaScript
- **Middleware**: CORS, dotenv
- **Desenvolvimento**: Nodemon

## 📁 Estrutura de Arquivos

```
investe-ae/
├── 📄 package.json                 # Dependências do servidor
├── 📄 server.js                    # Servidor Express principal
├── 📄 env.example                  # Exemplo de variáveis de ambiente
├── 📄 DEPENDENCIES.md              # Documentação de dependências
├── 📄 TECHNICAL_DOCS.md            # Esta documentação
├── 📄 README.md                    # Documentação geral
├── 📁 routes/                      # APIs do backend
│   ├── 📄 assets.js               # API de ativos
│   ├── 📄 dividends.js            # API de dividendos
│   └── 📄 news.js                 # API de notícias
└── 📁 client/                      # Frontend React
    ├── 📄 package.json            # Dependências do cliente
    ├── 📄 tsconfig.json           # Configuração TypeScript
    ├── 📁 public/                 # Arquivos públicos
    └── 📁 src/                    # Código fonte
        ├── 📄 App.tsx             # Componente principal
        ├── 📄 index.tsx           # Ponto de entrada
        ├── 📄 index.css           # Estilos globais
        ├── 📄 react-app-env.d.ts  # Declarações de tipos
        └── 📁 components/         # Componentes React
            ├── 📁 Header/         # Cabeçalho
            ├── 📁 Hero/           # Seção principal
            ├── 📁 TickerTape/     # Faixa de cotações
            ├── 📁 AssetsSection/  # Seção de ativos
            ├── 📁 ToolsSection/   # Seção de ferramentas
            ├── 📁 NewsSection/    # Seção de notícias
            └── 📁 Footer/         # Rodapé
```

## ⚛️ Componentes React

### 1. App.tsx (Componente Principal)
**Localização**: `client/src/App.tsx`

**Responsabilidades**:
- Orquestração dos componentes
- Layout principal da aplicação
- Roteamento (futuro)

**Estrutura**:
```typescript
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TickerTape />
      <AssetsSection />
      <ToolsSection />
      <NewsSection />
      <Footer />
    </div>
  );
}
```

### 2. Header (Cabeçalho)
**Localização**: `client/src/components/Header/`

**Funcionalidades**:
- Logo "Investe AE"
- Navegação principal
- Barra de pesquisa
- Botões de autenticação
- Menu mobile responsivo

**Estados**:
- `isMenuOpen`: Controla menu mobile

### 3. Hero (Seção Principal)
**Localização**: `client/src/components/Hero/`

**Funcionalidades**:
- Capa de fundo (30% da tela)
- Título e subtítulo
- Barra de pesquisa centralizada
- Design responsivo

**Estados**:
- `searchQuery`: Texto da busca

**Eventos**:
- `handleSearch`: Submissão da busca

### 4. TickerTape (Faixa de Cotações)
**Localização**: `client/src/components/TickerTape/`

**Funcionalidades**:
- Animação contínua da esquerda para direita
- 10 ativos principais
- Cores verde/vermelho para variações
- Atualizações simuladas a cada 5 segundos

**Estados**:
- `tickerItems`: Array de cotações

**Interfaces**:
```typescript
interface TickerItem {
  symbol: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
}
```

### 5. AssetsSection (Seção de Ativos)
**Localização**: `client/src/components/AssetsSection/`

**Funcionalidades**:
- Cards de ações mais buscadas
- Cards de FIIs mais buscados
- Resumo de índices (IBOV, IFIX, CDI)
- Links para seções específicas

### 6. ToolsSection (Seção de Ferramentas)
**Localização**: `client/src/components/ToolsSection/`

**Funcionalidades**:
- Apresentação de ferramentas de investimento
- Cards com ícones e descrições
- Links para funcionalidades futuras

### 7. NewsSection (Seção de Notícias)
**Localização**: `client/src/components/NewsSection/`

**Funcionalidades**:
- Feed de notícias financeiras
- Categorização de notícias
- Cards com imagens e resumos
- Links para notícias completas

### 8. Footer (Rodapé)
**Localização**: `client/src/components/Footer/`

**Funcionalidades**:
- Logo e descrição
- Links organizados por categoria
- Redes sociais
- Aviso legal
- Informações de copyright

## 🔌 APIs do Backend

### 1. Assets API (`/api/assets`)
**Arquivo**: `routes/assets.js`

**Endpoints**:
- `GET /` - Lista todos os ativos
- `GET /:symbol` - Busca ativo específico
- `GET /category/:type` - Filtra por categoria

**Resposta de Exemplo**:
```json
{
  "success": true,
  "data": [
    {
      "symbol": "VALE3",
      "name": "Vale S.A.",
      "price": 65.50,
      "change": 1.20,
      "changePercent": 1.87,
      "type": "stock"
    }
  ],
  "total": 1
}
```

### 2. Dividends API (`/api/dividends`)
**Arquivo**: `routes/dividends.js`

**Endpoints**:
- `GET /` - Agenda de dividendos
- `GET /:symbol` - Histórico de dividendos
- `GET /rankings/yield` - Ranking por yield

**Parâmetros de Query**:
- `month`: Mês para filtrar
- `year`: Ano para filtrar
- `type`: Tipo de ativo
- `limit`: Limite de resultados

### 3. News API (`/api/news`)
**Arquivo**: `routes/news.js`

**Endpoints**:
- `GET /` - Últimas notícias
- `GET /:id` - Notícia específica
- `GET /categories` - Categorias disponíveis

**Parâmetros de Query**:
- `category`: Categoria da notícia
- `limit`: Limite de resultados

## 🎨 Sistema de Estilos

### CSS Modules
Cada componente possui seu próprio arquivo CSS:
- `ComponentName.module.css`
- Classes locais e encapsuladas
- Sem conflitos de nomes

### Estilos Globais
**Arquivo**: `client/src/index.css`

**Inclui**:
- Reset CSS
- Container global
- Botões primários e secundários
- Classes utilitárias
- Responsividade base

### Variáveis CSS
```css
/* Cores principais */
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--success-color: #22c55e;
--error-color: #ef4444;
--warning-color: #ffd700;
```

## 📱 Responsividade

### Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 767px

### Estratégias
- **Mobile First**: Design baseado em mobile
- **Flexbox/Grid**: Layouts flexíveis
- **Media Queries**: Ajustes específicos por dispositivo
- **Fontes Responsivas**: Tamanhos adaptativos

## 🔧 Configurações

### TypeScript
**Arquivo**: `client/tsconfig.json`

**Configurações Principais**:
- Target: ES5
- JSX: react-jsx
- Strict mode: habilitado
- Module resolution: node

### ESLint
**Configurações**:
- React App padrão
- Regras de acessibilidade
- Validação de JSX

### Build
**Comandos**:
- `npm run build`: Build de produção
- `npm start`: Desenvolvimento
- `npm test`: Executar testes

## 🚀 Deploy

### Desenvolvimento
```bash
npm run dev  # Servidor + Cliente
```

### Produção
```bash
# Build do cliente
cd client && npm run build

# Servidor de produção
NODE_ENV=production npm run server
```

### Variáveis de Ambiente
- `PORT`: Porta do servidor (padrão: 5000)
- `NODE_ENV`: Ambiente (development/production)

## 🔒 Segurança

### Implementado
- CORS configurado
- Validação de entrada nas APIs
- Sanitização de dados
- Headers de segurança

### Futuro
- Autenticação JWT
- Rate limiting
- HTTPS
- CSP headers

## 📊 Performance

### Otimizações
- **Code Splitting**: React.lazy (futuro)
- **Lazy Loading**: Imagens (futuro)
- **Minificação**: Build de produção
- **Cache**: Headers apropriados

### Métricas
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1

## 🧪 Testes

### Estrutura
- **Jest**: Framework de testes
- **React Testing Library**: Testes de componentes
- **User Event**: Simulação de interações

### Comandos
```bash
npm test          # Executar testes
npm test --watch  # Modo watch
npm test --coverage  # Cobertura
```

## 🔄 Versionamento

### Estrutura
- **Semantic Versioning**: MAJOR.MINOR.PATCH
- **Changelog**: Documentação de mudanças
- **Git Tags**: Releases marcados

### Atual
- **Versão**: 1.0.0
- **Status**: Desenvolvimento
- **Última atualização**: Dezembro 2024

## 📈 Roadmap

### Fase 1 (Atual)
- ✅ Layout responsivo
- ✅ Componentes básicos
- ✅ APIs mockadas
- ✅ Faixa de cotações

### Fase 2 (Próxima)
- 🔄 Integração com APIs reais
- 🔄 Sistema de autenticação
- 🔄 Base de dados
- 🔄 Funcionalidades de busca

### Fase 3 (Futura)
- 📋 Websockets para dados em tempo real
- 📋 PWA (Progressive Web App)
- 📋 Análises técnicas
- 📋 Backtesting

## 🤝 Contribuição

### Padrões
- **Conventional Commits**: Padrão de commits
- **ESLint**: Linting de código
- **Prettier**: Formatação
- **TypeScript**: Tipagem estrita

### Processo
1. Fork do repositório
2. Branch para feature
3. Desenvolvimento
4. Testes
5. Pull Request
6. Code Review
7. Merge

---

**Documentação mantida por**: Equipe Investe AE
**Última atualização**: Dezembro 2024
**Versão da documentação**: 1.0.0
