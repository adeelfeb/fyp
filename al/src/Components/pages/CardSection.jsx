import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type-checking (optional)
import './CSS/CardSection.css'; // Ensure the CSS file path is correct

export default function CardSection({ imageSrc = 'https://via.placeholder.com/150', title, description }) {
    return (
        <div className="cardSection">
            <img src={imageSrc} alt={title} className="imageForCard" />
            <div className="textSectionOfCard">
            <h3 className='HeadingOfCardText'>{title}</h3>
            <p className='DescriptionText'>{description}</p>
            </div>
        </div>
    );
}

// Optional: Define the expected types for the props
CardSection.propTypes = {
    imageSrc: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
