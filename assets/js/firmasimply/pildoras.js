import Auth from './Modules/Auth/Auth.js';
import Pildora from './Modules/Pildora.js';
  //Lista de Píldoras //Await es como espera
  const list = document.getElementById('book-list');
   async function getListadoPildoras(){
     console.log('hola');
    let res = await Pildora.getListadoPildoras();
    for(var i=0;i<res.length;i++) {
      console.log(res[i].name);
      list.innerHTML += `<tr>
        <td>
          ${res[i].nombre}
        </td>
        <td>
          ${res[i].apellido}
        </td>
      </tr>`;
    }
    
   }
   
   getListadoPildoras();

// Funcionalidad crear píldora
//

let botonCrear = document.getElementById("book-form")
botonCrear.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log('paco');
  let nombre = document.getElementById("nombre").value
  let descripcion = document.getElementById("descripcion").value
  let fecha =document.getElementById("fecha").value
  let pildora= {
    
      nombre:nombre,
      descripcion:descripcion,
      fecha_presentacion:fecha,
      estado:0,
      user_id: Auth.getCoder().id,
  }
  await Pildora.crearPildora(pildora);
  window.location.reload();
});
// Funcionalidad borrar píldora
//
async function borrarPildora(token, pildoraId) {
  let idPildora = 2;
  Tarea.borrarPildora(idPildora)
}
  
// Funcionalidad marcar una píldora como presentada o pendiente
//
async function marcarPildora() {
  let presentada = document.getElementById("presentado").value
  let pendiente = document.getElementById("pendiente").value
    let idPildora = 2;
  let data = { estado: 1 }; // 1 presentada, 0 pendiente
    Tarea.marcarPildora(data, idPildora);
  }