class Hello extends React.Component{
	static defaultProps ={
		from:'Anonymous',
		img:'teste'
	}
	render(){
		const bangs = "!".repeat(this.props.bangs)
		return(
		<div>
			<img src={this.props.img}/>
			<p> Hi! {this.props.to} from {this.props.from}  {bangs}</p>			
		</div>
		) 
		
	}
}