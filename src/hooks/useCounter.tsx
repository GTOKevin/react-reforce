import { useState } from "react"

export const useCounter = (valorInicial:number=5) => {

    const [valor, setValor] = useState(valorInicial)

    const logica=(numero:number)=>{
        if(valor+numero<0)return;
        setValor(valor+numero);
    }

    return{
        valor,
        logica
    }

}
