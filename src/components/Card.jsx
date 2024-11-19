import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
import Indicator from './Indicator';

function Card({ title, description, image, backgroundColor, nextStep, prevStep, step, totalSteps }) {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (animationClass) {
            const timeout = setTimeout(() => setAnimationClass(''), 500);
            return () => clearTimeout(timeout);
        }
    }, [animationClass]);

    //Animations
    const handleNext = () => {
        setAnimationClass('slide-out-left');
        setTimeout(() => {
            nextStep();
            setAnimationClass('slide-in-right');
        }, 300);
    };

    const handlePrev = () => {
        setAnimationClass('slide-out-right');
        setTimeout(() => {
            prevStep();
            setAnimationClass('slide-in-left');
        }, 300);
    };

    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card shadow custom-card">
                        <div
                            className={`card-img-top d-flex align-items-center justify-content-center image-container ${animationClass}`}
                            style={{
                                backgroundColor: backgroundColor,
                                height: '350px',
                                borderTopLeftRadius: '20px',
                                borderTopRightRadius: '20px',
                            }}
                        >
                            <img
                                src={image}
                                alt={title}
                                className="img-fluid"
                                style={{ maxHeight: '150px', objectFit: 'contain' }}
                            />
                        </div>
                        <div className="card-body text-start">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between align-items-center bg-white">
                            <Indicator totalSteps={totalSteps} currentStep={step} />
                            <div className="button-group d-flex">
                                {step > 0 && (
                                    <button
                                        className="btn btn-light rounded-circle me-2"
                                        onClick={handlePrev}
                                    >
                                        <FaArrowLeft />
                                    </button>
                                )}
                                {step < totalSteps - 1 && (
                                    <button
                                        className="btn btn-dark rounded-circle"
                                        onClick={handleNext}
                                    >
                                        <FaArrowRight />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;