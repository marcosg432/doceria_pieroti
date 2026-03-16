const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3006;

// Mapa de rewrites (igual ao vercel.json)
const rewrites = {
  '/doces': '/pages/doces.html',
  '/gourmet': '/pages/gourmet.html',
  '/bombons-tradicionais': '/pages/bombons-tradicionais.html',
  '/bombons-finos': '/pages/bombons-finos.html',
  '/bombons-gourmet': '/pages/bombons-gourmet.html',
  '/bem-casados': '/pages/bem-casados.html',
  '/bolos-kit-kat-naked-cake': '/pages/bolos-kit-kat-naked-cake.html',
  '/bolos-pasta-americana': '/pages/bolos-pasta-americana.html',
  '/bolos-chantininho': '/pages/bolos-chantininho.html',
  '/caixa-bento-cake': '/pages/caixa-bento-cake.html',
  '/bolos-vulcao': '/pages/bolos-vulcao.html',
  '/monte-seu-bolo': '/pages/monte-seu-bolo.html',
  '/personalizados': '/pages/personalizados.html',
  '/salgados': '/pages/salgados.html'
};

// Middleware: aplica rewrites antes de servir arquivos
app.use((req, res, next) => {
  const dest = rewrites[req.path];
  if (dest) {
    return res.sendFile(path.join(__dirname, dest));
  }
  next();
});

// Servir arquivos estáticos
app.use(express.static(__dirname));

// Rota raiz -> index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('URLs amigáveis funcionando: /doces, /salgados, /caixa-bento-cake, etc.');
});
