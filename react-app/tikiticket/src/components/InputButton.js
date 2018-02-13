import React from 'react';

function InputButton(props){
	
	return (
		<div className="col-sm-3">
			<input className="form-control form-control-lg" type="text" placeholder="Try it..." onChange={e => props.onChange(e.target.value)}/>
		</div>
	);
}

export default InputButton;