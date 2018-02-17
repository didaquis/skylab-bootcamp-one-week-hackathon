import React from 'react';

function SelectButton(props) {

	return (
		<div className="col-sm-3">
			<div className="form-group">
				<label htmlFor={props.idHtml} className="text-nowrap font-weight-bold" >{props.textLabel} <span className="font-weight-bold text-danger">{(props.requiredField)? '*': ''}</span></label>
				<select className="form-control form-control-lg" id={props.idHtml} onChange={e => props.onChange(e.target.value)}>
					{
						props.dataForComponent.map(
							(option) => {
								return (<option key={option.identifier} value={props.identifier}>{option.text}</option>)
							}
						)
					}
				</select>
			</div>
		</div>
	);
}

export default SelectButton;