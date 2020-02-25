import React, { Component } from "react";
import "./pokemon2.css"

class Pokemon2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hp: 0,
      atk: [],
      speed: 0,
      
    
    };
  }
  render(){

  return (
  <h1>{this.props.name}</h1>
    
  );
  }
};

export default Pokemon2;
