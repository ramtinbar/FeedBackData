import React from "react"
import {v4 as uuidv4} from "uuid"
import Header from "./components/Header"
import FeedbackData from "./Data/FeedbackData"
import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import FeedbackStat from "./components/FeedbackStat"
import FeedBackForm from "./components/FeedBackForm"
const showcomment = true

function App(){
    const [feedback , setFeedback] = useState(FeedbackData)
    const addFeedback = (newfeedback) => {
        newfeedback.id =uuidv4()
        console.log(newfeedback);
        setFeedback([newfeedback,...feedback])
    }
    const deletfeedback =(id)=>{
        if(window.confirm('Are you sure')){
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }
    return(
        <>
        <Header text={'Feedback UI '}/>
        <div className="container">
            <FeedBackForm handleAdd = {addFeedback} />
            <FeedbackStat feedback={feedback}></FeedbackStat>
       <FeedbackList feedback={feedback}
       handleDelet={deletfeedback}/>
        </div>
        </>
       
    )
       
    
}
export default App