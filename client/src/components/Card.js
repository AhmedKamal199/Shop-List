import {FaTimes} from 'react-icons/fa'

const Card = ({card, onDelete, frame}) => {
  
  console.log(card, frame)

  return (
    <div className="up card study bg-darkblue">
      <span className="top study-he-co">
        </span><h3 className="title">{card.title}</h3>
        <div className='pos'>
        <FaTimes  style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(card.id)} />
        </div>
        <h1 className="current">{card.timeframes[frame].current}hrs</h1>
        <h6 className="previous-t d-wh">last week &nbsp; &nbsp; 
        <span className="previous d-wh">{card.timeframes[frame].previous}hrs</span>
        </h6>
      </div>
  )
}

export default Card
