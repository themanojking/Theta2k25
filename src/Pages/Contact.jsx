import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export const Contact = () => {
    useEffect(() => {
        document.title = "Contact Us";
    }, []);

    return (
        <>
            <Navbar />

            {/* Image Section */}
            <div className="relative mt-8">
                <img
                    src="./360_F_829343592_9FbtgnN15AZJ2bunUhDzVvZaxssq1Q65.jpg"
                    alt="Contact Us"
                    className="w-full h-[50vh] md:h-[65vh] object-cover"
                />
            </div>

            {/* Title Section */}
            <div className="flex justify-center items-center h-[60vh] relative z-10">
                <h1 className="text-4xl md:text-6xl text-white font-bold">Contact Us</h1>
            </div>

            {/* Contact Information Section */}
            <div className="pb-10">
                <div className="font-sans">
                    <div className="pt-8 md:pt-18 max-w-5xl mx-auto">
                        <div className="bg-white border-4 border-[#92553D] rounded-lg shadow-lg">
                            <h4 className="text-2xl md:text-3xl font-bold text-center py-4 bg-[#92553D] text-white">
                                Registered Address
                            </h4>
                            <div className="border-b-2 border-[#92553D] mx-4 py-6">
                                <h6 className="text-xl font-bold text-center">
                                    Smart Dry Fruits
                                </h6>
                                <p className="mt-4 text-center leading-7">
                                    31, Sarangapani East Street,<br />
                                    Utchi Pillaiyar Kovil,<br />
                                    Kumbakonam, Tamil Nadu 612001, India.
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-6">
                                <div className="flex items-center">
                                    <i className="bx bx-envelope text-gray-700 mr-2" />
                                    <p className="font-medium tracking-wide">contactsmartdryfruits@gmail.com</p>
                                </div>
                                <div className="flex items-center">
                                    <i className="bx bx-phone-call text-gray-700 mr-2" />
                                    <p className="font-medium tracking-wide">+91 7339534672</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Map Section */}
            <div className="mx-auto mt-10 md:mt-16 px-4 md:px-10 max-w-7xl h-96 md:h-[35rem] border-2 border-[#92553D] rounded-xl shadow-md">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.498221994441!2d79.38464319278114!3d10.96364042316958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55337f1ce17aa5%3A0xb5ee193422b5ca2e!2sSastra%20University%20Srinivasa%20Ramanujan%20Center%2C%20Kumbakonam!5e0!3m2!1sen!2sin!4v1729186956231!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ borderRadius: '15px', border: 'none' }}
                    allowFullScreen
                    loading="lazy"
                />
            </div>

            {/* Footer Section */}
            <div className="bg-black mt-10 md:mt-16 px-4">
                <Footer />
            </div>
        </>
    );
};
// Contact.jsx
export default Contact;

