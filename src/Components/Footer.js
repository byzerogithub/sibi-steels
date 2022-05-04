import React from 'react'
import footlogo from "../img/logo.png";
import "../Components/Footer.css"
import {FiPhone,FiMail} from "react-icons/fi"
import {GrLocation} from "react-icons/gr"


export default function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-sm-6 col-xs-12 foot-sec1'>
<div className='foot-log'>
<img src={footlogo} />
</div>

                </div>
                <div className='col-md-4 col-sm-6 col-xs-12'>
                <div className='foot-cont'>
                    <div className='foot-cont-head'>
                        <h5>HEAD OFFICE</h5>
                    </div>
                    <div className='foot-cont'>                 
<address>
<p> No 28/5, Seetharaman Road, Near Chatram,<br /> Salem -636009, Tamilnadu, India.</p>
</address>
     </div>
     <div><a href='tel:427 2353832'>+91 427 2353832</a></div>
        <div><a href='mailto:sibisteels@gmail.com'>sibisteels@gmail.com</a></div>
                </div>
                </div>
                <div className='col-md-4 col-sm-6 col-xs-12'>
                    <div className='foot-bran'>
                    <div className='foot-bran-head'>
                        <h5>BRANCH OFFICE</h5>
                    </div>
                    <div className='foot-cont'>
<address>
  <p>39/74 KNK Road, Karungalpalayam,<br /> Erode -638 003, Tamilnadu, India.</p>
</address>
     </div>
                    <div><a href='tel:427 2353832'>+91 427 2353832</a></div>
                   <div><a href='mailto:sibisteels@gmail.com'>sibisteels@gmail.com</a></div>
                </div>
            </div>
        </div>
    </div>
    <hr />
    <div className='col-md-12 col-sm-12 col-xs-12'>
<div className='foot-copy'>
&#169; Copyright 2021 sibi steel. Allrights reserved
</div>
    </div>
    </div>
    </>
  )
}
