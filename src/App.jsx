import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer'
import Home from "./Pages/Home";
import Login from './Pages/Login';
import About from './Pages/About';
import Goals from './Pages/Goals';

export default function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/goals" element={<Goals />} />
				<Route path="/profile" element={<Login />} />
			</Routes>
			<Footer />
		</>
	);
}
