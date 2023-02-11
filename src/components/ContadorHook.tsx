import { useCounter } from '../hooks/useCounter';

export const ContadorHook = () => {

    const {valor,logica}=useCounter();

  return (
    <>
    <h3>Contador: <small>{valor}</small></h3>
    <button className="btn btn-primary"
        onClick={()=>logica(+3)}
        >
        +1
    </button>
    <button className="btn btn-primary"
        onClick={()=>logica(-5)}
        >
        -1
    </button>
    </>
  )
}
