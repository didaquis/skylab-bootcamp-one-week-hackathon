import React, { Component } from 'react';


import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import MainPanel from './components/MainPanel';


/**
 * Diseño de componentes:
 *
 * 		App
 * 			Header
 * 			SearchPanel
 * 				SelectButton
 * 				SelectButton
 * 				InputButton
 * 		  		GoButton
 *       	MainPanel
 *       		Modal
 *       		ColumnsPanel
 *       		EventList
 *       			EventBox
 * 
 */


class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<SearchPanel />
				<MainPanel />
			</div>
		);
	}
}

export default App;