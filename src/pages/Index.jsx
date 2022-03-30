import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Componentes/Footer";
import { Head } from "../Componentes/Head";

export const Index = () => {
  return (
    <Fragment>
     
     <Head />
     <div className="navbar navbar-inverse ">
        <div className="container">
          <div className="navbar-collapse collapse">
         
            
          </div>
          {/* .nav-collapse --> */}
        </div>
      </div>

      <main className="container d-flex justify-content-center p-4 ">
            

            
            <div className="col-12 col-lg-5 p-4 ">
              <h2 className="">Plataforma Cumplimiento de Órdenes de Despacho por Vehículos</h2>
              <br/>
              <h4 className="">La empresa de transportes Compañia Internacional de Transporte Intercarga, cuenta con cierta cantidad de vehículos, y se encarga de realizar la recogida de productos de un cliente, y llevarlos a donde este cliente le indique. 
                </h4><br/>
              <h4 className="">  
                Para lo anterior es necesario que, el cliente envíe los datos de los productos a despachar, el o los vehículos que necesita (se asume que los productos a despachar caben dentro del vehículo o vehículos requeridos), el lugar de recogida y el lugar de entrega.
              </h4><br/>
              <h4 >
              El cliente debe tener la posibilidad de seleccionar un punto de origen y un punto de destino, en base a esta distancia será generada la factura. El valor a pagar será igual a la distancia en kilómetros entre los puntos origen y destino multiplicado por el valor por kilómetro recorrido. 
              </h4>
            </div>
            
          
            <div className="col-12 col-lg-7 border  p-4 "  >
            <h3>Realizar busqueda de recorrido</h3>
            <br/>
              <form className="align-items-center text-center mb-3" action="{{url_for('index')}}" method="post" enctype="multipart/form-data">
                   
                    <div className="input-group input-group-lg"   >
                      <select className="form-select" name="origen">
                        <option value="">Ciudad Origen</option>
                        <option value="Bogota">Bogota</option>
                        <option value="Medellin">Medellin</option>
                        <option value="Cali">Cali</option>
                        <option value="Cartagena">Cartagena</option>
                      </select>
                      <select className="form-select" name="destino">
                        <option value="">Ciudad Destino</option>
                        <option value="Bogota">Bogota</option>
                        <option value="Medellin">Medellin</option>
                        <option value="Cali">Cali</option>
                        <option value="Cartagena">Cartagena</option>
                      </select>
                      <button name="codigo" value="buscar" className="btn btn-secondary" type="submit" >Buscar</button>
                    </div>
              </form>
      <br/>
              
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
                         <td><Link to=""  name="codigo" value =""type="button" className="btn btn-info ">Realizar pedido</Link></td>                         
                   </tr>
                   <tr>
                    <td className="me-4 py-0 ">29392033</td>
                    <td className="me-4 py-0 ">Medellin</td>
                    <td className="me-4 py-0 ">Cali</td>
                    <td className="me-4 py-0 ">4</td>
                    <td className="me-4 py-0 ">$ 540.100</td>
                    <td className="me-4 py-0 ">Servientrega</td>
                         <td><Link to="" name="codigo" value =""type="button" className="btn btn-info ">Realizar pedido</Link></td>                         
                   </tr>
                   <tr>
                    <td className="me-4 py-0 ">40202011</td>
                    <td className="me-4 py-0 ">Bogota</td>
                    <td className="me-4 py-0 ">Medellin</td>
                    <td className="me-4 py-0 ">4</td>
                    <td className="me-4 py-0 ">$ 201.100</td>
                    <td className="me-4 py-0 ">Coordinadora</td>
                         <td><Link to=""  name="codigo" value ="" type="button" className="btn btn-info ">Realizar pedido</Link></td>                         
                   </tr>

                   <tr>
                    <td className="me-4 py-0 ">34230948</td>
                    <td className="me-4 py-0 ">Bogota</td>
                    <td className="me-4 py-0 ">Cali</td>
                    <td className="me-4 py-0 ">4</td>
                    <td className="me-4 py-0 ">$ 121.400</td>
                    <td className="me-4 py-0 ">Rapidisimo</td>
                         <td><Link to=""  name="codigo" value ="" type="button" className="btn btn-info ">Realizar pedido</Link></td>                         
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