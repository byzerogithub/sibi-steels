import React from 'react';
// import '../src/Components/Pages/Services.css'
import CountUp  from 'react-countup'


export default function Services() {
  return (
      <>
      <div className='cout-up'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-sm-12 col-xs-12 cout1'>
              <h2>
                <CountUp start={0} end={35} duration={10} suffix="+"/></h2>
                
                <h5>Years Of <br/>Experience</h5>
            </div>
            <div className='col-md-4 col-sm-12 col-xs-12 cout2'>
            
            <h2><CountUp start={0} duration={10} end={200} suffix="+"/></h2>
            
            <h5>Ton Of <br/>Retail Stock</h5>
            </div>
            <div className='col-md-4 col-sm-12 col-xs-12 cout3'>
            
            <h2><CountUp start={0} duration={10} end={2000} suffix="+"/></h2>
            
            <h5>Variants</h5>
            </div>
          </div>
        </div>


</div>





    {/* <div className='yrs-exp'>
    <div className='col-md-12 col-sm-12 col-xs-12'>
<img src={Expimg} />
    </div>
  </div> */}
    </>
  )
}
