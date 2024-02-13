import React from 'react'
import Navbar from '../navbar.js'
import '../style.css'

function quizes() {
  return (
    <div>
        <Navbar></Navbar>
        <section className="home">
           <div className="home-content">
               <a href="./webQuiz">Web development</a>
               <a href="./science">Science</a>
               <a href="./economics">Economics</a>
               <a href="./math">Math</a>

           </div>
       </section>
    </div>
  )
}

export default quizes
