import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/style.css';
import Header from './header';
import Students from './students'

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainBody() {
  
  const whatWeWillLearn = "React JS";
  const lectureCount = 3;

  return (
    <div>
      <p>We will learn {whatWeWillLearn} by buildin TaskOPedia!<br/>
      Total Lecture - {lectureCount}
      </p>
      <ul>
        <li>Dance</li>
        <li>Eat dinner</li>
      </ul>
      {/* <div>
        Enter Task:{} <input maxLength={5} readOnly={false} placeholder="Alisa"></input>
      </div> */}
    </div>
  )
}

function Footer() {
  return <p style={{color:'gray',backgroundColor:'black'}}>Happy Coding!</p>
}
root.render(
  <div>
    <Header/>
    <MainBody/>
    <Students/>
    <Footer/>
  </div>
);