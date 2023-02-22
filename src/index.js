import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainHeader(){
  return <h1>REACT PRACTICE</h1>
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
  return (
    <div>
      <p>We will learn React by buildin TaskOPedia!</p>
      <ul>
        <li>Dance</li>
        <li>Eat dinner</li>
      </ul>
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