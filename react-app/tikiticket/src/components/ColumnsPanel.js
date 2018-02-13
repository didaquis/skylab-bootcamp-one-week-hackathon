import React from 'react';

function ColumnsPanel(props){
	return (
		<div className="col-sm-6 col-md-4">
			<div className="flip-container">
				<div className="flipper">
					<div className={`front ${props.dataForComponent[0]} pointer`}>
					</div>
					<div className={`back ${props.dataForComponent[1]}`}>
						<h2>
							{props.dataForComponent[2]}
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ColumnsPanel;