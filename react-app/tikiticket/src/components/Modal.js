import React from 'react';
import ticketmasterApi from '../utils/ticketmaster-api-0.5';

class Modal extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			event_name: '',
			event_url: '#',
			event_startLocalDate: '',
			event_startLocalTime: '',
			event_priceRangesCurrency: '',
			event_priceRangesMin: '',
			event_priceRangesMax: '',
			event_promoterName: '', 
			event_imageUrl: 'img/default.png'
		}
	}

	componentWillReceiveProps(nextProps){
		if(this.props.eventIdentifier !== nextProps.eventIdentifier){
			ticketmasterApi.searchEventsDetails(nextProps.eventIdentifier).then(res => this.updateDataOnModal(res._embedded.events)).catch(error => {throw new Error(error)})
		}
	}

	filterImage = (arrayOfImages) => {
		for(let i = 0; i < arrayOfImages.length; i++){
			if( (arrayOfImages[i].height > 200) && (arrayOfImages[i].height <= 600) ){
				return arrayOfImages[i].url
			}
		}
	}

	updateDataOnModal = (event) => {
		let imageUrl = 'img/default.png';
		if(typeof event[0].images !== 'undefined'){
			imageUrl = this.filterImage(event[0].images)
		}

		this.setState( { 
			event_name:event[0]['name'], 
			event_url:event[0]['url'], 
			event_startLocalDate:event[0].dates.start.localDate, 
			event_startLocalTime:event[0].dates.start.localTime, 
			event_promoterName:event[0].promoter.name, 
			event_imageUrl:imageUrl, 
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
		let priceRange = 'Not published yet';
		if(this.state.event_priceRangesCurrency !== ''){
			priceRange = `${this.state.event_priceRangesMin} - ${this.state.event_priceRangesMax} ${this.state.event_priceRangesCurrency}`;
		}

		return (
			<div className="modal fade" id="modalDetailedEvent" tabIndex="-1" role="dialog" aria-labelledby="modalDetailedEventTitle" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="modalLongTitle">{this.state.event_name}</h5>
						</div>
						<div className="modal-body">
							<p><strong>Date:</strong> {this.state.event_startLocalDate}</p>
							<p><strong>Time:</strong> {this.state.event_startLocalTime}</p>
							<p><strong>Price:</strong> {priceRange}</p>
							<p><strong>Promoter:</strong> {this.state.event_promoterName}</p>
							<p><strong>Tickets and information:</strong> <a href={this.state.event_url} target="_blank">TicketMaster</a></p>
							<img src={this.state.event_imageUrl} className=" mw-100 p-2 mx-auto d-block rounded img-fluid" alt={this.state.event_name} />
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