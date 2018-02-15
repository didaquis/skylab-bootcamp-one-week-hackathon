import React from 'react';

function EventBox (props){
	/* Remove duplicated values on array */
	let removeDuplicationOfValuesOnArray = (arr) => [...new Set(arr)];
	let eventHashtagsFiltered = removeDuplicationOfValuesOnArray(props.eventHashtags)

	return (
		<a className="pointer list-group-item list-group-item-action list-group-item-warning event-box" data-toggle="modal" data-target="#modalDetailedEvent" onClick={ () => {
				props.onClick(props.eventId)
			} }>
			<p className="results-top">{props.eventTitle}</p>
			<p className="results-bottom">
				{
					eventHashtagsFiltered.map(
						(hashtag, index) => { 
							if(hashtag !== 'Undefined'){ 
								return <span key={index} className="badge badge-dark">{hashtag}</span>
							}else{
								return null
							}
						}
					)
				}
			</p>
			<p className="results-middle">
				<span className="badge badge-warning badge-pill" role="img" aria-label="Calendar">📅</span> {props.eventDate}
				<span className="badge badge-warning badge-pill float-right" role="img" aria-label={props.eventSegmentText}>{props.eventSegmentIcon}</span>
			</p>
		</a>
	);
}

export default EventBox;