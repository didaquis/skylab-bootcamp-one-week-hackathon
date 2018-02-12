import React from 'react';

function Header(props){
	return (
		<header className="container-fluid d-none d-sm-block">
			<h1 className="d-none d-lg-block">Tiki Ticket</h1>
			<h3 className="d-none d-lg-block">Tiki is the ancient
				<br/>event finder
			</h3>
		</header>
	);
}

export default Header;