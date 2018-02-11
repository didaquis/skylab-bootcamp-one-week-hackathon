/*
# Referencia para desarrollo de la api:

Obtener los eventos de una ciudad
https://app.ticketmaster.com/discovery/v2/events
&city=barcelona
?apikey=ECkj2ALmZaqNovI8BTDpOZ3NCuAUMQJc


https://app.ticketmaster.com/discovery/v2/events.json
?classificationName=music
&dmaId=324
&apikey=ECkj2ALmZaqNovI8BTDpOZ3NCuAUMQJc
 

https://app.ticketmaster.com/discovery/v2/events
?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0
&sort=date,asc
&city=Barcelona
&countryCode=ES


segmentName  ----- 	segmentId
NAME    			ID
Music    			KZFzniwnSyZfZ7v7nJ
Sports    			KZFzniwnSyZfZ7v7nE
Arts & Theatre    	KZFzniwnSyZfZ7v7na
Film    			KZFzniwnSyZfZ7v7nn
Miscellaneous    	KZFzniwnSyZfZ7v7n1


https://app.ticketmaster.com/discovery/v2/events
?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0
&city=barcelona
&countryCode=ES
&segmentName=Film
 */







/**
 * TicketMaster API client.
 * 
 * @version 0.1
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
		return fetch(`${baseUrl}?${url}&apikey=${token}`)
			.then(res => {
				if(res.status === 200){
					return res.json();
				}else{
					console.error(`Error code: ${res.status}`);
					console.error(`Error status: ${res.statusText}`);
					throw new Error(res.statusText);
				}
			});
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
			return call(`city=${city}&countryCode=ES`).then(res => res)
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
			return call(`city=${city}&countryCode=ES&segmentName=${segmentName}`).then(res => res)
		}
	}

	ticketmasterApi = inst
})()
