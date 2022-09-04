import { useState } from "react";

export const Salario = () => {
    const [salario, setSalario] = useState(0);
    const [salarioAux, setSalarioAux] = useState(0);
    const [mensaje, setMensaje] = useState('');

    const handleAgregarSalario = () => {
        setSalario([...salario, salarioAux]);
        console.log(salario);
        if(salario.length <= 10){
            setMensaje ('Error, Hacen falta los salarios.')
        }else{
            setMensaje('Los salarios son: ' + salario)
        }
    }

    const handleSalario = (event) => {
        setSalarioAux(event.target.value);
    }
    return(
        <>
        <label> Salario </label> <br/>
        <input onChange={handleSalario}
        value={salarioAux}> </input>
        <br/>
        <button onClick={handleAgregarSalario}> Agregar </button>
        <h2> {mensaje} </h2>
        </>
    )
}