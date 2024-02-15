import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Navbar from './navbar'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Quizes from './pages/quizes'
import Science from './pages/science';
import Math from './pages/math';
import Economics from './pages/economics';
import WebQuiz from './pages/webQuiz';


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


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);