//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import './App.css';
import Friends from './components/Friends/Friends';
import NotFound from './components/Not Found/NotFound';
import Header from './components/Header/Header';





function App() {
  return (
    <div className='container mb-2'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>    
        <Route path="/about" element={<About/>} />
        <Route path="/friends" element={<Friends/>} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
