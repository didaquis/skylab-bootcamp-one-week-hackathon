import React from 'react';
import ticketmasterApi from '../utils/ticketmaster-api-0.5';

class Modal extends React.Component {
	constructor(props){
		super(props)
	
		this.state = {
			event_id: '',
			event_name: '',
			event_url: '#',
			event_startLocalDate: '',
			event_startLocalTime: '',
			event_priceRangesCurrency: '',
			event_priceRangesMin: '',
			event_priceRangesMax: '',
			event_promoterName: ''
		}
	}

	componentWillReceiveProps(nextProps){
		if(this.props.eventIdentifier !== nextProps.eventIdentifier){
			ticketmasterApi.searchEventsDetails(nextProps.eventIdentifier).then(res => this.updateDataOnModal(res._embedded.events)).catch()
		}
	}

	updateDataOnModal = (event) => {
		this.setState( { 
			event_id:event[0]['id'], 
			event_name:event[0]['name'], 
			event_url:event[0]['url'], 
			event_startLocalDate:event[0].dates.start.localDate, 
			event_startLocalTime:event[0].dates.start.localTime, 
			event_promoterName:event[0].promoter.name
		} )
		if(typeof event[0].priceRanges !== 'undefined'){
			this.setState({
				event_priceRangesCurrency:event[0].priceRanges[0].currency, 
				event_priceRangesMin:event[0].priceRanges[0].min, 
				event_priceRangesMax:event[0].priceRanges[0].max
			})
		}else{
			this.setState({
				event_priceRangesCurrency: '', 
				event_priceRangesMin: '',
				event_priceRangesMax: ''
			})
		}
	}

	render(){
		let priceRange = '';
		if(this.state.event_priceRangesCurrency !== ''){
			priceRange = `${this.state.event_priceRangesMin} - ${this.state.event_priceRangesMax} ${this.state.event_priceRangesCurrency}`;
		}

		return (
			<div className="modal fade" id="modalDetailedEvent" tabIndex="-1" role="dialog" aria-labelledby="modalDetailedEventTitle" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="modalLongTitle">{this.state.event_name}</h5>
						</div>
						<div className="modal-body">
							<p>{this.state.event_id}</p>
							<p>{this.state.event_name}</p>
							<p>{this.state.event_url}</p>
							<p>{this.state.event_startLocalDate}</p>
							<p>{this.state.event_startLocalTime}</p>
							<p>{priceRange}</p>
							<p>{this.state.event_promoterName}</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Modal;