import React, { Component } from "react";
import "./landingpage.css"
import PokemonList from "./PokemonList";


class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    
    };
    this.handleStartBattle = this.handleStartBattle.bind(this);

  }

handleStartBattle(){
    console.log()
}



  
  render(){

  return (
    <section>
      <div>
        Welcome to PokeWilde Code School, possible with React and PokéAPI
      </div>
      <p>
        Logo helpfully provided by Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/roundicons-freebies"
          title="Roundicons Freebies"
        >
          Roundicons Freebies
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </p>
      <button className="btn" onClick = {this.handleStartBattle}>
          <p>Battle!</p>
        </button>
    </section>
  );
  }
};

export default LandingPage;
