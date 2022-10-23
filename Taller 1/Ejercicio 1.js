function SuperPar(num) {
  let message;
  //Condicional para saber si lo que se ingreso fueron numeros
  if (typeof num === "number") {
    //Se valida que el numero ingresado no sea 0
    if (num !== 0) {
      //Si limpia por cualquier espacio
      num.toString().trim;
      let digitos = num.toString().length; //vemos la cantidad de digitos
      let residuo; //Se crea variable donde se alamacenara el residuo
      if (digitos === 1) {
        residuo = num % 2;
        residuo === 0
          ? (message = "El numero " + num + " es ¡SUPER PAR!")
          : (message = "El numero " + num + " no es super par");
      } else if (digitos > 1) {
        let numString = num.toString();
        let arrayNumString = numString.split("");
        let nuevoNumAcumulado = 0;
        for (let i in arrayNumString) {
          nuevoNumAcumulado += parseInt(arrayNumString[i]);
        }
        console.log(nuevoNumAcumulado);
        residuo = nuevoNumAcumulado % 2;
        residuo === 0
          ? (message = "El numero " + num + " es ¡SUPER PAR!")
          : (message = "El numero " + num + " no es super par");
      } else {
        message = "Debe ingresar algun numero";
      }
    } else {
      message = "Debe ingresar solamente numeros diferentes a 0";
    }
  } else {
    message = "Debe ingresar solamente numeros";
  }

  return alert(message);
}
