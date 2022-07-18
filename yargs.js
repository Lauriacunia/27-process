const yargs = require("yargs");
console.log(yargs.argv);

/** los argumentos 'sueltos' estan dentro de un array
 *  y los argumentos 'key-value' estan dentro de un objeto
 * 
 * ❯ node yargs.js 123 -m dev -p 8080
     { _: [ 123 ], m: 'dev', p: 8080, '$0': 'yargs.js' }
 */

/**Entre el yargs y el .argv puedo agregar alias y valores default */
const args = yargs
  .alias({ m: "mode", p: "port", d: "debug" })
  .default({ m: "dev", p: 8080, d: false }).argv;

console.log(args);
