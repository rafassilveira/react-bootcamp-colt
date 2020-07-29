import React, { Component } from "react";
import Pokecard from "./Pokecard";
import pokemons from "./pokemonList";
import "./Pokedex.css";

class Pokedex extends Component {
	render() {
		function random(arr) {
			return arr[Math.floor(Math.random() * arr.length)];
		}

		return (
			<div className="Pokedex">
				<Pokecard
					name={random(pokemons).name}
					type={random(pokemons).type}
					id={random(pokemons).id}
					base_experience={random(pokemons).base_experience}
				/>
				<Pokecard
					name={random(pokemons).name}
					type={random(pokemons).type}
					id={random(pokemons).id}
					base_experience={random(pokemons).base_experience}
				/>
				<Pokecard
					name={random(pokemons).name}
					type={random(pokemons).type}
					id={random(pokemons).id}
					base_experience={random(pokemons).base_experience}
				/>
				<Pokecard
					name={random(pokemons).name}
					type={random(pokemons).type}
					id={random(pokemons).id}
					base_experience={random(pokemons).base_experience}
				/>
			</div>
		);
	}
}

export default Pokedex;
