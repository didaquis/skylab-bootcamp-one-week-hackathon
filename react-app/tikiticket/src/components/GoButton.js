import React from 'react';

function GoButton(props){
	return (
		<div className="col-sm-3">
			<label htmlFor="go-button" className="text-nowrap font-weight-bold">Press button for search!</label>
			<input className="form-control form-control-lg" id="go-button" type="submit" value="GO"/>
		</div>
	);
}

export default GoButton;