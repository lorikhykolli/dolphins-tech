import React from "react"; 
import "./Footer.css";
import {FcPhone } from "react-icons/fc"; 
import {FcFeedback} from "react-icons/fc" ;
import {FcAlarmClock} from "react-icons/fc";
import {FcGlobe} from "react-icons/fc";

function Footer() { 
    return (<div> 
    <section id="footer1"> 
    <p>© Copyright <span id="year"> </span></p>
  <script> 
  let date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;
  </script>
  <div class="row"> 
    <div class="future-box col-lg-3">
    <div class="ikonat"><FcPhone /></div>
      <p>+38344100100</p>
    </div>
      <div class="future-box col-lg-3">
      <div class="ikonat"><FcFeedback /></div>
        <p>info@dolphinsgroup.eu</p>
        </div>
        <div class="future-box col-lg-3">
        <div class="ikonat"><FcAlarmClock /></div>
          <p>Mon - Fri 8:00 am - 4.00 pm</p>
        </div>
          <div class="future-box col-lg-3">
          <div class="ikonat"><FcGlobe /></div>
            <p>Dolphins Group
              nr.3 Kulla e Sheremetit, Pejë</p>
              </div>
              </div>
    </section></div>)
} 


export default Footer;