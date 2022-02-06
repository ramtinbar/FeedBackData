import FeedbackItem  from "./FeedbackItem";
import PropTypes from 'prop-types';

function FeedbackList({feedback,handleDelet}) {
  if(!feedback || feedback.length === 0){
      return <p> no FeedBack Yet</p>
  }
  return <div className="feedback-list">
      {feedback.map((item)=>(
         <FeedbackItem key={item.id} item={item} handleDelet={handleDelet}/>
      ))}
  </div>;
}

FeedbackList.protoTypes={
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      text:PropTypes.string.isRequired,
      rating:PropTypes.number.isRequired,
  
    })
  )
}
export default FeedbackList;
