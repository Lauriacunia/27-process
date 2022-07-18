require("dotenv").config();
/** Recordá que podes tener varios archivos .env y utilizarlos cuando se requieran */
// require('dotenv').config({
//     path:
//          process.env.MODO == 'dev'
//          ? path.resolve(__dirname, 'dev.env')
//          : path.resolve(__dirname, 'prod.env')
// })

module.exports = {
  PORT: process.env.PORT || 8080,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost/desafio",
};
