import { useState } from "react"


//Punto 02
export const PreciodeLlamada = () => {
    const [llamada, setLlamada] = useState(0)

    
    const precioLlamada = (llamada) => {
        if (llamada > 0 && llamada <= 3){
            var costoLlamada = 100;
            setPrecio('El precio de su llamada es: ' + costoLlamada + ' ' + 'pesos');
        }else if(llamada > 3){
            var minAdicional = llamada - 3;
            costoLlamada = 100 + (minAdicional*50);
            setPrecio('El precio de su llamada es: ' + costoLlamada + ' ' + 'pesos');
        }else{
            costoLlamada = 0;
            setPrecio('Su llamada no tiene costo');
        }
    }

    const [precio, setPrecio] = useState ('Precio llamada: ');

       const handleOnChange = (event) => {
            setLlamada(event.target.value)
        }

    return(
        <div>
            <h1> Ingrese los minutos en llamada</h1>
            <input
                onChange={handleOnChange}
                value={llamada}>
            </input>
            <button onClick={() => (precioLlamada(llamada))}> Convertir </button>
            <h3> {precio} </h3>
        </div>
    )
}