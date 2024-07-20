/** Componente para preparar render en index */
// import { MyPlaylist } from "./components/MyPlaylist"
import { CreateNota } from "./components/CreateNota";

function App(){
    // return <MyPlaylist />
    console.log('saludando desde consola')

    // return (
    //     <div className="container">
    //         <h1>This is a a testing title</h1>
    //         <p>
    //             Until i figure out how to do This, im gonna be testing in this page
    //         </p>
    //         <form action="">
    //             <label htmlFor="texto">is this a text input?: <input id="texto" type="text" /></label>
    //             <input type="checkbox" /> yes it is! <input type="checkbox" /> no it isn't!
    //         </form>
    //     </div>
        
    // )
    return <CreateNota />
}

export { App };