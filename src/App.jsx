import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import Asma from './pages/Asma';
import Epoc from './pages/Epoc';
import Especialistas from './pages/Especialistas';
import ConoceAbc from './pages/ConoceAbc';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  return (
    <Router>
      <Preloader />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="asma" element={<Asma />} />
          <Route path="epoc" element={<Epoc />} />
          <Route path="especialistas" element={<Especialistas />} />
          <Route path="conoce-abc" element={<ConoceAbc />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
