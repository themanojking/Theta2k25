import React from 'react';
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-[#150F24] text-white p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Address Column */}
        <div className="text-center">
          <div className="text-2xl font-bold text-[#844DA3] mb-4">Address</div>
          <div className="mb-2">Office of Admissions</div>
          <div className="mb-2">SASTRA DEEMED TO BE UNIVERSITY</div>
          <div className="mb-2">Srinivas Ramanujan Centre,</div>
          <div className="mb-2">KUMBAKONAM-612001</div>
          <div className="mb-2">Tamilnadu, India.</div>
        </div>

        {/* Overview Section */}
        <div className="text-center font-serif">
          <div className="text-2xl font-semibold md:mb-4 mt-4 text-[#844DA3]">Overview</div>
          <p className="cursor-pointer text-xl"><Link to={'/'}>Home</Link></p>
          <p className="cursor-pointer text-xl"><Link to={'/event'}>Event</Link></p>
          <p className="cursor-pointer text-xl"><Link to={'/about'}>About</Link></p>
          <p className="cursor-pointer text-xl"><Link to={'/contact'}>Contact Us</Link></p>
        </div>

        {/* Social Media Section */}
        <div className="text-center mt-5">
          <h1 className="text-3xl font-serif mb-4 text-[#844DA3]">Follow Us</h1>
          <div className="flex justify-center gap-4">
            <p className="text-3xl cursor-pointer"><FaWhatsapp /></p>
            <p className="text-3xl cursor-pointer"><FaInstagram /></p>
            <p className="text-3xl cursor-pointer"><FaYoutube /></p>
          </div>
        </div>
        
      </div>

      {/* Footer Note */}
      <div className="mt-8 md:mt-16 border-t-2 border-white text-center pt-4">
        <h1 className="text-sm md:text-lg lg:text-xl text-[#844DA3] font-extrabold font-serif">
          @Designed and Developed by Delta Info
        </h1>
      </div>
    </div>
  );
}

export default Footer;