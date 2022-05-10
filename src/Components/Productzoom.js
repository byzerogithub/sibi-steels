import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import medium1 from '../img/ss-angle.png'
import medium2 from '../img/ss-bolts.png'
import medium3 from '../img/ss-tube.png'

const Productzoom = () => (
    <>
    <div className='container'>
        <div className='row'>
           <div className='col-md-4 col-sm-6 col-xs-12'>
                  <Zoom>
                      <img alt="img1" src={medium1} width="200" />
                  </Zoom>
                  <h5>SS - Angles</h5>
            </div>
            <div className='col-md-4 col-sm-6 col-xs-12'>
               <Zoom>
                   <img alt="img1" src={medium2} width="200" />
                </Zoom>
                 <h5>SS - Angles</h5>
            </div>
            <div className='col-md-4 col-sm-6 col-xs-12'>
            <Zoom>
                  <img alt="img1" src={medium3} width="200" />
            </Zoom>
            <h5>SS - Angles</h5>
            </div>
        </div>
    </div>
    </>
  
)

export default Productzoom