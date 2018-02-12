import React from 'react';

function SelectButton(props){
	return (
		<div className="col-sm-3">
			<button type="button" className="btn btn-warning btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					{props.textButton}
			</button>
			<div className="dropdown-menu">
				<a className="dropdown-item" href="#">Barcelona</a>
				<a className="dropdown-item" href="#">Madrid</a>
				<a className="dropdown-item" href="#">Valencia</a>
				<a className="dropdown-item" href="#">Bilbao</a>
				<a className="dropdown-item" href="#">Zaragoza</a>
			</div>
		</div>
	);
}

export default SelectButton;