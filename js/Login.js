const sign_in_btn = document.querySelector("#sign-in-btn"),
    sign_up_btn = document.querySelector("#sign-up-btn"),
    container = document.querySelector(".container"),
    sign_in_btn2 = document.querySelector("#sign-in-btn2"),
    sign_up_btn2 = document.querySelector("#sign-up-btn2"),
    goto_inst = document.querySelector("#goto-inst"),
    goto_vol = document.querySelector("#goto-vol"),
    sign_up_form = document.querySelector(".sign-up-form"),
    sign_up_inst = document.querySelector(".sign-up-inst");

// Event listeners for switching between forms
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode2");
});

sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode2");
});

goto_inst.addEventListener("click", (event) => {
    event.preventDefault();
    sign_up_form.style.display = 'none';
    sign_up_inst.style.display = 'flex';
});

goto_vol.addEventListener("click", (event) => {
    event.preventDefault();
    sign_up_form.style.display = 'flex';
    sign_up_inst.style.display = 'none';
});

// Form validation and local storage handling
const signUpForm = document.querySelector(".sign-up-form");
const signUpInstForm = document.querySelector(".sign-up-inst");
const signInForm = document.querySelector(".sign-in-form");

function showMessage(message) {
    let messageElem = document.querySelector('.message');
    if (messageElem) {
        messageElem.textContent = message;
    }
}

signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = signUpForm.querySelector("input[placeholder='Username']").value;
    const email = signUpForm.querySelector("input[placeholder='Email']").value;
    const password = signUpForm.querySelector("input[placeholder='Password']").value;

    if (username.length >= 6 && email && password.length >= 6) {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        showMessage("Cadastro bem sucedido!");
    } else {
        showMessage("Todos os campos devem ser preenchidos com no mínimo 6 caracteres para nome de usuário e senha.");
    }
});

signUpInstForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const instName = signUpInstForm.querySelector("input[placeholder='Institution Name']").value;
    const instCategory = signUpInstForm.querySelector("input[placeholder='Institution Category']").value;
    const cnpj = signUpInstForm.querySelector("input[placeholder='CNPJ']").value;
    const email = signUpInstForm.querySelector("input[placeholder='Email']").value;
    const password = signUpInstForm.querySelector("input[placeholder='Password']").value;

    if (instName.length >= 6 && instCategory && cnpj && email && password.length >= 6) {
        localStorage.setItem('instName', instName);
        localStorage.setItem('instCategory', instCategory);
        localStorage.setItem('cnpj', cnpj);
        localStorage.setItem('instEmail', email);
        localStorage.setItem('instPassword', password);
        showMessage("Institution sign up successful!");
    } else {
        showMessage("Todos os campos deverão ser preenchidos com no mínimo 6 caracteres para nome da instituição e senha.");
    }
});

signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = signInForm.querySelector("input[placeholder='Username']").value;
    const password = signInForm.querySelector("input[placeholder='Password']").value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    const storedInstName = localStorage.getItem('instName');
    const storedInstPassword = localStorage.getItem('instPassword');

    if ((username === storedUsername && password === storedPassword) || 
        (username === storedInstName && password === storedInstPassword)) {
        showMessage("Login bem-sucedido!");
    } else {
        showMessage("Usuário ou senha incorretos.");
    }
});
