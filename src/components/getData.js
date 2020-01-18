import React from "react";

import axios from "axios";

export default class PokemonList extends React.Component {
  state = {
    pokemons: [],
    pokemon1: "",
    pokemon2: ""
  };

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(res => {
      const pokemons = res.data.results;
      this.setState({ pokemons });
    });
  }

  render() {
    return (
      <div>
        <select>
          {this.state.pokemons.map((pokemon,index) => (
            <option value={pokemon.name} onClick= {()=>{
              const chosenPokemon = this.state.pokemons[index];
              alert('Hello')

              this.setState({
                pokemon1 : chosenPokemon
                
              })
            }
            }>{pokemon.name}</option>
          ))}
        </select>
        <button className="btn">
          <p>Battle!</p>
        </button>
      </div>
    );
  }
}
