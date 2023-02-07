import { Route, Routes } from 'react-router-dom';
import './App.css';
import FormHooks from './components/FormHooks';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path='/form' element={<FormHooks/>} />
        </Routes>
    </>
  );
}

export default App;
