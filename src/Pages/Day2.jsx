import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FootNav from '../Components/FootNav';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const events = [
  {
    title: 'Mission Impossible',
    time: '2:00 P.M - 5:00 P.M',
    venue: 'LAB-1',
    department: 'Informatica',
    bgColor: 'bg-gradient-to-r from-blue-400 to-blue-200',
    image: '/Images/mission.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(56,189,248,0.5)]', // Blue custom shadow
  },
  {
    title: 'Sharp Mind',
    time: '9:00 A.M - 12:00 P.M',
    venue: '309',
    department: 'Strategia',
    bgColor: 'bg-gradient-to-r from-green-400 to-green-200',
    image: '/Images/sharp.jpg',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(74,222,128,0.5)]', // Green custom shadow
  },
  {
    title: 'Squid Game',
    time: '2:00 A.M - 4:30 P.M',
    venue: '504',
    department: 'Optica',
    bgColor: 'bg-gradient-to-r from-red-400 to-red-200',
    image: '/Images/squidgame.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(248,113,113,0.5)]', // Red custom shadow
  },
  {
    title: 'Robo-saga',
    time: '9:30 A.M - 1:30 P.M',
    venue: 'BasketBall Court',
    department: 'Robotics',
    bgColor: 'bg-gradient-to-r from-yellow-400 to-yellow-200',
    image: '/Images/robosaga.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(250,204,21,0.5)]', // Yellow custom shadow
  },
  {
    title: 'Bing Bang',
    time: '10:00 A.M - 1:00 P.M',
    venue: '305',
    department: 'Access America',
    bgColor: 'bg-gradient-to-r from-purple-400 to-purple-200',
    image: '/Images/bingbang.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(192,132,252,0.5)]', // Purple custom shadow
  },
  {
    title: 'Technical Pick and Talk',
    time: '10:00 A.M - 1:00 P.M',
    venue: '406',
    department: 'Electronica',
    bgColor: 'bg-gradient-to-r from-pink-400 to-pink-200',
    image: '/Images/technical.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(244,114,182,0.5)]', // Pink custom shadow
  },
  {
    title: 'Logic and Ladder',
    time: '10:00 A.M - 1:00 P.M',
    venue: 'LAB-2',
    department: 'Informatica',
    bgColor: 'bg-gradient-to-r from-teal-400 to-teal-200',
    image: '/Images/logic.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(45,212,191,0.5)]', // Teal custom shadow
  },
  {
    title: 'Fun Island',
    time: '10:00 A.M - 4:00 P.M',
    venue: '509',
    department: 'Mathematica',
    bgColor: 'bg-gradient-to-r from-indigo-400 to-indigo-200',
    image: '/Images/funisland.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(129,140,248,0.5)]', // Indigo custom shadow
  },
  {
    title: 'Model Exhibit',
    time: '11:00 A.M - 1:00 P.M',
    venue: 'Drawing Hall',
    department: 'Biogenesis',
    bgColor: 'bg-gradient-to-r from-orange-400 to-orange-200',
    image: '/Images/model.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(251,146,60,0.5)]', // Orange custom shadow
  },
  {
    title: 'Ithu Kalavara Bhoomi',
    time: '11:00 A.M - 1:30 P.M',
    venue: 'T and P Hall',
    department: 'Equilibria',
    bgColor: 'bg-gradient-to-r from-gray-400 to-gray-200',
    image: '/Images/idhukalavara.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(156,163,175,0.5)]', // Gray custom shadow
  },
  {
    title: 'Cognitive Cracking',
    time: '9:30 A.M - 12:00 P.M',
    venue: '310',
    department: 'Optica',
    bgColor: 'bg-gradient-to-r from-sky-400 to-sky-200',
    image: '/Images/cracking.jpg',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(56,189,248,0.5)]', // Sky-blue custom shadow
  },
];

function Day2() {
  useEffect(() => {
    AOS.init({ duration: 1750 });
  }, []);

  return (
    <div className='bg-[#150F24] min-h-screen'>
      <Navbar />
      <FootNav />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 p-5'>
        {events.map((event, index) => (
          <div 
            key={index} 
            className={`p-2 rounded-3xl mt-2 border-1 border-black ${event.bgColor} ${event.shadowColor}`} 
            data-aos="fade-up"
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
      <div className='mt-10'>
        <Footer />
      </div>
    </div>
  );
}

export default Day2;
