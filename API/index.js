const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Modelo de produto
let produtos = [
  {
    id: 1,
    nome: 'Produto 1',
    descricao: 'Descrição do produto 1',
    preco: 10.50,
    quantidade: 20
  },
  {
    id: 2,
    nome: 'Produto 2',
    descricao: 'Descrição do produto 2',
    preco: 25.90,
    quantidade: 15
  },
  {
    id: 3,
    nome: 'Produto 3',
    descricao: 'Descrição do produto 3',
    preco: 5.99,
    quantidade: 50
  }
];

// Middleware para parsear o body da requisição
app.use(bodyParse.json());

// Rotas da API
app.get('/produtos', (req, res) => {
    res.json(produtos)
});

app.get('/produtos/:id', (req, res)=>{
    const produto = produtos.find(p=> p.id === parseInt(req.params.id));
    if(!produto) res.status(404).send('Produto não encontrado');
    res.json(produto);

});

app.post('/produtos', (req, res) =>{
    const produto = {
        id: produtos.length +1,
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        quantidade: req.body.quantidade
    };
    produto.push(produto);
    res.json(produto);
});

app.put('/produtos/:id', (req, rest) => {
    const produto = produtos.find(p.id === parseInt(req.params.id));
    if (!produto) res.status(404).send('Produto não encontrado');
    produto.nome = req.body.nome;
    produto.descricao = req.body.descricao;
    produto.quantidade = req.body.quantidade;
    res.json(produto);

});

app.delete('/produto/:id', (req, res) =>{
    const produto = produtos.find(p => p.id ===parseInt(req.params.id));
    produtos.splice(index, 1);
    res.json(produto);

});

