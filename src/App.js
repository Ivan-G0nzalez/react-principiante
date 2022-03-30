
import React, { Fragment } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";




import { Index } from "./pages/Index";
import { Login } from "./pages/Login";
import { Registro } from "./pages/Registro";
import { Usuario } from "./pages/Usuario";
import { Admin1 } from "./pages/Admin1";
import { Admin2 } from "./pages/Admin2";
import { Superadmin } from "./pages/Superadmin";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Usuario" element={<Usuario />} />
          <Route path="/Admin1" element={<Admin1 />} />
          <Route path="/Admin2" element={<Admin2 />} />
          <Route path="/Superadmin" element={<Superadmin />} />
         
        </Routes>
      </Router>
    </div>
  );
}
export default App;
