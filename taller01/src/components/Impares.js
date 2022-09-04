import { useState } from "react";

export const Impares = () => {

    const [impar, setImpar] = useState(0)
    const [num, setNum] = useState ([])
    var imparAux = [];

    const handleNumeroImpar = () => {
        for(let i=0; i <= num; i++){
            if (!(i % 2 === 0)) {
                imparAux.push(i);
            }
        }
        setImpar(imparAux + " ");
    }

    const handleNumeroP = (event) => {
        setNum(event.target.value)
    }



    return (
        <>
            <h1> Ingrese un Número </h1>
            <input onChange={handleNumeroP}
                value={num}></input>
                <br/>
            <button onClick={handleNumeroImpar}> Mostrar </button>
            <h2> {impar} </h2>
        </>
    )
}