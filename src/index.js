import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './components/App';
import Nav from './components/Nav';
import Login from './components/Login';
import Category from './components/Category';
import Post from './components/Post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <div>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/general" element={<Category category='General Discussion' cat='general'/>} />
          <Route path="/general/:postId" element={<Post category={'general'} />} />
          <Route path="/bugs" element={<Category category='Bugs' cat='bugs'/>} />
          <Route path="/bugs/:postId" element={<Post category={'bugs'}/>} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </div>
);
