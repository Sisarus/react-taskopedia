import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/style.css';
import Header from './Header';
import Student from './Student'
import Footer from './Footer';
import MainBody from '../MainBody';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Header/>
    <MainBody/>
    <div className='container row'> Students Enrolled </div>
    <Student name="Koi Kisll" experience={2} headshot="https://api.lorem.space/image/face?w=150&h=150"/>
    <Student name="Lisa Polo" experience={5} headshot="https://api.lorem.space/image/face?w=150&h=150"/>
    <Student name="Sini Koi" experience={6} headshot="https://api.lorem.space/image/face?w=150&h=150"/>
    <Footer/>
  </div>
);