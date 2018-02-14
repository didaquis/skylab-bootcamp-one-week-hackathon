import React from 'react';

import EventBox from './EventBox';

function EventList(props){

	/* Los siguientes valores han de venir de la API, se han definido temporalmente para el desarrollo */
	const exampleOfEventIdentifier = 'Z598xZ2qZ6Akk';/* Useful just for development logic */
	const exampleOfTitle = ' Jessy & Natalia Lafourcade';/* Useful just for development logic */
	const exampleOfSegmentIconOfEvent = '🎹';/* Useful just for development logic */
	const exampleOfSegmentTextOfEvent = 'Music';/* Useful just for development logic */
	const exampleOfGenres = ['Alternative Rock', 'Music', 'Pop'];/* Useful just for development logic */
	const exampleOfDate = '2018-11-07';/* Useful just for development logic */

	
	function assignIcon(event) {
		if (event.classifications[0].segment.name === 'Music')
				return '🎹'
				else if (event.classifications[0].segment.name === 'Sports')
				return '⚽'
				else if (event.classifications[0].segment.name === 'Arts & Theatre')
				return '🎭'
				else return '✴'
	}



	return (
		<div className="col-sm-6 col-md-4">
			<ul className="list-group">
			{props.eventMap.map((event)=>{
				// console.log(event.name)	
				return (
					<EventBox 
					key={event.id} 
					eventId={event.id} 
					eventTitle={event.name} 
					eventSegmentText={event.classifications[0].segment.name} 
					eventSegmentIcon={assignIcon(event)} 
					eventHashtags={[event.classifications[0].genre.name, event.classifications[0].subGenre.name]} 
					eventDate={event.dates.start.localDate} 
					onClick={props.onClickEvent} 
				/>
				)

			})}
			</ul>
		</div>
	);
}

export default EventList;