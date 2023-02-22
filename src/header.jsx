import logo from "./images/react.png";

function MainHeader(){
  return (
    <div className="pt-3 py-1 pl-2" style={{background: 'black'}}>
      <img src={logo}  style={{height: "35px", verticalAlign: "top"}}></img>
      <span className="h2 pt-4 text-white-50">REACT PRACTICE</span>
    </div>
  )
}

function SubHeader(){
  return <p style={subHeaderStyle}>This will be an exciting!</p>
}

export default function Header(){
  return(
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  )
}

const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: 'lightgray'
}
