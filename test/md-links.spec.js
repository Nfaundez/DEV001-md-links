const { mdLinks } = require('../index.js');



describe('mdLinks', () => {

  it('should...', () => {
   console.log('FIX ME!');
  });
  //it('debe devolver una promesa', () => {
   // expect(mdLinks()).toBe(typeof Promise);
 // });
  it('debe rechazar promesa cuando path no existe', () => {
    return mdLinks('/este/path/noexiste.md').catch((error) => {
     expect(error).toBe('Esta ruta no existe')
    });
  });
      


});
