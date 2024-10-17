import React from 'react';
import Navbar from '../Components/Navbar';
import FootNav from '../Components/FootNav';

const data = [
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
    bgColor: 'bg-gradient-to-r from-teal-400 to-teal-100',
  },
];

function Day3() {
  return (
    <div className='bg-gradient-to-b from-gray-100 to-white min-h-screen'>
         <Navbar />
         <FootNav />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-10 p-5'>
        {data.map((event, index) => (
          <div key={index} className={`shadow-xl p-4 rounded-3xl mt-2 ${event.bgColor}`}>
            <div className='text-center p-5'>
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

export default Day3;
