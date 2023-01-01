import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Pages import
import Home from './pages/Home/Home';

// Generator pages import
import BoxShadowGen from './pages/generators/boxShadow/BoxShadow';

import './scss/global.scss';

function App() {
	return (
		<>
			<Header />

			<main>
				<BrowserRouter>
					<Routes>
						<Route path="/">
							<Route index element={<Home />} />
							<Route path="box-shadow" element={<BoxShadowGen />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</main>

			<Footer />
		</>
	);
}

export default App;

