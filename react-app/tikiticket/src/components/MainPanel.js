import React from 'react';

import ColumnPanel from './ColumnPanel';
import EventList from './EventList';

function MainPanel(props){
	return (
		<section className="container-fluid home">
			<div className="row">
				<ColumnPanel />
				<ColumnPanel />
				<ColumnPanel />
				<EventList />
				<EventList />
				<EventList />
			</div>
		</section>
	);
}

export default MainPanel;