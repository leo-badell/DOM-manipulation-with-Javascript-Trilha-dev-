document.querySelector('.link a').addEventListener('click', function(event) {
    event.preventDefault();
  
    let nome = window.prompt("Qual é seu nome?");
    let email = window.prompt("Insira um usuário");
    let senha = window.prompt("Insira uma senha");
  
  
    console.log('Nome: ' + nome, 'Email: ' + email, 'Senha: ' + senha);
  
  
    return window.alert("Olá " + nome + ", seu usuário é " + email + " e sua senha é " + senha);
  });
  
  
  function aoClicar() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
  
    if (email && senha) {
      console.log('Email: ' + email, 'Senha: ' + senha);
      alert("Seja bem-vindo " + email);
    } else {
      alert("Insira usuário e senha!");
    }
  };