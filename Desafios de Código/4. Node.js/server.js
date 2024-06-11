const express = require('express');

const app = express();

// QUESTÃO 1
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// QUESTÃO 2
app.use((req, res, next) => {
    console.log(`Recebida requisicao: ${req.method} ${req.url}`);
    next();
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
