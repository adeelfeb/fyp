import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Homepage from "./Components/pages/Home.jsx";
import About from "./Components/pages/Aboutus.jsx";
import Contact from "./Components/pages/Contact.jsx";
import Services from "./Components/pages/Services.jsx";
import './App.css';
import Summarize from "./Components/pages/Summarizer/Summarize.jsx";
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app element globally

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <div className="containerForPages">
                    <Routes>
                        <Route path="/home" element={<Homepage />} />
                        <Route path="/" element={<Homepage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/summarize" element={<Summarize />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
