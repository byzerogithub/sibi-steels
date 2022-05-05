import React from 'react'
import './ourproduct.css'
import Steel from '../img/ss-steel.png'
import Handrailings from  '../img/ss-handralings.png'
import Fittings from  '../img/ss-fittings.png'
import Tube from  '../img/ss-tube.png'
import Bolts from  '../img/ss-bolts.png'
import Angles from  '../img/ss-angle.png'
import Sssteel from '../img/sssteel.png'
import Sstube from '../img/sstube.png'
import Sshand from '../img/sshandrails.png'
import Ssfitting from '../img/sspipefitting.png'
import Ssbolts from '../img/ssboltsnuts.png'
import Ssangle from '../img/ssangles.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init({
  duration: 1200
});


export default function Ourproduct() {
  return (
    <>
    <div className='our-pr'>
        <div className='container'>
            <h2>Our Products</h2>
            <p>We provide a wide range products. We have products in aluminum and <br/>stainless steel, beams, steel tubes, bearings and steel bars.</p>
        </div>
    
    <div className='our-pro-sec1'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 col-sm-6 col-xs-12'>
              <div className="card0" data-aos="fade-down">
              <a href="{./Home}"><img src={Steel} class="card-img-top" alt="Card image cap" /></a>
                     <div className="card-body"> 
                     <img src={Sssteel} class="card-img-top" alt="Card image cap" />                       
                      </div> 
                      <h5 className="card-title"><a href="{./Home}">SS Sheets</a></h5>
                    </div>
              </div>

              <div className='col-md-4 col-sm-6 col-xs-12'>
              <div className="card1" data-aos="fade-down">
              <a href="{./Home}"> <img src={Tube} class="card-img-top" alt="Card image cap" /></a>
                     <div className="card-body">  
                     <img src={Sstube} class="card-img-top" alt="Card image cap" />                         
                      </div>
                      
                      <h5 className="card-title"><a href="{./about}">SS Tubes</a></h5>                    
                    </div>
              </div>

              <div className='col-md-4 col-sm-6 col-xs-12'>
              <div className="card2" data-aos="fade-down">
              <a href="{./Home}"><img src={Handrailings} class="card-img-top" alt="Card image cap" /> </a>
                     <div className="card-body">  
                     <img src={Sshand} class="card-img-top" alt="Card image cap" />                                                
                      </div>
                      <h5 className="card-title"><a href="{./about}">SS Handrailings </a></h5>
                    </div>
              </div>
         </div>
         <div className='row our-pro-sec2'>
          <div className='col-md-4 col-sm-6 col-xs-12'>
              <div className="card3" data-aos="fade-down">
              <a href="{Home}"><img src={Fittings} class="card-img-top" alt="Card image cap" /></a>
                     <div className="card-body1"> 
                     <img src={Ssfitting} class="card-img-top" alt="Card image cap" />                         
                      </div>
                      <h5 className="card-title"><a href="{./Home}">SS Pipe Fittings</a></h5>
                    </div>
              </div>

              <div className='col-md-4 col-sm-6 col-xs-12'>
              <div className="card4" data-aos="fade-down">
              <a href="{./Home}"> <img src={Bolts} class="card-img-top" alt="Card image cap" /> </a>
                     <div className="card-body1">
                     <img src={Ssbolts} class="card-img-top" alt="Card image cap" />                         
                      </div>
                      <h5 className="card-title"><a href="{./about}">SS Bolts and Nuts</a></h5>                    
                    </div>
              </div>

              <div className='col-md-4 col-sm-6 col-xs-12'>
              <div className="card5" data-aos="fade-down">
              <a href="{./Home}"><img src={Angles} class="card-img-top" alt="Card image cap" /></a>
                     <div className="card-body1">
                     <img src={Ssangle} class="card-img-top" alt="Card image cap" />                                               
                      </div>
                      <h5 className="card-title"><a href="{./about}">SS Angles</a></h5>
                    </div>
              </div>
         </div>
       </div>
  </div>
  </div>
    </> 
  )
}
