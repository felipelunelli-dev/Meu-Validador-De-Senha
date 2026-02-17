const password = document.getElementById('password');
const bar = document.querySelector('.bar');
const message = document.querySelector('.message');
const botaoSenha = document.getElementById("botaoSenha");
const inputSenha = document.getElementById("password");

botaoSenha.addEventListener("click", () => {
  if (inputSenha.type === "password") {
    inputSenha.type = "text";
    botaoSenha.textContent = "🙈";
  } else {
    inputSenha.type = "password";
    botaoSenha.textContent = "👁️";
  }
});


password.addEventListener('input', () => {
  const value = password.value;
  let strength = 0;

  if (value.length >= 6) strength++;
  if (value.match(/[A-Z]/)) strength++;
  if (value.match(/[0-9]/)) strength++;
  if (value.match(/[^A-Za-z0-9]/)) strength++;

  if (strength === 0) {
    bar.style.width = '0%';
    message.textContent = 'Digite uma senha';
  } 
  else if (strength <= 2) {
    bar.style.width = '33%';
    bar.style.backgroundColor = 'red';
    message.textContent = 'Senha fraca';
  } 
  else if (strength === 3) {
    bar.style.width = '66%';
    bar.style.backgroundColor = 'orange';
    message.textContent = 'Senha média';
  } 
  else {
    bar.style.width = '100%';
    bar.style.backgroundColor = 'yellow';
    message.textContent = 'Senha forte';
  }
});
