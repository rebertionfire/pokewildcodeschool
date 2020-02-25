import React from "react"



export const handleSelectedPokemon = event => {

    const selectedPokemon = event.target.value
    if (this.state.Pokemon1 !== null) {
      this.setState({
        Pokemon2: selectedPokemon
      });
      
    } else {
      this.setState({
        Pokemon1: selectedPokemon
      });
    }

    this.getPokemonData(this.getPokemonFromIndex(selectedPokemon))
  }
