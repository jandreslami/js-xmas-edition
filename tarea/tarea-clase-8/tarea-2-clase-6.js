/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual 
de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


let $formulario = document.querySelector("form");

let $botonAgregar = document.querySelector("#agregar");
let $botonQuitar = document.querySelector("#quitar");
let $botonCalcular = document.querySelector("#calcular");

$botonAgregar.onclick = function () {
    let $etiquetaCampo = document.createElement("label")
    $etiquetaCampo.textContent = "Ingresar salario anual de un integrante familiar"
    $etiquetaCampo.className = "visible";

    $formulario.appendChild($etiquetaCampo);

    let $nuevoCampo = document.createElement("input")
    $nuevoCampo.className = "visible";

    $formulario.appendChild($nuevoCampo);

    quitarError();
    quitarCalculos();

    $formulario.appendChild(document.createElement("p"));


    return false
}

$botonQuitar.onclick = function () {

    quitarError();
    quitarCalculos();

    document.querySelector(".visible").remove();
    document.querySelector(".visible").remove();

    return false

}

let $textoMayorSalario = document.querySelector("#mayor-salario")
let $textoMenorSalario = document.querySelector("#menor-salario")
let $textoPromedioSalarioAnual = document.querySelector("#promedio-salario-anual")
let $textoPromedioSalarioMensual = document.querySelector("#promedio-salario-mensual")


$botonCalcular.onclick = function () {

    let $inputsSalariosAnuales = []
    let arraySalariosAnuales = []
    let acumulador = 0

    $inputsSalariosAnuales = document.querySelectorAll("input.visible")

    quitarError();


    if (!document.getElementsByTagName("label")) {
        $botonCalcular.onclick = ""
    }


    for (let i = 0; i < $inputsSalariosAnuales.length; i++) {

        if (($inputsSalariosAnuales[i].value) != 0) {

            acumulador = Number($inputsSalariosAnuales[i].value)

            arraySalariosAnuales.push(acumulador);
        }

        if (($inputsSalariosAnuales[i].value) == 0) {

            quitarError();
            quitarCalculos();
            let $mensajeError = document.createElement("label")

            $mensajeError.id = "error";
            $mensajeError.classList.add("alert", "alert-danger");

            $mensajeError.textContent = "No se puede ingresar valores en cero"
            $formulario.appendChild($mensajeError)

        }


    }

    if (!document.querySelector("#error")) {

        $textoMayorSalario.textContent = `La persona que mejor salario tiene gana ${calcularMayorNumero(arraySalariosAnuales)} por año`
        $textoMenorSalario.textContent = `La persona que peor salario tiene gana ${calcularMenorNumero(arraySalariosAnuales)} por año`
        $textoPromedioSalarioAnual.textContent = `En promedio cada integrante gana ${calcularPromedio(arraySalariosAnuales)} por año`
        $textoPromedioSalarioMensual.textContent = `En promedio cada integrante gana ${calcularPromedio(arraySalariosAnuales) / 12} por mes`

        document.querySelectorAll(".calculos").forEach(elemento => {
            elemento.classList.remove("invisible")

        });

    }
    return false
}

function quitarError() {
    if (document.querySelector("#error")) {
        document.querySelector("#error").remove();
    }

}

function quitarCalculos() {
    if (document.querySelector(".calculos")) {
        document.querySelectorAll(".calculos").forEach(elemento => { elemento.classList.add("invisible") })
    }


}

function calcularPromedio(array) {

    let acumulador = 0

    for (i = 0; i < array.length; i++) {
        acumulador = acumulador + array[i]
    }

    return acumulador / array.length
}

function calcularMayorNumero(array) {
    let acumulador = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] > acumulador) {
            acumulador = array[i]
        }
    }
    return acumulador
}

function calcularMenorNumero(array) {
    let acumulador = array[0];
    for (i = 0; i < array.length; i++) {

        if (array[i] < acumulador) {
            acumulador = array[i]
        }
    }
    return acumulador
}



