import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Componentes/Footer";
import { Head } from "../Componentes/Head";

export const Admin1 = () => {
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
                <Link to="/admin2">GESTION DE RECORRIDOS </Link>
              </li>
              <li className="active">
                <Link to="/admin1">GESTION DE LISTA DE PEDIDOS</Link>
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
    


     <main className="container d-flex justify-content-center p-4  ">
            <div className="col-12 p-4  border ">
              <div className="container text-center pb-3 "><h3>LISTA DE PEDIDOS </h3></div>
              
              <div className="input-group "  > 
              
                <form className="col-6 d-flex  justify-content-center" action="" method="post" enctype="multipart/form-data">       
                <ul className="nav navbar-nav">
                <li>Busqueda por nombre o producto </li>
                <li><input  name="codigo" type="text" className="form-control " placeholder="Digite Nombre o Producto" /></li>
                <li><button to="" className="btn btn-secondary" type="button" >Buscar general</button></li>
                </ul> <br />
               </form>
            
                <form className="col-6 d-flex justify-content-center"  action="" method="post" enctype="multipart/form-data">       
                <ul className="nav navbar-nav">
                <li>Busqueda por estados de producto</li>
                  <li><select className="col-1 form-select " name="codigo">
                    <option value="Todos">Todos</option>
                    <option value="En proceso">En proceso</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Despachada">Despachada</option>
                    <option value="Finalizada">Finalizada</option>
                    <option value="Cancelada">Cancelada</option>
                  </select></li>
                  <li><button to="" className="btn btn-success"  type="button">Buscar estado</button></li>
                  </ul>
                </form> 
                
                <br/>
                
                </div> 
              
              <ul className="nav nav-pills nav-stacked " >
                  <table className="table mx-0 py-0 border "  >
                      <thead>
                        <tr>
                          <th scope="col ">Cliente</th>
                          <th scope="col ">Producto</th>
                          <th scope="col">Origen</th>
                          <th scope="col ">Destino</th>
                          <th scope="col">Precio</th>
                          <th scope="col">Estado de envio</th>
                          <th scope="col">Modificar estado</th>
      
                        </tr>
                      </thead>
                      <tbody>
                        
                        <tr>
                          <td className="me-4 py-0 ">Pedro Sarmiento</td>
                          <td className="me-4 py-0 ">Puertas</td>
                          <td className="me-4 py-0 ">Cali</td>
                          <td className="me-4 py-0 ">Medellin</td>
                          <td className="me-4 py-0 ">$ 300.000</td>
                          <td className="me-4 py-0 ">En proceso</td>
                              <td><div className="input-group" >
                                  <select className="form-select" name="codigo">
                                  <option value="">En proceso</option>
                                    <option value="">Pendiente</option>
                                    <option value="">Despachada</option>
                                    <option value="">Finalizada</option>
                                    <option value="">Cancelada</option>
                                  </select>
                                  <Link to="" className="btn btn-success "  type="submit">Modificar</Link>
                                </div> </td>
                          
                          </tr>
                        
                          <tr>
                          <td className="me-4 py-0 ">Juan lopez</td>
                          <td className="me-4 py-0 ">Colchones</td>
                          <td className="me-4 py-0 ">Bogota</td>
                          <td className="me-4 py-0 ">Cali</td>
                          <td className="me-4 py-0 ">$ 120.000</td>
                          <td className="me-4 py-0 ">Cancelado</td>
                              <td><div className="input-group" >
                                  <select className="form-select" name="codigo">
                                  <option value="">En proceso</option>
                                    <option value="">Pendiente</option>
                                    <option value="">Despachada</option>
                                    <option value="">Finalizada</option>
                                    <option value="">Cancelada</option>
                                  </select>
                                  <Link to="" className="btn btn-success "  type="submit">Modificar</Link>
                                </div> </td>
                          
                          </tr>

                          <tr>
                          <td className="me-4 py-0 ">Maria Agudelo</td>
                          <td className="me-4 py-0 ">Latas de pintura </td>
                          <td className="me-4 py-0 ">Bogota</td>
                          <td className="me-4 py-0 ">Medellin</td>
                          <td className="me-4 py-0 ">$ 230.000</td>
                          <td className="me-4 py-0 ">Finalizado</td>
                              <td><div className="input-group" >
                                  <select className="form-select" name="codigo">
                                    <option value="">En proceso</option>
                                    <option value="">Pendiente</option>
                                    <option value="">Despachada</option>
                                    <option value="">Finalizada</option>
                                    <option value="">Cancelada</option>
                                  </select>
                                  <Link to="" className="btn btn-success"  type="submit">Modificar</Link>
                                </div> </td>
                          
                          </tr>
                      </tbody>
                      
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
