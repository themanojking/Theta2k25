import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Components/Navbar';


const data = [
  {
    tittle: '\n INFORMATICA',
    head: 'Code Hunt',
    image: '/Images/com.jpg', 
    bgColor: 'bg-white',
  },
  {
    tittle: '\n INFORMATICA',
    head: 'Mission Impossible',
    image: '/Images/mission.avif', 
    bgColor: 'bg-white',
  },
  {
    tittle: '\n INFORMATICA',
    head: 'Idea Verse',
    image: '/Images/verse.avif', 
    bgColor: 'bg-white',
  },
  {
    tittle: '\n INFORMATICA',
    head: 'Logic and Ladder',
    image: '/Images/ll.jpg', 
    bgColor: 'bg-white',
  },
  {
    tittle: '\n INFORMATICA',
    head: 'Techtrix',
    image: '/Images/comp.avif', 
    bgColor: 'bg-white',
  },
  {
    tittle: '\n INFORMATICA',
    head: 'TechHunt',
    image: '/Images/key.avif', 
    bgColor: 'bg-white',
  },
];

function Informatica() {
  useEffect(() => {
    AOS.init({ duration: 1750 });
  }, []);

  return (
    <div className='bg-[#150F24] min-h-screen'>
      <Navbar />
      <div className='text-center text-white mt-24'>
          <h2 className='text-2xl font-semibold'>Cluster</h2> 
          <h1 className='text-3xl font-bold '>INFORMATICA</h1>
      </div>
       
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 p-5'>
        {data.map((event, index) => (
          <div key={index} className={`shadow-xl  rounded-3xl mt-2 ${event.bgColor}`} data-aos="fade-up">
            <div className='text-center '>
              <img src={event.image} alt={event.head} className="w-full h-full rounded-t-2xl   mx-auto" />
              <h4 className='text-lg font-bold font-poppins mt-2 leading-3 p-2'>{event.tittle}</h4>
              <h2 className='text-xl font-medium  font-roboto p-2'>{event.head}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Informatica;
