/*Generamos el script que nos permitirá generar contraseñas seguras, con la posibilidad de copiarlas al portapapeles*/
const passwordField = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const strengthLabel = document.getElementById("strength-label");
const strengthIndicator = document.querySelector(".strength-indicator");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy-btn");

const uppercaseChars = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnñopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{}[]|:;<>,.?/~`";

function generatePassword() {
    let length = parseInt(lengthSlider.value);
    let chars = "";
    let password = "";
    
    if (uppercaseCheckbox.checked) chars += uppercaseChars;
    if (lowercaseCheckbox.checked) chars += lowercaseChars;
    if (numbersCheckbox.checked) chars += numberChars;
    if (symbolsCheckbox.checked) chars += symbolChars;
    
    if (chars.length === 0) return;
    
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    
    passwordField.value = password;
    evaluateStrength(password);
}

function evaluateStrength(password) {
    let strength = "BAJO";
    let strengthColor = "red";
    let score = 0;
    
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    if (score >= 4) {
        strength = "ALTO";
        strengthColor = "green";
    } else if (score >= 3) {
        strength = "MEDIO";
        strengthColor = "yellow";
    }
    
    strengthLabel.textContent = strength;
    strengthIndicator.style.background = strengthColor;
}

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
    passwordField.select();
    document.execCommand("copy");
});
