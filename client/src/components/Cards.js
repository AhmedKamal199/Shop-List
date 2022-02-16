import { useState } from 'react';
import Card from './Card'

const Cards = ({cards,onDelete}) => {
  const [frame,setFrame] = useState("weekly")

  return (
    <div className="container">
    <div className="person">
      <div className="gen">
        <img src="images/image-jeremy.png" alt="Jeremy" />
        <h6>Report for </h6>
        <h2> Jeremy <br /> Robson</h2>
      </div> 
      <div className="selector">
        <ul className="list-style">
        <li  onClick={(e) => setFrame("daily")} className={`d-wh ${frame === "daily" ? "active" : ""}`}>Daily</li>
        <li onClick={(e) => setFrame("weekly")}  className={`d-wh ${frame === "weekly" ? "active" : ""}`}>Weekly</li>
        <li onClick={(e) => setFrame("monthly")}  className={`d-wh ${frame === "monthly" ? "active" : ""}`}>Monthly</li>
      </ul>
      </div>
    </div>   
    <div className='cards up'>
    {cards.map((card,id) =>(
      id < 3 && <Card frame={frame} key={id} card={card} 
      onDelete={onDelete} /> 
    ))}
    </div>
    <div className='cards down'>
    {cards.map((card,id) =>(
      id >= 3 && <Card frame={frame} key={id} card={card} 
      onDelete={onDelete} /> 
    ))}
    </div>
   </div>
  )}
export default Cards