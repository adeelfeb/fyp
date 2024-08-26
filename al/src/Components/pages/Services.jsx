import React, { useRef, useState } from 'react';
import Modal from 'react-modal';
import LoginSignup from '../LoginSignup/LoginSignup';

// Ensure that you set the app element to avoid screen readers reading outside the modal
Modal.setAppElement('#root');

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  return (
    <div  
      className="h-screen flex flex-col items-center gap-6 bg-[#ebebeb] text-black p-4 m-4 min-w-[10%] min-h-[10%]"
    >
      <h1 className="text-5xl font-bold mt-4">Check The Login Popup Here</h1>
      
      <button 
        className="bg-[#A6B1E1] p-2 rounded-[5px] hover:bg-[#424874] text-white transition-colors"
        onClick={() => setIsModalOpen(true)}
      >
        Login/Signup
      </button>

      <Modal 
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="fixed inset-0 flex justify-center items-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        shouldCloseOnOverlayClick={true} // Ensure clicking on the overlay closes the modal
      >
  <div className="bg-transparent p-6 rounded-lg w-[500px] relative">
          {/* Cross Icon */}
          <button 
            onClick={() => setIsModalOpen(false)} 
            className="absolute top-2 right-2 text-4xl font-bold text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          <LoginSignup />
        </div>
      </Modal>
    </div>
  );
}
