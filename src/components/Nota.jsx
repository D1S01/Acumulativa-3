
export function Nota({tituloNota, descripcionNota, importanteNota}){
    // return (
    //     <div className="containerNota" style={{border:'1px solid'}}>
    //         <div className="containerFlex">
    //             <div className="XD">X</div>
    //             <div className="title">Aqui ira uno de eseos elemntos verdes raros que en teoria llamaran a una funciona a vivir aqui{}</div>
    //             <div className="description">Lo mismo de arriba, pero abajo xd</div>
    //         </div>
    //     </div>
    // ) k no se note que estoy hacendto esto a las 5 am 
    console.log(tituloNota, descripcionNota, importanteNota, 'dentro de Nota')

    function RemoveNota(){
        console.log('La funcion RemoveNota, esta siendo accionada')
        
    }

    if (importanteNota){
        return(
            <div className="containerNota" style={{border:'1px solid', backgroundColor:'red'}}>
                <div className="containerFlex">
                    <div onClick={RemoveNota} className="XD">X</div>
                    <div className="title">Aqui ira uno de eseos elemntos verdes raros que en teoria llamaran a una funciona a vivir aqui ----D {tituloNota}</div>
                    <div className="description">Lo mismo de arriba, pero abajo xd ----D {descripcionNota} </div>
                </div>
            </div>
        )
    }

    return(
        <div className="containerNota" style={{border:'1px solid'}}>
            <div className="containerFlex">
                <div onClick={RemoveNota} className="XD">X</div>
                <div className="title">Aqui ira uno de eseos elemntos verdes raros que en teoria llamaran a una funciona a vivir aqui ------D {tituloNota} </div>
                <div className="description">Lo mismo de arriba, pero abajo xd -----D {descripcionNota} </div>
            </div>
        </div>
    )
}