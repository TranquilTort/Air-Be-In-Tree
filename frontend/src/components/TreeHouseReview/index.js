import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTreeHouses,getTreeTypes } from '../../store/TreeHouseReducer';
function TreeHouseReview(){
    const {id} = useParams();
    console.log('THE ID',id)
    const treeHouse =  useSelector((state)=>Object.values(state.treehouse.houses)).find(el=>el.id ==id);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTreeHouses());
    }, [dispatch]);
    console.log(treeHouse);
    return (
        <div>
            <div>{treeHouse &&treeHouse.title}</div>
            <div>{
                treeHouse &&
                <img src={treeHouse.image} alt="photo"/>
                }
        </div>
        </div>
    )
}
export default TreeHouseReview;
