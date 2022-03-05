/**
 * Obtener los valores del formulario de registro
 */

function obtenerValoresFormulario() {
    let correo = document.getElementById("txtCorreo").value
    let nombre = document.getElementById("txtNombre").value
    let celular = document.getElementById("txtCelular").value
    let clave = document.getElementById("txtClave").value
    let direccion = document.getElementById("txtDireccion").value

    // Forma de crear un objeto
    // Inicializar un objeto con propiedaes
    let usuario = { celular, "clave": clave }

    // Agregar propiedades con json
    usuario.correo = correo
    usuario.direccion = direccion

    // Agregar propiedades con Bracket Notacion ["key"]
    usuario["nombre"] = nombre
    
    // Forma resumida de crear el objeto
    // let usuario = { correo, nombre, celular, clave, direccion }

    console.log(usuario)
}

obtenerValoresFormulario