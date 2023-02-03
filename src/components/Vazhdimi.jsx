import React from "react"; 
import "./Vazhdimi.css";
import { FcAcceptDatabase } from "react-icons/fc";
import { FcMultipleDevices} from "react-icons/fc";
import {FcMultipleSmartphones} from "react-icons/fc";
import {FcBusinessContact} from "react-icons/fc"

function vazhdimi() { 
    return (<div> 
<section id="vazhdimi1">
<div class="row"> 
<div class="col-lg-3">
  <div class="ikonat2"><FcAcceptDatabase /></div>
<h3>Softuer dhe Baza e te dhenave</h3>
</div>
<div class="col-lg-3 ">
<div class="ikonat2"><FcMultipleDevices /></div>
<h3>Zhvillimi i Website</h3>
</div>
<div class="col-lg-3 ">
<div class="ikonat2"><FcMultipleSmartphones /></div>
<h3>Marketing Digjital.</h3>
</div>
<div class="col-lg-3 ">
<div class="ikonat2"><FcBusinessContact /></div>
<h3>NFC Karte Biznesi.</h3>
</div>


</div>
</section>
    </div>)
} 

export default vazhdimi;