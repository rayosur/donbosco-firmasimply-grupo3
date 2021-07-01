import Auth from './Modules/Auth/Auth.js';

const DASHBOARD_URL = '/index.html';

const formLogin = document.querySelector('#formularioLogin');
formLogin.addEventListener('submit', login, false);

async function login(e) {
  e.preventDefault();

  let usuario = document.getElementById("usuario").value;
  let contrasena = document.getElementById("password").value;
  // Login
  const CODER = {email: usuario, password: contrasena};

  await Auth.login(CODER);
  window.location.assign(DASHBOARD_URL);
}

