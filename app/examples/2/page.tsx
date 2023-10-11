
'use client';
import React, { ChangeEvent, useState } from 'react'

type TRoles = 'Client' | 'Admin';

interface IUser
{
  id:number; 
  firstName: string; 
  lastName: string; 
  picture?: string; 
  role: 'Client' | 'Admin';
}

const Example2 = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState<TRoles>('Client')
  const [terms, setTerms] = useState(false)
  const [users, setUsers] = useState<IUser[]>([]);

  const handleNameOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.currentTarget.value)
  };

  const handleLastNameOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setLastName(event.currentTarget.value)
  };

  const handleRoleOnChange = (event:ChangeEvent<HTMLSelectElement>) => {
    if(event.currentTarget.value === 'Client' || event.currentTarget.value === 'Admin'){
      setRole(event.currentTarget.value)
    }
  };

  const handleTermsOnChange = (event:ChangeEvent<HTMLInputElement>) => {
    setTerms(event.currentTarget.checked)
  };

  const handleGuardarOnClick = () => {
    console.log('--------------')
    console.log('Nombre:', firstName)
    console.log('Apellido:', lastName)
    console.log('Rol:', role)
    console.log(terms ? 'Acepto los terminos'  : 'No acepto los terminos')
    console.log('--------------')

    const newUser: IUser =
    {
      id: Date.now(),
      firstName,
      lastName,
      role, 
    };
    setUsers([...users, newUser]);
  }

  return (
    <div>
      <h1 className='text-2xl font-bold'>Capturar datos</h1>
      <div className='flex flex-col'>
        <label htmlFor="firstName">Nombre:</label>
        <input onChange={handleNameOnChange} id='firstName' type="text" value={firstName} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="lastName">Apellido:</label>
        <input onChange={handleLastNameOnChange} id='lastName' type="text" value={lastName} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="rol">Rol:</label>
        <select onChange={handleRoleOnChange} id='rol' value={role}>
          <option value='Client'>Cliente</option>
          <option value='Admin'>Administrador</option>
        </select>
      </div>
      <div  className='flex flex-row gap-1 items-center'>
        <label htmlFor="terms">Aceptar terminos y servicios</label>
        <input onChange={handleTermsOnChange} id='terms' type="checkbox" checked={terms}/>
      </div>
      <button onClick={handleGuardarOnClick}>Guardar</button>
     
      <h2 className='text-2xl font-bold mt-4'>Lista de Usuarios</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.firstName} {user.lastName} - {user.role}</li>
        ))}
      </ul>
    </div>
  )
}

export default Example2