import React from 'react'
import validate from './validation.js'
import './Form.modules.css'
const Form = ({login}) => {
    const [userData, setUserData] = React.useState({ username: "", password: "" })
    const [errors, setErrors] = React.useState({  }) 

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!errors.username & !errors.password){
            login(userData)
            setUserData({ username: "", password: "" })
        }else{
            alert('compruebe los campos')
        }
    }



        const handleChange = (e) => {
            setErrors(validate({ ...userData, [e.target.name]: e.target.value })) 
            setUserData({ ...userData, [e.target.name]: e.target.value })
        }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div>
                    <label >Username:</label>
                    <input className={errors.username && 'warning'} name='username' placeholder='Escribe tu email...' type={'text'} value={userData.username} onChange={handleChange}></input>
                    <p className='danger'>{errors.username}</p>
                </div>

                <div>
                    <label >Password:</label>
                    <input className={errors.password && 'warning'} name='password' placeholder='Escribe tu password...' type={'password'} value={userData.password} onChange={handleChange}></input>
                    <p className='danger'>{errors.password}</p>
                </div>
             
                <button type="submit" >Enviar</button>
            </form>
        </div>
    )
}

export default Form