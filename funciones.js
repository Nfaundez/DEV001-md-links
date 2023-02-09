const fs = require('fs');
const path = require('path');
// el path existe?
// .existsSync
const pathExists = (route) => fs.existsSync(route);
// función que revisa si la ruta es absoluta, si no, la transforma a una.
// .isAbsolute ve si es absoluta; .resolve la transforma de no serlo.
// Operador ternario condition ? true : false
const absolutePath = (route) => (path.isAbsolute(route) ? route : path.resolve(route));
// función que revisa si el archivo es de tipo .md
// .extname devuelve la extención del archivo.
const fileMd = (pathAbsolute) => {
    const filePath = path.extname(pathAbsolute);
    if (filePath === '.md') {
        return true;
    } return false;
};


module.exports = {
    pathExists,
    absolutePath,
    fileMd,
  };


  

