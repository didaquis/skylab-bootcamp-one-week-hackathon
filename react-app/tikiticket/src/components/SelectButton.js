import React from 'react';

function SelectButton(props){
	return (
		<div className="col-sm-3">
			<button type="button" className="btn btn-warning btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					{props.textButton}
			</button>
			<div className="dropdown-menu">
				{
					props.dataForComponent.map(
						(option) => {
							return ( <a className="dropdown-item" key={option.identifier} href="#">{option.text}</a> )
						}
					)
				}
			</div>
		</div>
	);
}

export default SelectButton;