import React from 'react';

function Modal(props){
	return (
		<div className="modal fade" id="modalDetailedEvent" tabIndex="-1" role="dialog" aria-labelledby="modalDetailedEventTitle" aria-hidden="true">
		  	<div className="modal-dialog modal-dialog-centered" role="document">
				<div className="modal-content">
			  		<div className="modal-header">
						<h5 className="modal-title" id="modalLongTitle">Title of modal</h5>
			  		</div>
			  		<div className="modal-body">
			  			<p>random content</p>
			  		</div>
			  		<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
			  		</div>
				</div>
		  	</div>
		</div>
	);
}

export default Modal;