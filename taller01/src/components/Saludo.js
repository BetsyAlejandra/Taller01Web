import { useState } from "react";

export const Saludo = () => {

    const [horaM, setHoraM] = useState('')

    const handleSaludar = (horaM) => {
        if (horaM >= 0 && horaM < 12) {
            setSaludo(' Deja que la vida te sorprenda. ¡Buenos días!');
        } else if (horaM >= 12 && horaM < 18) {
            setSaludo('Espero que hayas tenido un día maravilloso y que las horas que quedan sean aún mejor, ¡Buenas tardes!');
        } else if(horaM >= 18 && horaM < 24){
            setSaludo('Te deseo una linda noche y un bello despertar. ¡Buenas noches!');
        } else {
            setSaludo('Hora no permitida. Intentalo de Nuevo.')
        }
    }

    const handleChangeSaludo = (event) => {
        setHoraM(event.target.value)
    }

    const [saludo, setSaludo] = useState('')

return (
    <>
    <h1> Digite la hora en Horario Militar </h1>
    <input onChange={handleChangeSaludo}
    value={horaM}></input>
    <button onClick={() => (handleSaludar(horaM))}> Enviar </button>
    <h1> {saludo} </h1>
    </>
)
}