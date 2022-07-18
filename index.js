/**
 * Ingreso 3 argumentos en la consola: lau, coderhouse, y 2022
 * > node index.js lau codehouse 2022 */

/** Se guardan en el objeto process */
console.log(process);
/** Imprimo esos argumentos */
console.log(process.argv);
// la posicion 0 es el nombre de la ruta de node
// la posicion 1 es el nombre de la ruta del archivo
// la posicion 2 es el primer argumento y asi sucesivamente

/**  0 '/.nvm/versions/node/v16.15.1/bin/node',
     1 '/coder/clases/27-process/index.js',
     2 'lau',
     3 'coderhouse',
     4 '2022'
] */
