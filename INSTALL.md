# ⚡ Instalação Rápida - Investe AE

Guia rápido para instalar e executar o projeto Investe AE em menos de 5 minutos.

## 🚀 Instalação Express

### 1. Pré-requisitos
```bash
# Verificar se tem Node.js instalado
node --version  # Deve ser 16.x ou superior
npm --version   # Deve ser 8.x ou superior
```

### 2. Clone e Instale
```bash
# Clone o repositório
git clone <url-do-repositorio>
cd investe-ae

# Instale tudo de uma vez
npm run install-all
```

### 3. Execute
```bash
# Inicie o projeto completo
npm run dev
```

**Pronto!** 🎉 
- Servidor rodando em: http://localhost:5000
- Cliente rodando em: http://localhost:3000

---

## 📋 Instalação Manual (Passo a Passo)

### Passo 1: Clone o Repositório
```bash
git clone <url-do-repositorio>
cd investe-ae
```

### Passo 2: Instale Dependências do Servidor
```bash
npm install
```

### Passo 3: Instale Dependências do Cliente
```bash
cd client
npm install
cd ..
```

### Passo 4: Configure o Ambiente
```bash
cp env.example .env
```

### Passo 5: Execute o Projeto
```bash
# Opção 1: Servidor + Cliente (recomendado)
npm run dev

# Opção 2: Apenas servidor
npm run server

# Opção 3: Apenas cliente
cd client && npm start
```

---

## 🔧 Comandos Úteis

### Desenvolvimento
```bash
npm run dev          # Servidor + Cliente
npm run server       # Apenas servidor
npm run client       # Apenas cliente
```

### Build
```bash
npm run build        # Build de produção
```

### Testes
```bash
cd client
npm test            # Executar testes
```

---

## 🐛 Solução de Problemas Rápida

### Erro: "Porta já em uso"
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```

### Erro: "Dependências não encontradas"
```bash
# Limpar e reinstalar
rm -rf node_modules package-lock.json
npm install

cd client
rm -rf node_modules package-lock.json
npm install
```

### Erro: "Build falhou"
```bash
cd client
npm run build
```

---

## 📱 Acesse o Projeto

Após a instalação, acesse:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API de Ativos**: http://localhost:5000/api/assets
- **API de Notícias**: http://localhost:5000/api/news

---

## ✅ Checklist de Instalação

- [ ] Node.js 16+ instalado
- [ ] Repositório clonado
- [ ] Dependências do servidor instaladas
- [ ] Dependências do cliente instaladas
- [ ] Arquivo .env configurado
- [ ] Servidor rodando na porta 5000
- [ ] Cliente rodando na porta 3000
- [ ] Site carregando corretamente

---

## 🆘 Precisa de Ajuda?

1. **Verifique os logs** no terminal
2. **Consulte** `DEPENDENCIES.md` para detalhes
3. **Leia** `TECHNICAL_DOCS.md` para documentação completa
4. **Abra uma issue** no GitHub

---

**Tempo estimado de instalação**: 3-5 minutos
**Última atualização**: Dezembro 2024
