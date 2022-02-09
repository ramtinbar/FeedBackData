import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
function FeedBackForm({handleAdd}) {
    const[text,setText] = useState('')
    const[rating,setRating] = useState(10)
    const[btnDisabled,setBtnDisabled] = useState(true)
    const[message,setMessage] = useState('')

    const handletextchange =(e)=> {
        if (text === ''){
            setBtnDisabled (true)
            setMessage(null)
        }else if(text !=='' && text.trim().length <= 10 ){
            setMessage('خیلی کم زدی')
            setBtnDisabled (true)
        }else{
            setMessage(null)
            setBtnDisabled (false)
        }
        setText(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(text.trim().length>10){
            const newfeedback = {
                text,
                rating
            }
            handleAdd(newfeedback)
            setText('')
        }
    }
  return (<Card>
      <form onSubmit={handleSubmit}>
          <h2>ببخشید که یه تمرین دیگه انجام دادم... </h2>
         <RatingSelect select = {(rating) => setRating(rating) } />
          <div className="input-group">
              <input onChange={handletextchange} type="text" value={text} placeholder="نظرتو بهم بگو" />
              <Button type="submit" isDisabled ={btnDisabled}>ارسال</Button>
          </div>
          {message && <div className="message">{message}</div>}
      </form>
  </Card>);
}

export default FeedBackForm;
