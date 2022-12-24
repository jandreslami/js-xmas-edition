
function validarCiudad (ciudad) {
    if (ciudad === "") {
       return "Tenés que seleccionar alguna ciudad"
    } 
}

function validarDescripcionRegalo (descripcionRegalo) {

    if (descripcionRegalo.length > 50) {
        return "La descripción del regalo puede tener como máximo 50 caracteres"
    }
}

let ciudadUsuario = ""
let descripcionRegaloUsuario = ""

const $formulario = document.querySelector("#carta-a-santa")
const $botonEnviar = document.getElementById("enviar-carta")



$botonEnviar.onclick = function(){
    ciudadUsuario = $formulario.ciudad.value
    descripcionRegaloUsuario = $formulario['descripcion-regalo'].value

    console.log(validarCiudad(ciudadUsuario)) 
    console.log(validarDescripcionRegalo(descripcionRegaloUsuario))

    return false
}

//console.log("hola")




