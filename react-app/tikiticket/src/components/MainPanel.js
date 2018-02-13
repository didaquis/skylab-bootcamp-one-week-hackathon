import React from 'react';

import Modal from './Modal';
import ColumnsPanel from './ColumnsPanel';
import EventList from './EventList';

function MainPanel(props){
	const contentForColumn_One = ['colimgpromo1','colimgpromo1-back','Select your city and press GO button to obtain lots of events around you! If you are interested in live music shows, select music on What list!'];
	const contentForColumn_Two = ['colimgpromo2','colimgpromo2-back','If you like sports, prove you are a true fan and go to the stadium!'];
	const contentForColumn_Three = ['colimgpromo3','colimgpromo3-back','To be, or not to be? This is the Tiki question. Sounds familiar? oh boy… You should go to the theater more often!'];

	return (
		<section className="container-fluid home">
			<div className="row">
				<Modal />
				<ColumnsPanel dataForComponent={contentForColumn_One} />
				<ColumnsPanel dataForComponent={contentForColumn_Two} />
				<ColumnsPanel dataForComponent={contentForColumn_Three} />
				<EventList />
				<EventList />
				<EventList />
			</div>
		</section>
	);
}

export default MainPanel;