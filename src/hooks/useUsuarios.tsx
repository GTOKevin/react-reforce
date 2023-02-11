import { useState, useRef, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqRespListado, User } from '../interfaces/reqRes.interface';

export const useUsuarios = () => {
  
    const [usuarios, setUsuarios] = useState<User[]>([]);

    const paginaRef = useRef(0)


    useEffect(() => {
        cargarUsuarios();
    }, [])


const cargarUsuarios=async()=>{
   const resp = await reqResApi.get<ReqRespListado>('/users',
   {
    params:{
            page:paginaRef.current
           }
    });
    if(resp.data.data.length>0){
        setUsuarios(resp.data.data);
    }else{
        paginaRef.current --
        alert('no se encontrarón mas registros')
    }

}

const paginaSiguiente=async()=>{
    paginaRef.current ++;
    cargarUsuarios();
}

const paginaAnterior= async()=>{
    if(paginaRef.current>1){
    paginaRef.current --;
    cargarUsuarios();
    }
}

return {
    usuarios,
    paginaAnterior,
    paginaSiguiente}

}
