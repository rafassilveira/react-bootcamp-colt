class App extends React.Component {
	
	render() {
		return (
			<div>
				<Friends 
					name={'Elton'}
					hobbies={['piano','singing']}
					
					/>				
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))