import React, {useState, useEffect} from "react";

const ComponenteLocalStorage =  () => {

    const [texto, setTexto] = useState(() => {
        return localStorage.getItem("texto") 
    })

    const ManejarCambio = (event: any) => {
        const nuevoTexto = event.target.value
        setTexto(nuevoTexto)
        localStorage.setItem("texto", nuevoTexto)   
    }

    return(
        <div>
            <h1>Ejemplo de LocalStorage</h1>
            <input type="text"  onChange={ManejarCambio} placeholder="Escribe algo"/>
            <p>EL texto guradado es {texto}</p>
        </div>
    )
}

export default ComponenteLocalStorage