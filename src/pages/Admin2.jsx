import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Componentes/Footer";
import { Head } from "../Componentes/Head";

export const Admin2 = () => {
  return (
    <Fragment>
     
     <Head />
     <div className="navbar navbar-inverse ">
        <div className="container">
          <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-left">
            <li className="active">
            <p to=""> <h3>ADMINISTRADOR</h3> </p>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
            <li className="active">
                <Link to="/admin2"> GESTION DE RECORRIDOS </Link>
              </li>
              <li className="active">
                <Link to="/admin1">GESTION DE LISTA DE PEDIDOS </Link>
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
    
    
     <main className="container d-flex justify-content-center p-4 ">
            
      <div className="col-12 col-lg-5 border  p-4 "  >

        
        <h3 className="nav navbar-nav navbar-left">Agregar recorrido</h3> 
        <br/><br/><br/>
        <form className="border" action="" method="post" enctype="multipart/form-data">
        
            <div className="input-group mb-3">
                <span className="input-group-text">Origen</span>
                <select className="form-select" name="origen">
                  <option value="Bogota">Bogota</option>
                  <option value="Medellin">Medellin</option>
                  <option value="Cali">Cali</option>
                  <option value="Cartagena">Cartagena</option>
                </select>
                <span className="input-group-text">Destino</span>
                <select className="form-select" name="destino">
                  <option value="Bogota">Bogota</option>
                  <option value="Medellin">Medellin</option>
                  <option value="Cali">Cali</option>
                  <option value="Cartagena">Cartagena</option>
                </select></div><br/>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Valor por Kilometro</span>
                <input name="precio" required type="text" className="form-control" placeholder="$ / Km" />
            </div><br/>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Operadora final</span>
                <select className="form-select" name="operadora" required > 
                  <option value="servientrega">servientrega</option>
                  <option value="rapidisimo">rapidisimo</option>
                  <option value="coordinadora">coordinadora</option>
                </select>
              </div><br/>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Tiempo de envio</span>
                <input name="tiempo" required  type="text" className="form-control" placeholder="Dias" />
            </div>  <br/><br/>
            
              
            <div className=" text-center mt-5 ">
            <button type="Link" href="" className="btn btn-danger " type="button">Limpiar</button>
            <button to=""  name="codigo" value ="Agregar.,.,.Agregar" className="btn btn-success" type="button" >Agregar</button>
            </div> <br/><br/>
        </form>

        
          
      </div>

      <div className="col-12 col-lg-7 p-4 border ">
        <div className="text-center"><h3>LISTA DE RECORRIDOS</h3></div>
        <form className=" d-flex  justify-content-center" action="{{url_for('administrador1')}}" method="post" enctype="multipart/form-data">
        <ul className="nav navbar-nav"  >
            <li><input required name="codigo" type="text"  className="form-control " placeholder="Digite ciudad u operadora" /></li>
            <li><button to=""  className="btn btn-outline-secondary" type="button" >Buscar ciudad</button></li>
          </ul>
        </form>
        <br/><br/> 
        <ul className="nav nav-pills nav-stacked" >
            <table className="table mx-0 py-0 " >
                <thead>
                  <tr>
                    <th scope="col ">#</th>
                    <th scope="col ">Origen</th>
                    <th scope="col">Destino</th>
                    <th scope="col">Dias</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Operadora</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                 
                  <tr>
                    <td className="me-4 py-0 ">21201291</td>
                    <td className="me-4 py-0 ">Bogota</td>
                    <td className="me-4 py-0 ">Cali</td>
                    <td className="me-4 py-0 ">4</td>
                    <td className="me-4 py-0 ">$ 120.100</td>
                    <td className="me-4 py-0 ">Rapidisimo</td>
                         <td><Link to=""  name="codigo" value =""type="button" className="btn btn-danger ">Eliminar</Link></td>                         
                   </tr>
                   <tr>
                    <td className="me-4 py-0 ">29392033</td>
                    <td className="me-4 py-0 ">Medellin</td>
                    <td className="me-4 py-0 ">Cali</td>
                    <td className="me-4 py-0 ">4</td>
                    <td className="me-4 py-0 ">$ 540.100</td>
                    <td className="me-4 py-0 ">Servientrega</td>
                         <td><Link to="" name="codigo" value =""type="button" className="btn btn-danger ">Eliminar</Link></td>                         
                   </tr>
                   <tr>
                    <td className="me-4 py-0 ">40202011</td>
                    <td className="me-4 py-0 ">Bogota</td>
                    <td className="me-4 py-0 ">Medellin</td>
                    <td className="me-4 py-0 ">4</td>
                    <td className="me-4 py-0 ">$ 201.100</td>
                    <td className="me-4 py-0 ">Coordinadora</td>
                         <td><Link to=""  name="codigo" value ="" type="button" className="btn btn-danger ">Eliminar</Link></td>                         
                   </tr>

                   <tr>
                    <td className="me-4 py-0 ">34230948</td>
                    <td className="me-4 py-0 ">Bogota</td>
                    <td className="me-4 py-0 ">Cali</td>
                    <td className="me-4 py-0 ">4</td>
                    <td className="me-4 py-0 ">$ 121.400</td>
                    <td className="me-4 py-0 ">Rapidisimo</td>
                         <td><Link to=""  name="codigo" value ="" type="button" className="btn btn-danger ">Eliminar</Link></td>                         
                   </tr>
                </tbody>
                <tfoot> 
                </tfoot>
              </table>
        </ul>
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
