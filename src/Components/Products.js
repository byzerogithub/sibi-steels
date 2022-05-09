import React from 'react'
import Footer from './Footer'
import medium1 from '../img/ss-angle.png'
import medium2 from '../img/ss-bolts.png'
import medium3 from '../img/ss-tube.png'

export default function Products() {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 col-sm-4 col-xs-12'>
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src={medium1} alt="Card image cap" />
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
        <div className='col-md-4 col-sm-4 col-xs-12'>
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src={medium2} alt="Card image cap" />
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
        <div className='col-md-4 col-sm-4 col-xs-12'>
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src={medium3} alt="Card image cap" />
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
        </div>
      </div>
    </div>
    <div><Footer /></div>
    
    </>
  )
}

