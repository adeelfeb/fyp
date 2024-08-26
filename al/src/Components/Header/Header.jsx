import React, { useState } from "react";
import Modal from "react-modal";
import LoginSignup from "../LoginSignup/LoginSignup"; // Go up one level and then into the LoginSignup folder
import "./Header.css"; // Correct CSS file import
import { Link, useMatch, useResolvedPath } from "react-router-dom";

// Set the app element for accessibility
Modal.setAppElement('#root');

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle modal open and close
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <nav className="nav">
            <Link to="/" className="site-title">Watch To Work</Link>
            <ul>
                <CustomLink to={"/home"}>Home Page</CustomLink>
                <CustomLink to={"/services"}>Services</CustomLink>
                <CustomLink to={"/contact"}>Contact Us</CustomLink>
                <CustomLink to={"/summarize"}>Summarize</CustomLink>
                {/* Custom Button for Login/SignUp */}
                <li>
                    <button 
                        className="modal-button" // Remove predefined styles
                        onClick={handleOpenModal}
                    >
                        Login/SignUp
                    </button>
                </li>
            </ul>

            {/* Modal Component */}
            <Modal 
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                className="fixed inset-0 flex justify-center items-center p-4"
                overlayClassName="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
                shouldCloseOnOverlayClick={true} // Ensure clicking on the overlay closes the modal
            >
                <div className="bg-transparent p-6 rounded-lg w-[500px] relative">
                    {/* Cross Icon */}
                    <button 
                        onClick={handleCloseModal} 
                        className="absolute top-2 right-2 text-4xl font-bold text-gray-500 hover:text-gray-700"
                    >
                        &times;
                    </button>
                    <LoginSignup />
                </div>
            </Modal>
        </nav>
    );
};

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default Header;
