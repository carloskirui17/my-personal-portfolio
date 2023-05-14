import { Routes, Route, Link } from 'react-router-dom';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Goals from './Pages/Goals';
import NavBar from './NavBar';

export default function App() {
  return (
    <>
			<NavBar/>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/goals" element={<Goals/>} />
        <Route path="/projects" element={<Projects/>} />
	
      </Routes>
    </>
  );
}
