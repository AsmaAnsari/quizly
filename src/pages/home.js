import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../navbar.js'
import '../style.css'
import quizes from './quizes.js';
function Home() {
  const navigate = useNavigate();

  return (
    <div>
        <Navbar></Navbar>
       <section className="home">
           <div className="home-content">
               <p>Let wisdom guide you in your pursuit of knowledge. Start Quiz and explore your knowledge.</p>
               <a className="btn btn-primary" href="./quizes" style={{fontSize:16, fontWeight:500}}>Start Quiz</a>
           </div>
       </section>
    </div>
  )
}

export default Home
