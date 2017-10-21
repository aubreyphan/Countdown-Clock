import React, { Component } from 'react';
import Clock from './Clock';
import Timer from './Timer';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			deadline: "December 25, 2017",
			newDeadline: '',
		}
	}

	changeDeadline() {
		this.setState({
			deadline: this.state.newDeadline
		})
	}

	changeTimeEnd() {
		this.setState({
			timeEnd: this.state.newTimeEnd
		})
	}

	render(){
		return(
			<div className="App">

				<div className="App-title">Countdown to {this.state.deadline}</div>
				<Clock 
					deadline = {this.state.deadline}
				/>
				<Form inline>
					<FormControl 
					className = 'Deadline-input'
					placeholder='new date' 
					onChange = { event => this.setState({ newDeadline: event.target.value }) }
					/>
					<Button onClick={ () => this.changeDeadline() }>Submit</Button> 
				</Form>
			</div>
		)
	}
}

export default App;