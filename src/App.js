import React from 'react';
import './App.css';
import Header from './components/Header'
import Display from './components/Display'

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Display />
			</div>
		)
	}
}

export default App;
