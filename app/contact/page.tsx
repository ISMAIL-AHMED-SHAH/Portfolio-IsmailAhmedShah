'use client';

import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';

function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-gray-100 p-4">
            <div className="max-w-3xl w-full p-8 rounded-lg shadow-2xl bg-gray-800 border border-gray-700 transition-all hover:border-purple-500 hover:shadow-purple-500/50">
                <div className="text-center">
                    <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold pb-1">Contact Me Personally</h1>
                    <p className="text-lg mb-6">
                        You can reach me at{" "}
                        <a href="mailto:ismailahmedshahpk@gmail.com" className="underline text-blue-400 hover:text-blue-300">
                            ismailahmedshahpk@gmail.com
                        </a>{" "}
                        or call us at{" "}
                        <a href="tel:+923322241405" className="underline text-blue-400 hover:text-blue-300">
                            +923322241405
                        </a>.
                    </p>
                    <h2 className="text-bg text-2xl md:text-3xl lg:text-[1.5rem] font-bold pb-1">Connect with us on social media</h2>
                    <div className="flex space-x-6 justify-center">
                        <a href="https://www.linkedin.com/in/ismail-ahmed-shah-2455b01ba/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                            <FaLinkedin className="text-3xl" />
                        </a>
                        <a href="https://github.com/ISMAIL-AHMED-SHAH" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                            <FaGithub className="text-3xl" />
                        </a>
                        <a href="https://wa.me/+923322241405" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors duration-300">
                            <FaWhatsapp className="text-3xl" />
                        </a>
                        <a href="https://www.instagram.com/ahmedshahismail?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                            <FaInstagram className="text-3xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;