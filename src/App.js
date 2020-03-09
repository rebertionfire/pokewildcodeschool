import React, { Component } from "react";
import logo from "./pokemon.svg";
import "./App.css";
import LandingPage from "./components/landingpage";
import PokemonList from "./components/PokemonList";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <LandingPage />
        </header>
      </div>
    );
  }
}

export default App;
