import React, { Component } from "react";
import "./landingpage.css"

class LandingPage extends Component {
  
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

    </section>
  );
  }
};

export default LandingPage;
