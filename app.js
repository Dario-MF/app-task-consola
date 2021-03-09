const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { 
    inquirerMenu, 
    inquirerPausa,
    leerInput,
    inquirerTareas, 
    inquirerTareasBorrar,
    confirmar,
    inquirerTareasCheckList
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
            //Crear tareas
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.creartarea( desc);
                break;
            // Listado tareas completo
            case '2':
                await inquirerTareas(tareas.listadoCompleto())        
                break;
            // Listado tareas completadas.
            case '3':
                await inquirerTareas(tareas.listadoCompletadasOrPendientes(true))
                break;
            // Listado tareas pendientes.
            case '4':
                await inquirerTareas(tareas.listadoCompletadasOrPendientes(false))
                break;
            // Completar tareas.
            case '5':
                const ids = await inquirerTareasCheckList(tareas.listadoArr);
                tareas.completarTarea(ids);
                break;
            // Borrar tareas
            case '6':
                const id = await inquirerTareasBorrar(tareas.listadoArr);

                if(id !== '0'){
                    const confirmDelete = await confirmar('¿Esta seguro de borrar la tarea?');
                    if(confirmDelete){
                        tareas.borrarTarea(id);
                    }
                }

                break;
            default:
                break;
        }
        // Guardado en DB JSON.
        guardarDB(tareas.listadoArr);

        pause = await inquirerPausa()
    } while (opt !== '0')

}

main()