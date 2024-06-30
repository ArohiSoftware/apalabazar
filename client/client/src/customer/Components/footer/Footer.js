import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black shadow-md box-border w-full text-left font-bold p-14">
            <div className="flex flex-wrap justify-between">
                {/* Footer Left */}
                <div className="w-full md:w-2/5 mb-8 md:mb-0">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_YhaXWp1A9kZxpeXYpCL0oj0764uVAWjdA&s'></img>
                    <p className="text-white mt-5 mb-3">
                        <a href="#" className="hover:underline transition ease-in-out duration-300">Home</a> |
                        <a href="#" className="hover:underline transition ease-in-out duration-300"> Blog</a> |
                        <a href="#" className="hover:underline transition ease-in-out duration-300"> Pricing</a> |
                        <a href="#" className="hover:underline transition ease-in-out duration-300"> About</a> |
                        <a href="#" className="hover:underline transition ease-in-out duration-300"> Faq</a> |
                        <a href="#" className="hover:underline transition ease-in-out duration-300"> Contact</a>
                    </p>
                    <p className="text-gray-300 text-sm font-normal">Company Name © 2015</p>
                </div>

                {/* Footer Center */}
                <div className="w-full md:w-2/5 mb-8 md:mb-0">
                    <div className="mb-4">
                        <i className="fa fa-map-marker text-white bg-gray-800 text-xl w-10 h-5 rounded-full text-center leading-10 mr-3"></i>
                        <p className="text-white">
                            <span className="block font-normal text-sm">444 S. Cedros Ave</span>
                            Solana Beach, California
                        </p>
                    </div>
                    <div className="mb-4">
                        <i className="fa fa-phone text-white bg-gray-800 text-xl w-10 h-5 rounded-full text-center leading-10 mr-3"></i>
                        <p className="text-white">+1.555.555.5555</p>
                    </div>
                    <div className="">
                        <i className="fa fa-envelope text-white bg-gray-800 text-xl w-10 h-5 rounded-full text-center leading-10 mr-3"></i>
                        <p className="text-white">
                            <a href="mailto:support@company.com" className="text-teal-400 hover:underline transition ease-in-out duration-300">support@company.com</a>
                        </p>
                    </div>
                </div>

                {/* Footer Right */}
                <div className="w-full md:w-1/5">
                    <p className="text-gray-400 text-sm font-normal mb-4">
                        <span className="block text-white text-base font-bold mb-3">About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>
                    <div className="flex mt-6 space-x-3">
                        <a href="#" className="w-9 h-9 bg-gray-800 text-white text-xl flex items-center justify-center rounded hover:underline transition ease-in-out duration-300">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#" className="w-9 h-9 bg-gray-800 text-white text-xl flex items-center justify-center rounded hover:underline transition ease-in-out duration-300">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#" className="w-9 h-9 bg-gray-800 text-white text-xl flex items-center justify-center rounded hover:underline transition ease-in-out duration-300">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="#" className="w-9 h-9 bg-gray-800 text-white text-xl flex items-center justify-center rounded hover:underline transition ease-in-out duration-300">
                            <i className="fa fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
