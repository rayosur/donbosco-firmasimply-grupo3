import Auth from './Modules/Auth/Auth.js';
import Tarea from './Modules/Tarea.js';
import Categoria from './Modules/Categoria.js';



let infoCoder = Auth.getCoder()


async function getListadoTareas() {
    let listado = document.getElementById("book-list")
    let res = await Tarea.getListadoTareas();
    
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].categoria);
      listado.innerHTML += `<tr>
          <td>
            ${res[i].titulo}
          </td>
          <td>
            ${res[i].categoria}
          </td>
          <td>
          ${res[i].descripcion}
          </td>
          
          <td>
          <a id="${res[i].id}" class="btn btn-danger btn-sm delete">X</a>
          </td>
          <td>
          <input type="radio"  id="${res[i].id}a" class="casilla" />Presentado
          </td>
          
        </tr>`;
  
      
    }
}
getListadoTareas();

// Event: Add a Book
document.querySelector('#editsubmit').addEventListener('click', crearTarea, false)

async function crearTarea(e) {
    e.preventDefault();
    let nombre = document.querySelector('#nombre').value;
    let categoria = document.querySelector('#categoria ').value;
    let descripcion = document.querySelector('#descripcion').value;
    let fecha = new Date();
    let tarea = {
        titulo: nombre,
        categoria: categoria,
        descripcion: descripcion,
        fecha: fecha,
        estado: 0, // 0 pendiente, 1 completada
        user_id: Auth.getCoder().id, // esta funcion devuelve el id del coder logeado
        categoria_id: 1,
    };

    //Tarea.crearTarea(tarea);

    // Validate
    if (nombre === '' || categoria === '' || descripcion === '' || fecha === '') {
        showAlert('Por favor rellena todos los campos', 'danger');
    } else {
        // Instatiate book
        // const book = new Book(nombre , categoria , descripcion , fecha );

        // await Tarea.crearTarea(tarea);
        Tarea.crearTarea(tarea);
        // Add Book to UI
        addtareaToList(tarea)
        // count
        count();
        // Add book to store
        // Store.addBook(book);


        // Show success message
        // UI.showAlert('Tarea añadido', 'success');

        // Clear fields
        clearFields()


    }
};



async function  addtareaToList(tarea) { 
    
    let listado = document.getElementById("book-list")
    let res = await Tarea.getListadoTareas();
    
    for (var i = 0; i < res.length; i++) {
      
      listado.innerHTML += `<tr>
          <td>
            ${res[i].titulo}
          </td>
          <td>
            ${res[i].categoria}
          </td>
          <td>
          ${res[i].descripcion}
          </td>
          
          <td>
          <a id="${res[i].id}" class="btn btn-danger btn-sm delete">X</a>
          </td>
          <td>
          <input type="radio"  id="${res[i].id}a" class="casilla" />Presentado
          </td>
          
        </tr>`;
  
      
    }
  }
  
  




function doneBook(al) {


    if (al.classList.contains('success') && al.parentElement.parentElement.style.background == "rgb(118, 224, 85)") {

        al.parentElement.parentElement.style.background = "none";


    } else {
        al.parentElement.parentElement.style.background = "rgb(118, 224, 85)";
    }
}

