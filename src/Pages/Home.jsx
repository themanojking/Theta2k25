import React from 'react'
import Navbar from '../Components/Navbar'
import videoBg from '../Assets/video.mp4'
import Footer from '../Components/Footer'



function Home() {
  return (
    <div>
        <Navbar />
         <div>
            <video src={videoBg} autoPlay loop muted  className='lg:w-[70%] md:w-[90%] w-[95%]  lg:ml-[15rem] md:ml-[3rem] ml-3 md:mt-5 rounded-3xl   mt-20'></video>
            <div className='absolute w-[100%] lg:mt-[18rem] mt-[14rem] top-0 flex flex-col justify-center items-center lg:text-8xl text-5xl font-bold text-white '>
              <h1>Coming Soon...</h1>
              <h2> THETA 2K25</h2>
            </div>
         </div>
        
        <Footer />

    </div>
  )
}

export default Home