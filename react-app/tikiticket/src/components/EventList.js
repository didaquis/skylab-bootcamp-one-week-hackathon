import React from 'react';

import EventBox from './EventBox';

function EventList(props){
	const exampleOfEventIdentifier = 'Z598xZ2qZ6Akk';/* Useful just for development logic */
	const exampleOfTitle = ' Jessy & Natalia Lafourcade';/* Useful just for development logic */
	const exampleOfTypeOfEvent = 'Music';/* Useful just for development logic */
	const exampleOfhashtags = ['Alternative Rock', 'Music', 'Pop'];/* Useful just for development logic */
	const exampleOfDate = '2018-11-07';/* Useful just for development logic */
	return (
		<div className="col-sm-6 col-md-4">
			<ul className="list-group">
				<EventBox 
					eventId={exampleOfEventIdentifier} 
					eventTitle={exampleOfTitle} 
					eventType={exampleOfTypeOfEvent} 
					eventHashtags={exampleOfhashtags} 
					eventDate={exampleOfDate} 
					onClick={props.onClickEvent} 
				/>
				<EventBox 
					eventId={exampleOfEventIdentifier} 
					eventTitle={exampleOfTitle} 
					eventType={exampleOfTypeOfEvent} 
					eventHashtags={exampleOfhashtags} 
					eventDate={exampleOfDate} 
					onClick={props.onClickEvent} 
				/>
			</ul>
		</div>
	);
}

export default EventList;