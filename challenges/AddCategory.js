import { useState } from "react";

export const AddCategory = ({onAddCategory}) => {

    const [category, setCategory] = useState('')


    const onSetCategory = (evt) => {
        setCategory(evt.target.value)
    }

    const fn = () => {
        onAddCategory (category)
    }

    return(
        <>
        <h1> GifExpert </h1>
        <input type="text" value={category}
        onChange={(event) => onSetCategory (event)} />
        <button onClick={() => fn()}> AddCategory</button>
        </>
    )
}