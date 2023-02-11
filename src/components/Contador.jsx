import { useState } from "react"


export const Contador = () => {

    const [valor,setValor] =useState(10);

    const logica=(numero)=>{
        setValor(valor+numero);
    }

    // console.log(state);
    // console.log(setState);

  return (
    <>
    <h3>Contador: <small>{valor}</small></h3>
    <button className="btn btn-primary"
        onClick={()=>logica(1)}
        >
        +1
    </button>
    <button className="btn btn-primary"
        onClick={()=>logica(-1)}
        >
        -1
    </button>
    </>

  )
}
