
const express = require('express');
const nodemailer = require('nodemailer');


const app = express();
app.use(express.json()); // Middleware para analisar o corpo da solicitação no formato JSON

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, POST');
  res.header('Access-Control-Allow-Credentials', true);
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Configurações do transporte de e-mail
const transporter = nodemailer.createTransport({
  // Configurações do servidor de e-mail ou serviço de terceiros
  // Exemplo para usar o Gmail:
  service: 'gmail',
  auth: {
    user: 'chupacabra@gmail.com', // Substitua com o seu e-mail
    pass: 'spiderman' // Substitua com a sua senha
  }
});

// Rota para enviar o e-mail
app.post('/enviar-email', (req, res) => {
  res.send('Formulario Recebido')
  if (req.method === 'POST') {
    const { destinatario, assunto, conteudo } = req.body;

  // Configurações do e-mail
  const mailOptions = {
    from: 'chupacabra@gmail.com', // Substitua com o seu e-mail
    to: destinatario,
    subject: assunto,
    text: conteudo
  };

  console.log('Recebida solicitação POST para /enviar-email');


  // Enviar o e-mail
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log('Erro ao enviar o e-mail:', error);
      res.status(500).send('Erro ao enviar o e-mail');
    } else {
      console.log('E-mail enviado:', info.response);
      res.send('E-mail enviado com sucesso');
    }
  });
} else {
  res.status(405).send('Method Not Allowed');
}
});

// Inicie o servidor na porta desejada
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
