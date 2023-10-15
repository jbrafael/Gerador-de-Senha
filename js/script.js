// Função para gerar uma senha aleatória
function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Função para atualizar o valor do tamanho da senha exibido
function updatePasswordLength() {
    const slider = document.getElementById("slide");
    const valueElement = document.getElementById("valor");
    valueElement.textContent = slider.value;
}

// Função para gerar e exibir uma senha
function generateAndShowPassword() {
    const slider = document.getElementById("slide");
    const passwordElement = document.getElementById("password");
    const containerPassword = document.getElementById("container-password");

    const passwordLength = slider.value;
    const generatedPassword = generatePassword(passwordLength);

    passwordElement.textContent = generatedPassword;
    containerPassword.classList.remove("hide");
}

// Função para copiar a senha para a área de transferência
function copyToClipboard() {
    const passwordElement = document.getElementById("password");
    const password = passwordElement.textContent;

    const textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Senha copiada para a área de transferência!");
}

// Adiciona eventos aos elementos após o carregamento da página
window.onload = function() {
    const slider = document.getElementById("slide");
    const generateButton = document.getElementById("button");

    slider.addEventListener("input", updatePasswordLength);
    generateButton.addEventListener("click", generateAndShowPassword);
};
