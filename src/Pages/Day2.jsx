import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FootNav from '../Components/FootNav';
import Navbar from '../Components/Navbar';

const events = [
  {
    title: 'Mission Impossible',
    time: '2:00 P.M - 5:00 P.M',
    venue: 'LAB-1',
    department: 'Informatica',
    bgColor: 'bg-gradient-to-r from-blue-400 to-blue-200',
    image: '/Students/informatica.jpg', 
  },
  {
    title: 'Sharp Mind',
    time: '9:00 A.M - 12:00 P.M',
    venue: '309',
    department: 'Strategia',
    bgColor: 'bg-gradient-to-r from-green-400 to-green-200',
    image: '/Students/informatica.jpg', 
  },
  {
    title: 'Squid Game',
    time: '2:00 A.M - 4:30 P.M',
    venue: '504',
    department: 'Optica',
    bgColor: 'bg-gradient-to-r from-red-400 to-red-200',
    image: '/Students/informatica.jpg', 
  },
  {
    title: 'Robo-saga',
    time: '9:30 A.M - 1:30 P.M',
    venue: 'BasketBall Court',
    department: 'Robotics',
    bgColor: 'bg-gradient-to-r from-yellow-400 to-yellow-200',
    image: '/Students/informatica.jpg', 
  },
  {
    title: 'Bing Bang',
    time: '10:00 A.M - 1:00 P.M',
    venue: '305',
    department: 'Access America',
    bgColor: 'bg-gradient-to-r from-purple-400 to-purple-200',
    image: '/Students/informatica.jpg', 
  },
  {
    title: 'Technical Pick and Talk',
    time: '10:00 A.M - 1:00 P.M',
    venue: '406',
    department: 'Electronica',
    bgColor: 'bg-gradient-to-r from-pink-400 to-pink-200',
    image: '/Students/informatica.jpg', 
  },
  {
    title: 'Logic and Ladder',
    time: '10:00 A.M - 1:00 P.M',
    venue: 'LAB-2',
    department: 'Informatica',
    bgColor: 'bg-gradient-to-r from-teal-400 to-teal-200',
    image: '/Students/informatica.jpg', 
  },
  {
    title: 'Fun Island',
    time: '10:00 A.M - 4:00 P.M',
    venue: '509',
    department: 'Mathematica',
    bgColor: 'bg-gradient-to-r from-indigo-400 to-indigo-200',
    image: '/Students/informatica.jpg', 
  },
  {
    title: 'Model Exhibit',
    time: '11:00 A.M - 1:00 P.M',
    venue: 'Drawing Hall',
    department: 'Biogenesis',
    bgColor: 'bg-gradient-to-r from-orange-400 to-orange-200',
    image: '/Students/informatica.jpg', 
  },
  {
    title: 'Ithu Kalavara Bhoomi',
    time: '11:00 A.M - 1:30 P.M',
    venue: 'T and P Hall',
    department: 'Equilibria',
    bgColor: 'bg-gradient-to-r from-gray-400 to-gray-200',
    image: '/Students/informatica.jpg', 
  },
  {
    title: 'Cognitive Cracking',
    time: '9:30 A.M - 12:00 P.M',
    venue: '310',
    department: 'Optica',
    bgColor: 'bg-gradient-to-r from-sky-400 to-sky-200',
    image: '/Students/informatica.jpg', 
  },
];

function Day2() {
  useEffect(() => {
    AOS.init({ duration: 1750 });
  }, []);

  return (
    <div className='bg-gradient-to-b from-gray-100 to-white min-h-screen'>
      <Navbar />
      <FootNav />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 p-5'>
        {events.map((event, index) => (
          <div 
            key={index} 
            className={`shadow-xl border-1 border-black p-2 rounded-3xl mt-2 ${event.bgColor}`} 
            data-aos="fade-up" // Add AOS animation
          >
            <div className='text-center p-5'>
              <img src={event.image} alt={event.title} className="w-32 h-32 object-cover rounded-full mx-auto" /> 
              <h1 className='text-2xl font-bold font-poppins mt-3'>{event.title}</h1>
              <h4 className='text-xl font-medium mt-1 font-roboto'>{event.time}</h4>
              <h2 className='text-xl font-semibold font-serif'>Venue: {event.venue}</h2>
              <h3 className='text-2xl font-semibold font-serif'>{event.department}</h3>
              <div className='flex justify-center'>
                <button className='px-6 py-2 rounded-xl mt-5 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3 hover:shadow-2xl'>
                  Register
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day2;
