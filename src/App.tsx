import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Main from './components/Main/Main';
import logo from './img/logo.svg';
import './utils/reset.scss';
import NotFound from './pages/NotFound/NotFound';
import Show from './pages/Show/Show';

const App = () => (
  <div className="app">
    <div className="logo-container">
      <img src={logo} alt="" width="350px" />
    </div>
    <Routes>
      <Route path="/TV-show-app" element={<Main />} />
      <Route path="/shows/:id" element={<Show />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
