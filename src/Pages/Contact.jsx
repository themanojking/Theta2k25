import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar'; // Correct path to your Navbar component
import Footer from '../Components/Footer'; // Correct path to your Footer component

export const Contact = () => {
    useEffect(() => {
        document.title = "Contact Us"; // Set page title
    }, []);

    return (
        <div className='bg-[#150F24]'>
            <Navbar />

            {/* Image Section */}
            <div className="bg-cover bg-center  lg:h-[60vh] lg:w-screen mt-16" style={{backgroundImage:'url(/Images/Sastra4.jpg)'}}>
                
            

            {/* Title Section */}
            <div className="flex justify-center items-center h-[60vh] relative z-10">
                <h1 className="text-4xl md:text-6xl text-white font-bold ">Contact Us</h1>
            </div>
            </div>

            {/* Contact Information Section */}
            <div className="pb-10 px-5 mt-8">
                <div className="font-sans">
                    <div className="pt-8 md:pt-18 max-w-5xl mx-auto">
                        <div className="bg-white border-4  text-[#844DA3] rounded-lg shadow-lg">
                            <h4 className="text-2xl md:text-3xl font-bold text-center py-4 bg-[#150F24] text-white">
                                Address
                            </h4>
                            <div className="border-b-2 text-[#844DA3] mx-4 py-6">
                                <h6 className="text-xl font-bold text-center">
                                    SASTRA DEEMED TO BE UNIVERSITY
                                </h6>
                                <h6 className="text-xl font-bold text-center">
                                    Srinivas Ramanujan Centre,
                                </h6>
                                <p className="mt-4 text-center leading-7">
                                    KUMBAKONAM-612001,<br />
                                    Thanjavur, Tamil Nadu.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-6">
                                <div className="flex items-center">
                                    <i className="bx bx-envelope text-2xl text-gray-700 mr-2" />
                                    <p className="font-medium text-[#844DA3] tracking-wide">sastraedu@gmail.com</p>
                                </div>
                                <div className="flex items-center">
                                    <i className="bx bx-phone-call text-2xl text-gray-700 mr-2" />
                                    <p className="font-medium text-[#844DA3] tracking-wide">+91 9080480913</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Map Section */}
           <div className='px-5 '>
           <div className="mx-auto mt-10 md:mt-16  md:px-0 max-w-7xl h-96 md:h-[35rem] border-2 border-[#844DA3]  rounded-xl shadow-md">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.498221994441!2d79.38464319278114!3d10.96364042316958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55337f1ce17aa5%3A0xb5ee193422b5ca2e!2sSastra%20University%20Srinivasa%20Ramanujan%20Center%2C%20Kumbakonam!5e0!3m2!1sen!2sin!4v1729186956231!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ borderRadius: '15px', border: 'none' }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
           </div>

            {/* Footer Section */}
            <div className=" mt-10 md:mt-16 ">
                <Footer />
            </div>
           </div>
    );
};

// Export default contact component
export default Contact;


