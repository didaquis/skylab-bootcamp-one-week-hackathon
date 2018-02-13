import React from 'react';

function EventBox(props){
	return (
		<a className="pointer list-group-item list-group-item-action list-group-item-warning event-box" data-toggle="modal" data-target="#modalDetailedEvent">
			<p className="results-top">Natalia Lafourcade</p>
			<p className="results-bottom">
				<span className="badge badge-dark">Music</span>
				<span className="badge badge-dark">Alternative</span>
				<span className="badge badge-dark">Alternative Rock</span>
			</p>
			<p className="results-middle">
				<span className="badge badge-warning badge-pill" role="img" aria-label="Calendar">📅</span> 10-08-2018
				<span className="badge badge-warning badge-pill float-right" role="img" aria-label="Music event">🎹</span>
			</p>
		</a>
	);
}

export default EventBox;