import { HashRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/education' element={<Education />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
