import React,{Component} from 'react'
import './Pokecard.css'

class Pokecard extends Component{
	static defaultProps ={
		id: 4,
		name: 'Charmander',
		type: 'fire',
		base_experience: 62
	}
	
	
	render(){
		console.log(this.props.id)
		return(
		<div className="Pokecard">
			<p>{this.props.name}</p>	
			<img src={ `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.props.id}.png`} alt={this.props.name}/>
			<p>Type:{this.props.type}</p>	
			<p>EXP:{this.props.base_experience}</p>			
		</div>
		) 
		
	}
}
export default Pokecard