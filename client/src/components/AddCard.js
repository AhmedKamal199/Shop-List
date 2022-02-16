import {useState} from 'react'

const AddCard = ({onAdd,card}) => {

  const [title, Setname] = useState('')
  const [timeframes, Setframes] = useState({daily:{current:0,previous:0},
                                          weekly:{current:0,previous:0},
                                          monthly:{current:0,previous:0}
                                          })


  const onSubmit = (e) =>{
    e.preventDefault()

    if(!title){
      alert('Please Enter the Card')
      console.log(timeframes.weekly.current)
      return
    }
    onAdd({title,timeframes})

    Setname('')
    Setframes({daily:{current:0,previous:0},
      weekly:{current:0,previous:0},
      monthly:{current:0,previous:0}
      })
  }

  return (
    <form className="my-form" onSubmit={onSubmit} > 
        <h1>Add Card</h1>        
         <div className="msg"></div>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter the name of the activty" 
            vaule = {title} onChange={(e)=> Setname(e.target.value)}/>
        </div>
        <div>
            <label>Current Period:</label>
            <input type="Number" placeholder="Enter the current period"
             minLength={0} maxLength={168}
             vaule = {timeframes.weekly.current} 
             onChange={(e)=> Setframes(Object.assign({}, timeframes, {weekly: Object.assign({}, timeframes.weekly, {current: e.target.value})}))} /> 
            <label>Previous Period:</label>
            <input type="Number"  placeholder="Enter the previous period"
             minLength={0} maxLength={168}
             vaule = {timeframes.weekly.previous} 
             onChange={(e)=> Setframes(Object.assign({}, timeframes, {weekly: Object.assign({}, timeframes.weekly, {previous: e.target.value})}))} /> 
        </div>
        <input className="btn" type="submit" value="Submit" />
        </form>
  )
  }

export default AddCard
