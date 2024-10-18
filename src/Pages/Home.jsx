import React from 'react';
import Navbar from '../Components/Navbar';
import videoBg from '../Assets/video.mp4';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  const boxesData = [
    { id: 1, 
      title: "Informatica ", 
       imgSrc: "/Images/Infor.avif",
      content:"Informatica is a tool for integrating and managing data across different systems.",
      path:'/informatica' },

    { id: 2,
       title: "Emulsion ", 
       imgSrc: "/Images/emul.jpg",
       content:"Film Making",
      path:'/emulsion' },
    { id: 3,
       title: "Robotics ",
        imgSrc: "/Images/robo.avif",
      content:"Robotics is the field of designing, building, and programming machines (robots) to perform tasks automatically.",
       path:'/robotic' },
    { id: 4,
       title: "Equilibria ", 
         imgSrc: "/Images/Equili.avif",
        content:"Equilibria refers to a state of balance in a system where opposing forces or reactions occur at equal rates, resulting in no net change.",
       path:'/equilibria' },
    { id: 5,
       title: "Mathematica ", 
        imgSrc: "/Images/mathematica.avif",
      content:"Mathematical refers to anything related to mathematics, involving numbers, calculations, and logical reasoning.",
      path:'/mathametical' },
    { id: 6, 
      title: "Electronica ", 
       imgSrc: "/Images/Electronica.avif",
      content:'Electronic refers to devices or systems that operate using the flow of electric current to control and process information.',
      path:'/electronic' },
    { id: 7,
       title: "Bio-Genesis ",
         imgSrc: "/Images/DNA.jpg",
        content:"Biogenesis is the process by which living organisms arise from pre-existing life, rather than from non-living matter.",
       path:'/biogenesis' },
    { id: 8,
       title: "Optica",
               imgSrc: "/Images/Optica.avif",
              content:"Optics is the branch of physics that studies light and its interactions with matter, including reflection, refraction, and dispersion.",
             path:'/optica' },
    { id: 9,
       title: "Strategia",
            imgSrc: "/Images/Strategia.avif",
           content:"Strategia, or strategy, refers to a plan of action designed to achieve specific goals or objectives, often involving careful planning and resource allocation.",
           path:'/strategia' },
  ];

  return (
    <div className='bg-[#150F24]'>
      {/* Navbar */}
      <Navbar />

      {/* Video Section */}
      <div className="relative">
        <video 
          src={videoBg} 
          autoPlay 
          loop 
          muted 
          className='lg:w-[70%] md:w-[90%] w-[95%] lg:ml-[15rem] md:ml-[3rem] ml-3 md:mt-5 rounded-3xl mt-20'>
        </video>
        <div className='absolute inset-0 flex flex-col justify-center items-center lg:text-8xl text-5xl font-bold text-white'>
          <h1>Coming Soon...</h1>
          <h2>THETA 2K25</h2>
        </div>
      </div>

      {/* Box Grid Section */}
      <div className='my-40'>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {boxesData.map((box) => (
              <div key={box.id} className="bg-white rounded-lg shadow-md p-4 w-80 relative">
                <img
                  src={box.imgSrc}
                  alt={box.title}
                  className="w-32 h-32 object-cover rounded-full absolute top-[-40px] left-1/2 transform -translate-x-1/2 border-4 border-white"
                />
                <h2 className="text-xl font-bold mt-16 mb-6 text-center">{box.title}</h2>
                <h2 className="text-gray-600 mb-4 text-center">
                  {box.content}
                </h2>
                <div className='text-center'>
                  <Link to={box.path} className='px-3 py-2 bg-blue-500 rounded-2xl text-white text-lg'>Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-10'>
<Footer/>
</div>
    </div>
  );
}

export default Home;
