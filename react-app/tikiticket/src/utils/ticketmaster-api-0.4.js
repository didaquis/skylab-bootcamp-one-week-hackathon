/**
 * TicketMaster API client.
 * 
 * @version 0.4
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
		searchEventsOnASpanishCity: (city) => {
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
		searchEventsOnASpanishCityAndSegmentName: (city, segmentName) => {
			return call(`events?city=${city}&countryCode=ES&segmentName=${segmentName}`).then(res => res)
		},

		/**
		 * Search events on a specific spanish city and keyword.
		 *
		 * @param {String} city - City to search.
		 * @param {String} keyword - keyword to search.
		 * @returns {Promise<Response>} Data received from endpoint.
		 * @throws {String} If something go wrong.
		 */
		searchEventsOnASpanishCityAndKeyword: (city, keyword) => {
			return call(`events?city=${city}&countryCode=ES&keyword=${keyword}`).then(res => res)
		},

		/**
		 * Search events on a specific spanish city and specific segment name of events and keyword.
		 *
		 * @param {String} city - City to search.
		 * @param {String} segmentName - segment name of event to search.
		 * @param {String} keyword - keyword to search.
		 * @returns {Promise<Response>} Data received from endpoint.
		 * @throws {String} If something go wrong.
		 */
		searchEventsOnASpanishCityAndSegmentNameAndKeyword: (city, segmentName, keyword) => {
			return call(`events?city=${city}&countryCode=ES&segmentName=${segmentName}&keyword=${keyword}`).then(res => res)
		},

		/**
		 * Search details of event.
		 *
		 * @param {String} idOfEvent - Identifier of event.
		 * @returns {Promise<Response>} Data received from endpoint.
		 * @throws {String} If something go wrong.
		 */
		searchEventsDetails: (idOfEvent) => {
			return call(`events?id=${idOfEvent}`).then(res => res)
		}
	}

	ticketmasterApi = inst
})()

export default ticketmasterApi;
