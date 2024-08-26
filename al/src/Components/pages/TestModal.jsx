import React from 'react';
import Modal from 'react-modal';
import LoginSignup from '../LoginSignup/LoginSignup';

// Ensure that you set the app element to avoid screen readers reading outside the modal
Modal.setAppElement('#root');

function TestModal({ isOpen, onRequestClose }) {
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex justify-center items-center p-4"
      overlayClassName="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
      shouldCloseOnOverlayClick={true} // Ensure clicking on the overlay closes the modal
    >
      <div className="bg-white p-6 rounded-lg w-[500px]">
        <LoginSignup />
        <button 
          onClick={onRequestClose} 
          className="bg-red-500 text-white p-2 rounded-md mt-4"
        >
          Close Modal
        </button>
      </div>
    </Modal>
  );
}

export default TestModal;
