import React from 'react'
import { FaWhatsapp, FaInstagram,FaYoutube } from "react-icons/fa"
import { Link } from 'react-router-dom'




// function Footer() {
//   return (
//     <div>
//         <footer class="bg-[#1e1e2b]  mt-32  pb-5 px-10   ">
//     <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
//       <div class="">
//         <img class="w-64" src="images/Theta.png" alt=""/>
//         <div className='lg:ml-10'>
//           <h1 className='text-white font-extrabold text-4xl font-serif'>Address</h1>
//          <div className='text-gray-400 mt-3 leading-5'>
//          <p>SRC SASTRA UNIVERSITY</p>
//          <p>KUMBAKONMAM</p>
//          </div>
//           </div>
//       </div>
//       <div class="text-gray-400 capitalize leading-10  md:ml-24 md:mt-9   ">
//        <div className='mt-24'>
//        <h1 className='text-white font-bold font-serif '>overview</h1>
//         <p className='cursor-pointer '>home</p>
//         <p className='cursor-pointer '>event</p>
//         <p className='cursor-pointer '>about</p>
//         <p className='cursor-pointer '>contact us</p>
//       </div>

     
//       </div>

//       <div className='lg:ml-10 '>
//         <div className='mt-32'>
//         <h1 className='text-white lg:text-5xl text-3xl font-serif'>Follow us </h1>
//         </div>
//         <div className='mt-7 flex gap-4 ml-7 '>
//        <p className='text-white lg:text-3xl text-2xl'><FaInstagram /></p>
//        <p className='text-white lg:text-4xl text-2xl'><FaYoutube /></p>
//        <p className='text-white lg:text-4xl text-2xl'><FaWhatsapp /></p>
//         </div>
//       </div>
    

     

//     </div>

//     <div class="mt-7 border-t-2 border-gray-700 text-center">

//       <h1 class="text-gray-400 text-sm md:text-lg lg:text-xl mt-3">Designed and Developed by Delta Info</h1>
//     </div>



//   </footer>
//     </div>
//   )
// }


// export default Footer



function Footer() {
  return (
    <div>
        <div>
      <footer className="bg-white pb-10 mt-24">
        <div
          className="relative  bg-cover bg-center  "
          style={{ backgroundImage: 'url(/Images/Sastra.jpg)' }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-20">
            {/* Address Section */}
            <div className="flex flex-col items-start">
              <img className="w-64" src='/Images/Theta.png' alt="Theta Logo" />
              <div className="lg:ml-10">
                <h1 className="text-white font-extrabold text-4xl font-serif">Address</h1>
                <div className="text-white mt-3 leading-5">
                  <p>SRC, SASTRA UNIVERSITY,</p>
                  <p>KUMBAKONAM</p>
                </div>
              </div>
            </div>

            {/* Overview Section */}
            <div className="text-white text-2xl font-semibold capitalize leading-10 md:ml-24 md:mt-9">
              <div className="mt-24">
                <h1 className="text-white text-4xl font-bold font-serif ">Overview</h1>
                  <div className='mt-5 ml-10'>
                    <h2><Link to={'/'}>HOME</Link></h2>
                    <h2><Link to={'/event'}>EVENTS</Link></h2>
                    <h2><Link to={'/about'}>ABOUT</Link></h2>
                    <h2><Link to={'/contact'}>CONTACT</Link></h2>
                  </div>
               
              </div>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col items-start lg:ml-10">
              <div className="lg:mt-32 mt-16">
                <h1 className="text-white lg:text-5xl text-3xl font-serif">Follow Us</h1>
              </div>
              <div className="lg:mt-7 flex gap-4 ml-7 mb-11">
                <p className="lg:text-4xl text-2xl"><FaWhatsapp /></p>
                <p className="lg:text-3xl text-2xl"><FaInstagram /></p>
                <p className="lg:text-3xl text-xl"><FaYoutube /></p>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-24">
            <div className="mt-7 border-t-2 border-white text-center">
              <h1 className="text-white font-extrabold font-serif text-sm md:text-lg lg:text-xl mt-3">
                Designed and Developed by Delta Info
              </h1>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Footer