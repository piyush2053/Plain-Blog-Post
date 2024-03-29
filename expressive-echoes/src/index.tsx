import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import Home from './Pages/Home/Home.tsx';
import About from './Pages/About/About.tsx';
import Blog from './Pages/Blog/Blog.tsx';
import { Provider } from './Store/Provider.tsx';
import PostBlog from './Pages/PostBlog/PostBlog.tsx';
import ErrorPage from './Pages/NotFound/NotFound.tsx';
import Login from './Pages/Auth/Login/index.tsx';
import Signup from './Pages/Auth/Signup/index.tsx';
import Admin from './Pages/Admin/Admin.tsx';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<About />} />
            <Route path="/blog/:title" element={<Blog />} />
            <Route path="/publish" element={<PostBlog />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        </Provider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
