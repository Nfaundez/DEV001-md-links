const {
  pathExists, 
  absolutePath,
  fileMd,
} = require('./funciones');

// lo hare al reves, en los if iran los rechazos con el ! y en el else iran los aciertos.
const mdLinks = (path, options) => new Promise((resolve, reject) => {
  // Existe la ruta?
  if (!pathExists(path)) {
    // No existe la ruta, rechaza la promesa
    reject(new Error('Esta ruta no existe'));
  } else {
    // La ruta existe. Es absoluta o relativa?
    console.log('Esta ruta sí existe');
    const pathAbsolute = absolutePath(path);
    // Es un archivo de tipo .md?
    if (!fileMd(pathAbsolute)) {
      reject(new Error('Este archivo no es .md'));
    } else {
      // El archivo contiene links?
      console.log('este archivo .md');
    }
  }
});

module.exports = {
mdLinks
};