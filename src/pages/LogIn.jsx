/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../api/api';

const LogIn = ({ setUser }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData.email, formData.password);
      // Redirigir al usuario a otra página después del inicio de sesión, por ejemplo, el dashboard
      localStorage.setItem('user', JSON.stringify(response));
      setUser(response);
      history.push('/');
    } catch (error) {
      // Manejar errores de inicio de sesión, como credenciales incorrectas, etc.
      console.error('Error logging in:', error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row align-items-center heroHeight">
          <div className="col text-center">
            <div>
              <img
                className='rounded object-fit-cover'
                width={450}
                height={450}
                src='https://img.freepik.com/foto-gratis/representacion-3d-casa-dibujos-animados_23-2150188323.jpg?t=st=1710471906~exp=1710475506~hmac=5002603793e6237eec45e9b271192425394c9141cccfedd4a7c1289e91cf20bb&w=1380'
                alt='Illustration' />
            </div>
          </div>
          <div className="col">
            <h1>Log In 🤟</h1>
            <p>¡Únete a la comunidad de inversores! Accede a recursos exclusivos y haz crecer tu conocimiento financiero con nosotros.</p>
            <form onSubmit={handleSubmit}>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="email" name="email" placeholder='Email' className="form-control" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="password" name="password" placeholder='Contraseña' className="form-control" value={formData.password} onChange={handleChange} required />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
