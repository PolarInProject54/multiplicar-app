const fs = require('fs');
let listarTabla = (base, limite) => {
    archiveMake(base, limite, true);
}

let archiveMake = (number, limite = 10, list = false) => {

    let base = number;
    var table = '';
    for (var i = 1; i <= limite; i++) {
        table += `${base} * ${i} = ${base * i} \n`;
    }
    if (list === false) {
        return new Promise((resolve, reject) => {

            if (!Number(number)) {
                return reject({ message: 'Ingresa por favor un numero valido', send: number });
            } else {
                fs.writeFile(`tables/table-${ base }.txt`, table, (err) => {
                    if (err) throw err;

                    return resolve('Archivo creado:' + ` table-${base}.txt`.green)
                });
            }
        });
    } else {
        console.log(`---- Tabla del ${base} ----`.green)
        console.log(table);
    }
}
module.exports = {
    archiveMake,
    listarTabla
}