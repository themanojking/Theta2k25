import React from 'react'
import CountUp from 'react-countup';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';



function About() {
  return (
    <div className='bg-[#150F24]'>
        <Navbar />
       

        <div className='grid grid-cols-1 md:grid-cols-2 lg:px-20 px-10 py-10  items-center'>
            <div>
                <img src='/Images/Sastra2.jpg' alt='Nightviewofsrc' className='lg:h-[35rem] lg:w-[35rem] rounded-3xl shadow-2xl shadow-pink-500'></img>
            </div>
            <div className='pl-5 text-justify lg:text-center mt-10 md:mt-0'>
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold font-serif text-center text-[#844DA3] '>About Of THETA</h1>
                <h3 className='lg:text-xl text-white font-serif mt-3 lg:mt-5'>The Srinivasa Ramanujan Centre (SRC) is dedicated to facilitating student development through a diverse array of technology festivals and programs. Each department within SRC consistently organizes tech fests and conferences that provide students with invaluable opportunities to expand their knowledge
                     The hallmark of SRC's co-curricular offerings is "THETA," a distinguished cultural and technology festival that has been celebrated every March since 2011. "THETA" is unique in that it is entirely designed and executed by SRC students,
                      supported and mentored by faculty members.</h3>
            </div>
        </div>
        

        <div className='grid grid-cols-1 md:grid-cols-2 lg:px-20 px-10 py-10 lg:gap-28 gap-10 items-center '>
        <div className='md:hidden'>
                <img src='/Images/Sastra3.jpg' alt='Attractiveview' className='lg:h-[35rem] lg:w-[35rem] rounded-3xl shadow-2xl shadow-pink-500'></img>
            </div>
            <div className='pl-5 lg:text-center '>
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold font-serif text-center  text-[#844DA3]'>History Of THETA</h1>
                <h3 className='lg:text-xl text-white text-justify font-serif mt-5'>Since it began in 2011, THETA has grown to be a core event at SRC. Successful editions like THETA'11, THETA'12, THETA v3.0, and the series from THETA 2k14 to THETA 2k24 have drawn large crowds. Every year,
                     over 1,000 students attend the three-day festival, which includes multiple workshops designed to benefit the students.</h3>
            </div>
            <div className='md:flex hidden'>
                <img src='/Images/Sastra3.jpg' alt='Attractiveview' className='lg:h-[35rem] lg:w-[35rem] rounded-3xl shadow-2xl shadow-pink-500'></img>
            </div>
            
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:px-20 px-10 py-10  items-center'>
            <div>
                <img src='/Images/Emulsion.png' alt='Emulsion' className='lg:h-[35rem] lg:w-[30rem] rounded-3xl shadow-2xl shadow-pink-500'></img>
            </div>
            <div className='pl-5  lg:text-center mt-10 md:mt-0'>
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold font-serif text-center text-[#844DA3]'>Emulsion</h1>
                <h3 className='lg:text-xl text-justify text-white font-serif mt-3 lg:mt-5'>Emulsion honors the spirit of creativity and innovation across diverse media and artistic expressions. This event features competitions in photography, videography, advertisements, and short films,
                     where participants can exhibit their talents and imagination in a friendly and supportive environment.<br /></h3>
                <h2 className='md:mt-5 mt-2 text-xl md:text-3xl  font-bold text-[#844DA3] '>"We Speak Cinema"</h2>
                    
            </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:px-20 px-10 py-10 lg:gap-28 gap-10 items-center '>
        <div className='md:hidden'>
                <img src='/Images/robotics.webp' alt='Robotics' className='lg:h-[35rem] lg:w-[35rem] rounded-3xl shadow-2xl shadow-pink-500'></img>
            </div>
            
            <div className='pl-5 lg:text-center '>
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold font-serif text-center text-[#844DA3] '>Robotics</h1>
                <h3 className='lg:text-xl text-white  text-justify font-serif mt-5'>The cluster seeks to create a space for individuals with similar interests to unite and explore the fields of robotics, programming, electronics, and mechanics. Members have the opportunity to collaborate on a range of projects,
                     from constructing basic robots to developing complex machines, utilizing various advanced tools and technologies. Additionally,
                      the cluster may engage in robotics competitions, hackathons, and other events to demonstrate their skills and display their innovations.</h3>
                <h2 className='md:mt-5 mt-2 md:text-3xl text-xl font-bold text-[#844DA3] '>"From Fiction to Reality"</h2>
            </div>
            <div className='md:flex hidden'>
                <img src='/Images/robotics.webp' alt='Robotics' className='lg:h-[35rem] lg:w-[35rem] rounded-3xl shadow-2xl shadow-pink-500'></img>
            </div>
            
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:px-20 px-10 py-10  items-center'>
            <div>
                <img src='/Images/Informatica.png' alt='Informatica' className='lg:h-[35rem] lg:w-[30rem] rounded-3xl shadow-2xl shadow-pink-500'></img>
            </div>
            <div className='pl-5  lg:text-center mt-10 md:mt-0'>
                <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold font-serif text-center text-[#844DA3]'>Informatica</h1>
                <h3 className='lg:text-xl text-white font-serif mt-3 text-justify lg:mt-5'>Informatica is a student-led organization dedicated to uniting individuals who share a passion for computer science and technology. The club's mission is to offer its members avenues to enhance their technical skills, 
                    engage in coding competitions, connect with industry professionals, and stay informed about the latest trends in the field.</h3>
                    <h2 className='md:mt-5 mt-2 md:text-3xl text-xl font-bold text-[#844DA3] '>"Where Tech Enthusiasts Unite"</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:px-20 px-10 py-10 gap-10 lg:gap-28 items-center">
    {/* Mobile Image (only visible on small screens) */}
    <div className="md:hidden">
        <img
            src="/Images/Sastra1.jpg"
            alt="NightView"
            className="w-full h-auto rounded-3xl shadow-2xl shadow-pink-500"
        />
    </div>

    {/* Text Section */}
    <div className="lg:text-center">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold font-serif text-center text-[#844DA3]">
            About Our Institution
        </h1>
        <h3 className="lg:text-xl text-white text-justify font-serif mt-5">
            The Shanmugha Arts, Science, Technology & Research Academy, also known as SASTRA, is a private and deemed university.
            Sastra University is one of the leading Educational Institutions in India with a long-standing reputation for academic excellence.
        </h3>

        {/* Stats Section */}
        <div className="flex flex-row justify-between items-center mt-10 md:mt-8 gap-5">
            {/* Courses Box */}
            <div className="flex flex-col items-center border-2  border-[#844DA3] p-3 lg:p-8 md:p-4 rounded-lg">
                <p className="text-white font-semibold text-lg">
                    <CountUp start={0} end={350} duration={40} />+
                </p>
                <p className="text-white font-bold text-lg leading-[1.3] md:leading-[1.5]">
                    Courses
                </p>
            </div>

            {/* Students Box */}
            <div className="flex flex-col items-center border-2  border-[#844DA3] p-3 lg:p-8 md:p-4 rounded-lg">
                <p className="text-white font-semibold text-lg">
                    <CountUp start={0} end={3500} duration={40} />+
                </p>
                <p className="text-white font-semibold text-lg leading-[1.3] md:leading-[1.5]">
                    Students
                </p>
            </div>

            {/* Clusters Box */}
            <div className="flex flex-col items-center border-2  border-[#844DA3] p-3 lg:p-8 md:p-4 rounded-lg">
                <p className="text-white font-semibold text-lg">
                    <CountUp start={0} end={11} duration={40} />+
                </p>
                <p className="text-white font-semibold text-lg leading-[1.3] md:leading-[1.5]">
                    Clusters
                </p>
            </div>
        </div>
    </div>

    {/* Desktop Image (only visible on medium and large screens) */}
    <div className="hidden md:flex justify-center">
        <img
            src="/Images/Sastra1.jpg"
            alt="NightView"
            className="lg:h-[35rem] lg:w-[35rem] w-full h-auto rounded-3xl shadow-2xl shadow-pink-500"
        />
    </div>
</div>

<div className='mt-10'>
<Footer/>
</div>


</div>
  )
}

export default About