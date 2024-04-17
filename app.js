const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware para analisar o corpo das requisições
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para lidar com o envio do formulário
app.post('/pedido', (req, res) => {
  const resposta = req.body.resposta;
  const dataSaida = req.body.dataSaida;

  // Faça o que quiser com os dados recebidos, como salvar em um banco de dados ou processar de alguma outra forma

  // Envie uma resposta de volta para o cliente
  res.send(`Resposta recebida: ${resposta}, Data de saída: ${dataSaida}`);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
