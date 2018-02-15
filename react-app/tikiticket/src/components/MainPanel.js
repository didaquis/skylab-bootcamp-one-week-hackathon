import React from 'react';
import Modal from './Modal';
import ColumnsPanel from './ColumnsPanel';
import EventList from './EventList';

class MainPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			eventIdentifierForModal: '',
			contentForColumn_One: ['colimgpromo1', 'colimgpromo1-back', 'Select your city and press GO button to obtain lots of events around you! If you are interested in live music shows, select music on What list!'],
			contentForColumn_Two: ['colimgpromo2', 'colimgpromo2-back', 'If you like sports, prove you are a true fan and go to the stadium!'],
			contentForColumn_Three: ['colimgpromo3', 'colimgpromo3-back', 'To be, or not to be? This is the Tiki question. Sounds familiar? oh boy… You should go to the theater more often!'],
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
			if( typeof( window.pageYOffset ) == 'number' ) {
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

			if (this.getDocHeight() - 1 <= this.getScrollXY()[1] + window.innerHeight)
			// {console.log('Sroll final de pag');}
			{this.setState({moreResults : 1})}
		
		}


	render() {

		if (this.state.moreResults>0){
			return (<h1>Testing more results</h1>)
		}
		else if (this.props.displayThis) {
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
				<section className="container-fluid home">
					<div className="row">
						<ColumnsPanel dataForComponent={this.state.contentForColumn_One} />
						<ColumnsPanel dataForComponent={this.state.contentForColumn_Two} />
						<ColumnsPanel dataForComponent={this.state.contentForColumn_Three} />
						<Modal eventIdentifier={this.state.eventIdentifierForModal} />
					</div>
				</section>
			);
		}
	}
}

export default MainPanel;