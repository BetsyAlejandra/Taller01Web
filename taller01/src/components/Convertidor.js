import { useState } from "react";


// Punto 01
export const Convertidor = () => {
    const [time, setTime] = useState('')

    const handleTime = (time) => {
        var hour = Math.floor(time / 3600);
        hour = (hour < 10) ? '0' + hour : hour;
        var minute = Math.floor((time / 60) % 60);
        minute = (minute < 10) ? '0' + minute : minute;
        var second = time % 60;
        second = (second < 10) ? '0' + second : second;
        setHora( hour + ':' + minute + ':' + second);
    }

    const [hora, setHora] = useState('HH:MM:SS')

    const handleInputChange = (event) => {
        setTime(event.target.value)
    }

    return (

        <div>
            <h1> Ingrese los segundos</h1>
            <input
                onChange={handleInputChange}
                value={time}>
            </input>
            <button onClick={() => handleTime(time)}> Convertir </button>
            <h3> {hora} </h3>
        </div>

    )
}