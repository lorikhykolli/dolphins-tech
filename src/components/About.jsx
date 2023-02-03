import React from "react"; 
import './About.css';
import Kush from "../images/kush.png";
import {FcOk} from "react-icons/fc";

function About() { 
    return ( <div> 
    <section id="about">
  <div class="row"> 
    <div class="future-box col-lg-6">
<h1>Kush jemi ne?</h1>
<h2>Ne jemi të specializuar për të ndihmuar klientët tanë të dixhitalizojnë biznesin e tyre.<FcOk /></h2>
<h2> Ne garantojmë shërbim të besueshëm <FcOk/> </h2>
  <h2>Ekspertë në fushat e teknologjisë <FcOk /></h2>
    </div> 
    <div class="future-box col-lg-6">  
  <img src={Kush} alt ="kush" />
  </div> 
  </div> 
</section>
    </div>)
} 


export default About;