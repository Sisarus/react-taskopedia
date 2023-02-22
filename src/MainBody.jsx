export default function MainBody() {
  
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
    </div>
  )
}