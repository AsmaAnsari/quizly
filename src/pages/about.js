import React from 'react'
import Navbar from '../navbar.js'
import '../style.css'

function about() {
  return (
    <div>
        <Navbar></Navbar>
       <section className="home">
        <div className="home-content">
            <h2 style={{color: "#5e6cfc"}}>A personalized learning resource for all ages</h2>
            <p>Quizly offers practice exercises, instructional videos,
                 and personalized learning dashboard that empower learners 
                 to study at their own pace in and outside of the classroom. 
                 We tackle math, science, computing, history, art history, economics, 
                 and more, including test preparation (SAT, IELTS, LSAT) 
                 content. We focus on skill mastery to help learners establish strong 
                 foundations, so there's no limit to what they can learn next!</p>
        </div>
    </section>
    </div>
  )
}

export default about
