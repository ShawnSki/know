import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import router from './router';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <HashRouter>
      <Navbar />
      {router}
      <Footer />
    </HashRouter>
  );
}

export default App;
