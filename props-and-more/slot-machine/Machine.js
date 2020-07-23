class Machine extends React.Component{
	render(){
		const {s1,s2,s3} = this.props
		const isWin = (s1===s2) && (s1===s3)
		console.log(isWin)
		return(
		<div>
			<p> {s1} - {s2} - {s3}</p>
			<p>{ isWin ? 'Winner' : 'Loser'}</p>
			
		</div>
		) 
		
	}
}