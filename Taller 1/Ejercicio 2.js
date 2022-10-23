function NumDivisible(num){
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
        message = "El numero " + num + " debe tener almenos 2 digitos"
      } else if (digitos > 1) {
        let numString = num.toString();
        let arrayNumString = numString.split("");
        let arrayContenedor = [false];
        let numeroMasUno = 1;
        for (let i in arrayNumString) {
          residuo = parseInt(arrayNumString[numeroMasUno]) % parseInt(arrayNumString[i])
          result = residuo === 0 ? true : false;
          numeroMasUno++

          arrayContenedor.push(result)
        }
        arrayContenedor.pop()
        console.log(arrayContenedor);
        message = 'Este es el arreglo de resultados: \n' +arrayContenedor;
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