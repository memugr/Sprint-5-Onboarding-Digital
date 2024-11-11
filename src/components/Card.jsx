import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';

function Card({ title, description, image, backgroundColor, nextStep, step, totalSteps }) {
    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card shadow custom-card">
                        <div
                            className="card-img-top d-flex align-items-center justify-content-center"
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
                            <div className="dots">
                                {Array.from({ length: totalSteps }, (_, index) => (
                                    <span
                                        key={index}
                                        className={`dot ${step === index ? 'active' : ''}`}
                                    ></span>
                                ))}
                            </div>
                            <button className="btn btn-dark rounded-circle" onClick={nextStep}>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
