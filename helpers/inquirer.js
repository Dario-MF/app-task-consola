const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tarea'
            },
            {
                value: '3',
                name: '3. Listar Tareas Completadas'
            },
            {
                value: '4',
                name: '4. Listar Tareas Pendientes'
            },
            {
                value: '5',
                name: '5. Completar Tarea(s)'
            },
            {
                value: '1',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },
        ]
    }
];

const pausado = [
    {
        type: 'input',
        name: 'pausa',
        message: `Presione ${'ENTER'.cyan} para continuar.`
    }
]


const inquirerMenu = async () => {
    //console.clear();
    console.log('==============================='.cyan);
    console.log('---- Seleciona una opción ----'.blue);
    console.log('===============================\n'.cyan);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}

const inquirerPausa = async () => {
    await inquirer.prompt(pausado);
}


module.exports = {
    inquirerMenu,
    inquirerPausa
}