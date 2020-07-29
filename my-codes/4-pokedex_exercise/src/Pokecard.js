import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
	static defaultProps = {
		id: 4,
		name: "Charmander",
		type: "fire",
		base_experience: 62,
	};

	render() {
		function fixId(id) {
			if (id < 10) {
				return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${id}.png`;
			} else if (id < 100) {
				return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${id}.png`;
			} else {
				return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
			}
		}
		return (
			<div className="Pokecard">
				<p>{this.props.name}</p>
				<img src={fixId(this.props.id)} alt={this.props.name} />
				<p>Type:{this.props.type}</p>
				<p>EXP:{this.props.base_experience}</p>
			</div>
		);
	}
}
export default Pokecard;
