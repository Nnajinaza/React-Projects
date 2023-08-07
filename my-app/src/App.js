import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from './pages/Login';
import Register from './pages/Register';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
