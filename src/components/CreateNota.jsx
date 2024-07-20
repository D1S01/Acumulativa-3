import { useRef, useState } from "react";


export function CreateNota(){
    // capturando las variables que se necesitan para crear una nota

    const title= useRef()
    const description = useRef()
    const chk = useRef()

    // una lista default, la cual esta destinada a guardar las futuras notas

    const [noteList, setNotelist]=useState([
        {titulo:"Titulo 1", descripcion:"descripcion generica pt1", importante:false},
        {titulo:"Titulo 2", descripcion:"descripcion generica pt2", importante:true},
        {titulo:"Titulo 3", descripcion:"descripcion generica pt3", importante:false},
        {titulo:"Titulo 4", descripcion:"descripcion generica pt4", importante:true}
    ]);

    // funcion para crear notas la cual llamara los componentes notas que requiera en el momento
    function addNota(){
        console.log('Presionando boton agregar')
        const valorTitulo = title.current.value;
        const valorDescripcion = description.current.value;
        const valorChk = chk.current.checked;
        console.log(`Se escribieron ${valorTitulo}, ${valorDescripcion}, ${valorChk}`)
        const newNota = {
            titulo:valorTitulo,
            descripcion:valorDescripcion,
            importante:valorChk
        }

        const newNoteList = [...noteList, newNota]
        setNotelist(newNoteList)

        alert("La nota se ha agregado con exito :D")
    }
    // se supone que esxporto esta funcion para pode colcarla como un efecto de un evento al presionar las equis de las respectivas notas

    // export function RemoveNota(){
    //     const.
    // }

}