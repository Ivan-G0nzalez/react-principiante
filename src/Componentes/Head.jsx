import img from "./login.png";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const Head = () => {
  return (
    <Fragment>
       <nav className="navbar navbar-default">
        <div className="container">
          
        </div>
        <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-left">
            <li>  <img src={img} alt="" width="400" height="100"/></li>
        </ul>
         
          <ul className="nav navbar-nav navbar-right">
            
            
            <li className="active">
                <Link to="/"> INICIO </Link>
              </li>
              <li className="active">
                <Link to="/login"> LOGIN </Link>
              </li>
              <li className="active">
                <Link to="/registro"> REGISTRO </Link>
              </li>
              <li className="active">
                <Link to="/superadmin"> SUPER ADMINISTRADOR </Link>
              </li>
              <li className="active">
                <Link to="/admin1"> ADMINISTRADOR </Link>
              </li>
              <li className="active">
                <Link to="/usuario"> CLIENTE </Link>
              </li>
          </ul>
        </div>
      </nav>

      
    </Fragment>
  );
};
