import React from "react"; 
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import fotoHeader from "../images/web.png";

function App() { 
    return <div> 
    <div class="row1">
    <div class="row">
    <div class="col-lg-6 col-md-12 col-sm-12">
    <div class="titulli-rend">
    <h6>Dolphins Group Prezanton</h6>
    <h1 class="animate__animated animate__bounce">Dolphins Tech</h1>
    <h2> Ne drejtojmë bizneset të zbulojnë versionin më të mirë të tyre në një botë me inovacione të vazhdueshme teknologjike.</h2>
    </div>
    </div>
    
    <div class="col-lg-6 col-md-6 col-sm-12">
    <img class="title-image" img src={fotoHeader}/>
    </div> 
    </div>
    </div>
    </div>
}

export default App; 