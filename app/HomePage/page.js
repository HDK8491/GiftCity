// import Map from '@/components/Map/Map'

import Hero from '@/components/HeroSection/Hero'
import Events from '@/components/events/Events'
import Introduction from '@/components/introduction/Introduction'
import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
      {/* <Hero/> */}
     
      <Introduction/>
      <Events/>
      {/* <Map/> */}
  
    </div>
  )
}

export default HomePage