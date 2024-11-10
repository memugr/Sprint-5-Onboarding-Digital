import './App.css';
import Card from './components/Card';
import React, { useState } from 'react';

function App() {
  // Passos a l'usuari
  const tutorialData = [
    { title: "Dedica moltes hores", description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament." },
    { title: "Programa projectes propis", description: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge" },
    { title: "Procura descansar", description: "Descansar bé i desconectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge." }
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
        title={tutorialData[step].title}
        description={tutorialData[step].description}
        nextStep={nextStep}
      />
    </div>
  )
}


export default App;
