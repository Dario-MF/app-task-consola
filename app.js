const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { 
    inquirerMenu, 
    inquirerPausa,
    leerInput,
    inquirerTareas 
} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
require('colors');



const main = async () => {
    let opt = '';
    const tareas = new Tareas()
    const tareasDB = leerDB()
    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        opt = await inquirerMenu()
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.creartarea( desc);
                break;
            case '2':
                await inquirerTareas(tareas.listadoCompleto())        
                break;
            case '3':
                await inquirerTareas(tareas.listadoCompletadasOrPendientes(true))
                break;
            case '4':
                await inquirerTareas(tareas.listadoCompletadasOrPendientes(false))
                break;
           
        
            default:
                break;
        }

        guardarDB(tareas.listadoArr);



        pause = await inquirerPausa()
    } while (opt !== '0')

}

main()