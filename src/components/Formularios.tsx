import React from 'react'
import { useState } from 'react';
import { useForm } from '../hooks/useForm';

export const Formularios = () => {

   const {state,onChange}= useForm({
    email:'te@t.com',
    password:'123456'
    });

  return (
    <>
        <h3>Formulario</h3>

        <input type="text"
        className='form-control'
        placeholder='Email' 
        value={state.email}
        onChange={({target})=>onChange(target.value,'email')}
        />

<input type="text"
        className='form-control mt-2 mb-2'
        placeholder='Password'
        value={state.password} 
        onChange={({target})=>onChange(target.value,'password')}/>
   
   
   <code>
    <pre>
        {JSON.stringify(state,null,2)}
    </pre>
   </code>
   
    </>
    
  )


}
