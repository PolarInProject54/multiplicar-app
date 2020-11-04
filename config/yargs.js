let opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};
const argv = require('yargs').command('listar', 'lista una tabla de multiplicar', opts).command('crear', 'crea una tabla en un archivo.txt', opts).help().argv;

module.exports = {
    argv
}