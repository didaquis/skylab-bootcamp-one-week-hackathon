import React from 'react';

import SelectButton from './SelectButton';
import InputButton from './InputButton';
import GoButton from './GoButton';

function SearchPanel(props){

    const optionsForSelectOne = [{"identifier": "bcn", "text":"Barcelona"}, {"identifier": "mad", "text":"Madrid"}];
    const optionsForSelectTwo = [{"identifier": "ms", "text":"Music"}, {"identifier": "sp", "text":"Sports"}, {"identifier": "at", "text":"Art & theater"}, {"identifier": "ot", "text":"Others"}];

	return (
		<section className="container-fluid searchbar">
            <div className="row">
            	<SelectButton textButton={'City'} dataForOptions={optionsForSelectOne} />
            	<SelectButton textButton={'What?'} dataForOptions={optionsForSelectTwo} />
            	<InputButton />
            	<GoButton />
            </div>
        </section>
	);
}

export default SearchPanel;