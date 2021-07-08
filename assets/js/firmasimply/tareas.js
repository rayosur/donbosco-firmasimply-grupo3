import Auth from './Modules/Auth/Auth.js';
import Tarea from './Modules/Tarea.js';
import Categoria from './Modules/Categoria.js';



let infoCoder = Auth.getCoder()


async function getListadoTareas() {
    console.log(await Tarea.getListadoTareas());
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
        categoria:categoria,
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

function addtareaToList(tarea) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${tarea.titulo}</td>
      <td>${tarea.categoria}</td>  
      <td>${tarea.descripcion}</td>
      <td>${tarea.fecha}</td>
     
      <td> <a href="#" class="btn btn-danger btn-sm delete">X</a> </td>
      <td> <button id="add" class="success "> &#10004; </button> </td>
    `;

    list.appendChild(row);

}


function doneBook(al) {


    if (al.classList.contains('success') && al.parentElement.parentElement.style.background == "rgb(118, 224, 85)") {

        al.parentElement.parentElement.style.background = "none";


    } else {
        al.parentElement.parentElement.style.background = "rgb(118, 224, 85)";


    }

}


function deleteBook(el) {

    if (el.classList.contains('delete')) {



        el.parentElement.parentElement.remove();
    }


}

function showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));


    const container = document.querySelector('.container');
    const form = document.querySelector('#flexbox');
    container.insertBefore(div, form);

    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}


function clearFields() {
    document.querySelector('#nombre').value = '';
    document.querySelector('#categoria').value = '';
    document.querySelector('#descripcion').value = '';
}


function count() {

    let z = 1;
    let yes = z++;
    console.log(yes);


}


// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {


    // check mark Done from UI
    doneBook(e.target);



    //console.log(e.target);



    // Remove book from UI
    deleteBook(e.target);



    // Show success message
    // UI.showAlert('Tarea eliminada', 'info');


});




// Borrar una tarea
let idTarea = 2;
Tarea.borrarTarea(idTarea);

// Marcar una tarea como completada o pendiente  // 1 completada, 0 pendiente
//  idTarea = 2;
// let data = { estado: 1 };               
// Tarea.marcarTarea(data, idTarea);


Categoria.getListadoCategorias();