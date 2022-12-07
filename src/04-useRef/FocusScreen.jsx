import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef)

    const onButtonClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }

  return (
    <>
        <h1>Focus screen</h1> 
        <hr />

        <input 
            ref={ inputRef }
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control" />

        <button 
            className="btn btn-primary mt-2"
            onClick={onButtonClick}>
            Set focus
        </button>
    </>
  )
}
