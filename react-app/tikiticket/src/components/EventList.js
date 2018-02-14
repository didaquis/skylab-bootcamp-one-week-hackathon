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