import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Componentes/Footer";
import { Head } from "../Componentes/Head";

export const Usuario = () => {
  return (
    <Fragment>
     
     <Head/>
     <div className="navbar navbar-inverse ">
        <div className="container">
          <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-left">
            <li className="active">
            <p to=""> <h3>USUARIO</h3> </p>
              </li>
            </ul>
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
     <main className="container d-flex justify-content-center p-4 ">

<div className="col-12 col-lg-6 border text-center p-4 "  >


  

  <form className="mb-3" action="{{url_for('usuario')}}" method="post" enctype="multipart/form-data">
  <h3>Realizar pedido</h3>
    <div className="input-group mb-3">
        <span className="input-group-text">Nombre de producto</span>
        <input required name="producto" value ="" type="text" className="form-control" placeholder="Nombre" />
    </div><br/>
    <div className="input-group mb-3">
        <span className="input-group-text">Descripcion</span>
        <input required name="descripcion" value ="" type="text" className="form-control" placeholder="Descripcion" />
    </div><br/>
    <div className="input-group mb-3">
        <span className="input-group-text">Peso aprox.</span>
        <input required name="peso" value ="" type="number" className="form-control" placeholder="Kilogramos" />
    </div><br/>
    <div className="input-group mb-3">
        <span className="input-group-text">Cantidad de vehiculos</span>
        <input required name="vehiculos" value ="" type="number" value="" className="form-control" placeholder="Cantidad" />
    </div><br/>
      <div className="input-group mb-3">
        <span className="input-group-text">Origen</span>
        <select className="form-select" name="origen">
        <option value="Bogota">Elegir</option>
          <option value="Bogota">Bogota</option>
          <option value="Medellin">Medellin</option>
          <option value="Cali">Cali</option>
          <option value="Cartagena">Cartagena</option>
        </select>
        <span className="input-group-text">Destino</span>
        <select className="form-select" name="destino">
        <option value="Bogota">Elegir</option>
          <option value="Bogota">Bogota</option>
          <option value="Medellin">Medellin</option>
          <option value="Cali">Cali</option>
          <option value="Cartagena">Cartagena</option>
        </select></div>
        <br/><br/>
    
    <Link to="" type="button" href="{{url_for('usuario')}}" className="btn btn-danger ">Limpiar</Link>
    <Link to="" name="codigo" value ="Agregar.,.,.Agregar" className="btn btn-success" type="submit" >Agregar pedido</Link>
   
</form>
<br/>

</div>

<div className="col-12 col-lg-6 p-4 border ">
  
  <div className="input-group mt-4 ">
  <form className="mb-3" action="{{url_for('usuario')}}" method="post" enctype="multipart/form-data">
  <h3>Lista de pedidos</h3>
  
       <span className="input-group-text">Estado de envio</span>
      <select className="form-select" name="codigo">
        <option value="En proceso">En proceso</option>
        <option value="Pendiente">Pendiente</option>
        <option value="Despachada">Despachada</option>
        <option value="Finalizada">Finalizada</option>
        <option value="Cancelada">Cancelada</option>
      </select>
      <Link to="" className="btn btn-success "  type="button"> Filtrar</Link>
    </form>
    </div>
    <br/>
    <ul className="nav nav-pills nav-stacked" >
      <table className="table mx-0 py-0 ">
          <thead>
            <tr>
              <th scope="col ">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Estado</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
           
            <tr>
              <td className="me-4 py-0 ">Pescado</td>
              <td className="me-4 py-0 ">$ 300.000</td>
              <td className="me-4 py-0 ">Cancelado</td> 
              <td><Link to="" name="codigo" value ="" type="button" className="btn btn-info ">Ver info</Link></td>
              <td><Link to="" name="codigo" value ="" type="button" className="btn btn-danger ">Eliminar</Link></td>
            </tr>

            <tr>
              <td className="me-4 py-0 ">Cartones</td>
              <td className="me-4 py-0 ">$ 500.000</td>
              <td className="me-4 py-0 ">Finalizado</td> 
              <td><Link to="" name="codigo" value ="" type="button" className="btn btn-info ">Ver info</Link></td>
              <td><Link to="" name="codigo" value ="" type="button" className="btn btn-danger ">Eliminar</Link></td>
            </tr>
            <tr>
              <td className="me-4 py-0 ">Abanicos</td>
              <td className="me-4 py-0 ">$ 130.000</td>
              <td className="me-4 py-0 ">EN proceso</td> 
              <td><Link to="" name="codigo" value ="" type="button" className="btn btn-info ">Ver info</Link></td>
              <td><Link to="" name="codigo" value ="" type="button" className="btn btn-danger ">Eliminar</Link></td>
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