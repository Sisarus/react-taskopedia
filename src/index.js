import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainHeader(){
  return <h1 className='text-primary'>REACT PRACTICE</h1>
}


function SubHeader(){
  return <p style={subHeaderStyle}>This will be an exciting!</p>
}

function Header(){
  return(
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  )
}


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
    <Footer/>
  </div>
);


const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: 'lightgray'
}