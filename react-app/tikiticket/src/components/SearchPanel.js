import React from 'react';

import SelectButton from './SelectButton';
import InputButton from './InputButton';
import GoButton from './GoButton';

function SearchPanel(props){
	return (
		<section className="container-fluid searchbar">
            <div className="row">
            	<SelectButton textButton={'City'}/>
            	<SelectButton textButton={'What?'}/>
            	<InputButton />
            	<GoButton />
            </div>
        </section>
	);
}

export default SearchPanel;