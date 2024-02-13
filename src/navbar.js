import React, { Component } from 'react'
import './style.css'


class navbar extends Component {
   state = {clicked: false};
   handleClick = () =>{
    this.setState({clicked:!this.state.clicked})
   }
    render(){
  return (
    <div>
      <header className="header">
        <div className="logo">
            <div className="name"><h2>Quizly</h2></div>
        </div>
        <div className="info">
            <div className="info-list">
            <i className={this.state.clicked ? "bi bi-x" : "bi bi-list"} onClick={this.handleClick} id="info-list" ></i>
            </div>
            <nav id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                <a  href="./home">Home</a>
                <a  href="./quizes">Quizes</a>
                <a  href="./about">About</a>
                <a  href="./contact">Contact</a>
            </nav>
        </div>
 </header>
    </div>
  )
}
}
export default navbar
