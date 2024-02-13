import React from 'react'
import Navbar from '../navbar.js'
import '../style.css'

function contact() {
  return (
    <div>
        <Navbar></Navbar>
      <section className="home">
        <div className="home-content">
            <h2 style={{color: "#5e6cfc"}}>How can we help you?</h2>
            <p>For any suggestion and queries feel free to contact our team.</p>
            <p>Contact: 03355587603</p>
            <p>Email: asma.ansari.na@gmail.com</p>
        </div>
    </section>
    </div>
  )
}

export default contact
