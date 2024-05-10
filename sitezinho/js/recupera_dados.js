// esse script aqui vou agregar junto com a parte do gui! Já está pronto.

document.getElementById("meuForm").addEventListener("submit", function(event){
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var nickname = document.getElementById("nickname").value;
    var senha = document.getElementById("senha").value;

    // Armazena os valores na sessionStorage
    sessionStorage.setItem("nome", nome);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("nickname", nickname);
    sessionStorage.setItem("senha", senha);

    // Redireciona para a outra tela
    window.location.href = "perfil.html"; 
  });