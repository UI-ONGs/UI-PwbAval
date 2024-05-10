// Recupera os valores da sessionStorage
var nome = sessionStorage.getItem("nome");
var email = sessionStorage.getItem("email");
var nickname = sessionStorage.getItem("nickname");
var senha = sessionStorage.getItem("senha");

// definição do elementos
const nomeU = document.querySelector("#nome"),
    gmail = document.querySelector("#email"),
    password = document.querySelector("#senha"),
    nick = document.querySelector("#nickname");

// Exibe os valores na tela
nomeU.textContent = nome;
gmail.textContent = email;
password.textContent = senha;
nick.textContent = nickname;

