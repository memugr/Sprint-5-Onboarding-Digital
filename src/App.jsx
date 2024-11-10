import './App.css';
import Card from './components/Card';
import React, { useState } from 'react';

function App() {
  // Passos a l'usurari
  const tutorialData = [
    { title: "Dedica moltes hores", description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament." }
  ]
  const [step, setStep] = useState(0)

  return (
    <div>
      <Card
        title={tutorialData[step].title}
        description={tutorialData[step].description}
      />
    </div>
  )
}


export default App;
