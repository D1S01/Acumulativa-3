
export function Nota({ id, tituloNota, descripcionNota, importanteNota, RemoveNota }) {

    function EliminarNota() {
        console.log('La funcion EliminarNota, esta siendo accionada')
        RemoveNota(id)
    }

    if (importanteNota) {
        return (
            <div className="containerNota red">

                <div className="containerFlex">
                    <div onClick={EliminarNota} className="equis">X</div>
                    <div className="title">{tituloNota}</div>
                    <div className="description">{descripcionNota}</div>
                </div>
            </div>
        )
    }

    return (

        <div className="containerNota yellow">
            <div className="containerFlex">
                <div onClick={EliminarNota} className="equis">X</div>
                <div className="title">{tituloNota}</div>
                <div className="description">{descripcionNota}</div>
            </div>
        </div>
    )
}
