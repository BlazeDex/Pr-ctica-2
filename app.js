function greet() {
    console.log(`Hola`);
}
 greet(); //Invocando la función.


//Functions as parameter.
 function logGreeting(fn) {
    fn();
 } 
 logGreeting(greet);
//Estamos pasando la función greet como parámetro e invocandola con el nombre del argumento fn.

//Function expression.
let greetMe = function () { 
    console.log(`Hello from the function expression`);
}
//Señalamos que nuestro argumento 'greetMe' es una función, debido a que la introducimos con un 'let'.
greetMe();
logGreeting(greetMe);


// Arrow functions //

// Refactor para la función greet()
let upGreet = () => console.log(`Hola`);
//Se escribe de esta forma solamente si tenemos solamente una línea de código.
//No es necesario agregar las llaves ni el return.
upGreet(); //Invocando la función.

//Refactor para la funciónn logGreeting()
let upLogGreeting = (fn) => fn();
// Utilizamos los mismos principios de la arrow function anterior.
upLogGreeting(upGreet);

//Refactor greetMe()
let upGreetMe = () => console.log(`Hello from the function expression`);
//Al igual que las dos anteriores no es necesario agregar las llaves debido a que es sólo una línea.
upGreetMe();
upLogGreeting(upGreetMe); //Podemos invocar upGreetMe mediante upLogGreeting.

//Diferenciando una function de una arrow function.
function saludo(nombre, tratamiento) {
    console.log(`Hola ${tratamiento} ${nombre}`);    
}
saludo('Alan', 'sr.');

let saludo2 = (nombre, tratamiento) => console.log(`Hola ${tratamiento} ${nombre}`);
saludo2('Alan', 'sr.');
//Podemos observar que evitamos tener líneas de código innecesarias.

//Otros ejemplos

 let x = 2;
 console.log('Hola' + x + 'veces'); //Utilizando comillas tradicionales.
 console.log(`Hola ${x} veces`); //Utilizando backticks.
 //No se recomienda escribir código con las comillas tradicionales.
 //Es más profesional y eficiente utilizar las backticks.

 let cuadrado  = (x) => x*x; //Si es una sola línea no se necesita el return.
 console.log(`${cuadrado(x)}`); //Imprimiendo el cuadrado del número asignado a 'x'.
 console.log(`${cuadrado(10)}`); //Imprimiendo el cuadrado de 10;

// Podemos utilizar logGreeting de dos maneras, mientras que la función sea válida.
 logGreeting(function(){console.log(`Hola`)}); // Versión 1.
 logGreeting(() => {console.log(`Hola`);}) // Versión 2.

 let mensaje = () => {console.log(`Hola`)};
 logGreeting(mensaje); //Imoprimiendo el resultado de la función 'mensaje'.