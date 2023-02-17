import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../paths';
import Button from '../../Button';

import ContentWrapper from '../../ContentWrapper';
import Input from '../../Input';

import styles from './styles.module.css'

const LoginAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(isLoggedIn);
    if(loggedIn) {
        navigate(`${paths.createItem}`, { replace: true });
    }
  }, [loggedIn]);

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === 'admin' && password === 'admin') {
        localStorage.setItem('loggedIn', 'true');
        window.location.reload();
    } else {
        setError('Bad username or password!')
    }
  }


  return (
    <ContentWrapper className={ styles.createItem }>

    <form className={ styles.form }>
        <h1 className={ styles.title }>Admin</h1>

            <Input 
                name='username'
                placeholder='username'
                onChange={(e) => setUsername(e.target.value)}
            />

            <Input 
                type='password'
                name='password'
                placeholder='password'

                onChange={(e) => setPassword(e.target.value)}
            />
            { error && <div className={ styles.error }>{error}</div>}

            <ContentWrapper className={ styles.buttons }>
            <Button 
                onClick={() => navigate(-1)}
                isBackButton={ true }
                containerClassName={ styles.backButtonContainer }
            >
                ←Back
            </Button>

            <Button  
                    ClassName={ styles.buttonContainer }
                    onClick={ handleLogin }
                    type='submit'
            >
                    Login
            </Button>
            </ContentWrapper>
            
            </form>

    </ContentWrapper>
  );
}

export default LoginAdmin;