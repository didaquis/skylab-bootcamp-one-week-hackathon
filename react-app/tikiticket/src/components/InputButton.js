import React from 'react';

function InputButton(props){
	
	return (
		<div className="col-sm-3">
			<div className="form-group">
				<label htmlFor="input-keyword" className="text-nowrap font-weight-bold">{props.textLabel} <span className="bg-darkfont-weight-bold text-danger">{(props.requiredField)? '*': ''}</span></label>
				<input className="form-control form-control-lg" type="text" id="input-keyword" placeholder="Search by keyword..." autoFocus onChange={e => props.onChange(e.target.value)}/>
			</div>
		</div>
	);
}

export default InputButton;