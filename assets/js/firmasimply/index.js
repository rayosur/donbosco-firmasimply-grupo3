import Auth from './Modules/Auth/Auth.js';
import Asistencia from './Modules/Asistencia.js';




// Tu Código
const list = document.getElementById('lista_firmas');
async function getListadoFirmas() {
  console.log('hola');
  let res = await Asistencia.getListadoFirmas();
  for (var i = 0; i < res.length; i++) {
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

getListadoFirmas();


// Funcionalidad de Firmar
let botonFirmaEntrada = document.getElementById("buttonFirmar")
botonFirmaEntrada.addEventListener("click", async (e) => {
  alert("has firmado entrada")


  await Firma.crearEntrada(entrada);
  window.location.reload();
});

let botonFirmaSalida = document.getElementById("buttonFirmar")
botonFirmaSalida.addEventListener("click", async (e) => {
  alert("has firmado salida")

  await Firma.crearSalida(salida);
  window.location.reload();
});



// Funcionalidad mostrar Listado Tareas

// Funcionalidad mostrar Listado Píldorasconst input = document.querySelector("input");
