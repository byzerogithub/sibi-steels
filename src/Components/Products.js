import React from 'react'
import Footer from './Footer'

import ImageZoom from "react-medium-image-zoom";
import Productzoom from './Productzoom'

export default function Products() {
  return (
    <> 
     <div class="banner">
    <div className="banner-inn">
    <h2>Products</h2>
</div>
 </div>
    <div className='container'>
      <div><Productzoom /></div>
    </div>
    <div><Footer /></div>
    
    </>
    
  )
}

