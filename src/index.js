import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/style.css';
import Header from './header';
import Student from './student'

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
  <div className='container'>
    <Header/>
    <MainBody/>
    <div className='row'> Students Enrolled </div>
    <Student name="Koi Kisll" experience={2} headshot="https://api.lorem.space/image/face?w=150&h=150"/>
    <Student name="Lisa Polo" experience={5} headshot="https://api.lorem.space/image/face?w=150&h=150"/>
    <Student name="Sini Koi" experience={6} headshot="https://api.lorem.space/image/face?w=150&h=150"/>
    <Footer/>
  </div>
);