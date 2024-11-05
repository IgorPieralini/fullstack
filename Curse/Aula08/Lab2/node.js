const express = require('express');
const path = require('path');
const app = express();
const PORT = 80; // Porta 80

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Home.html'));
});

// Rota para a página de projetos
app.get('/Project.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Project.html'));
});

// Rota para a página de animação
app.get('/Animation.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Animation.html'));
});

// Iniciando o servidor na porta 80
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse o servidor em: http://192.168.0.55/`);
});