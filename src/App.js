import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <>
        <Login/>
        <Routes>
          <Route path="/home" element={<Home/>} />
        </Routes>
    </>
  );
}

export default App;
