import { Navigate, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Modal from 'react-modal';
import '../index.css'

Modal.setAppElement('#root');

function Login(){

    const Navigate = useNavigate();
    const [correo, setCorreo] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        //console.log('Form submitted:', { correo, password });
    
        try {
          const response = await fetch('https://uniyoutube-back.vercel.app/apiv1/login', {
          //const response = await fetch('http://localhost:5000/apiv1/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ correo, password })
          });

          const result = await response.json();
          if (result.status === "Bienvenido") {

            if(result.rol === "User"){
                //console.log(`User: ${result.user}, Role: ${result.rol}`);
                localStorage.setItem('id', result.id);
                localStorage.setItem('user', result.user);
                localStorage.setItem('role', result.rol);
                Navigate("/InicioUser");
                //onLoginSuccess(result.rol);
            }
            
          } else {
            //setError('Usuario o clave incorrecto');
            window.alert("Usuario o clave incorrecto");

          }
        } catch (error) {
          //console.error('Error:', error);
          window.alert("Ha ocurrido un error al consultar las credenciales.");
        }
    };


    const nuevousuario = () => {
        Navigate("/NewUser")
    };
    const nuevoadmin = () => {
        Navigate("/NewAdmin")
    };

    return (
    <>
        <section class="text-center">
        <div class="pt-4 bg-transparent text-white" >

            <h2>UniPark <span> <h5>Plataforma de videos universitaria </h5></span></h2>

        </div>
        
        <div className='row  contenedorlogin'>

                <div className='col-4'></div>

                <div className='col-4'>
                    <div class="card shadow-5-strong mt-5 bg-white p-1 " >
            
                    <div class="card-body p-0 ps-3 pe-3">
                            <div class=" justify-content-center">

                                <div className='row col-12 p-0 m-0'>
                                    <div className='col-lg-4'></div>
                                    <div className="col-lg-4">
                                      <img src="https://img.icons8.com/?size=100&id=9pYYRMkYN2BY&format=png&color=000000" class="img-fluid" alt="Sample image" />
                                    </div>
                                    <div className='col-lg-4'></div>
                                </div>
                                
                                <div class="col-lg-12">
                                <h4 class="fw-bold mb-1">Iniciar Sesión</h4>
                                <form onSubmit={handleSubmitLogin}>

                                    <div class="d-flex justify-content-center">
                                    
                                        <div className="row "> 
                                        <div data-mdb-input-init class="form-outline mb-2">
                                        <label class="form-label col-12 text-start" htmlFor="email"><strong>Usuario </strong></label>
                                        <input type="email" placeholder='example@example.com' id="email" class="form-control" value={correo} onChange={(e) => setCorreo(e.target.value)} required/>
                                        </div>

                                        <div data-mdb-input-init class="form-outline mb-2">
                                        <label class="form-label col-12 text-start" for="form3Example4"> <strong>Clave</strong></label>
                                        <input type="password" id="form3Example4" class="form-control" placeholder='***********' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                        
                                        </div>
                                        </div>

                                    </div>

                                    <button type="submit" class="btn btn-primary btn-block mb-2"  >
                                    Iniciar Sesión
                                    </button>

                                    <div class="text-center">
                                        <p class="mb-1 pb-lg-2" >¿Aún no tienes una cuenta?  <a href="#" onClick={nuevousuario}> Registrate aqui</a></p>
                                    </div>
                                </form>

                                </div>
                            </div>
                    </div>
            
                    </div>
                </div>

                <div className='col-4'></div>

        </div>
        </section>
    </>
    );
}

export default Login