// function greet() {
//     console.log(`Hola`);
// }
//  greet(); //invoke

let greet = () => console.log(`Hola`); //---> Solamente si es una sola línea.


//Functions as parameter.
 function logGreeting(fn) {
    fn();
 }
 logGreeting(greet);
// Estamos pasando la función greet como parámetro e invocandola con el nombre del argumento fn.

 let x = 2;
 console.log('Hola' + x + 'veces');
 console.log(`Hola ${x} veces`);

 let cuadrado  = (x) => x+x; // ---> Si es una sola línea no se necesita el return.
 console.log(`${cuadrado(x)}`);

// Podemos utilizar logGreeting de dos maneras, mientras que la función sea válida.
 logGreeting(function(){console.log(`Hola`)}); // Versión 1.
 logGreeting(() => {console.log(`Hola`);}) // Versión 2.

 let mensaje = () => {console.log(`Hola`)};
 logGreeting(mensaje);

// function expression
let greetMe = function () {
    console.log(`Hello from the functionm expression`);
}