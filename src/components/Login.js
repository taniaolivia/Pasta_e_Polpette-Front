import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error } = useSelector((state) => state.auth);
  const [customError, setCustomError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCustomError('');

    const resultAction = await dispatch(login({ email, password }));
    
    if (login.fulfilled.match(resultAction)) {
      navigate('/dashboard');
    } 
    else {
      if (resultAction.payload?.message === "Invalid password") {
        setCustomError("Mot de passe incorrect !");
      }
      else if(resultAction.payload?.message === "User does not exist") {
        setCustomError("Utilisateur n'existe pas !");
      }
      else {
        setCustomError(resultAction.payload?.message || "Une erreur s'est produite. Veuillez réessayer.");
      }
    }
  };


  return (
    <div className="login">
      <Header></Header>

      <form onSubmit={handleSubmit} className='login--form'>
        <h1 className='login--form--title'>Connexion</h1>

        <div className='input'>
          <label>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='input input-nomargin'>
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {customError && (
          <span className='error-message'>{customError}</span>
        )}
        <button type="submit" className='loginBtn'>Login</button>
      </form>

      <Footer></Footer>
    </div>
  );
}

export default Login;
