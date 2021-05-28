import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTreeHouses,getTreeTypes } from '../../store/TreeHouseReducer';
import './TreeHouseReview.css'
function TreeHouseReview(){
    const {id} = useParams();
    console.log('THE ID',id)
    const treeHouse =  useSelector((state)=>Object.values(state.treehouse.houses)).find(el=>el.id ==id);
    const treeTypesArr =  useSelector((state)=>Object.values(state.treehouse.types));
    let treeTypeImg = ''
    if(treeTypesArr.length>0){
        treeTypeImg = treeTypesArr.find(el=>el.id == treeHouse.tree_type).image;
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTreeHouses());
        dispatch(getTreeTypes());
    }, [dispatch]);
    console.log(treeHouse);
    return (
        <div className='treehouse-container'>
            <div className='treehouse-info'  style={{ backgroundImage: `url(${treeTypeImg})` }}>
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
    )
}
export default TreeHouseReview;
