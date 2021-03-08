require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('==============================='.cyan);
        console.log('---- Seleciona una opción ----'.blue);
        console.log('===============================\n'.cyan);

        console.log(`${'1.'.blue} Crear Tarea`);
        console.log(`${'2.'.blue} Listar Tareas`);
        console.log(`${'3.'.blue} Listar Tareas Completadas`);
        console.log(`${'4.'.blue} Listar Tareas Pendientes`);
        console.log(`${'5.'.blue} Completar Tarea(s)`);
        console.log(`${'6.'.blue} Borrar tarea`);
        console.log(`${'0.'.blue} Salir`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('\nSeleccione una opción: ', (opt) => {
            readline.close();
            resolve(opt)
        });
    })
};



const pausa = () => {
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`\nPresione ${'ENTER'.cyan} para continuar.`, (opt) => {
            readline.close();
            resolve(opt)
        });
    })
}







module.exports = {
    mostrarMenu,
    pausa
}