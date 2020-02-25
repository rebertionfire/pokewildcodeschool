import React, { Component } from "react";
import "./pokemon1.css"

class Pokemon1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hp: 0,
      atk: [],
      speed: 0,
    };
    
  }
  getStats = () =>{
    this.setState({
      name : this.props.name,
      
      hp : this.props.hp,

      atk : this.props.atk,

      speed : this.props.speed
    })

  }
  componentDidMount() {
    this.getStats()
  }
  render(){


  return (
    <div>
  <h1>{this.state.name} </h1>
  </div>
    
  );
  }
};

export default Pokemon1;
