import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Feed from "./components/Feed" 
import SingleVideo from './components/SingleVideo';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Feed />}/>
        <Route path='/:id' element={<SingleVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
