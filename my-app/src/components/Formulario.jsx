import React, { useState } from 'react'

const Formulario = () => {
  
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    return (
    <>
    <h1>Formulario</h1>
    <form className='row'>
        <div className='col-md-3'>
        <input 
            type="text" 
            placeholder='Ingrese Nombre'
            className='form-control'
        />
        </div>

        <div className='col-md-3'>
        <input 
            type="text" 
            placeholder='Ingrese Apellido'
            className='form-control' 
        />
        </div>

        <div className='col-md-3'>
        <button
            className='btn btn-primary'
            type='submit'
        >
            Enviar
        </button>
        </div>
    </form>
    </>
  )
}

export default Formulario