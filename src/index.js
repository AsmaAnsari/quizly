import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import "./style.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './navbar'
import Home from './pages/home.js'
import About from './pages/about.js'
import Contact from './pages/contact.js'
import Quizes from './pages/quizes.js'
import Science from './pages/science.js';
import Math from './pages/math.js';
import Economics from './pages/economics.js';
import WebQuiz from './pages/webQuiz.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/home",
    element: <Home></Home>
  },
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/contact",
    element: <Contact></Contact>
  },
  {
    path: "/quizes",
    element: <Quizes></Quizes>
  },
  {
    path: "/webQuiz",
    element: <WebQuiz></WebQuiz>
  },
  {
    path: "/science",
    element: <Science></Science>
  },
  {
    path: "/math",
    element: <Math></Math>
  },
  {
    path: "/economics",
    element: <Economics></Economics>
  },

]);
root.render(
  <RouterProvider router={router}/>
  
);