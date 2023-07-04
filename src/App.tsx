import './App.scss';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Other from './pages/Other';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/other/:id' element={<Other />} />
      </Routes>
    </div>
  );
}

export default App;
