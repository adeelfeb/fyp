import React from "react";
import "./CSS/Home.css";
import LoginSignup from "../LoginSignup/LoginSignup";
import CardSection from "./CardSection";
import imageCard1 from "./images/SummaryImageWithMagnifier.jpg";
import imageCard2 from "./images/ImplementImage.jpg"
import imageCard3 from "./images/SummaryImageWithMagnifier2.jpg"
import imageforBanner1 from "./images/learnigFromVideoLectures.jpg"
import imageforBanner2 from "./images/KidsLearningFroVideoLectures.jpg"
import imageForSecondSection from "./images/Summarize.png"
import { Link, useMatch, useResolvedPath } from "react-router-dom";





export default function HomePage() {
    const cardData1 = {
        imageSrc: imageCard1, // Path to your image
        title: 'Summarize Videos',
        description: 'Without Wasting Time Summarize Video\'s Content for better understanding'
    };
    const cardData2 = {
        imageSrc: imageCard2, // Path to your image
        title: 'Generate Quiz',
        description: 'Get A quiz for assesment on the Video Leacture'
    };
    const cardData3 = {
        imageSrc: imageCard3, // Path to your image
        title: 'Get Assestments',
        description: 'You will be scored as given your assesment to help you retain the content more properly'
    };

    return (
        <div>


            <div className="containerForherosection">
                <div className="leftTextForHero"><h1>Be Productive <br /> with Your Learning</h1></div>
                <div className="leftTextForHero"><p>Utilize our tools to get the lecture video's content summariezed for you. Get short quiz and assesment</p>
                <Link to={"/summarize"}>
                    <button className="buttonForHero">Summarize Now!</button>
                </Link>
                </div>
            </div>


            <div className="imageForBanner">
                <img src={imageforBanner1} alt="Watch To Work" />
            </div>

            <div className="secondSectionInPage">
                <img src={imageForSecondSection} alt="" className="imageForTheSecondSection" />
                <p className="textForSecondSection"> <b>Get rid of tutorial hell!</b> <br />
                Utilize our tool to retain what you have learned<br />
                Get <b>Summary</b> and <b>MCQs</b> plus <b>Short</b> question Generated for You.
                
                </p>
            </div>



            <div className="conatiningCardsAndHeading">
            <div className="headingForCard">
            <h1 className="HeadingForCards">What We offer</h1>
            <div className="containingCards">
            
                <CardSection 
                    imageSrc={cardData1.imageSrc}
                    title={cardData1.title}
                    description={cardData1.description}
                />
                <CardSection 
                    imageSrc={cardData2.imageSrc}
                    title={cardData2.title}
                    description={cardData2.description}
                />
                <CardSection 
                    imageSrc={cardData3.imageSrc}
                    title={cardData3.title}
                    description={cardData3.description}
                />
            </div>
            </div>
            </div>
            <div className="footerspace"></div>
        </div>
    );
}
