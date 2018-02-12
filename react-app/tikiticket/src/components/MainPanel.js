import React from 'react';

import ColumnsPanel from './ColumnsPanel';
import EventList from './EventList';

function MainPanel(props){
	return (
		<section className="container-fluid home">
			<div className="row">
				<ColumnsPanel />
				<ColumnsPanel />
				<ColumnsPanel />
				<EventList />
				<EventList />
				<EventList />
			</div>
		</section>
	);
}

export default MainPanel;