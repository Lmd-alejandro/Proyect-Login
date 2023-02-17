import React, { useState } from "react";
import { Button } from "../../Components/Button/Index";
import './styles.css';

export const Login = () => { 
    const [state, setState] = useState(false)

    function handleSubmit (event) {
        event.preventDefault()
        console.log(event)
        setState(true)
        console.log('Insertado')
    }
    return(
        <div className="wrapper">
            <div className="wrapper-login">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='wrapper-login__inputs'>
                        <input placeholder='Email' />
                        <input type='password' placeholder='Password' />
                    </div>
                    <Button type='submit'>{state ? 'Hola User' : 'Login o Register'} </Button>
                </form>
            </div>
        </div>
    )
}