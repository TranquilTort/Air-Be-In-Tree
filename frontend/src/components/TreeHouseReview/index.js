import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTreeHouses,getTreeTypes,getReviews } from '../../store/TreeHouseReducer';
import ReviewForm from '../ReviewForm'
import ReviewDisplay from '../ReviewDisplay'
import './TreeHouseReview.css'
function TreeHouseReview(){
    const [showReviewForm, setShowReviewForm] = useState(false);
    const {id} = useParams();
    const [houseid,sethouseid]= useState(id)
    const toggleForm= () => {
        if (showReviewForm){
            setShowReviewForm(false);
        }else{
            setShowReviewForm(true);
        }
    };


    console.log('THE ID',id)
    const treeHouse =  useSelector((state)=>Object.values(state.treehouse.houses)).find(el=>el.id ==houseid);
    const treeTypesArr =  useSelector((state)=>Object.values(state.treehouse.types));
    const allReviews = useSelector((state)=>Object.values(state.treehouse.reviews));
    console.log('THIS SHOULD BE EVERY REVIEW', allReviews)
    let treeTypeImg = ''
    if(treeTypesArr.length>0){
        treeTypeImg = treeTypesArr.find(el=>el.id == treeHouse.tree_type).image;

    }
    let thisTreeReviews =[];
    if(allReviews){
        thisTreeReviews=Array.from(allReviews).filter(el=>el.tree_id==houseid);
        console.log('THE REVIEWS FOR THIS TREE',thisTreeReviews)
    }
    let avgStars =0;
    if(thisTreeReviews.length){
        thisTreeReviews.forEach(element => {
            avgStars += element.stars;
        });;
        avgStars = Math.floor(avgStars/thisTreeReviews.length);
        console.log('AVERAGE RATING:', avgStars)
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTreeHouses());
        dispatch(getTreeTypes());
        dispatch(getReviews());
    }, [dispatch]);
    console.log(treeHouse);
    return (
        <>
            <div className='treehouse-container'>
                <div className='treehouse-info'  style={{ backgroundSize: "cover",backgroundImage: `url(${treeTypeImg})` }}>
                    <div className='title-of-treehouse info-ele'>{treeHouse &&treeHouse.title}</div>
                    <div className='treehouse-image-display-div'>{
                        treeHouse &&
                        <img className='treehouse-image-display' src={treeHouse.image} alt="photo"/>
                    }
                    </div>
                    <div className='description-of-treehouse'>
                        <h3 className='info-ele'>TreeHouse Description</h3>
                        <p className='info-ele'>{treeHouse && treeHouse.description}</p>
                    </div>

                </div>
            </div>
            <div className='review-container'>
                    <div>
                        <span> Average Rating of This Treehouse:
                            {avgStars>0 ?<span className="fa fa-star checked" ></span> : <span className="fa fa-star unchecked" ></span>}
                            {avgStars>1 ?<span className="fa fa-star checked" ></span> : <span className="fa fa-star unchecked" ></span>}
                            {avgStars>2 ?<span className="fa fa-star checked" ></span> : <span className="fa fa-star unchecked" ></span>}
                            {avgStars>3 ?<span className="fa fa-star checked" ></span> : <span className="fa fa-star unchecked" ></span>}
                            {avgStars>4 ?<span className="fa fa-star checked" ></span> : <span className="fa fa-star unchecked" ></span>}


                        </span>
                    </div>
                        <button onClick={toggleForm}>Post a Review</button>
                    {showReviewForm && <ReviewForm treeHouse={treeHouse} />}
                    {thisTreeReviews.length>0 && thisTreeReviews.map((review,index)=>(
                        <ReviewDisplay key={index} review={review} />
                    ))}
            </div>
        </>
    )
}
export default TreeHouseReview;
