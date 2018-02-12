import React from 'react';

function Header(props) {
	return (
		<header className="container-fluid d-none d-sm-block">
			<div className="row">
				<div className="d-none d-sm-block col-lg-9">
					<h1>Tiki Ticket</h1>
				</div>
				<div className="d-none d-lg-block col-lg-3">
					<h3>Tiki is the ancient
					<br />event finder
					</h3>
				</div>
			</div>
		</header>
	);
}

export default Header;