class Hello extends React.Component{
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