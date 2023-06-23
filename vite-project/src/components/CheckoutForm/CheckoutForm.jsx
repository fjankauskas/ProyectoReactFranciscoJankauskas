import './checkoutForm.css'
import { useState } from 'react'

const checkoutForm = ({ onConfirm }) => {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')

    const handleConfirm = (event) =>{
        event.preventDefault()
        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div>
            <form onSubmit={handleConfirm} className='checkoutForm'>
                <label className="label">Nombre
                <input className="input" type="text" value={name} onChange={({target})=> setName(target.value)}/>
                </label>
                <label className="label">Numero De Telefono
                <input className="input" type="text" value={phone} onChange={({target})=> setPhone(target.value)}/>
                </label>
                <label className="label">Email
                <input className="input" type="text" value={email} onChange={({target})=> setEmail(target.value)}/>
                </label>
                <div className='label'>
                    <button type='submit' className='btn btn-primary'>Enviar Formulario</button>
                </div>
            </form>
        </div>
    )
}

export default checkoutForm