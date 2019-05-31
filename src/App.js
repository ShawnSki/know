import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import router from './router';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <HashRouter>
      <Navbar />
      {router}
    </HashRouter>
  );
}

export default App;
