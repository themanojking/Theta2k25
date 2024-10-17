import React from 'react';
import Navbar from '../Components/Navbar';
import FootNav from '../Components/FootNav';

const eventsData = [
  {
    head: "Hey Guys Let's Go",
    time: '9:00 A.M - 12:00 P.M',
    venue: '303',
    dept: 'Strategia',
    bgColor: 'bg-gradient-to-r from-blue-400 to-blue-200',
    image: 'path/to/image1.jpg', // Replace with actual image path
  },
  {
    head: 'Code Hunt',
    time: '2:00 P.M - 5:00 P.M',
    venue: 'LAB-2',
    dept: 'Informatica',
    bgColor: 'bg-gradient-to-r from-green-400 to-green-200',
    image: 'path/to/image2.jpg', // Replace with actual image path
  },
  {
    head: 'Robo-Saga',
    time: '9:30 A.M - 1:30 P.M',
    venue: 'BasketBall Court',
    dept: 'Strategia',
    bgColor: 'bg-gradient-to-r from-red-400 to-red-200',
    image: 'path/to/image3.jpg', // Replace with actual image path
  },
  {
    head: 'Capture Caption Captivate',
    time: '10:00 A.M - 1:00 P.M',
    venue: '401',
    dept: 'Access America',
    bgColor: 'bg-gradient-to-r from-purple-400 to-purple-200',
    image: 'path/to/image4.jpg', // Replace with actual image path
  },
  {
    head: 'Natrramizh: Ezhuthukol Vazhi em Mozhi',
    time: '10:00 A.M - 1:00 P.M',
    venue: '202',
    dept: 'Equilibria',
    bgColor: 'bg-gradient-to-r from-yellow-400 to-yellow-200',
    image: 'path/to/image5.jpg', // Replace with actual image path
  },
  {
    head: 'Natrramizh: Avai Anjaamai',
    time: '10:00 A.M - 1:00 P.M',
    venue: '203',
    dept: 'Equilibria',
    bgColor: 'bg-gradient-to-r from-pink-400 to-pink-200',
    image: 'path/to/image6.jpg', // Replace with actual image path
  },
  {
    head: 'Byte Bank',
    time: '10:00 A.M - 1:00 P.M',
    venue: '406',
    dept: 'Electronica',
    bgColor: 'bg-gradient-to-r from-indigo-400 to-indigo-200',
    image: 'path/to/image7.jpg', // Replace with actual image path
  },
  {
    head: 'Wonder Fest',
    time: '10:00 A.M - 4:00 P.M',
    venue: '212',
    dept: 'Mathematica',
    bgColor: 'bg-gradient-to-r from-teal-400 to-teal-200',
    image: 'path/to/image8.jpg', // Replace with actual image path
  },
  {
    head: 'Neenga Vandha Mattum Podhum',
    time: '11:00 A.M - 1:00 P.M',
    venue: '106',
    dept: 'Equilibria',
    bgColor: 'bg-gradient-to-r from-cyan-400 to-cyan-200',
    image: 'path/to/image9.jpg', // Replace with actual image path
  },
  {
    head: 'Synapse Sculptors',
    time: '11:00 A.M - 1:00 P.M',
    venue: '110',
    dept: 'Biogenesis',
    bgColor: 'bg-gradient-to-r from-orange-400 to-orange-200',
    image: 'path/to/image10.jpg', // Replace with actual image path
  },
  {
    head: 'Mission Impossible',
    time: '2:00 P.M - 5:00 P.M',
    venue: 'LAB-1',
    dept: 'Informatica',
    bgColor: 'bg-gradient-to-r from-blue-400 to-blue-200',
    image: '/Students/informatica.jpg', 
  },
  {
    head: 'Sharp Mind',
    time: '9:00 A.M - 12:00 P.M',
    venue: '309',
    dept: 'Strategia',
    bgColor: 'bg-gradient-to-r from-green-400 to-green-200',
    image: '/Students/informatica.jpg', 
  },
  {
    head: 'Squid Game',
    time: '2:00 A.M - 4:30 P.M',
    venue: '504',
    dept: 'Optica',
    bgColor: 'bg-gradient-to-r from-red-400 to-red-200',
    image: '/Students/informatica.jpg', 
  },
  {
    head: 'Robo-Saga',
    time: '9:30 A.M - 1:30 P.M',
    venue: 'BasketBall Court',
    dept: 'Robotics',
    bgColor: 'bg-gradient-to-r from-yellow-400 to-yellow-200',
    image: '/Students/informatica.jpg', 
  },
  {
    head: 'Bing Bang',
    time: '10:00 A.M - 1:00 P.M',
    venue: '305',
    dept: 'Access America',
    bgColor: 'bg-gradient-to-r from-purple-400 to-purple-200',
    image: '/Students/informatica.jpg', 
  },
  {
    head: 'Technical Pick and Talk',
    time: '10:00 A.M - 1:00 P.M',
    venue: '406',
    dept: 'Electronica',
    bgColor: 'bg-gradient-to-r from-pink-400 to-pink-200',
    image: '/Students/informatica.jpg', 
  },
  {
    head: 'Logic and Ladder',
    time: '10:00 A.M - 1:00 P.M',
    venue: 'LAB-2',
    dept: 'Informatica',
    bgColor: 'bg-gradient-to-r from-teal-400 to-teal-200',
    image: '/Students/informatica.jpg', 
  },
  {
    head: 'Fun Island',
    time: '10:00 A.M - 4:00 P.M',
    venue: '509',
    dept: 'Mathematica',
    bgColor: 'bg-gradient-to-r from-indigo-400 to-indigo-200',
    image: '/Students/informatica.jpg', 
  },
  {
    head: 'Model Exhibit',
    time: '11:00 A.M - 1:00 P.M',
    venue: 'Drawing Hall',
    dept: 'Biogenesis',
    bgColor: 'bg-gradient-to-r from-orange-400 to-orange-200',
    image: '/Students/informatica.jpg', 
  },
  {
    head: 'Ithu Kalavara Bhoomi',
    time: '11:00 A.M - 1:30 P.M',
    venue: 'T and P Hall',
    dept: 'Equilibria',
    bgColor: 'bg-gradient-to-r from-gray-400 to-gray-200',
    image: '/Students/informatica.jpg', 
  },
  {
    head: 'Cognitive Cracking',
    time: '9:30 A.M - 12:00 P.M',
    venue: '310',
    dept: 'Optica',
    bgColor: 'bg-gradient-to-r from-sky-400 to-sky-200',
    image: '/Students/informatica.jpg', 
  },
  {
    head: 'Roadies',
    time: '10:00 A.M - 1:00 P.M',
    venue: '501',
    dept: 'Strategia',
    image: 'path/to/roadies.jpg', // Update with the actual image path
    bgColor: 'bg-gradient-to-r from-blue-400 to-blue-200',
  },
  {
    head: 'Escape Room',
    time: '10:00 A.M - 1:00 P.M',
    venue: '406',
    dept: 'Electronica',
    image: 'path/to/escape-room.jpg', // Update with the actual image path
    bgColor: 'bg-gradient-to-r from-purple-400 to-purple-200',
  },
  {
    head: 'Math Pi-Rates',
    time: '10:00 A.M - 4:00 P.M',
    venue: '502',
    dept: 'Mathematica',
    image: 'path/to/math-pi-rates.jpg', // Update with the actual image path
    bgColor: 'bg-gradient-to-r from-green-400 to-green-200',
  },
  {
    head: 'Fun Max',
    time: '1:00 P.M - 3:00 P.M',
    venue: '416',
    dept: 'Biogenesis',
    image: 'path/to/fun-max.jpg', // Update with the actual image path
    bgColor: 'bg-gradient-to-r from-pink-400 to-pink-200',
  },
  {
    head: 'Fun Max',
    time: '1:00 P.M - 3:00 P.M',
    venue: '416',
    dept: 'Biogenesis',
    image: 'path/to/fun-max.jpg', // Update with the actual image path
    bgColor: 'bg-gradient-to-r from-teal-400 to-teal-200',
  },
];

function Events() {
  return (
    <div className='bg-gradient-to-r from-white to-gray-300 min-h-screen'>
         <Navbar />
         <FootNav />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 p-5'>
        {eventsData.map((event, index) => (
         <div key={index} className={`shadow-xl p-4 rounded-3xl mt-2 ${event.bgColor}`}>

            <div className='text-center p-5 text-black'> {/* Keep text color white for contrast */}
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
    </div>
  );
}

export default Events;