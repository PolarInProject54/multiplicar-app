// required's
const { archiveMake, listarTabla } = require('./multiplicar/multiplicar');
let argv = require('./config/yargs').argv;
let colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite, true);
        console.log('listar'.blue);
        break;
    case 'crear':
        archiveMake(argv.base, argv.limite).then(response => { console.log(response) }).catch(err => { console.log(err) });
        break;
}