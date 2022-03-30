import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Componentes/Footer";
import { Head } from "../Componentes/Head";

export const Superadmin = () => {
  return (
    <Fragment>
     
     <Head />

     <div className="navbar navbar-inverse ">
        <div className="container">
          <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-left">
            <li className="active">
            <p to=""> <h3>SUPER ADMINISTRADOR</h3> </p>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
               <Link to="/admin1"> VISTA ADMINISTRADOR </Link>
              </li>
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

     <main className="container d-flex justify-content-center  ">

<div className="col-12 col-lg-4 d-flex justify-content-center border ">
  
    
    
    <form className="align-items-center   " action="{{url_for('superadministrador')}}" method="post" enctype="multipart/form-data">
      <h3 className="mt-2 mb-4 text-center">Registro de usuarios</h3> 
      <div className="input-group mb-3"><br />
          <span className="input-group-text">Tipo</span>
          <input required name="tipo" value ="" type="text" className="form-control" placeholder="Nombre" />
      </div><br />
        <div className="input-group mb-3">
          <span className="input-group-text">Nombre </span>
          <input required name="nombre" value ="" type="text" className="form-control" placeholder="Digite nombre" />
      </div><br />
      <div className="input-group mb-3">
        <span className="input-group-text">Apellido</span>
        <input required name="apellido" value ="" type="text" className="form-control" placeholder="Digite apellido" />
    </div><br />
    <div className="input-group mb-3">
      <span className="input-group-text">Telefono</span>
      <input required name="telefono" value ="" type="text" className="form-control" placeholder="555 555 5555" />
  </div><br />
  <div className="input-group mb-3">
    <span className="input-group-text">correo</span>
    <input required name="correo" value ="" type="text" className="form-control" placeholder="nombre@nombre.com" />
</div><br />
 <div className="input-group mb-3">
  <span className="input-group-text">Contraseña</span>
  <input required name="contraseña" value ="" type="text" className="form-control" placeholder="Digite contraseña" />
   </div><br />
        <div className="d-flex justify-content-center my-1">
          <Link to="" type="button"  className="btn btn-danger mx-2 ">Limpiar</Link>
          <Link to="" name="codigo" value ="Agregar.,.Agregar" className="btn btn-success "  type="submit">Agregar</Link>
        </div><br />
      
      </form>
    
  </div>
  <div className="col-12 col-lg-7 p-4 ">    
        <div className="card shadow-sm ">
            <div className="d-flex justify-content-between align-items-center">
                <h2>Tabla de usuarios</h2>
              <table className="table">
                <thead >
                  <tr>
                    <th scope="col">Tipo</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Contraseña</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody >
                  
                  <tr>
                    <td>Superadministrador</td>
                    <td>Jose Alvarez</td>
                    <td>Jalvarez@unitorres.com</td>
                    <td>**********</td>
                      <td><Link to="" name="codigo" value ="as" type="submit" className="btn btn-danger ">Eliminar</Link></td>
                      <td><Link to="" name="codigo" value ="as" type="submit" className="btn btn-info ">Editar</Link></td>
                  </tr>
                  
                  <tr>
                    <td>Administrador</td>
                    <td>Gabriel Montes</td>
                    <td>GabrielMontes34@hotmail.com</td>
                    <td>**********</td>
                      <td><Link to="" name="codigo" value ="as" type="submit" className="btn btn-danger ">Eliminar</Link></td>
                      <td><Link to="" name="codigo" value ="as" type="submit" className="btn btn-info ">Editar</Link></td>
                  </tr>
                  
                  <tr>
                    <td>Cliente</td>
                    <td>Ana Rodriguez</td>
                    <td>Rodriguezana@gmail.com</td>
                    <td>**********</td>
                      <td><Link to="" name="codigo" value ="as" type="submit" className="btn btn-danger ">Eliminar</Link></td>
                      <td><Link to="" name="codigo" value ="as" type="submit" className="btn btn-info ">Editar</Link></td>
                  </tr>

                  <tr>
                    <td>Cliente</td>
                    <td>Julio Contreras</td>
                    <td>ContrerasJulio343@gmail.com</td>
                    <td>**********</td>
                      <td><Link to="" name="codigo" value ="as" type="submit" className="btn btn-danger ">Eliminar</Link></td>
                      <td><Link to="" name="codigo" value ="as" type="submit" className="btn btn-info ">Editar</Link></td>
                  </tr>

                </tbody>
                <tfoot> </tfoot>
              </table>
            </div>
          </div>
          
</div>
</main>
 
     

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