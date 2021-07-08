import Auth from './Modules/Auth/Auth.js';
import Asistencia from './Modules/Asistencia.js';
import Tarea from './Modules/Tarea.js';
import Pildora from './Modules/Pildora.js';
import { firmar, listadoFirmas } from './Modules/API/llamadasApi.js';

let botonSalida = document.getElementById("buttonFirmar-2")
botonSalida.addEventListener("click", async (e) => {
  e.preventDefault()
  let firma = {
    user_id: Auth.getCoder().id,
    nota: 'texto test',
    estado: 1 // 1 para entrada, 0 para salida
  };
  Asistencia.firmar(firma);
  // Refrescar el listado de firmas
  consultarListadoFirmas2();

});



// Tu Código
let botonEntrada = document.getElementById("buttonFirmar")
console.log('ok');
botonEntrada.addEventListener("click", async (e) => {
  e.preventDefault()
  let firma = {
    user_id: Auth.getCoder().id,
    nota: 'texto test',
    estado: 1 // 1 para entrada, 0 para salida
  };
  Asistencia.firmar(firma);
  // Refrescar el listado de firmas
  consultarListadoFirmas();

});

//consultar el listado de Firmas de Entrada
async function consultarListadoFirmas() {

  let listadoFirmas = await Asistencia.getlistadoFirmas();
  let lista = document.getElementById('lista_firmas')
  let comentario = document.getElementById("comentario").value
  lista.innerHTML += `<li> ${"Entrada " + listadoFirmas[0].created_at + " " + "Comentario: " + comentario} </li>`;
}

//  Registrar la firma de la Salida.

async function consultarListadoFirmas2() {

  let listadofirmass = await Asistencia.getlistadoFirmas();
  let comentario2 = document.getElementById("comentario").value
  let lista = document.getElementById('lista_firmas')
  lista.innerHTML += `<li> ${"Salida " + listadofirmass[0].created_at + " " + "Comentario: " + comentario2} </li>`;
}

// // Consultar el número de firmas de hoy
 Asistencia.getNumFirmasHoy();
 
 
// Funcionalidad mostrar Listado Tareas

let mostrarTareas= await Tarea.getListadoTareas();
console.log(mostrarTareas)

let tareasPendientes=mostrarTareas.filter(a => { a.estado == 0 });
console.log(tareasPendientes)

let lista = document.getElementById('lista_tareasP')
lista.innerHTML+='<li></li>', '<li></li>', '<li></li>', '<li></li>'
Tarea.getListadoTareas();

// Funcionalidad mostrar Listado Píldorasconst input = document.querySelector("input");

let pildora = {
  nombre: 'NPM',
  descripcion: 'Lorem Ipsum',
  fecha_presentacion: '2021-07-12',
  estado: 0, // 0 pendiente, 1 presentada
  user_id: Auth.getCoder().id, // esta funcion devuelve el id del coder logeado
};

Pildora.crearPildora(pildora);




