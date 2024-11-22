// Seleção de elementos HTML
const sign_in_btn = document.querySelector("#sign-in-btn"), // Botão "Sign in"
    sign_up_btn = document.querySelector("#sign-up-btn"), // Botão "Sign up"
    container = document.querySelector(".container"), // Container principal
    sign_in_btn2 = document.querySelector("#sign-in-btn2"), // Botão "Sign in" alternativo
    sign_up_btn2 = document.querySelector("#sign-up-btn2"), // Botão "Sign up" alternativo
    goto_inst = document.querySelector("#goto-inst"), // Botão "Click Here" para instituições
    goto_vol = document.querySelector("#goto-vol"), // Botão "Click here" para voluntários
    sign_up_form = document.querySelector(".sign-up-form"), // Formulário de cadastro padrão
    sign_up_inst = document.querySelector(".sign-up-inst"); // Formulário de cadastro para instituições

// Event listeners para alternar entre formulários
sign_up_btn.addEventListener("click", () => { // Quando o botão "Sign up" é clicado
    container.classList.add("sign-up-mode"); // Adiciona a classe para mudar para o modo de cadastro
});

sign_in_btn.addEventListener("click", () => { // Quando o botão "Sign in" é clicado
    container.classList.remove("sign-up-mode"); // Remove a classe para voltar ao modo de login
});

sign_up_btn2.addEventListener("click", () => { // Quando o botão "Sign up" alternativo é clicado
    container.classList.add("sign-up-mode2"); // Adiciona a classe para mudar para o modo de cadastro alternativo
});

sign_in_btn2.addEventListener("click", () => { // Quando o botão "Sign in" alternativo é clicado
    container.classList.remove("sign-up-mode2"); // Remove a classe para voltar ao modo de login alternativo
});

// Event listeners para alternar entre formulários
goto_inst.addEventListener("click", (event) => { // Quando o botão "Click Here" para instituições é clicado
    event.preventDefault(); // Evita o comportamento padrão do link
    sign_up_form.style.display = 'none'; // Oculta o formulário de cadastro padrão
    sign_up_inst.style.display = 'flex'; // Exibe o formulário de cadastro para instituições
});

goto_vol.addEventListener("click", (event) => { // Quando o botão "Click here" para voluntários é clicado
    event.preventDefault(); // Evita o comportamento padrão do link
    sign_up_form.style.display = 'flex'; // Exibe o formulário de cadastro padrão
    sign_up_inst.style.display = 'none'; // Oculta o formulário de cadastro para instituições
});

// Form validation and local storage handling
const signUpForm = document.querySelector(".sign-up-form"); 
const signUpInstForm = document.querySelector(".sign-up-inst"); 
const signInForm = document.querySelector(".sign-in-form"); 

// Função para exibir mensagens na tela
function showMessage(message) {
    let messageElem = document.querySelector('.message'); // Elemento HTML para exibir a mensagem
    if (messageElem) {
        messageElem.textContent = message; // Define o texto da mensagem
    }
}

// Event listener para o formulário de cadastro padrão
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita o envio padrão do formulário
    const fullname = signUpForm.querySelector("input[placeholder='Nome Completo']").value; 
    const username = signUpForm.querySelector("input[placeholder='Nome de Usuário']").value; 
    const email = signUpForm.querySelector("input[placeholder='Email']").value;
    const password = signUpForm.querySelector("input[placeholder='Senha']").value; 

    // Validação dos campos
    if (username.length >= 6 && email && password.length >= 6 && fullname.length >= 6) { // Verifica se os campos têm os requisitos mínimos
        // Armazenamento local dos dados do usuário
        localStorage.setItem('fullname', fullname);
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        showMessage("Cadastro bem sucedido!"); // Exibe mensagem de sucesso
        window.location.reload(); // Recarrega a página
    } else {
        showMessage("Todos os campos devem ser preenchidos com no mínimo 6 caracteres para nome de usuário e senha."); // Exibe mensagem de erro
    }
});

// Event listener para o formulário de cadastro de instituições
signUpInstForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio padrão do formulário
    const instName = signUpInstForm.querySelector("input[placeholder='Nome da Instituição']").value; 
    const instCategory = signUpInstForm.querySelector("input[placeholder='Categoria da Instituição']").value; 
    const cnpj = signUpInstForm.querySelector("input[placeholder='CNPJ']").value; 
    const email = signUpInstForm.querySelector("input[placeholder='Email']").value; 
    const password = signUpInstForm.querySelector("input[placeholder='Senha']").value; 

    // Validação dos campos
    if (instName.length >= 6 && instCategory && cnpj && email && password.length >= 6) { // Verifica se os campos têm os requisitos mínimos
        // Armazenamento local dos dados da instituição
        localStorage.setItem('instName', instName);
        localStorage.setItem('instCategory', instCategory);
        localStorage.setItem('cnpj', cnpj);
        localStorage.setItem('instEmail', email);
        localStorage.setItem('instPassword', password);
        showMessage("Cadastro bem Sucedido"); // Exibe mensagem de sucesso
        window.location.reload(); // Recarrega a página
    } else {
        showMessage("Todos os campos deverão ser preenchidos com no mínimo 6 caracteres para nome da instituição e senha."); // Exibe mensagem de erro
    }
});

// Event listener para o formulário de login
signInForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio padrão do formulário
    // Obtenção dos dados armazenados localmente
    console.log("oi");
    const username = signInForm.querySelector("input[placeholder='Nome de Usuário']").value;
    const password = signInForm.querySelector("input[placeholder='Senha']").value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    const storedInstName = localStorage.getItem('instName');
    const storedInstPassword = localStorage.getItem('instPassword');

    // Verificação das credenciais
    if ((username === storedUsername && password === storedPassword) || 
        (username === storedInstName && password === storedInstPassword)) {
        showMessage("Login bem-sucedido!");
        window.location.href = "index.html";
    } else {
        showMessage("Usuário ou senha incorretos.");
    }
});

