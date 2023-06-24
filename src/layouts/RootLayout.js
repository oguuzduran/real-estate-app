import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
	return (
		<div className="root-layout">
			<header>
				<nav>
					<h1>Emlakçı</h1>
					<NavLink to="/">Anasayfa</NavLink>
					<NavLink to="about">Hakkımızda</NavLink>
					<NavLink to="help">İletişim</NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
}
