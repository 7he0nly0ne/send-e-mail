//function enviarEmail(destinatario, assunto, conteudo) {
//  // Construir o objeto de dados a serem enviados para o servidor
//  const dados = {
//    destinatario: destinatario,
//    assunto: assunto,
//    conteudo: conteudo
//  };
//
//  // Enviar a solicitação POST para o servidor
//  fetch('/enviar-email', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(dados)
//  })
//  .then(response => {
//    if (response.ok) {
//      console.log('E-mail enviado com sucesso!');
//      // Faça algo depois de enviar o e-mail, como mostrar uma mensagem de confirmação ao usuário
//    } else {
//      console.log('Erro ao enviar o e-mail:', response.statusText);
//      // Faça algo em caso de erro, como exibir uma mensagem de erro ao usuário
//    }
//  })
//  .catch(error => {
//    console.log('Erro ao enviar o e-mail:', error);
//    // Faça algo em caso de erro, como exibir uma mensagem de erro ao usuário
//  });
//}
//
//
//
//       function processarFormulario(event) {
//  event.preventDefault(); // Evita o envio do formulário por padrão
//
//  
//
//  // Obter os valores dos campos de formulário
//  var email = document.getElementById("email").value;
//  var nome = document.getElementById("nome").value;
//  var senha = document.getElementById("senha").value;
//  var confirmasenha = document.getElementById("confirmasenha").value;
//  var cpf = document.getElementById("cpf").value;
//  var numero = document.getElementById("celular").value;
//  var agreement = document.getElementById("agreement").checked;
//
//  
//
//  // Validar o campo de e-mail
//  if (email.length <= 6 || email.indexOf("@") < 3 || email.lastIndexOf(".") < email.indexOf("@") + 3 || email.length > 40) {
//    alert("Por favor, insira um endereço de e-mail válido.");
//    return;
//  }
//
//  // Validar o campo de nome
//  if (nome.length < 3 || nome.length > 40) {
//    alert("Por favor, insira um nome válido.");
//    return;
//  }
//
//  // Validar o campo de senha
//  if (senha.length < 4 || senha.length > 20) {
//    alert("Por favor, insira uma senha válida.");
//    return;
//  }
//
//  // Validar o campo de confirmação de senha
//  if (senha !== confirmasenha) {
//    alert("As senhas não correspondem.");
//    return;
//  }
//
//  // Validar o campo de CPF
//  if (cpf.length !== 11 || isNaN(cpf)) {
//    alert("Por favor, insira um CPF válido.");
//    return;
//  }
//
//  // Validar o campo de número de celular
//  if (numero.length < 10 || numero.length > 11 || isNaN(numero)) {
//    alert("Por favor, insira um número de celular válido.");
//    return;
//  }
//
//  // Validar se a caixa de seleção de acordo foi marcada
//  if (!agreement) {
//    alert("Você deve aceitar os termos de uso para prosseguir com o cadastro.");
//    return;
//  }
//
//  // Se todas as validações passarem, você pode prosseguir com o processamento do formulário ou enviar os dados para um servidor
//  alert("Formulário válido. Enviando dados...");
//  
//  const destinatario = 'alan.souza.morais02@gmail.com'; // Substitua com o endereço de e-mail desejado
//    const assunto = 'Novo cadastro';
//    const conteudo =
//    'Novo cadastro recebido:\n\n' +
//    'Nome: ' +
//    nome +
//    '\n' +
//    'E-mail: ' +
//    email +
//    '\n' +
//    'CPF: ' +
//    cpf +
//    '\n' +
//    'Número: ' +
//    numero;

    // Enviar e-mail com os dados fornecidos
 //   enviarEmail(destinatario, assunto, conteudo);

    // Limpar o formulário após o envio do e-mail
 //   document.getElementById('myForm').reset();
 // }

  // Adicionar o evento de submit ao formulário
//  document.getElementById('myForm').addEventListener('submit', processarFormulario);

  // Função para alterar a cor do botão quando pressionado
//  function alterarCorBotao() {
//    var btnCadastro = document.getElementById('btnlogin');
//    btnCadastro.style.backgroundColor = '#ff68f7'; // Altere para a cor desejada
//  }

  // Função para reverter a cor do botão quando liberado
//  function reverterCorBotao() {
//    var btnCadastro = document.getElementById('btnlogin');
//    btnCadastro.style.backgroundColor = ''; // Voltar à cor padrão
 // }

  // Adicionar os eventos de pressionar e liberar o botão
//  var btnCadastro = document.getElementById('btnlogin');
//  btnCadastro.addEventListener('mousedown', alterarCorBotao);
//  btnCadastro.addEventListener('mouseup', reverterCorBotao);

  // Adicionar o evento de clique ao botão de cadastro
//  document.getElementById('btnlogin').addEventListener('click', processarFormulario);

  // Adicionar o evento de entrada aos campos de entrada que possuem limite de caracteres
//  var inputs = document.querySelectorAll('input[data-max-length]');
//  inputs.forEach(function (input) {
   // input.addEventListener('input', function () {
 //     var maxLength = input.getAttribute('data-max-length');
//      if (input.value.length > maxLength) {
   //     input.value = input.value.slice(0, maxLength);
   //   }
   // });
  //});