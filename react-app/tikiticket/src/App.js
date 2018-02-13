import React, { Component } from 'react';


import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import MainPanel from './components/MainPanel';
import ticketmasterApi from './utils/ticketmaster-api-0.5';



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

	constructor() {
		super()
		this.state = {
			searchPanel: false,
			results: []
		}
	}

	getQueryParams = (city, what, keyword) => {
		keyword? 		
			ticketmasterApi.searchEventsOnASpanishCityAndSegmentNameAndKeyword(city, what, keyword).then(res => this.testResults(res._embedded.events)).catch(error => { throw new Error(error)})
		:
			ticketmasterApi.searchEventsOnASpanishCityAndSegmentName(city, what).then(res => this.testResults(res._embedded.events)).catch(error => { throw new Error(error)});

		 
	}

	testResults = (res) => {
		res.length? this.setState({searchPanel : true}) : null;
		this.setState({results:res})
	}


	render() {
		return (
			<div>
				<Header />
				<SearchPanel onSubmit={this.getQueryParams} />
				<MainPanel searchresults={this.state.results} displayThis={this.state.searchPanel}/>
			</div>
		);
	}
}

export default App;