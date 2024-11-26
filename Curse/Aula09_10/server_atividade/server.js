const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Project.html'));
});

app.get('/cadastra', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Cadastro.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Login.html'));
});

app.post('/cadastra', (req, res) => {
    // Processa o cadastro (aqui simulado para exemplo)
    res.render('resposta', { message: 'Cadastro realizado com sucesso!' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'user' && password === 'pass') {
        res.render('resposta', { message: 'Login bem-sucedido!' });
    } else {
        res.render('resposta', { message: 'Nome de usuário ou senha incorretos.' });
    }
});

const PORT = 80;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://<IP_LOCAL>:${PORT}`);
});
