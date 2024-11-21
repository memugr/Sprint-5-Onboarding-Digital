import tutorialData from './data/tutorialData.json';
import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import SvgOne from "./assets/time_managment.svg";
import SvgTwo from "./assets/programming.svg";
import SvgThree from "./assets/meditation.svg";

// Mapping SVG paths to imported assets
const images = {
  "./assets/time_managment.svg": SvgOne,
  "./assets/programming.svg": SvgTwo,
  "./assets/meditation.svg": SvgThree,
};

function App() {
  const [step, setStep] = useState(0);

  const updatedTutorialData = tutorialData.map((item) => ({
    ...item,
    image: images[item.image],
  }));

  // Function nextStep
  const nextStep = () => {
    if (step < updatedTutorialData.length - 1) {
      setStep(prev => prev + 1)
    }
  }

  // Function prevStep
  const prevStep = () => {
    if (step > 0) {
      setStep(prev => prev - 1)
    }
  }

  return (
    <div>
      <Card
          image={updatedTutorialData[step].image}
          backgroundColor={updatedTutorialData[step].backgroundColor}
          title={updatedTutorialData[step].title}
          description={updatedTutorialData[step].description}
          prevStep={prevStep}
          nextStep={nextStep}
          step={step}
          totalSteps={updatedTutorialData.length}
      />
    </div>
  )
}

export default App;