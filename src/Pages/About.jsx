import React from 'react'
import Navbar from '../Components/Navbar'
import { FaBookReader,FaMedal,FaBook } from "react-icons/fa";


function About() {
  return (
    <div>
        <Navbar />
        {/* <div className='flex justify-between  px-20 '>
            <div>
                <img src='/Images/Sastra1.jpg' alt='NightViewofSRC' className='w-[90rem] '></img>
            </div>
             <div className='ml-20'>
                <h1 className=''>About Our Institution</h1>
                <h3 className=''>The Shanmugha Arts, Science, Technology & Research Academy, also known  as SASTRA, is a private and deemed university. Sastra University is one of the leading  Educational Institutions in India with a long-standing reputaion for academic excellence.</h3>
                <div className='flex gap-5 '>

                    <div className='border-2  border-red-500 text-center p-7'>
                        <FaBook  className='text-5xl ml-2'/>
                        <h1 className='text-xl font-bold mt-2'>350+</h1>
                        <h4 className='text-lg font-semibold'>Courses</h4>
                    </div>

                    <div className='border-2  border-red-500 text-center p-7'>
                        <FaBookReader className='text-5xl ml-2'/>
                        <h1 className='text-xl font-bold mt-2'>350+</h1>
                        <h4 className='text-lg font-semibold'>Courses</h4>
                    </div>

                    <div className='border-2  border-red-500 text-center p-7'>
                        <FaMedal  className='text-5xl ml-2'/>
                        <h1 className='text-xl font-bold mt-2'>350+</h1>
                        <h4 className='text-lg font-semibold'>Courses</h4>
                    </div>
                    
                </div>
             </div>
        </div> */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:px-20 px-10 py-10  items-center'>
            <div>
                <img src='/Images/Sastra2.jpg' alt='Nightviewofsrc' className='lg:h-[35rem] lg:w-[35rem] rounded-3xl shadow-2xl shadow-pink-500'></img>
            </div>
            <div className='pl-5 text-justify lg:text-center mt-10 md:mt-0'>
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold font-serif text-center'>About Of THETA</h1>
                <h3 className='lg:text-xl  font-serif mt-3 lg:mt-5'>The Srinivasa Ramanujan Centre (SRC) is dedicated to facilitating student development through a diverse array of technology festivals and programs. Each department within SRC consistently organizes tech fests and conferences that provide students with invaluable opportunities to expand their knowledge
                     The hallmark of SRC's co-curricular offerings is "THETA," a distinguished cultural and technology festival that has been celebrated every March since 2011. "THETA" is unique in that it is entirely designed and executed by SRC students,
                      supported and mentored by faculty members.</h3>
            </div>
        </div>
        

        <div className='grid grid-cols-1 md:grid-cols-2 lg:px-20 px-10 py-10 lg:gap-28 gap-10 items-center '>
            <div className='pl-5 lg:text-center '>
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold font-serif text-center '>History Of THETA</h1>
                <h3 className='lg:text-xl  text-justify font-serif mt-5'>Since it began in 2011, THETA has grown to be a core event at SRC. Successful editions like THETA'11, THETA'12, THETA v3.0, and the series from THETA 2k14 to THETA 2k24 have drawn large crowds. Every year,
                     over 1,000 students attend the three-day festival, which includes multiple workshops designed to benefit the students.</h3>
            </div>
            <div>
                <img src='/Images/Sastra3.jpg' alt='Attractiveview' className='lg:h-[35rem] lg:w-[35rem] rounded-3xl shadow-2xl shadow-pink-500'></img>
            </div>
            
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:px-20 px-10 py-10  items-center'>
            <div>
                <img src='/Images/Emulsion.png' alt='Emulsion' className='lg:h-[35rem] lg:w-[30rem] rounded-3xl shadow-2xl shadow-pink-500'></img>
            </div>
            <div className='pl-5 text-justify lg:text-center mt-10 md:mt-0'>
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold font-serif text-center'>Emulsion</h1>
                <h3 className='lg:text-xl  font-serif mt-3 lg:mt-5'>Emulsion honors the spirit of creativity and innovation across diverse media and artistic expressions. This event features competitions in photography, videography, advertisements, and short films,
                     where participants can exhibit their talents and imagination in a friendly and supportive environment.<br /></h3>
                <h2 className='mt-5 text-3xl font-bold'>"We Speak Cinema"</h2>
                    
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:px-20 px-10 py-10 lg:gap-28 gap-10 items-center '>
            <div className='pl-5 lg:text-center '>
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold font-serif text-center '>Robotics</h1>
                <h3 className='lg:text-xl  text-justify font-serif mt-5'>The cluster seeks to create a space for individuals with similar interests to unite and explore the fields of robotics, programming, electronics, and mechanics. Members have the opportunity to collaborate on a range of projects,
                     from constructing basic robots to developing complex machines, utilizing various advanced tools and technologies. Additionally,
                      the cluster may engage in robotics competitions, hackathons, and other events to demonstrate their skills and display their innovations.</h3>
                <h2 className='mt-5 text-3xl font-bold'>"From Fiction to Reality"</h2>
            </div>
            <div>
                <img src='/Images/robotics.webp' alt='Robotics' className='lg:h-[35rem] lg:w-[35rem] rounded-3xl shadow-2xl shadow-pink-500'></img>
            </div>
            
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:px-20 px-10 py-10  items-center'>
            <div>
                <img src='/Images/Informatica.png' alt='Informatica' className='lg:h-[35rem] lg:w-[30rem] rounded-3xl shadow-2xl shadow-pink-500'></img>
            </div>
            <div className='pl-5 text-justify lg:text-center mt-10 md:mt-0'>
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold font-serif text-center'>Informatica</h1>
                <h3 className='lg:text-xl  font-serif mt-3 lg:mt-5'>Informatica is a student-led organization dedicated to uniting individuals who share a passion for computer science and technology. The club's mission is to offer its members avenues to enhance their technical skills, 
                    engage in coding competitions, connect with industry professionals, and stay informed about the latest trends in the field.</h3>
                    <h2 className='mt-5 text-3xl font-bold'>"Where Tech Enthusiasts Unite"</h2>
            </div>
        </div>


        
    </div>
  )
}

export default About