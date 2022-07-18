const minimist = require("minimist");
const argumentos = minimist(process.argv.slice(2)); // se le quita el nombre de la ruta de node y el nombre de la ruta del archivo
console.log(argumentos);

/**Puedo agregar argumento como key-value
 * > node minimist.js --nombre=lau --year=2022
 * los dos puntos pueden omitirse
 * */

/**los argumentos sueltos los agrega en el array
 *
 * > node minimist.js lau coderhouse 2022
 */
console.log(argumentos._);
console.log(argumentos.nombre);
const options = { alias: { nombre: "name" } };
const argumentos2 = minimist(process.argv.slice(2), options);
console.log(argumentos2);
