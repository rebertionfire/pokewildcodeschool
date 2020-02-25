import React from "react";

import axios from "axios";
import "./PokemonList.css";
import Pokemon1 from "./pokemon1";
import Pokemon2 from "./pokemon2";

export default class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      Pokemon1: null,
      Pokemon2: null,
      pokemon1Data: null,
      pokemon2Data: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const selectedPokemon = event.target.value;
    if (this.state.Pokemon1 !== null) {
      this.setState({
        Pokemon2: selectedPokemon
      });
    } else {
      this.setState({
        Pokemon1: selectedPokemon
      });
    }

    this.getPokemonData(this.getPokemonFromIndex(selectedPokemon));
  }

  getPokemonFromIndex = index => {
    return this.state.pokemons[index];
  };

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(res => {
      const pokemons = res.data.results;
      this.setState({ pokemons });
    });
  }

  getPokemonData(pokemon) {
    axios.get(pokemon.url).then(res => {
      let pokemonStats = res.data;
      if (this.state.pokemon1Data !== null) {
        this.setState({
          pokemon2Data: pokemonStats
        });
      } else {
        this.setState({
          pokemon1Data: pokemonStats
        });
      }
    });
  }

  //HTML
  render() {

    return (
      <div className="row">
        {this.state.Pokemon1 && (
          <div>
            Player1{" "}
            {this.state.pokemon1Data && (
              <>
                <Pokemon1
                  name={this.state.pokemon1Data.forms[0].name}
                  hp={this.state.pokemon1Data.stats[5].base_stat}
                  atk={[this.state.pokemon1Data.moves[0].move.name, 
                    this.state.pokemon1Data.moves[1].move.name,
                    this.state.pokemon1Data.moves[2].move.name,
                    this.state.pokemon1Data.moves[3].move.name
                  ]}
                  speed = {this.state.pokemon1Data.stats[0].base_stat}
                />

                <img src={this.state.pokemon1Data.sprites.back_default}></img>
              </>
            )}
          </div>
        )}

        <select onChange={this.handleChange}>
          {this.state.pokemons.map((pokemon, index) => (
            <option key={pokemon.name} alt={pokemon.url} value={index}>
              {pokemon.name}
            </option>
          ))}
        </select>
        {this.state.Pokemon2 && (
          <div>
            Player2
            {this.state.pokemon2Data && (
              <>
                <Pokemon2 name={this.state.pokemon2Data.forms[0].name} />

                <img src={this.state.pokemon2Data.sprites.front_default}></img>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}
