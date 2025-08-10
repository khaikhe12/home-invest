# 📦 Dependências do Projeto - Investe AE

Este arquivo contém todas as dependências necessárias para o funcionamento completo do projeto Investe AE.

## 🏗️ Estrutura do Projeto

```
investe-ae/
├── package.json              # Dependências do servidor
├── client/
│   └── package.json          # Dependências do cliente React
├── server.js                 # Servidor Express
├── routes/                   # APIs do backend
└── client/src/               # Código fonte React
```

## 🔧 Dependências do Servidor (Backend)

### Produção
```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5", 
  "dotenv": "^16.3.1"
}
```

### Desenvolvimento
```json
{
  "nodemon": "^3.0.1",
  "concurrently": "^8.2.2"
}
```

### Instalação
```bash
npm install express cors dotenv
npm install --save-dev nodemon concurrently
```

## ⚛️ Dependências do Cliente (Frontend)

### Produção
```json
{
  "@types/node": "^16.18.0",
  "@types/react": "^18.2.0",
  "@types/react-dom": "^18.2.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-scripts": "5.0.1",
  "typescript": "^4.9.5",
  "web-vitals": "^2.1.4"
}
```

### Desenvolvimento
```json
{
  "@testing-library/jest-dom": "^5.16.4",
  "@testing-library/react": "^13.3.0",
  "@testing-library/user-event": "^13.5.0",
  "@types/jest": "^27.5.2"
}
```

### Instalação
```bash
cd client
npm install
```

## 📋 Scripts Disponíveis

### Servidor (package.json raiz)
```json
{
  "dev": "concurrently \"npm run server\" \"npm run client\"",
  "server": "nodemon server.js",
  "client": "cd client && npm start",
  "build": "cd client && npm run build",
  "install-all": "npm install && cd client && npm install"
}
```

### Cliente (client/package.json)
```json
{
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

## 🔧 Configurações Necessárias

### TypeScript (client/tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

### Declarações de Tipos (client/src/react-app-env.d.ts)
```typescript
/// <reference types="react-scripts" />

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
```

## 🌐 Variáveis de Ambiente (.env)

```env
# Configurações do Servidor
PORT=5000
NODE_ENV=development

# Configurações de APIs Externas
STOCK_API_KEY=your_api_key_here
NEWS_API_KEY=your_news_api_key_here

# Base de Dados
DATABASE_URL=your_database_url_here
MONGODB_URI=your_mongodb_uri_here

# Cache
REDIS_URL=your_redis_url_here

# Email
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password

# Segurança
JWT_SECRET=your_jwt_secret_key_here
SESSION_SECRET=your_session_secret_here

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 🚀 Comandos de Instalação Completa

### 1. Instalação Inicial
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd investe-ae

# Instalar dependências do servidor
npm install

# Instalar dependências do cliente
cd client
npm install
cd ..
```

### 2. Configuração do Ambiente
```bash
# Copiar arquivo de exemplo
cp env.example .env

# Editar variáveis de ambiente
# (editar o arquivo .env com suas configurações)
```

### 3. Execução
```bash
# Desenvolvimento (servidor + cliente)
npm run dev

# Apenas servidor
npm run server

# Apenas cliente
cd client && npm start
```

## 📊 Versões Testadas

### Node.js
- **Versão mínima**: 16.x
- **Versão recomendada**: 18.x ou superior
- **Versão LTS**: 20.x

### npm
- **Versão mínima**: 8.x
- **Versão recomendada**: 9.x ou superior

### Navegadores Suportados
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔍 Verificação de Instalação

### Verificar Node.js
```bash
node --version
npm --version
```

### Verificar Dependências
```bash
# Servidor
npm list --depth=0

# Cliente
cd client
npm list --depth=0
```

### Testar Build
```bash
# Cliente
cd client
npm run build

# Servidor
npm run server
```

## 🐛 Solução de Problemas

### Erro de Dependências
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install

# Cliente
cd client
rm -rf node_modules package-lock.json
npm install
```

### Erro de Porta
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```

### Erro de TypeScript
```bash
# Verificar configuração
npx tsc --noEmit

# Reinstalar tipos
npm install --save-dev @types/react @types/react-dom
```

## 📝 Notas Importantes

1. **React 18**: Projeto usa React 18.2.0 (versão estável)
2. **TypeScript**: Configurado para React com JSX
3. **CSS Modules**: Suporte completo para estilos modulares
4. **CORS**: Configurado para desenvolvimento local
5. **Hot Reload**: Funciona com nodemon e react-scripts

## 🔄 Atualizações

### Atualizar Dependências
```bash
# Servidor
npm update

# Cliente
cd client
npm update
```

### Verificar Vulnerabilidades
```bash
# Servidor
npm audit

# Cliente
cd client
npm audit
```

---

**Última atualização**: Dezembro 2024
**Versão do projeto**: 1.0.0
