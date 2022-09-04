import { useState } from "react";

export const Comparador = () => {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [duplicado, setDuplicado] = useState(0);

    let lista = [0, 0, 0];

    const handleAgregar = () => {
        lista[0] = num1;
        lista[1] = num2;
        lista[2] = num3;
        console.log(lista)
    }

    const handleComparar = () => {
        const ordenados = lista.sort();

        for (let i = 1; i < ordenados.length; i++) {
            if (ordenados[i] === ordenados[i - 1]) {
                setDuplicado(ordenados[i])
            }
        }
    }

    return (
        <>
            <h1> Ingrese 3 números (de 1 en 1) </h1>
            <label> Número 1 </label>
            <input onChange={(e) => {setNum1(e.target.value)}}
                value={num1}></input>
            <br />
            <label> Número 2 </label>
            <input onChange={(e) => {setNum2(e.target.value)}}
                value={num2}></input>
            <br />
            <label> Número 3 </label>
            <input onChange={(e) => {setNum3(e.target.value)}}
                value={num3}></input>
                <br />
            <button onClick={() => (handleAgregar())}> Agregar </button>
            <button onClick={() => (handleComparar())}> Comparar </button>
            <h3> {duplicado} </h3>
        </>
    )
}