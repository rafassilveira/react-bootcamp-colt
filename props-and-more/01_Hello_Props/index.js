class App extends React.Component {
	
	render() {
		return (
			<div>
				<Hello 
					to="Mario" 
					from="Luigi"
					bangs={4}
					img={"https://s2.glbimg.com/XtGquOjcsqtxmRFjvQsFv9oIqY0=/290x290/s.glbimg.com/jo/g1/f/original/2011/05/17/qrcode.jpg"}
					
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