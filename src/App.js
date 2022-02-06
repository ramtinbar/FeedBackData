import React from "react"
import FeedbackItem from "./components/FeedbackItem"
import Header from "./components/Header"
import FeedbackData from "./Data/FeedbackData"
import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import FeedbackStat from "./components/FeedbackStat"
const showcomment = true

function App(){
    const [feedback , setFeedback] = useState(FeedbackData)

    const deletfeedback =(id)=>{
        if(window.confirm('Are you sure')){
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }
    return(
        <>
        <Header text={'Feedback UI '}/>
        <div className="container">
            <FeedbackStat feedback={feedback}></FeedbackStat>
       <FeedbackList feedback={feedback}
       handleDelet={deletfeedback}/>
        </div>
        </>
       
    )
       
    
}
export default App