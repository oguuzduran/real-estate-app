import { NavLink, Outlet } from 'react-router-dom';

import React from 'react';

function HelpLayout() {
	return (
		<div className="help-layout">
			<h2>Emlak İletişim</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut at, ex maxime, voluptatibus
				accusamus nulla autem similique suscipit quaerat excepturi mollitia dolores, aliquam in
				dolorum rem temporibus minima veritatis! Tempore!
			</p>
			<nav>
				<NavLink to="sss">Sık Sorulan Sorular</NavLink>
				<NavLink to="contact">İletişim Kur</NavLink>
			</nav>
			<Outlet />
		</div>
	);
}

export default HelpLayout;
