/**
 * TicketMaster API client.
 * 
 * @version 0.7
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
		const token = "ECkj2ALmZaqNovI8BTDpOZ3NCuAUMQJc";
		const baseUrl = "https://app.ticketmaster.com/discovery/v2/";
		return fetch(`${baseUrl}${url}&apikey=${token}&sort=date,asc&size=60`)
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
			return call(`events?city=${city}&countryCode=ES`)
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
			return call(`events?city=${city}&countryCode=ES&segmentName=${segmentName}`)
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
			return call(`events?city=${city}&countryCode=ES&keyword=${keyword}`)
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
			return call(`events?city=${city}&countryCode=ES&segmentName=${segmentName}&keyword=${keyword}`)
		},

		/**
		 * Search details of event.
		 *
		 * @param {String} idOfEvent - Identifier of event.
		 * @returns {Promise<Response>} Data received from endpoint.
		 * @throws {String} If something go wrong.
		 */
		searchEventsDetails: (idOfEvent) => {
			return call(`events?id=${idOfEvent}`)
		},

		/**
		 * Search events on a specific spanish city and specific segment name of events with page
		 *
		 * @param {String} city - City to search.
		 * @param {String} segmentName - segment name of event to search.
		 * @param {Integer} page - pagination of results
		 * @returns {Promise<Response>} Data received from endpoint.
		 * @throws {String} If something go wrong.
		 */
		searchEventsOnASpanishCityAndSegmentNameWithPage: (city, segmentName, page) => {
			return call(`events?city=${city}&countryCode=ES&segmentName=${segmentName}&page=${page}`)
		},

		/**
		 * Search events on a specific spanish city and keyword with page
		 *
		 * @param {String} city - City to search.
		 * @param {String} segmentName - segment name of event to search.
		 * @param {String} keyword - keyword to search.
		 * @param {Integer} page - pagination of results
		 * @returns {Promise<Response>} Data received from endpoint.
		 * @throws {String} If something go wrong.
		 */
		searchEventsOnASpanishCityAndSegmentNameAndKeywordWithPage: (city, segmentName, keyword, page) => {
			return call(`events?city=${city}&countryCode=ES&segmentName=${segmentName}&keyword=${keyword}&page=${page}`)
		}
	}

	ticketmasterApi = inst
})()
