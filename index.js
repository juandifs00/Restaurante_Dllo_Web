/**
 * Obtener los valores del formulario de registro
 */

function obtenerValoresFormulario() {
    let correo = document.getElementById("txtCorreo").value
    let nombre = document.getElementById("txtNombre").value
    let celular = document.getElementById("txtCelular").value
    let clave = document.getElementById("txtClave").value
    let direccion = document.getElementById("txtDireccion").value

    if (correo == "") {
        document.getElementById("lblAlerta").style.display = ""
        document.getElementById("lblAlerta").innerText="Amiguito, te hizo falta el correo"    
        return
    }

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
    document.getElementById("txtCorreo").value = ""
    document.getElementById("txtNombre").value = ""
    document.getElementById("txtCelular").value = ""
    document.getElementById("txtClave").value = ""
    document.getElementById("txtDireccion").value = ""
    console.log(usuario)
}

function cargarPagina(params) {
    document.getElementById("lblAlerta").style.display = "none"
}

cargarPagina()