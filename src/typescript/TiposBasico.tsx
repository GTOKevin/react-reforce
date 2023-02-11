
export const TiposBasico = () => {
    const nombre : string='String';
    const numero : number=2;
    const estado:boolean=true;
    const arregloStr:string[]=[];
    const arregloNum:number[]=[];
  
    arregloStr.push('1');
    arregloNum.push(2);
  return (
    <>
    
    <h3>Tipos básicos</h3>
    
    <p>Nombre {nombre}</p>
    <p>Numero {numero}</p>
    <p>Estado {estado}</p>

    {
        arregloStr.join(', ')
    }

    {
        arregloNum.join(',')
    }
    </>
    )
}
