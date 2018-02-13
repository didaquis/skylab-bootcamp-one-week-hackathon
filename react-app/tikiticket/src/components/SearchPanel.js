import React from 'react';

import SelectButton from './SelectButton';
import InputButton from './InputButton';
import GoButton from './GoButton';


class SearchPanel extends React.Component {
	constructor() {
		super();

		this.state = {
			city: 'Barcelona',
			what: 'Music',
			keyword: ''
		}
	}

	submit = () => {
		console.log('submit')
	}

	fillCity = (value) => {
		this.setState({ city: value })
	}

	fillWhat = (value) => {
		this.setState({ what: value })
	}

	fillKeyword = (value) => {
		this.setState({ keyword: value })
	}

	render() {

		const contentForSelect_One = [{ "identifier": "bcn", "text": "Barcelona" }, { "identifier": "mad", "text": "Madrid" }];
		const contentForSelect_Two = [{ "identifier": "ms", "text": "Music" }, { "identifier": "sp", "text": "Sports" }, { "identifier": "at", "text": "Art & theater" }, { "identifier": "ot", "text": "Others" }];

		return (
			<section className="container-fluid searchbar">
				<form onSubmit={(e) => { e.preventDefault(); this.submit() }}>
					<div className="form-group">
						<div className="row">
							<SelectButton textButton={'City'} dataForComponent={contentForSelect_One} onChange={this.fillCity} />
							<SelectButton textButton={'What?'} dataForComponent={contentForSelect_Two} onChange={this.fillWhat} />
							<InputButton onChange={this.fillKeyword} />
							<GoButton />
						</div>
					</div>
				</form>
			</section>
		);
	}

}


export default SearchPanel;