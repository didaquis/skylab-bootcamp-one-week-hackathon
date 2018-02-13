import React from 'react';

import SelectButton from './SelectButton';
import InputButton from './InputButton';
import GoButton from './GoButton';

function SearchPanel(props) {

	const contentForSelect_One = [{ "identifier": "bcn", "text": "Barcelona" }, { "identifier": "mad", "text": "Madrid" }];
	const contentForSelect_Two = [{ "identifier": "ms", "text": "Music" }, { "identifier": "sp", "text": "Sports" }, { "identifier": "at", "text": "Art & theater" }, { "identifier": "ot", "text": "Others" }];

	return (
		<section className="container-fluid searchbar">
			<form>
				<div class="form-group">
					<div className="row">
						<SelectButton textButton={'City'} dataForComponent={contentForSelect_One} />
						<SelectButton textButton={'What?'} dataForComponent={contentForSelect_Two} />
						<InputButton />
						<GoButton />
					</div>
				</div>
			</form>
		</section>
	);
}

export default SearchPanel;