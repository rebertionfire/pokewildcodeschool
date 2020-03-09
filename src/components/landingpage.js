import React, { Component } from "react";
import "./landingpage.css"
import PokemonList from "./PokemonList";
import BattleContext from "./battleContext"


class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      battle : false

    };
    this.handleStartbattle = this.handleStartbattle.bind(this);

  }

handleStartbattle(){
  this.battle ? console.log('entering battle') : console.log('choose your pokemons')
}




  
  render(){

  return (
    <BattleContext.Consumer>
        {value => <section>
      {value ? <div>Battle is On</div> :
      <div>
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
      <button className="btn" onClick = {this.handleStartbattle}>
          <p>battle!</p>
        </button>
        <PokemonList/>
        </div>}

    </section> }
        


    
    </BattleContext.Consumer>
  );
  }
};

export default LandingPage;
