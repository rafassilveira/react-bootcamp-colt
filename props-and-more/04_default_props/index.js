class App extends React.Component {
	
	render() {
		return (
			<div>
				<Hello					
					to="Mario" 					
					bangs={4}					
					
				/>
				<Hello 
					to="Princess" 
					from="Mario"
					bangs={10}
					
					
				/>
				
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))