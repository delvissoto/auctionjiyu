import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import NoPage from './components/NoPage';
import Login from './components/Login';
import Sell from './components/Sell';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>} />
          
          <Route path='log_in' element={<Login/>}/>
          <Route path='Sell' element={<Sell/>}/>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
