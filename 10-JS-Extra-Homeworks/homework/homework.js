// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = [] 
    for (letra in objeto) {
      matriz.push([letra, objeto[letra]]);
          }
     
  return matriz;
}
  let objeto = {
  D: 1,
  B: 2,
  C: 3
  }

console.log(deObjetoAmatriz(objeto))

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  let numbe = {}
  for (let i = 0; i < string.length; i++) {
    if (Object.keys(numbe).includes(string[i])) {
      numbe[string[i]] = numbe[string[i]] + 1 
    continue
    } 
    numbe[string[i]] = 1
  } 
  return numbe
}

let a = "adsjfdsfsfjsdjfhacabcsbajda"
console.log(numberOfCharacters(a))

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
let minusculas = []
let mayusculas = []
for (let i = 0; i < s.length; i++) {
 if (s[i] === s[i].toUpperCase()) {
   mayusculas = mayusculas + s[i] 

 } else {
  minusculas = minusculas + s[i]
 }
}
 return mayusculas + minusculas
}
let s = "soyHENRY"
console.log(capToFront(s))

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  
  var espejo = str.split(" ")
  var arraynuevo =espejo.map(function(resul) {
   return resul.split("").reverse().join("");
  })
  return arraynuevo.join(" ");
 
 }

 let str = "The Henry Challenge is close!"
 console.log(asAmirror(str))


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  let numeroaletra = numero.toString();
  let resultado = numeroaletra.split("").reverse().join("");
  if(numeroaletra === resultado) {
    return "Es capicua";
  } else {
  return "No es capicua";
  }
}

let numero = 567365
 console.log(capicua(numero))

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
   
  let nuevoarray = "";
  for (let i = 0; i < cadena.length; i++) {
    if(cadena[i] === "a" || cadena[i] === "b" || cadena[i] === "c") {
      continue;
    }  else {
      nuevoarray += cadena[i];
    
    }
  }
    return nuevoarray; 
  

}
let cadena = "abcefgh"
 console.log(deleteAbc(cadena))

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  return arr.sort(function(a,b) {
  return a.length - b.length
  })
}
let arr = ["You", "are", "beautiful", "looking"]
 console.log(sortArray(arr))


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  
  let interseccion = [];
  for (var i = 0; i < arreglo1.length; i++) {
  for (var j = 0; j < arreglo2.length; j++) {
    if(arreglo1[i] === arreglo2[j]) {
      interseccion.push(arreglo1[i]);
    }
  }
  } return interseccion;
}

let arreglo1 = [1, 2 , 3]
let arreglo2 = [1, 5, 8 , 3]
console.log (buscoInterseccion(arreglo1,arreglo2))

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

