// import  borrarPildora  from './Modules/API/llamadasApi.js';
import Auth from './Modules/Auth/Auth.js';
import Pildora from './Modules/Pildora.js';
//Lista de Píldoras //Await es como espera

const list = document.getElementById('list-pildoras');
async function getListadoPildoras() {
  console.log('hola');
  let res = await Pildora.getListadoPildoras();
  for (var i = 0; i < res.length; i++) {
    //console.log(res[i].name);
    list.innerHTML += `<tr>
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


getListadoPildoras();

// Funcionalidad crear píldora

let botonCrear = document.getElementById("form-pildora")
botonCrear.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("estoy en funcion crear pildora")

  let nombre = document.getElementById("nombre").value
  let descripcion = document.getElementById("descripcion").value
  let fecha = document.getElementById("fecha").value
  let pildora = {

    nombre: nombre,
    descripcion: descripcion,
    fecha_presentacion: fecha,
    estado: 0,
    user_id: Auth.getCoder().id,
  }
  await Pildora.crearPildora(pildora);
  window.location.reload();
});

// Funcionalidad borrar píldora
document.getElementById('list-pildoras').addEventListener('click', borrarPildoras)
async function borrarPildoras(e) {
  // target detectar el objetivo 
  //classlist nos devuelve todas las claces y contains comprueba dentro de esta lista de clases esta la clase deleter
  if (e.target.classList.contains('delete')) {
    await Pildora.borrarPildora(e.target.id);
  }
  window.location.reload();
  alert("ha sido borrado")
}
//marcar pildora presentada o no.
document.getElementById('list-presentas').addEventListener('click', marcarPildora)
async function marcarPildora(e) {
  e.preventDefault();
  console.log(1);
  if (e.target.classList.contains('casilla')) {
    await Pildora.marcarPildora(e.target.id);
  }
  window.location.reload();
}
