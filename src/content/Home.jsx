import HeroCard, { rarities } from "../components/HeroCard";
import Navbar from "../components/Navbar";
import React, { Component } from "react";

let a = 0;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rarity: "common",
    };
  }

  test() {
    a = (a + 1) % 4;
    this.setState({
      rarity: rarities[a],
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <HeroCard rarity={this.state.rarity} element="water" />
        <button onClick={() => this.test()}>Teste</button>
      </div>
    );
  }
}
