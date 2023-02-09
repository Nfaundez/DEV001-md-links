const {
    pathExists, 
  } = require('../funciones');

  // metodo process.cwd = current working directory
//const tryPathAbsolute = `${process.cwd()}`;


describe('pathExists', () => {
  it('debe retornar true si existe el archivo', () => {
    pathExists('index.js');
    expect(pathExists('index.js')).toEqual(true);
  });
  it('debe retornar false si no existe el archivo', () => {
    pathExists('./fallaste.js');
    expect(pathExists('./fallaste.js')).toEqual(false);
  });
});
