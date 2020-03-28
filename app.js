//requireds
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const { argv } = require('./config/yargs')
const colors = require('colors/safe')
let comando = argv._[0]
switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)), e => {
                console.log(e);
            })
        console.log('crear');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}