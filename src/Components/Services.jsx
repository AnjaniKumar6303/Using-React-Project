import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "./../Styles/services.css"

const Services = () => {
  return (
    <div className='services'>
      <Carousel infiniteLoop autoPlay showStatus={true} showArrows={true}showThumbs={false}
         interval={4000} transitionTime={1000}>
        <div>
          <img src="./images/services.jpg" alt="images1" />
          <p className='legend'>IT Support</p>
        </div>
        <div>
          <img src="./images/handshake.webp" alt="images2" />
          <p className='legend'>Communicatons</p>
        </div>
        <div>
          <img src="./images/media.jpg" alt="images3" />
          <p className='legend'>Social Media</p>
        </div>
        <div>
          <img src="./images/support.jpg" alt="images4" />
          <p className='legend'>Corporate Support</p>
        </div>
      </Carousel>    
    </div>
  )
}

export default Services