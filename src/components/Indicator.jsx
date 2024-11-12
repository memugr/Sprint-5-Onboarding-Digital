import React from 'react';
import './Card.css';

function Dot({ active }) {
    return <span className={`dot ${active ? 'active' : ''}`}></span>;
}

function Indicator({ totalSteps, currentStep }) {
    return (
        <div className="dots">
            {Array.from({ length: totalSteps }).map((_, index) => (
                <Dot
                    key={index}
                    active={index === currentStep} />
            ))}
        </div>
    );
}

export default Indicator;
