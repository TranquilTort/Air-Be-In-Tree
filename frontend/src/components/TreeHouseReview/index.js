import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTreeHouses,getTreeTypes,getReviews } from '../../store/TreeHouseReducer';
import ReviewForm from '../ReviewForm'
import ReviewDisplay from '../ReviewDisplay'
import './TreeHouseReview.css'
function TreeHouseReview(){
    const [showReviewForm, setShowReviewForm] = useState(false);

    const toggleForm= () => {
        if (showReviewForm){
            setShowReviewForm(false);
        }else{
            setShowReviewForm(true);
        }
    };

    const {id} = useParams();
    console.log('THE ID',id)
    const treeHouse =  useSelector((state)=>Object.values(state.treehouse.houses)).find(el=>el.id ==id);
    const treeTypesArr =  useSelector((state)=>Object.values(state.treehouse.types));
    const allReviews = useSelector((state)=>Object.values(state.treehouse.reviews));
    console.log('THIS SHOULD BE EVERY REVIEW', allReviews)
    let treeTypeImg = ''
    if(treeTypesArr.length>0){
        treeTypeImg = treeTypesArr.find(el=>el.id == treeHouse.tree_type).image;

    }
    let thisTreeReviews =[];
    if(allReviews){
        thisTreeReviews=Array.from(allReviews).filter(el=>el.tree_id==id);
        console.log('THE REVIEWS FOR THIS TREE',thisTreeReviews)
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
