import Auth from './Modules/Auth/Auth.js';
import Asistencia from './Modules/Asistencia.js';
import Tarea from './Modules/Tarea.js';
import Pildora from './Modules/Pildora.js';
import { firmar, listadoFirmas, listadoPildoras } from './Modules/API/llamadasApi.js';

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
  getListadoPildoras()
  console.log(getListadoPildoras()) 
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
  await Asistencia.getNumFirmasHoy();

 //consultar ultimas Pildoras
 async function ultimasPildoras() {
   let listado = document.getElementById("lista_pildorasP")
   let res = await Pildora.getListadoPildoras();
   for (var i = 0; i < res.length; i++) {
     //console.log(res[i].name);
     listado.innerHTML += `<tr>
         <td>
           ${res[i].nombre}
         </td>
         <td>
           ${res[i].descripcion}
         </td>
         <td>
         ${res[i].fecha_presentacion}
         </td>
         <td>
         <a id="${res[i].id}" class="btn btn-danger btn-sm delete">X</a>
         </td>
         <td>
         <input type="radio"  id="${res[i].id}a" class="casilla" />Presentado
         </td>
       </tr>`;
 
     console.log(res)
   }
 }
 ultimasPildoras()
  
 //consultar tareas
 async function ultimasTareas() {
  let listado1 = document.getElementById("lista_tareasP");
 let listaTareas = await getListadoTareas();
 listado1.innerHTML += `<li> ${"Tareas: " + listaTareas.created_at} </li>`;
}
ultimasTareas();
  
