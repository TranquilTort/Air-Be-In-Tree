import './ReviewDisplay.css'
function ReviewDisplay({review}){
    return(
        <div className='review-display-div'>
            <div>
            {review.title}
            </div>
        <div>
            {review.body}
        </div>
        <div>
            {review.stars} Stars
        </div>
        </div>
    )
}
export default ReviewDisplay;
