import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

import Contact from './pages/Contact';
import Sss from './pages/Sss';

import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="help" element={<HelpLayout />}>
				<Route path="sss" element={<Sss />} />
				<Route path="contact" element={<Contact />} />
			</Route>
		</Route>,
	),
);

function App() {
	return <RouterProvider router={router} />;
}
export default App;
