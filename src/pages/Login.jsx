import img from "./login3.PNG";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Componentes/Footer";
import { Head } from "../Componentes/Head";

export const Login = () => {
  return (
    <Fragment>
     
     <Head />
     <div className="navbar navbar-inverse ">
        <div className="container">
          <div className="navbar-collapse collapse">
          
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
              <Link type="button" to="/listai" className="btn btn-success">SESION INICIADA</Link> 
              </li>
              <li className="active">
              <Link type="button" to="/listai" className="btn btn-danger px-3 ">SALIR DE SESION</Link>
              </li>
            </ul>
          </div>
          {/* .nav-collapse --> */}
        </div>
      </div>

     <div className="container d-flex p-5 ">
        <div className="col-lg-5 mx-3">
          <h1 className="text-center">Login</h1>
          <br /><br />
          <form className="p-4 ml-5" action="{{url_for('login')}}" method="post">                
            <div className="mb-2">
              <label  className="form-label">Direccion de Email</label>
              <input required type="email" className="form-control" name="usuarioLogin" placeholder="nombre@nombre.com"/>
              <br/><br />
               </div>
            <div className="mb-2">
              <label for="exampleFormControlInput1" className="form-label">Pasword</label>
              <input required type="password" className="form-control" name="contrasenaLogin" placeholder="contraseña"/>
              <br /><br />
            </div>
            <div className="d-flex justify-content-center my-4">
                  <div> <button name="codigo" value="login" className="btn btn-primary mx-3" type="submit">Login</button></div>
            </div> 
            <br /><br />
          </form>  
            <div className="d-flex  align-items-center flex-column">
            <div><p>¿No estás registrado? Crea una cuenta <Link to="{{url_for('registro')}}">aquí</Link></p></div>
            </div>
        </div>
        <div className="col-lg-5 my-5">
          <Link to="/"><img src={img} alt="" width="550" height="300"/></Link>
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
