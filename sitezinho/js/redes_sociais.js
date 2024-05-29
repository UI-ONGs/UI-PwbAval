// Pegando os objetos da página HTML
let facebook = document.querySelector(".fab.fa-facebook-f");
let twitter = document.querySelector(".fab.fa-twitter");
let instagram = document.querySelector(".fab.fa-instagram");

// Adicionando um evento de clique para o botão de Facebook
facebook.addEventListener("click", function() {
    let user_face = prompt("Por favor, insira seu usuário do Facebook:");
    // Verificando se o usuário inseriu algum valor
    if (user_face !== null) {
        // Concatenando o valor inserido pelo usuário com outro texto
        let mensagem = "O usuário do Facebook inserido é: " + user_face;
        // Exibindo a mensagem concatenada
        alert(mensagem);
       // window.location.href = "https://www.instagram.com/" + user_face + "/";
    } else {
        // Se o usuário clicou em "Cancelar" ou fechou a caixa de diálogo, você pode lidar com isso aqui
        console.log("O usuário cancelou a entrada ou fechou a caixa de diálogo.");
    }
    
    trocarHref1(user_face);
});

function trocarHref1(user_face) {
    var novoHref = "https://www.facebook.com/" + user_face + "/";
    document.getElementById("link1").href = novoHref;
}


// Adicionando um evento de clique para o botão de twitter
twitter.addEventListener("click", function() {
    let user_twitter = prompt("Por favor, insira seu usuário do Twitter:");
    // Verificando se o usuário inseriu algum valor
    if (user_twitter !== null) {
        // Concatenando o valor inserido pelo usuário com outro texto
        let mensagem = "O usuário do Facebook inserido é: " + user_twitter;
        // Exibindo a mensagem concatenada
        alert(mensagem);
    } else {
        // Se o usuário clicou em "Cancelar" ou fechou a caixa de diálogo, você pode lidar com isso aqui
        console.log("O usuário cancelou a entrada ou fechou a caixa de diálogo.");
    }
    
    trocarHref2(user_twitter);
});

function trocarHref2(user_twitter) {
    var novoHref = "https://www.instagram.com/" + user_twitter + "/";
    document.getElementById("link2").href = novoHref;
}

// Adicionando um evento de clique para o botão de Facebook
instagram.addEventListener("click", function() {
    let user_insta = prompt("Por favor, insira seu usuário do Instagram:");
    // Verificando se o usuário inseriu algum valor
    if (user_insta !== null) {
        // Concatenando o valor inserido pelo usuário com outro texto
        let mensagem = "O usuário do Facebook inserido é: " + user_insta;
        // Exibindo a mensagem concatenada
        alert(mensagem);
    } else {
        // Se o usuário clicou em "Cancelar" ou fechou a caixa de diálogo, você pode lidar com isso aqui
        console.log("O usuário cancelou a entrada ou fechou a caixa de diálogo.");
    }
    
    trocarHref3(user_insta);
});

function trocarHref3(user_insta) {
    var novoHref = "https://www.instagram.com/" + user_insta + "/";
    document.getElementById("link3").href = novoHref;
}

