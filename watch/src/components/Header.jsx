// import React, { useState } from "react";
// import Modal from "react-modal";
// import { Link, useMatch, useResolvedPath } from "react-router-dom";
// import Login from "./Login.jsx"; // The login component

// // Set the app element for accessibility
// Modal.setAppElement('#root');

// const Header = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     // Function to handle modal open and close
//     const handleOpenModal = () => setIsModalOpen(true);
//     const handleCloseModal = () => setIsModalOpen(false);

//     // Toggle menu for small screens
//     const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//     return (
//         <nav className="bg-white shadow-md fixed w-full z-10">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center h-16">
//                     {/* Site Title */}
//                     <Link to="/" className="text-2xl font-bold text-gray-800">Watch To Work</Link>

//                     {/* Hamburger menu for mobile */}
//                     <div className="flex md:hidden">
//                         <button 
//                             onClick={toggleMenu} 
//                             className="text-gray-500 hover:text-gray-700 focus:outline-none"
//                         >
//                             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Navigation links */}
//                     <div className={`md:flex items-center ${isMenuOpen ? "block" : "hidden"} md:block`}>
//                         <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
//                             <CustomLink to="/home">Home Page</CustomLink>
//                             <CustomLink to="/services">Services</CustomLink>
//                             <CustomLink to="/contact">Contact Us</CustomLink>
//                             <CustomLink to="/summarize">Summarize</CustomLink>
//                             <li>
//                                 <button 
//                                     onClick={handleOpenModal} // Open modal when clicked
//                                     className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
//                                 >
//                                     Login/SignUp
//                                 </button>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             {/* Modal Component */}
//             <Modal 
//                 isOpen={isModalOpen}
//                 onRequestClose={handleCloseModal}
//                 className="fixed inset-0 flex justify-center items-center p-4"
//                 overlayClassName="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
//                 shouldCloseOnOverlayClick={true} // This should already be present
//             >
//                 <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
//                     <button 
//                         onClick={handleCloseModal} 
//                         className="absolute top-2 right-2 text-3xl font-bold text-gray-500 hover:text-gray-700" // Increase size here
//                     >
//                         &times;
//                     </button>
//                     <Login onClose={handleCloseModal} /> {/* Pass close handler to the Login component */}
//                 </div>
//             </Modal>

//         </nav>
//     );
// };

// function CustomLink({ to, children, ...props }) {
//     const resolvedPath = useResolvedPath(to);
//     const isActive = useMatch({ path: resolvedPath.pathname, end: true });

//     return (
//         <li className={isActive ? "text-blue-600 font-semibold" : "text-gray-800 hover:text-blue-600 transition-colors duration-200"}>
//             <Link to={to} {...props}>
//                 {children}
//             </Link>
//         </li>
//     );
// }

// export default Header;


import React, { useState } from "react";
import Modal from "react-modal";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Login from "./Login.jsx"; // The login component

// Set the app element for accessibility
Modal.setAppElement('#root');

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Functions to handle modal visibility
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    // Toggle menu for mobile view
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="text-2xl font-bold text-gray-800">Watch To Work</Link>
                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <div className={`md:flex items-center ${isMenuOpen ? "block" : "hidden"} md:block`}>
                        <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                            <CustomLink to="/home">Home Page</CustomLink>
                            <CustomLink to="/services">Services</CustomLink>
                            <CustomLink to="/contact">Contact Us</CustomLink>
                            <CustomLink to="/summarize">Summarize</CustomLink>
                            <li>
                                <button onClick={handleOpenModal} className="text-gray-800 hover:text-blue-600 transition-colors duration-200">
                                    Login/SignUp
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                className="fixed inset-0 flex justify-center items-center p-4"
                overlayClassName="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
                shouldCloseOnOverlayClick={true}
            >
                <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
                    <button onClick={handleCloseModal} className="absolute top-2 right-2 text-3xl font-bold text-gray-500 hover:text-gray-700">
                        &times;
                    </button>
                    <Login onClose={handleCloseModal} />
                </div>
            </Modal>
        </nav>
    );
};

const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "text-blue-600 font-semibold" : "text-gray-800 hover:text-blue-600 transition-colors duration-200"}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
};

export default Header;
