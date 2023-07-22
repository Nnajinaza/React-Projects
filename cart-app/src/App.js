import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';

import './App.css';
// import Header from './component/Header';
// import Nav from './component/Nav';
import Home from './component/Home';
import Login from './component/Login';
import Cart from './component/Cart';
import Products from './component/Products';
import Missing from './component/Missing';
// import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <header className='header'>
        <nav>
              <Link to={"/Products"}>Products</Link>
              <Link to={"/Cart"}>Cart</Link>
              <Link to={"/Login"}>Login</Link>
              <Link to={"/Home"}>Home</Link>
            </nav>
      </header>
        <Routes>
        {/* <Header />*/}
          {/* <Route path='/' element={<Nav />} /> */}
          <Route path='login' element={< Login />} />
          <Route  path="/" element={< Home />} />
          <Route path="products" element={< Products />} />
          <Route path="cart/:str"element={< Cart />} />
          <Route path="*" Component={Missing} />
        {/* <Route path="*" Component={Missing} /> */}
        {/* <Footer /> */}
        </Routes>
        <footer>Copyright 2023</footer>
      </Router>
    </div>
  );
}

export default App;