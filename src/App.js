import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
// import ProjectsContainer from './containers/ProjectsContainer';
// import ContactContainer from './containers/ContactContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route exact path="/about" element={<AboutContainer />} />
          {/* <Route exact path="/projects" element={<ProjectsContainer />} />
          <Route exact path="/contact" element={<ContactContainer />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
