import React from 'react';
import './App.css';
import SidebarComponent from './components/global/SidebarComponent';
import MainComponent from './components/global/MainComponent';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
      <div className="App">
        <SidebarComponent />
        <MainComponent /> 
      </div>
  );
}

export default App;
