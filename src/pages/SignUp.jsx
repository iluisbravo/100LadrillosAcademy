import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { register } from '../api/api';

const SignUp = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: 'hombre',
    birthdate: '',
    password: '',
    confirmPassword: ''
  });
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Verificar si las contraseñas coinciden al cambiarlas
    if (e.target.name === 'confirmPassword') {
      setPasswordMatch(e.target.value === formData.password);
    } else if (e.target.name === 'password') {
      setPasswordMatch(e.target.value === formData.confirmPassword);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(formData);

      if (response?.code) {
        alert("Error: " + response.code.toString())
      } else {
        // Redirigir al usuario a otra página después del registro, por ejemplo, la página de inicio de sesión
        history.push('/LogIn');
      }

    } catch (error) {
      // Manejar errores de registro, como errores de validación del servidor, etc.
      const errorMessage = error.response.data.code;
      console.log(errorMessage);
      alert(error.response.data.code);
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
                src='https://img.freepik.com/fotos-premium/pequeno-edificio-fachada-rosa-toldo-azul-toldo-rosa_867452-3958.jpg'
                alt='Illustration' />
            </div>
          </div>
          <div className="col">
            <h1>Registrarse ✌️</h1>
            <p>¡Únete hoy para desbloquear tu potencial financiero! Accede a cursos, webinars y una comunidad de inversores en crecimiento.</p>
            <form onSubmit={handleSubmit}>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="text" name="name" placeholder='Nombre' className="form-control" value={formData.name} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="text" name="lastName" placeholder='Apellido' className="form-control" value={formData.lastName} onChange={handleChange} required />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="email" name="email" placeholder='Email' className="form-control" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="text" name="phoneNumber" placeholder='Teléfono' className="form-control" value={formData.phone} onChange={handleChange} required />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      {/* <input type="text" name="gender" placeholder='Genero' className="form-control" value={formData.gender} onChange={handleChange} required /> */}
                      <select name="gender" value={formData.gender} onChange={handleChange} required className="form-control" aria-label="Default select example">
                        <option selected disabled>Género</option>
                        <option value="hombre">Hombre</option>
                        <option value="mujer">Mujer</option>
                      </select>
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="date" name="birthdate" placeholder='Fecha de Nacimiento' className="form-control" value={formData.birthDate} onChange={handleChange} required />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="password" name="password" placeholder='Contraseña' className="form-control" value={formData.password} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className='col'>
                    <div className="mb-3">
                      <input type="password" name="confirmPassword" placeholder='Confirmar Contraseña' className="form-control" value={formData.confirmPassword} onChange={handleChange} required />
                      {/* Mensaje de texto si las contraseñas no coinciden */}
                      {!passwordMatch && <small
                        className="form-text text-danger">Las contraseñas no coinciden</small>}
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className="mb-3">
                      <button type="submit" className="btn btn-primary">Registrarme</button>
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

export default SignUp;
