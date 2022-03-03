import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
