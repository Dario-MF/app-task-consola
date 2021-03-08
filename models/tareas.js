const Tarea = require("./tarea");
require('colors')



class Tareas {
    _listado = {};

    get listadoArr (){
        const listado = [];

        Object.keys(this._listado).forEach(key => listado.push(this._listado[key]))
        return listado;
    }
    
    constructor(){
        this._listado = {};
    }

    cargarTareasFromArray ( tareas = []) {
        tareas.forEach(tarea => this._listado[tarea.id] = tarea);
    }

    creartarea( desc = '') {
        const tarea = new Tarea(desc);

        this._listado[tarea.id]= tarea;
    }

    listadoCompleto() {
        const listadoFormat = [];

        this.listadoArr.map((tarea, index) => {

            let completa = 'Pendiente'.red
            if(tarea.completadoEn){
                completa = 'Completada'.green
            }
            listadoFormat.push(
                {
                    id: tarea.id,
                    desc:`${String(index + 1 + '.').blue} ${tarea.desc} => ${completa}`,
                    completadoEn: tarea.completadoEn
                }
            )
        })
        return listadoFormat;
    }
    listadoCompletadasOrPendientes( completadas = true ) {
        const listadoFormat = [];
        let contador = 0;
        this.listadoArr.map(tarea => {

            let completa = (tarea.completadoEn) ?'Completada'.green :'Pendiente'.red ;
            
            if(completadas && tarea.completadoEn){
                contador += 1;
                listadoFormat.push(
                    {
                        id: tarea.id,
                        desc:`${(contador + '.').blue} ${tarea.desc} => ${completa}`,
                        completadoEn: tarea.completadoEn
                    }
                )
            }else if (!completadas && !tarea.completadoEn){
                contador += 1;
                listadoFormat.push(
                    {
                        id: tarea.id,
                        desc:`${(contador + '.').blue} ${tarea.desc} => ${completa}`,
                        completadoEn: tarea.completadoEn
                    }
                )
            }
            
        })
        return listadoFormat;
    }
}

module.exports= Tareas;