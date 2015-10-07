"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var temp = original.value; //almacena en el, la variable temp el valor original.
  var conversor = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;
  
  var m = temp.match(conversor);
  
  if (m) {
    var num = m[1]; // lo que cogio los parentesis
    var type = m[2]; // lo que cogio los segundos parentesis si son celcius o farengeis
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";  //no es una entrada valida
  }
}