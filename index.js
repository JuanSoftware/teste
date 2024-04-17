const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware para analisar o corpo das requisições
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota para servir a página HTML
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pedido de Namoro</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f9f3f2;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
    
        .container {
          width: 400px;
          padding: 30px;
          background-color: #fff;
          border-radius: 20px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          text-align: center;
          position: relative;
        }
    
        h1 {
          color: #e91e63;
          margin-bottom: 20px;
        }
    
        p {
          margin-bottom: 30px;
        }
    
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
    
        label {
          margin-bottom: 15px;
        }
    
        input[type="checkbox"] {
          margin-right: 5px;
        }
    
        button {
          margin-top: 30px;
          padding: 12px 24px;
          background-color: #e91e63;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }
    
        button:hover {
          background-color: #c2185b;
        }
    
        input[type="text"] {
          margin-top: 15px;
          padding: 10px;
          width: 100%;
          box-sizing: border-box;
        }
    
        .flower1 {
          position: absolute;
          top: -50px;
          left: -50px;
          width: 100px;
        }
    
        .flower2 {
          position: absolute;
          top: -50px;
          right: -50px;
          width: 100px;
        }
    
        .flower3 {
          position: absolute;
          bottom: -50px;
          left: -50px;
          width: 100px;
        }
    
        .flower4 {
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 100px;
        }
    
        .heart {
          color: #e91e63;
          font-size: 24px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <img src="https://emojicdn.elk.sh/🌹" alt="Flower" class="flower1">
        <img src="https://emojicdn.elk.sh/🌹" alt="Flower" class="flower2">
        <img src="https://emojicdn.elk.sh/🌹" alt="Flower" class="flower3">
        <img src="https://emojicdn.elk.sh/🌹" alt="Flower" class="flower4">
        <h1>Quer sair comigo?</h1>
        <p>Marque uma das opções abaixo:</p>
        <form id="pedidoForm" action="/pedido" method="post">
          <label>
            <input type="checkbox" name="resposta" value="sim" id="opcaoSim"> Sim
          </label>
          <label>
            <input type="checkbox" name="resposta" value="não"> Não
          </label>
          <input type="text" name="dataSaida" id="dataSaida" placeholder="Quando você pode sair?" style="display:none;">
          <button type="submit">Enviar</button>
        </form>
        <p id="mensagem"></p>
      </div>
    </body>
    </html>
  `);
});

// Rota para lidar com o envio do formulário
app.post('/pedido', (req, res) => {
  const resposta = req.body.resposta;
  const dataSaida = req.body.dataSaida;

  // Faça o que quiser com os dados recebidos, como salvar em um banco de dados ou processar de alguma outra forma

  // Envie uma resposta de volta para o cliente
  if (resposta === 'sim') {
    res.send(`Que ótimo! Mal posso esperar para sair com você em ${dataSaida}!`);
  } else if (resposta === 'não') {
    res.send('😭😭😭😭😭😭😭');
  } else {
    res.send('Por favor, selecione uma opção.');
  }
});

// Inicia o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
