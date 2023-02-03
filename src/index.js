import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Lorik from './components/Navbar';
import Vazhdimi from './components/Vazhdimi';
import About from './components/About';
import Sherbimet from './components/Sherbimet';
import Pervoja from './components/Pervoja';
import Kontakti from './components/Kontakti';
import Footer from './components/Footer';



ReactDOM.render( <div>
  <Lorik />
  <App /> 
  <Vazhdimi />
  <About />
  <Sherbimet /> 
  <Pervoja />
  <Kontakti />
  <Footer />
 
</div>, document.getElementById("root"));

