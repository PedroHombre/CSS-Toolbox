import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

// Pages import
import Home from './pages/Home/Home';

// Generator pages import
import BoxShadowGen from './pages/generators/boxShadow/BoxShadow';

import './scss/global.scss';

function App() {
	return (
		<main>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="box-shadow" element={<BoxShadowGen />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</main>
	);
}

export default App;
