import React from 'react'
import Footer from "./Footer";
import zomimg from "../img/image-1.jpg"

export default function Products() {
  return (
    <>
<div className='container'>
  <div className='row'>
  <div className='col-md-4'>
<figure>
          <img
            id="zoom-background"
            src={zomimg}
            alt="Zoom with background color"
          />
          <figcaption>Zoom with background color</figcaption>
        </figure>
</div>
<div className='col-md-4'>

</div>
<div className='col-md-4'>
  
</div>
</div>
</div>
    <div><Footer />
    </div>
  
    </>
  )
}
