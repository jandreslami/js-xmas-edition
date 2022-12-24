function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}


function probarValidarCiudad (){
    console.assert(validarCiudad("") === "Tenés que seleccionar alguna ciudad", 

        "ValidarCiudad no valida que el usuario haya seleccionado alguna ciudad")

}

function probarValidarDescripcionRegalo () {
    console.assert(
        validarDescripcionRegalo("235555555555555555555555555523555555555555555555555") ===
        "La descripción del regalo puede tener como máximo 50 caracteres" ,

        "validarDescripcionRegalo no validó que la descripción tenga un máximo de 50 caracteres"

    )
}

probarValidarCiudad ();
probarValidarDescripcionRegalo ();
