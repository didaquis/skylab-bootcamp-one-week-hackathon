import React from 'react';

import EventBox from './EventBox';

function EventList(props){

	function assignIcon(event) {
		if (event.classifications[0].segment.name === 'Music')
			return '🎹'
		else if (event.classifications[0].segment.name === 'Sports')
			return '⚽'
		else if (event.classifications[0].segment.name === 'Arts & Theatre')
			return '🎭'
		else if (event.classifications[0].segment.name === 'Film')
			return '🎞'
		else return '✴'
	}

	return (
			<ul className="mb-4">
			{props.eventMap.map((event)=>{
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
	);
}

export default EventList;