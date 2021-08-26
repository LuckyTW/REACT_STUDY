import React, { useState } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOut from './components/Demo/DemoOut';

function App() {
  const [showParagraph, setShowParagragh] = useState(false);

  const toggleParagraghHandler = () => {
    setShowParagragh((prevShowParagragh) => !prevShowParagragh);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOut show={showParagraph} />
      <Button onClick={toggleParagraghHandler}>Toggle Paragragh!</Button>
    </div>
  );
}

export default App;
