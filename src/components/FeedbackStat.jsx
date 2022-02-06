import PropTypes from 'prop-types';
function FeedbackStat({feedback}) {
    //calca avrage
    let avrage = feedback.reduce((acc,cur)=>{
        return acc + cur.rating
    },0)/feedback.length
    avrage = avrage.toFixed(1);
  return <div className="feedback-stats">
      <h4>{feedback.length} Revies</h4>
      <h4>Average Rating : {isNaN(avrage) ? 0 : avrage}</h4>
  </div>;
}

FeedbackStat.propTypes = {
    feedback : PropTypes.array.isRequired
}

export default FeedbackStat;
