import './App.css';
import Card from './components/Card';
import React, { useState } from 'react';
import SvgOne from "./assets/time_managment.svg";
import SvgTwo from "./assets/programming.svg";
import SvgThree from "./assets/meditation.svg";

function App() {
  // Passos a l'usuari
  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      image: SvgOne,
      backgroundColor: "#3fb5a3"
    },
    {
      title: "Programa projectes propis",
      description: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge",
      image: SvgTwo,
      backgroundColor: "#D3D3D3"
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      image: SvgThree,
      backgroundColor: "#FFD66B"
    }
  ]
  const [step, setStep] = useState(0)

  // Implementa funció nextStep
  const nextStep = () => {
    if (step < tutorialData.length - 1) {
      setStep(prev => prev + 1)
    }
  }

  return (
    <div>
      <Card
        image={tutorialData[step].image}
        backgroundColor={tutorialData[step].backgroundColor}
        title={tutorialData[step].title}
        description={tutorialData[step].description}
        nextStep={nextStep}
        step={step}
        totalSteps={tutorialData.length}
      />
    </div>
  )
}


export default App;
