
import { useUsuarios } from '../hooks/useUsuarios';
import { User } from '../interfaces/reqRes.interface';

export const Usuarios = () => {

const {usuarios,paginaAnterior,paginaSiguiente}=useUsuarios();
  
const renderItem=(usuario:User)=>{
    return (
        <tr key={usuario.id}>
            <th><img 
            src={usuario.avatar} alt={usuario.first_name}
            style={{
                width:35,
                borderRadius:100
            }}
            ></img></th>
            <th>{usuario.first_name}</th>
            <th>{usuario.email}</th>
        </tr>

    )               

}

  return (
    <>
        <h3>Usuarios</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map(usuario=> renderItem(usuario))
                }
            </tbody>
        </table>
        <button
        className='btn btn-primary'
        onClick={paginaAnterior}
        >
            Anterior
        </button>

        &nsbp;

        <button
        className='btn btn-primary'
        onClick={paginaSiguiente}
        >
            Siguiente
        </button>
    </>

  )
}
