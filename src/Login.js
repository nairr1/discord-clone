import React from 'react';
import './Login.css';
import { auth, provider } from './firebase'
import { Button } from '@material-ui/core';

function Login() {
    const signIn = () => [
        auth.signInWithPopup(provider).catch((error) => alert(error. message))
    ]
    return (
        <div className='login'>
            <div className="login__logo">
                <img 
                src='https://upload.wikimedia.org/wikipedia/commons/7/73/Discord_Color_Text_Logo_%282015-2021%29.svg'
                alt='Login Logo'
                />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login