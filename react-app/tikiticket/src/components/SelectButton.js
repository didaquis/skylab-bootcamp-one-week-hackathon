import React from 'react';

function SelectButton(props) {

	return (
		<div className="col-sm-3">
			<select className="form-control form-control-lg" id="city-select" onChange={e => props.onChange(e.target.value)}>
				{
					props.dataForComponent.map(
						(option) => {
							return (<option key={option.identifier} value={props.identifier}>{option.text}</option>)
						}
					)
				}
			</select>
		</div>
	);
}

export default SelectButton;