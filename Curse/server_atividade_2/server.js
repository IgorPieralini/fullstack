const express = require('express');
const path = require('path');
const app = express();

// Simulação de armazenamento de usuários (em memória)
const users = [];

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Rota para exibir o formulário de login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Login.html'));
});

// Rota para exibir o formulário de cadastro
app.get('/cadastra', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para processar o cadastro de novos usuários
app.post('/cadastra', (req, res) => {
    const { username, password } = req.body;

    // Verifica se o usuário já existe
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        res.render('resposta', { message: 'Usuário já cadastrado. Tente outro nome de usuário.' });
    } else {
        // Adiciona o novo usuário à lista
        users.push({ username, password });
        res.render('resposta', { message: 'Cadastro realizado com sucesso!' });
    }
});

// Rota para processar o login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Verifica se o usuário e a senha estão corretos
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        res.render('resposta', { message: 'Login bem-sucedido!' });
    } else {
        res.render('resposta', { message: 'Nome de usuário ou senha incorretos.' });
    }
});

const PORT = 80;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://<IP_LOCAL>:${PORT}`);
});
