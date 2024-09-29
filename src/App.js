import React, { useState } from 'react'; // Import React and useState
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import './App.css'; // Import stylesheet
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; // Import routing components

function App() {
  const [mode, setMode] = useState('dark'); // Use state for dark mode

  const toggleMode = () => {
    setMode((prevState) => (prevState === 'light' ? 'dark' : 'light')); // Functional state update
    document.body.style.backgroundColor = mode === 'light' ? 'white' : 'black'; // Set background color based on mode
  };

  return (
    <>
    
      <Navbar title="textutilis" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter the text to search" />
        
        <About />
      </div>
     
    </>
  );
}

export default App;