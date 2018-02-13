import React from 'react';

import EventBox from './EventBox';

function EventList(props){
	const exampleOfEventIdentifier = 'Z598xZ2qZ6Akk';/* Useful just for development logic */
	return (
		<div className="col-sm-6 col-md-4">
			<ul className="list-group">
				<EventBox eventId={exampleOfEventIdentifier} onClick={props.onClickEvent} />
				<EventBox eventId={exampleOfEventIdentifier} onClick={props.onClickEvent} />
			</ul>
		</div>
	);
}

export default EventList;