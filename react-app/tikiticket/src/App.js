import React, { Component } from 'react';

import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import MainPanel from './components/MainPanel';
import ticketmasterApi from './utils/ticketmaster-api-0.7';

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
 *       		EventList
 *       			EventBox
 * 
 */

class App extends Component {

	constructor() {
		super()
		this.state = {
			searchPanel: false,
			results: [],
			page: 0,
			lastQueryCity: '',
			lastQueryWhat: '',
			lastQueryKeyword: ''
		}
	}

	getQueryParams = (city, what, keyword) => {
		keyword? 		
			ticketmasterApi.searchEventsOnASpanishCityAndSegmentNameAndKeyword(city, what, keyword).then(res => this.testResults(res)).catch(error => { throw new Error(error)})
		:
			ticketmasterApi.searchEventsOnASpanishCityAndSegmentName(city, what).then(res => {this.testResults(res)}).catch(error => { throw new Error(error)});

		this.saveParamsLastQuery(city, what, keyword)
	}

	testResults = (res) => {
		if (typeof(res._embedded) === "undefined") {
			this.setState({searchPanel : false})
			this.setState({results:[], page: 0})
		} 
		else {
			this.setState({searchPanel : true})
			this.setState({results:res._embedded.events})
		}
	}

	saveParamsLastQuery = (city, what, keyword) => {
		this.setState ({lastQueryCity: city, lastQueryWhat: what, lastQueryKeyword: keyword});

	}

	incrementPage = () => {
		console.log('incrementPage')
		this.setState( prevState =>{
			return {
				page: prevState.page+1
			}
		})

			if(this.state.keyword === ''){
				ticketmasterApi.searchEventsOnASpanishCityAndSegmentNameWithPage(this.state.lastQueryCity,this.state.lastQueryWhat, this.state.page).then(res => {this.treatMoreResults(res)}).catch(error => { throw new Error(error)});
			}
			else{
				ticketmasterApi.searchEventsOnASpanishCityAndSegmentNameAndKeywordWithPage(this.state.lastQueryCity,this.state.lastQueryWhat, this.state.lastQueryKeyword, this.state.page).then(res => {this.treatMoreResults(res)}).catch(error => { throw new Error(error)});
			} 
			
		}
		
	treatMoreResults = (res) => {
		console.log('treatMoreResults')
		if (typeof(res._embedded) !== "undefined") {
			this.setState( prevState =>{
				return {
					results: [...prevState.results, ...res._embedded.events]
				}
				
			})
		} 

	}

	render() {
		return (
			<div>
				<Header />
				<SearchPanel onSubmit={this.getQueryParams} />
				<MainPanel searchresults={this.state.results} displayThis={this.state.searchPanel} incrementPage={this.incrementPage}/>
			</div>
		);
	}
}

export default App;