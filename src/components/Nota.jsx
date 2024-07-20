export function Nota({ id, tituloNota, descripcionNota, importanteNota, RemoveNota }) {
    console.log(id, tituloNota, descripcionNota, importanteNota, RemoveNota, 'dentro de nota')
    function EliminarNota() {
        console.log('La funcion EliminarNota, esta siendo accionada')
        RemoveNota(id)
    }

    if (importanteNota) {
        return (
            <div className="containerNota" style={{ border: '1px solid', backgroundColor: 'red' }}>
                <div className="containerFlex">
                    <div onClick={EliminarNota} className="XD">X</div>
                    <div className="title">El valor del titulo es igual a ----D {tituloNota}</div>
                    <div className="description">El valor de la descripcion es igual a ----D {descripcionNota}</div>
                </div>
            </div>
        )
    }

    return (
        <div className="containerNota" style={{ border: '1px solid' }}>
            <div className="containerFlex">
                <div onClick={EliminarNota} className="XD">X</div>
                <div className="title"> El valor del titulo es igual a ------D {tituloNota}</div>
                <div className="description">El valor de la descripcion es igual a -----D {descripcionNota}</div>
            </div>
        </div>
    )
}
