import React,{Component} from 'react'
import Pokecard from './Pokecard'
import elements from './pokemonList'
import './Pokedex.css'

class Pokedex extends Component{

	
	render(){
	function fixId(id){
	if(id<10){
		return '00'+id
	}else if(id <100){
		return '0'+id
	}else{
		return id
	}
}
		return(
		<div className="Pokedex">
		  
      {elements.map((value, index) => {
        return <p key={index}>
				<Pokecard name={value.name} type={value.type} id={Number(fixId(value.id))} base_experience={value.base_experience}/>
				</p>
      })}
			
				
		</div>
		) 
		
	}
}

export default Pokedex