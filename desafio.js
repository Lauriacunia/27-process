const minimist = require("minimist");
const argumentos = minimist(process.argv.slice(2)); // se le quita el nombre de la ruta de node y el nombre de la ruta del archivo
console.log(argumentos);

/** Ingresar:
 * > node desafio.js 123 -m dev -p 8080 -d
 */

/** formatear salida 1
 *
 */
const options = {
  alias: {
    m: "mode",
    p: "port",
    d: "debug",
  },
};
const argumentos2 = minimist(process.argv.slice(2), options);
console.log(argumentos2);

//* formatear salida, agregar valores por default
const options2 = {
  alias: {
    m: "mode",
    p: "port",
    d: "debug",
  },
  default: {
    mode: "dev",
    port: 8080,
    debug: false,
  },
};
const argumentos3 = minimist(process.argv.slice(2), options2);
console.log(argumentos3);
