"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result1;
  var result2;
  var temp = original.value; //almacena en el, la variable temp el valor original.
  var conversor = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])/;
  
  var m = temp.match(conversor);
  
  if (m) {
    var num = m[1]; // lo que cogio los parentesis
    var type = m[2]; // lo que cogio los segundos parentesis si son celcius o farengeis
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result1 = (num * 9/5)+32;
      result1 = result1.toFixed(1)+" Farenheit"
      result2 = num + 273.15;
      result2 = result2.toFixed(1)+" Kelvin"
    }
    else if (type == 'f' || type == 'F'){
      result1 = (num - 32)*5/9;
      result1 = result1.toFixed(1)+" Celsius"
      result2 = ((num - 32)*5/9) + 273.15;
      result2 = result2.toFixed(1)+" Kelvin"
    }
    else{
      result1 = num - 273.15;
      result1 = result1.toFixed(1)+" Celsius"
      result2 = (num * 9/5) - 459.67;
      result2 = result2.toFixed(1)+" Farenheit"
    }
    converted1.innerHTML = result1;
    converted2.innerHTML = result2;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";  //no es una entrada valida
  }
}