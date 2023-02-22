function MainHeader(){
  return <h1 className='text-primary'>REACT PRACTICE</h1>
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
