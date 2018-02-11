/*
# Referencia para desarrollo de la api:

segmentName  ----- 	segmentId
NAME    			ID
Music    			KZFzniwnSyZfZ7v7nJ
Sports    			KZFzniwnSyZfZ7v7nE
Arts & Theatre    	KZFzniwnSyZfZ7v7na
Film    			KZFzniwnSyZfZ7v7nn
Miscellaneous    	KZFzniwnSyZfZ7v7n1

*/







/**
 * TicketMaster API client.
 * 
 * @version 0.2
 */
let ticketmasterApi
(() => {
	'use strict'

	/**
	 * Make a request to TicketMaster DISCOVERY API 2.0
	 * 
	 * @param {String} URL - Url of query ('https://app.ticketmaster.com/discovery/v2/' and token param is provided)
	 * @returns {Promise<Response>} Data received from endpoint
	 * @throws {String} If something go wrong
	 */
	function call(url) {
		const token = "7elxdku9GGG5k8j0Xm8KWdANDgecHMV0";
		const baseUrl = "https://app.ticketmaster.com/discovery/v2/";
		return fetch(`${baseUrl}${url}&apikey=${token}`)
			.then( res => { return res.json() } );
	}

	const inst = {
		/**
		 * Search events on a specific spanish city.
		 *
		 * @param {String} city - City to search.
		 * @returns {Promise<Response>} Data received from endpoint.
		 * @throws {String} If something go wrong.
		 */
		searchEventsOnASpecificSpanishCity: (city) => {
			return call(`events?city=${city}&countryCode=ES`).then(res => res)
		},

		/**
		 * Search events on a specific spanish city and specific segment name of events.
		 *
		 * @param {String} city - City to search.
		 * @param {String} segmentName - segment name of event to search.
		 * @returns {Promise<Response>} Data received from endpoint.
		 * @throws {String} If something go wrong.
		 */
		searchEventsOnASpecificSpanishCityAndSpecificSegmentName: (city, segmentName) => {
			return call(`events?city=${city}&countryCode=ES&segmentName=${segmentName}`).then(res => res)
		}
	}

	ticketmasterApi = inst
})()
