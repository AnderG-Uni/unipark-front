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
        <section className='bg-withe m-0 p-0'>
          <div className='row m-0 p-0'>

            {/* Formulario del login*/}
            <div className='col-6 m-0 p-0 pb-4 mb-2'>
              
              <div className='container align-items-center pt-5'>

                <h2 className='pt-5  text-center'><span>Hola, bienvenido a <span>Uni</span><span>Park!</span> </span></h2>

                <div className='card border-0 ms-5 me-5 ps-5 pe-5 pt-5 pb-2  '>

                  <div className="row m-0 p-0 mb-4"> 
                      <label className='form-label text-start p-0 m-0'  htmlFor="email">Correo o usuario</label>
                      <input className='form-control ' type="email" placeholder='example@example.com' id="email" required/>
                  </div>

                  <div className="row m-0 p-0 mb-4"> 
                      <label className='form-label text-start p-0 m-0'  htmlFor="clave">Calve</label>
                      <input className='form-control ' type="password" placeholder='**********' id="clave" required/>
                  </div>

                  <a href="#"  className='text-end'><span>¿Olvidate tu contraseña?</span></a>

                  <div className=' mt-3 mb-4'>
                    <button className='btn btn-warning col-12'>Iniciar Sesión</button>
                  </div>

                  <div className='row col-12 m-0 p-0'>
                    <div className='col-4 border-bottom'></div>
                    <div className='col-4 text-center'> <span >o registrate con</span> </div>
                    <div className='col-4 border-bottom'></div>
                  </div>

                  <div className='container m-0 p-0  mt-5 mb-3'>
                    <div className='row col-12 m-0 p-0'>
                      <div className='col-3'></div>
                      <div className='col-2'>ico1</div>
                      <div className='col-2'>ico2</div>
                      <div className='col-2'>ico3</div>
                      <div className='col-3'></div>
                    </div>
                  </div>

                  <div className='row col-12 m-0 p-0'>
                    <div className='col-2'></div>
                    <div className='col-8 text-center'> <span >¿ya tienes una cuenta?</span> <a href="#">Inicia Sesión</a> </div>
                    <div className='col-2'></div>
                  </div>


                </div>
              </div>
            </div>

            {/* Imagen del login*/}
            <div className='col-6 m-0 p-0 ps-3 pe-3 pt-2 bg-primary bg-gradient'>
              
            <div class="bg-image shadow-5-strong" >
                <img src="https://archindustrial.com.co/wp-content/uploads/2024/02/Parqueaderos-render-disenoseno-de-parqueaderos-IMG-32.jpg" class="img-fluid card border-0" alt="Sample image" />
              </div>
            </div>

          </div>
        </section>
    </>
    );
}

export default Login