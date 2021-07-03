// import  borrarPildora  from './Modules/API/llamadasApi.js';
import Auth from './Modules/Auth/Auth.js';
import Pildora from './Modules/Pildora.js';
//Lista de Píldoras //Await es como espera

const list = document.getElementById('book-list');
async function getListadoPildoras() {
  console.log('hola');
  let res = await Pildora.getListadoPildoras();
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].name);
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
        <a href="#" id="borrar"  value="${res[i].id}" class="btn btn-danger btn-sm delete">X</a>
        </td>
      </tr>`;
      
  }
console.log(res)
}



getListadoPildoras();

// Funcionalidad crear píldora
//

let botonCrear = document.getElementById("book-form")
botonCrear.addEventListener("submit", async (e) => {
  e.preventDefault();

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

async function borrarPildora(p) {  
  e.preventDefault();
  let eliminar =document.querySelectorAll(value)

  
  await Pildora.borrarPildora().value
}


 //eliminar.addEventListener("click",borrarPildora(idPildora))



// Funcionalidad marcar una píldora como presentada o pendiente
//
async function marcarPildora() {
  let presentada = document.getElementById("presentado").value
  let pendiente = document.getElementById("pendiente").value
  let idPildora = 2;
  let data = { estado: 1 }; // 1 presentada, 0 pendiente
  Tarea.marcarPildora(data, idPildora);
}

function deletePildora() {
  document.querySelector('#book-list').addEventListener('click', (e) => {
     e.preventDefault()
      removePildora(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
      if (e.target.classList.contains('delete')) {
          e.target.parentElement.parentElement.remove();
          console.log(e.target.parentElement.parentElement)
          console.log(e.target.getAttribute("value"))
      }
      alert('Pildora borrada', 'success');
  });

}
async function removePildora(id) {
  let borrar = await Pildora.getListadoPildoras();
 
  borrar.forEach((pico, index) => {
      if (pico.id === id) {
          
          console.log(deletBook.splice(index, 1))
          console.log(id)
      }
  });
  
  Pildora.borrarPildora(id)
}
deletePildora()