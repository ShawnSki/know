import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import router from './router';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import NavDrawer from './Components/NavDrawer/NavDrawer';


class App extends Component {
  state = {
    drawerOpen: false
  }

  handleDrawerToggle = () => {
    this.setState((prevState) => {
      return {drawerOpen: !prevState.drawerOpen}
    })
  }
  render() {
    let drawer;

    if (this.state.drawerOpen) {
      drawer = <NavDrawer handleDrawerToggle={this.handleDrawerToggle} />
    }
    return (
      <HashRouter style={{ height: '100%' }}>
        <Navbar handleDrawerToggle={this.handleDrawerToggle} />
        {drawer}
        {router}
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
