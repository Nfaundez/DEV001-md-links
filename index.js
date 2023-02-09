const {
  pathExists,
} = require('./funciones');


const mdLinks = (path, options) => new Promise((resolve, reject) => {
  // Existe la ruta?
  if (!pathExists(path)) {
    // No existe la ruta, rechaza la promesa
    reject(new Error('la ruta no existe'));
    reject(new Error(`La ruta ${path} no existe`));
  } else {
  };
});