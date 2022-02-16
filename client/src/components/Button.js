
const Button = ({text,color,onClick}) => {
  return (
    <div>
      <button className="btn" style={{backgroundColor:color,cursor:"pointer"}} 
      onClick={onClick}> {text} </button>   
    </div>
  )
}

export default Button
