const fs = require('fs')
const colors = require('colors')
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`)
            return
        }
        if (!Number(limite)) {
            console.log(`El valor introducido limite: ${limite} no es un numero`)
            return
        }
        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        fs.writeFile(`tablas/tabal-${base}-al ${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
        });
    })
}

let listarTabla = (base, limite = 10) => {
    console.log('====================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('====================='.green);
    if (!Number(base)) {
        console.log(`El valor introducido base: ${base} no es un numero`)
        return
    }
    if (!Number(limite)) {
        console.log(`El valor introducido limite: ${limite} no es un numero`)
        return
    }
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}