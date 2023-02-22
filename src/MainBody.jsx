import Student from './Components/Student/Student';
import StudentReview from './Components/Student/StudentReview';

const MainBody = () => {
  
  const whatWeWillLearn = "React JS";
  const lectureCount = 3;

  return (
    <div style={{minHeight:"70vh"}}>
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
      <div className='container row'> Students Enrolled </div>
      <Student name="Koi Kisll" experience={2} headshot="https://api.lorem.space/image/face?w=150&h=150">
        <StudentReview/>
      </Student>
      <Student name="Lisa Polo" experience={5} headshot="https://api.lorem.space/image/face?w=150&h=150">
        <StudentReview/>
      </Student>
      <Student name="Sini Koi" experience={6} headshot="https://api.lorem.space/image/face?w=150&h=150"/>
    </div>
  )
}

export default MainBody;