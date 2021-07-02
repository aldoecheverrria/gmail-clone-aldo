import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { login } from './features/userSlice';
import { useDispatch } from 'react-redux';
import Tooltip from '@material-ui/core/Tooltip';

function Login() {

    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({user}) => {
                dispatch(
                    login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }))
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img alt="gmail logo" src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"/>
                <Tooltip title="Favor de usar su cuenta Gmail">

                <Button variant="contained" color="primary" onClick={signIn} >Entrar</Button>
                </Tooltip>
                
                
            </div>
            <h3>Este es un clon de Gmail hecho por Aldo, basado en PapaFam. Pero este conocimiento se ha usado en otros proyectos  ampliando las caracterísicas.</h3>
        </div>
    )
}

export default Login
