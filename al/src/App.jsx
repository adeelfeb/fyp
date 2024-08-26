import React from "react";
import Header from "./Components/Header/Header.jsx";

import Homepage from "./Components/pages/Home.jsx";
import About from "./Components/pages/Aboutus.jsx";
import Contact from "./Components/pages/Contact.jsx";
import Services from "./Components/pages/Services.jsx";
import './App.css'
import {Route, Routes} from "react-router-dom"
import Summarize from "./Components/pages/Summarizer/Summarize.jsx";

import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app element globally

function App() {
    let components 

    
    return (
        <div className="App">

            <Header></Header>
            <div className="containerForPages">
            <Routes>
                <Route path="/home" element={<Homepage/>}></Route>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/services" element={<Services/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/summarize" element={<Summarize/>}></Route>
            </Routes>
            </div>



            
        </div>
    );
}

export default App;
