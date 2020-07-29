import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
	render() {
		console.log(Pokedex);
		return (
			<div>
				<Pokedex />
				<Pokedex />
			</div>
		);
	}
}

export default Pokegame;
