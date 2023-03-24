/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados 
(investigar cómo en MDN).
*/

const personasEnGrupoFamiliar = Number(prompt("Cuantas personas tiene tu grupo familiar?"))

const $formulario = document.querySelector("form")


for (let i=1; i<=personasEnGrupoFamiliar; i++ ) {
    let $etiqueta = document.createElement("label")
    $etiqueta.textContent = `Edad de persona N°${i}`
    $etiqueta.classList.add("form-label")

    $formulario.appendChild($etiqueta)

    let $input = document.createElement("input")
    $input.id = `input${i}`
    $input.classList.add("m-2", "form-control-sm")
    $input.setAttribute("type","number")
    $formulario.appendChild ($input)
    

    $formulario.appendChild (document.createElement("div"))

   }

$botonCalcular = document.createElement("button")
$botonCalcular.textContent = "Calcular"
$botonCalcular.classList.add("btn", "btn-primary", "m-2")

$formulario.appendChild($botonCalcular)

$botonReset = document.createElement("button")
$botonReset.type = "reset"
$botonReset.id = "reset"
$botonReset.textContent ="Limpiar formulario"
$botonReset.classList.add("btn", "btn-secondary")

$formulario.appendChild($botonReset) 


$botonCalcular.onclick = function(){
    
    borrarCalculosAnteriores()

    let $edadPersona = 0
    let arrayEdades = []

    for (let i=1; i<=personasEnGrupoFamiliar; i++ ){

        let inputId = `input${i}`
        
        $edadPersona = document.getElementById(inputId).value
        
        arrayEdades.push(Number($edadPersona))

        }    

    mostrarCalculos(arrayEdades);

    for (let i=0; i<arrayEdades.length; i++ ){

        let errorEdad = validarEdad(arrayEdades[i])

        manejarErrores(errorEdad) 
    }
        

return false;

}

function manejarErrores (errores){

    if (errores) {

        borrarCalculosAnteriores();
        
        $textoError = document.createElement("div")
        $textoError.textContent = errores
        $textoError.classList.add("alert", "alert-danger")
        $textoError.id = "error"

        $formulario.appendChild($textoError)
        
    }
   
}

function borrarCalculosAnteriores(){

    let $calculos = document.querySelectorAll(".alert")

    for (i=0; i<$calculos.length; i++){
        $calculos[i].remove()
    }
    
}

function mostrarCalculos(arrayEdades){

    $textoPromedio = document.createElement("div")
    $textoPromedio.classList.add("alert", "alert-secondary")
    $textoPromedio.textContent = `El promedio de edades ingresadas es de ${calcularPromedio(arrayEdades)}`

    $formulario.appendChild($textoPromedio)

    $textoMayor = document.createElement("div")
    $textoMayor.classList.add("alert", "alert-secondary")
    $textoMayor.textContent = `El integrante del grupo familiar más grande tiene ${calcularMayorNumero(arrayEdades)}`

    $formulario.appendChild($textoMayor)

    $textoMenor = document.createElement("div")
    $textoMenor.classList.add("alert", "alert-secondary")
    $textoMenor.textContent = `El integrante del grupo familiar más chico tiene ${calcularMenorNumero(arrayEdades)}`

    $formulario.appendChild($textoMenor)
    
}

function validarEdad (edad) {
    
    if (edad>105) {
        return "La edad no puede ser mayor a 105"
    }

    if (edad===0) {
        return "La edad no puede ser cero o estar vacía"
    }

    if (!/^[0-9]{1,3}$/.test(edad)) {
        return "La edad no puede superar los 3 dígitos, ni tener letras o decimales"
    }
   
    else {
        return "";
    }

}

function calcularMenorNumero (array) {
    let acumulador = array[0];
    for  (i=0; i<array.length ; i++) {

        if (array[i] < acumulador) {
            acumulador = array[i]
        }
    }
    return acumulador
}

function calcularMayorNumero (array){
    let acumulador = array[0];
    for  (i=0; i<array.length ; i++) {
        if (array[i] > acumulador) {
            acumulador = array[i]
        }
    }
    return acumulador
}

function calcularPromedio (array){
    
    let acumulador = 0

    for (i=0 ; i< array.length ; i++){
        acumulador = acumulador + array[i]
    }
    
    return acumulador / array.length
}