import { NavLink } from 'react-router-dom';

export default function NotFound() {
	return (
		<div>
			<h2>Sayfa Bulunamadı</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere nostrum nobis
				corporis necessitatibus velit nisi amet officiis explicabo qui, ullam debitis quaerat iure
				repudiandae. Quibusdam suscipit eos nihil omnis?
			</p>
			<p>
				<NavLink to="/">Anasayfaya Git</NavLink>
			</p>
		</div>
	);
}
