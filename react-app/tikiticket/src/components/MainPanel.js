import React from 'react';
import Modal from './Modal';
import EventList from './EventList';

class MainPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			eventIdentifierForModal: '',
			dataForEventList: [],
			noResults: false,
			noResultsCounter:0,
			moreResults: 0
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.searchresults.length > 0) {
			this.setState({ dataForEventList: nextProps.searchresults })
		}
		else {this.setState( {noResults: true,noResultsCounter: this.state.noResultsCounter+0.5})}
	}

	handlerOnClickEvent = (eventIdentifier) => {
		/* Esta función envía al modal el id del evento del cual debe mostrar detalles */
		this.setState({ eventIdentifierForModal: eventIdentifier })
	}

	
	componentDidMount= () => {
		window.addEventListener('scroll', this.handleScroll);
	}
	
	componentWillUnmount= () => {
		window.removeEventListener('scroll', this.handleScroll);
	}


	getDocHeight= () => {
		var D = document;
		return Math.max(
			D.body.scrollHeight, D.documentElement.scrollHeight,
			D.body.offsetHeight, D.documentElement.offsetHeight,
			D.body.clientHeight, D.documentElement.clientHeight
		)
		}
		
		getScrollXY = () => {
			var scrOfX = 0, scrOfY = 0;
			if( typeof( window.pageYOffset ) === 'number' ) {
				//Netscape compliant
				scrOfY = window.pageYOffset;
				scrOfX = window.pageXOffset;
			} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
				//DOM compliant
				scrOfY = document.body.scrollTop;
				scrOfX = document.body.scrollLeft;
			} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
				//IE6 standards compliant mode
				scrOfY = document.documentElement.scrollTop;
				scrOfX = document.documentElement.scrollLeft;
			}
			return [ scrOfX, scrOfY ];
			}

		handleScroll = (event) => {
			if (this.getDocHeight() - 1 <= this.getScrollXY()[1] + window.innerHeight){
				this.setState({moreResults : 1})
				this.props.incrementPage()
			}
		}


	render() {
		if (this.props.displayThis) {
			return (
				<section className="container-fluid home">
					<div className="">
						<Modal eventIdentifier={this.state.eventIdentifierForModal} />
						<EventList onClickEvent={this.handlerOnClickEvent} eventMap={this.state.dataForEventList} />
					</div>
				</section>
			);
		} 
		else if (this.state.noResults) {
			if (this.state.noResultsCounter%2) {
				return <div className="no-results mt-5"><p className="pb-3">The Tiki found nothing</p></div>
			} else {
				return <div className="no-results mt-5"><p className="pb-3 text-warning">The Tiki found nothing</p></div>
			}
		} else {
			return (
				<section className="wellcome">
					<p className="pb-3 text-warning">Ask the tiki what events can find <br /> Select a city and an event type <br /> You can use a keyword to filter the results</p>
				</section>	
			);
		}
	}
}

export default MainPanel;