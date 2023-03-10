import { useState } from 'react';

export const useForm =<T extends Object> (formulario:T) => {

    const [state, setformulario] = useState(formulario)

    const onChange=( value:string,campo:keyof T )=>{
        setformulario({
            ...state,
            [campo]:value
        })
    }

    return {
        ...state,
        state,
        onChange
    }

}
