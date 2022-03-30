import img from "./login3.PNG";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Componentes/Footer";
import { Head } from "../Componentes/Head";

export const Registro = () => {
  return (
    <Fragment>
     
     <Head />
     <div className="navbar navbar-inverse ">
        <div className="container">
          <div className="navbar-collapse collapse">
          
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
              <Link type="button" to="/" className="btn btn-success">SESION INICIADA</Link> 
              </li>
              <li className="active">
              <Link type="button" to="/" className="btn btn-danger px-3 ">SALIR DE SESION</Link>
              </li>
            </ul>
          </div>
          {/* .nav-collapse --> */}
        </div>
      </div>
     <div class="container d-flex p-5 ">
        <div class="col-lg-4  mx-5 ">
          <h1 class="text-center mb-4">Registro</h1> <br />
          <form class="p-4 ml-5" action="" method="post">   
            <div class="mb-3">
              <span class="input-group-text">Nombre</span>
              <input required type="text" class="form-control" name="nombreRegistro" placeholder="Digite nombre"/>
            </div><br />
            <div class=" mb-4">
              <span class="input-group-text">Apellido</span>
              <input required   name="apellidoRegistro" type="text" class="form-control"placeholder="Digite apellido"/>
            </div><br />
            <div class=" mb-4">
              <span class="input-group-text">Telefono</span>
              <input required name="telefonoRegistro" type="number" class="form-control" placeholder="555 555 5555"/>
            </div><br />
            <div class="">
              <span class="input-group-text">Correo</span>
              <input required   name="correoRegistro" type="email" class="form-control"placeholder="nombre@nombre.com"/>
            </div><br />
            <div class="">
              <span class="input-group-text">Contraseña</span>
              <input required   name="contrasenaRegistro" type="password" class="form-control"placeholder="Digite contraseña"/>
            </div><br /><br />
            
            <div class="d-flex justify-content-center my-4">
                  <div> <button name="codigo" value="login" class="btn btn-info mx-3" type="submit">Login</button></div>
            </div>
                
          </form>
          <br />
            <div class="d-flex flex-column bd-highlight mb-3 mx-4 text-center ">
                <p>¿Olvidaste tu contraseña? Haz clic <a href="{{url_for('login')}}">aquí</a></p>
            </div>
            

        </div>
        <div class="col-lg-5 my-5">
          <a href="/"> <img src={img} alt="" width="550" height="300"/></a>
        </div>
    </div>
     

      {/*  <!-- JavaScript Libraries --> */}
      <script src="lib/jquery/jquery.min.js"></script>
      <script src="lib/bootstrap/js/bootstrap.min.js"></script>
      <script src="lib/php-mail-form/validate.js"></script>
      <script src="lib/chart/chart.js"></script>

      {/*  <!-- Template Main Javascript File --> */}
      <script src="js/main.js"></script>
      <Footer />
    </Fragment>
  );
};