class Machine extends React.Component{
	render(){
		const {s1,s2,s3} = this.props
		const isWin = (s1===s2) && (s1===s3)
		const color ={fontSize:'30px', backgroundColor:'purple'}
		return(
	<div className="Machine">
			<p style={color}> 
				{s1} - {s2} - {s3}
			</p>
			<p
				className={isWin ? 'win':'lose'}>
				{ isWin ? 'Winner' : 'Loser'}
			</p>
			
		</div>
		) 
		
	}
}