import React from 'react';

function ColumnPanel(props){
	return (
		<div className="col-sm-4 d-none d-sm-block">
			<div className="flip-container">
				<div className="flipper">
					<div className="front colimgpromo1 pointer">
					</div>
					<div className="back colimgpromo1-back">
						<h2>
							Select your city and press <span className="go-text">GO</span> button to obtain lots of events around you!
							<br /><br />
							If you are interested in live music shows, select music on What list!
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ColumnPanel;