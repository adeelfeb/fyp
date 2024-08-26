import React from "react";
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div>
            <section id="home" className="home">
                <h1>Welcome to the Summarization Tool</h1>
                <p>Get summaries, MCQs, and more from your YouTube links.</p>
            </section>
            <section id="services" className="services">
                <h2>Our Services</h2>
                <p>Automated summarization, MCQ generation, and more.</p>
            </section>
        </div>
    );
};

export default LandingPage;
