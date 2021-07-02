import Auth from './Modules/Auth/Auth.js';
import Asistencia from './Modules/Asistencia.js';
import Tarea from './Modules/Tarea.js';
import Pildora from './Modules/Pildora.js';
import { firmar } from './Modules/API/llamadasApi.js';



// Tu Código
let crearEntrada = document.getElementById("comenta")
console.log('funciona?');
crearEntrada.addEventListener("submit", async (e) => {

 crearEntrada = document.getElementById("buttonFirmar").value



  await firmar.crearEntrada(firmar);
  window.location.reload();
});

getListadoFirmas();

// Funcionalidad de Firmar



let firmar = document.getElementById("comenta")
botonFirmar.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log('probando');
  let comentario = document.getElementById("comentario").value

  await Asistencia.firmar(comentario);
  window.location.reload();
});

// Funcionalidad mostrar Listado Tareas

// Funcionalidad mostrar Listado Píldorasconst input = document.querySelector("input");
