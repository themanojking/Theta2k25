import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../Components/Navbar';
import FootNav from '../Components/FootNav';
import Footer from '../Components/Footer';

const eventsData = [
  {
    head: "Hey Guys Let's Go",
    time: '9:00 A.M - 12:00 P.M',
    venue: '303',
    dept: 'Strategia',
    bgColor: 'bg-gradient-to-r from-blue-400 to-blue-200',
    image: '/Images/letsgo.jpg',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(56,189,248,0.5)]', // Blue custom shadow
  },
  {
    head: 'Code Hunt',
    time: '2:00 P.M - 5:00 P.M',
    venue: 'LAB-2',
    dept: 'Informatica',
    bgColor: 'bg-gradient-to-r from-green-400 to-green-200',
    image: '/Images/codehunt.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(74,222,128,0.5)]', // Green custom shadow
  },
  {
    head: 'Robo-Saga',
    time: '9:30 A.M - 1:30 P.M',
    venue: 'BasketBall Court',
    dept: 'Strategia',
    bgColor: 'bg-gradient-to-r from-red-400 to-red-200',
    image: '/Images/robosaga.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(248,113,113,0.5)]', // Red custom shadow
  },
  {
    head: 'Capture Caption Captivate',
    time: '10:00 A.M - 1:00 P.M',
    venue: '401',
    dept: 'Access America',
    bgColor: 'bg-gradient-to-r from-purple-400 to-purple-200',
    image: '/Images/ccc.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(192,132,252,0.5)]', // Purple custom shadow
  },
  {
    head: 'Natrramizh: Ezhuthukol Vazhi em Mozhi',
    time: '10:00 A.M - 1:00 P.M',
    venue: '202',
    dept: 'Equilibria',
    bgColor: 'bg-gradient-to-r from-yellow-400 to-yellow-200',
    image: '/Images/tamil.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(250,204,21,0.5)]', // Yellow custom shadow
  },
  {
    head: 'Natrramizh: Avai Anjaamai',
    time: '10:00 A.M - 1:00 P.M',
    venue: '203',
    dept: 'Equilibria',
    bgColor: 'bg-gradient-to-r from-pink-400 to-pink-200',
    image: '/Images/tam.webp',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(244,114,182,0.5)]', // Pink custom shadow
  },
  {
    head: 'Byte Bank',
    time: '10:00 A.M - 1:00 P.M',
    venue: '406',
    dept: 'Electronica',
    bgColor: 'bg-gradient-to-r from-indigo-400 to-indigo-200',
    image: '/Images/bytebank.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(129,140,248,0.5)]', // Indigo custom shadow
  },
  {
    head: 'Wonder Fest',
    time: '10:00 A.M - 4:00 P.M',
    venue: '212',
    dept: 'Mathematica',
    bgColor: 'bg-gradient-to-r from-teal-400 to-teal-200',
    image: '/Images/ww.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(45,212,191,0.5)]', // Teal custom shadow
  },
  {
    head: 'Neenga Vandha Mattum Podhum',
    time: '11:00 A.M - 1:00 P.M',
    venue: '106',
    dept: 'Equilibria',
    bgColor: 'bg-gradient-to-r from-cyan-400 to-cyan-200',
    image: '/Images/balacing.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(103,232,249,0.5)]', // Cyan custom shadow
  },
  {
    head: 'Synapse Sculptors',
    time: '11:00 A.M - 1:00 P.M',
    venue: '110',
    dept: 'Biogenesis',
    bgColor: 'bg-gradient-to-r from-orange-400 to-orange-200',
    image: '/Images/synapse.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(251,146,60,0.5)]', // Orange custom shadow
  },
  {
    head: 'Mission Impossible',
    time: '2:00 P.M - 5:00 P.M',
    venue: 'LAB-1',
    dept: 'Informatica',
    bgColor: 'bg-gradient-to-r from-blue-400 to-blue-200',
    image: '/Images/mission.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(56,189,248,0.5)]', // Blue custom shadow
  },
  {
    head: 'Sharp Mind',
    time: '9:00 A.M - 12:00 P.M',
    venue: '309',
    dept: 'Strategia',
    bgColor: 'bg-gradient-to-r from-green-400 to-green-200',
    image: '/Images/sharp.jpg',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(74,222,128,0.5)]', // Green custom shadow
  },
  {
    head: 'Squid Game',
    time: '2:00 A.M - 4:30 P.M',
    venue: '504',
    dept: 'Optica',
    bgColor: 'bg-gradient-to-r from-red-400 to-red-200',
    image: '/Images/squidgame.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(248,113,113,0.5)]', // Red custom shadow
  },
  {
    head: 'Robo-saga',
    time: '9:30 A.M - 1:30 P.M',
    venue: 'BasketBall Court',
    dept: 'Robotics',
    bgColor: 'bg-gradient-to-r from-yellow-400 to-yellow-200',
    image: '/Images/robosaga.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(250,204,21,0.5)]', // Yellow custom shadow
  },
  {
    head: 'Bing Bang',
    time: '10:00 A.M - 1:00 P.M',
    venue: '305',
    dept: 'Access America',
    bgColor: 'bg-gradient-to-r from-purple-400 to-purple-200',
    image: '/Images/bingbang.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(192,132,252,0.5)]', // Purple custom shadow
  },
  {
    head: 'Technical Pick and Talk',
    time: '10:00 A.M - 1:00 P.M',
    venue: '406',
    department: 'Electronica',
    bgColor: 'bg-gradient-to-r from-pink-400 to-pink-200',
    image: '/Images/technical.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(244,114,182,0.5)]', // Pink custom shadow
  },
  {
    head: 'Logic and Ladder',
    time: '10:00 A.M - 1:00 P.M',
    venue: 'LAB-2',
    department: 'Informatica',
    bgColor: 'bg-gradient-to-r from-teal-400 to-teal-200',
    image: '/Images/logic.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(45,212,191,0.5)]', // Teal custom shadow
  },
  {
    head: 'Fun Island',
    time: '10:00 A.M - 4:00 P.M',
    venue: '509',
    department: 'Mathematica',
    bgColor: 'bg-gradient-to-r from-indigo-400 to-indigo-200',
    image: '/Images/funisland.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(129,140,248,0.5)]', // Indigo custom shadow
  },
  {
    head: 'Model Exhibit',
    time: '11:00 A.M - 1:00 P.M',
    venue: 'Drawing Hall',
    department: 'Biogenesis',
    bgColor: 'bg-gradient-to-r from-orange-400 to-orange-200',
    image: '/Images/model.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(251,146,60,0.5)]', // Orange custom shadow
  },
  {
    head: 'Ithu Kalavara Bhoomi',
    time: '11:00 A.M - 1:30 P.M',
    venue: 'T and P Hall',
    department: 'Equilibria',
    bgColor: 'bg-gradient-to-r from-gray-400 to-gray-200',
    image: '/Images/idhukalavara.avif',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(156,163,175,0.5)]', // Gray custom shadow
  },
  {
    head: 'Cognitive Cracking',
    time: '9:30 A.M - 12:00 P.M',
    venue: '310',
    dept: 'Optica',
    bgColor: 'bg-gradient-to-r from-sky-400 to-sky-200',
    image: '/Images/cracking.jpg',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(56,189,248,0.5)]', // Sky-blue custom shadow
  },
  {
    head: 'Idea-Verse',
    time: '9:00 A.M - 12:00 P.M',
    venue: 'LAB-1',
    dept: 'Informatica',
    image: '/Images/ideaverse.avif', 
    bgColor: 'bg-gradient-to-r from-teal-400 to-teal-100',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(56,189,248,0.5)]', // Custom stronger teal shadow
  },
  {
    head: 'Roadies',
    time: '10:00 A.M - 1:00 P.M',
    venue: '501',
    dept: 'Strategia',
    image: '/Images/roadies.avif', 
    bgColor: 'bg-gradient-to-r from-blue-400 to-blue-200',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(96,165,250,0.5)]', // Custom stronger blue shadow
  },
  {
    head: 'Escape Room',
    time: '10:00 A.M - 1:00 P.M',
    venue: '406',
    dept: 'Electronica',
    image: '/Images/escaperoom.avif', 
    bgColor: 'bg-gradient-to-r from-purple-400 to-purple-200',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(167,139,250,0.5)]', // Custom stronger purple shadow
  },
  {
    head: 'Math Pi-Rates',
    time: '10:00 A.M - 4:00 P.M',
    venue: '502',
    dept: 'Mathematica',
    image: '/Images/pirates.avif', 
    bgColor: 'bg-gradient-to-r from-green-400 to-green-200',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(74,222,128,0.5)]', // Custom stronger green shadow
  },
  {
    head: 'Fun Max',
    time: '1:00 P.M - 3:00 P.M',
    venue: '416',
    dept: 'Biogenesis',
    image: '/Images/funmax.avif', 
    bgColor: 'bg-gradient-to-r from-pink-400 to-pink-200',
    shadowColor: 'shadow-[0px_10px_20px_5px_rgba(244,114,182,0.5)]', // Custom stronger pink shadow
  },

];

function Events() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1750 });
  }, []);

  return (
    <div className='bg-[#150F24] min-h-screen'>
      <Navbar />
      <FootNav />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 p-5'>
        {eventsData.map((event, index) => (
          <div
            key={index}
            className={` p-4 rounded-3xl mt-2 ${event.bgColor} ${event.shadowColor} `}
            data-aos="fade-up" // AOS animation
          >
            <div className='text-center p-5 text-black'>
              <img src={event.image} alt={event.head} className="w-32 h-32 object-cover rounded-full mx-auto" />
              <h1 className='text-2xl font-bold font-poppins mt-3'>{event.head}</h1>
              <h4 className='text-xl font-medium mt-1 font-roboto'>{event.time}</h4>
              <h2 className='text-xl font-semibold font-serif'>Venue: {event.venue}</h2>
              <h3 className='text-2xl font-semibold font-serif'>{event.dept}</h3>
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
<Footer/>
</div>
    </div>
  );
}

export default Events;