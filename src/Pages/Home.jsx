import React from 'react'
import Navbar from '../Components/Navbar'
import videoBg from '../Assets/video.mp4'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'



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

          
         <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      {/* Box Section */}
      <div className="bg-white rounded-lg shadow-md p-8 w-96 relative ">
        {/* Image Section */}
        <img 
          src="/Students/informatica.jpg"  // Ensure the image path is correct
          alt="Informatica" 
          className="w-32 h-32 object-cover rounded-full absolute top-[-80px] left-1/2 transform -translate-x-1/2 border-4 border-white" 
        />
        <h2 className="text-2xl font-bold my-6 text-center">Informatica</h2>
        <p className="text-gray-600 mb-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
          amet nulla auctor, vestibulum magna sed, convallis ex.
        </p>
        <div className='text-center'>
  <Link to={'/informatica'}>
    <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
      Events
    </button>
  </Link>
</div>

        </div>
        </div>
        
       <div className='mt-16'>
       <Footer />
       </div>

    </div>
  )
}

export default Home