// import '../css/styles.css'
import { useRef, useState } from "react";
import { Nota } from "./Nota";
import { v4 as uuidv4 } from 'uuid';

export function CreateNota() {
    // capturando las variables que se necesitan para crear una nota
    const title = useRef()
    const description = useRef()
    const chk = useRef()

    // una lista default, la cual esta destinada a guardar las futuras notas

    const [noteList, setNoteList] = useState([
        { id: uuidv4(), titulo: "Titulo 1", descripcion: "descripcion generica pt1", importante: false },
        { id: uuidv4(), titulo: "Titulo 2", descripcion: "descripcion generica pt2", importante: true },
        { id: uuidv4(), titulo: "Titulo 3", descripcion: "descripcion generica pt3", importante: false },
        { id: uuidv4(), titulo: "Titulo 4", descripcion: "descripcion generica pt4", importante: true }
    ]);

    // funcion para crear notas la cual llamara los componentes notas que requiera en el momento
    function addNota() {
        console.log('Presionando boton agregar')
        const valorTitulo = title.current.value;
        const valorDescripcion = description.current.value;
        const valorChk = chk.current.checked;
        // console.log(`Se escribieron ${valorTitulo}, ${valorDescripcion}, ${valorChk}`)

        if (valorDescripcion.trim() !== ""){
            const newNota = {
            id: uuidv4(),
            titulo: valorTitulo,
            descripcion: valorDescripcion,
            importante: valorChk
        }

        
        const newNoteList = [...noteList, newNota]
        setNoteList(newNoteList)
        
        // alert('La nota se ha agregado con exito! :D')
        } else {
            alert('El campo descripcion es obligatorio, no puede estar vacio')
        }

        
    }

// se supone que esxporto esta funcion para pode colcarla como un efecto de un evento al presionar las equis de las respectivas notas
    function RemoveNota(id) {
        setNoteList(noteList.filter(nota => nota.id !== id))
    }

    return (
        <div className="containerCreateNota">
            <div className="containerH1"><h1>Post It Simulator!</h1></div>
            
            <div className="createNota">
                <div className="inpts">
                    <input ref={title} className="titulo inpt marginLeft" type="text" placeholder="Titulo" />
                    <input ref={description} className="descripcion inpt marginLeft" type="text" placeholder="Descripcion" />
                    <div className="centrarChk"><label htmlFor=""><input ref={chk} className="checkbox inpt" type="checkbox" /> Importante!</label></div>
                </div>
                <div className="boton">
                    <button onClick={addNota}>AGREGAR</button>
                </div>
            </div>
            <div className="fichero">
                <div className="centrarContenido">
                    {
                        noteList.map(nota => (<Nota key={nota.id} id={nota.id} tituloNota={nota.titulo} descripcionNota={nota.descripcion} importanteNota={nota.importante} RemoveNota={RemoveNota} />))
                    }
                </div>
            </div>
        </div>
    )
}
