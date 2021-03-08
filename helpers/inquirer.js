const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.blue} Crear Tarea`
            },
            {
                value: '2',
                name: `${'2.'.blue} Listar Tarea`
            },
            {
                value: '3',
                name: `${'3.'.blue} Listar Tareas Completadas`
            },
            {
                value: '4',
                name: `${'4.'.blue} Listar Tareas Pendientes`
            },
            {
                value: '5',
                name: `${'5.'.blue} Completar Tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.blue} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.blue} Salir`
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
    console.clear();
    console.log('==============================='.cyan);
    console.log(`${'----'.blue} ${'Seleciona una opción'.white} ${'----'.blue}`);
    console.log('===============================\n'.cyan);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}

const inquirerPausa = async () => {
    await inquirer.prompt(pausado);
}

const leerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length=== 0){
                    return 'Por favor ingrese un valor';
                    
                }
                return true;
            }
        }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;
}

const inquirerTareas = async(tareas = []) => {
    const lista = [
        {
            type: 'list',
            name: 'tareas',
            message: 'Listado de tareas',
            choices:[]
        }
    ];

    tareas.forEach(tarea => {
        lista[0].choices.push({
            value: tarea.id,
            name: tarea.desc
        })
    });

    const { opcion } = await inquirer.prompt(lista);
}

module.exports = {
    inquirerMenu,
    inquirerPausa,
    leerInput,
    inquirerTareas
}