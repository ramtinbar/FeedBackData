import React from "react"
import {v4 as uuidv4} from "uuid"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import FeedbackData from "./Data/FeedbackData"
import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import FeedbackStat from "./components/FeedbackStat"
import FeedBackForm from "./components/FeedBackForm"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink"
import Post from "./components/Post"
import { FeedbackProvider } from "./Context/FeedBackContext"

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
        <FeedbackProvider>
        <Router>
        <Header text={'نظرتو بهم بگو !'}/>
        <div className="container">
           <Routes>
            <Route exact path="/" element ={
                <>
                  <FeedBackForm handleAdd = {addFeedback} />
                     <FeedbackStat feedback={feedback}></FeedbackStat>
                <FeedbackList feedback={feedback}
                handleDelet={deletfeedback}/>
                </>
            }
            
            >
          
       </Route>
       <Route path="/about" element={<AboutPage/>}/>
       <Route path="/post/:id/:name" element={<Post/>}/>

       </Routes> 
       <AboutIconLink></AboutIconLink>
        </div>
        </Router>
        </FeedbackProvider>
       
       
    )
       
    
}
export default App